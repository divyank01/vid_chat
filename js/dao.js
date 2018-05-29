var mongojs=require('mongojs');
var db = mongojs();

var dao={}

dao.send_friend_req=function(user,friend){
    console.log(user+' is sending fr to '+friend);
    db.users.update({username:user},
        { $addToSet: {sent:{$each:[friend]}}});
    db.users.update({username:friend},
        { $addToSet: {pending:{$each:[user]}}});
};

dao.accept_fr=function(user,friend){
    console.log(user+' is accepting fr from '+friend);
    db.users.update({username:user},
        {$pull:{pending:{$in:[friend]}}});
    db.users.update({username:friend},
        {$pull:{sent:{$in:[user]}}});
    db.users.update({username:user},
        {$addToSet:{friends:{$each:[friend]}}});
    db.users.update({username:friend},
        {$addToSet:{friends:{$each:[user]}}});
}


module.exports = dao