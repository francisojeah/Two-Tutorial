import UserSearchBody from './userSearchBody.interface';
interface UserSearchResult {
  id: any;
  hits: {
    total: number;
    hits: Array<{
      _source: UserSearchBody;
    }>;
  };
}

export default UserSearchResult
