


class RestProvider{
  constructor($provider){
    this.$provider=$provider;
  }

  get(params,resource,query,callback){
    this.$provider.get(params,resource,query,callback);
  }

  post(params,resource,callback){
    this.$provider.post(params,resource,callback);
  }

  put(params,resource,callback){
    this.$provider.put(params,resource,callback);
  }

  delete(params,resource,callback){
    this.$provider.delete(params,resource,callback);
  }
  
}


export default RestProvider;