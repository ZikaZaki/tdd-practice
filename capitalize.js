const capitalizeFirstLetter = (str) => {
    if(str.length > 0){
        return str[0].toUpperCase() + str.slice(1);
    }else{
        throw new Error('String is Empty');
    }
};

 module.exports = capitalizeFirstLetter;