import { EntityRepository, Repository } from 'typeorm';
import{UserEducationalHistory} from "../entities/user-educational-history.entity"

@EntityRepository(UserEducationalHistory)
export class UserEducationalHistoryRepository extends Repository<UserEducationalHistory>{}