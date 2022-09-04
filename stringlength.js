const stringLength = (str) => {
    if(str.length > 0 && str.length < 10){
        return str.length;
    }else{
        throw new Error('String is Empty or Greater than 10');
    }
};

module.exports = stringLength;