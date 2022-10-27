const isValidJSON = obj => {
    try {
      JSON.parse(obj);
      return true;
    } catch (e) {
      return false;
    }
  };
  console.log(isValidJSON('{"name":"Trang Phuc","age":21}'));
  console.log(isValidJSON('{"name":"Dinh",age:"20"}'));
  console.log(isValidJSON('{"name":"Hai",age:"6"}'));
  console.log(isValidJSON('{"name":"Mai","age":5}'));
  console.log(isValidJSON(null));
  