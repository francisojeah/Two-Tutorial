import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { User } from "./entities/user.entity";
import UserSearchBody from './types/userSearchBody.interface';

@Injectable()
export default class UsersSearchService {
  index = 'users'

  constructor(
    private readonly elasticsearchService: ElasticsearchService
  ) { }

  async indexUser(user: User) {
    return this.elasticsearchService.index<UserSearchBody>({ // UserSearchResult,
      index: this.index,
      body: {
        //authorId: post.author.id,
        id: user.id,
        firstName: user.firstName,
        middleName: user.middleName,
        lastName: user.lastName,
        email: user.email,
        dateOfBirth: user.dateOfBirth,
        nationality: user.nationality,
        address: user.address,
        //departmentId: user.department.id,

      }
    })
  }
  async update(user: User) {
    const newBody: UserSearchBody = {
      id: user.id,
      firstName: user.firstName,
      middleName: user.middleName,
      lastName: user.lastName,
      email: user.email,
      dateOfBirth: user.dateOfBirth,
      nationality: user.nationality,
      address: user.address,
      //departmentId: user.department.id,

    }

    const script = Object.entries(newBody).reduce((result, [key, value]) => {
      return `${result} ctx._source.${key}='${value}';`;
    }, '');

    return this.elasticsearchService.updateByQuery({
      index: this.index,
      body: {
        query: {
          match: {
            id: user.id,
          }
        },
       /*script: {
          inline: script
        }*/
      }
    })
  }

  async remove(userId: number) {
    this.elasticsearchService.deleteByQuery({
      index: this.index,
      body: {
        query: {
          match: {
            id: userId,
          }
        }
      }
    })
  }

  async search(text: string) {
    const body = await this.elasticsearchService.search({
      index: this.index,
      body: {
        query: {
          multi_match: {
            query: text,
            fields: ['firstName', 'middleName', 'lastName', 'email',  'dateOfBirth', 'nationality', 'address']
          }
        }
      }
    })
    const hits = body.hits.hits;
    return hits.map((item) => item._source);
  }
}
