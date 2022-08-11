const axios = require('axios');
(async () => {
  const data = await axios.post('http://localhost:3000/auth/login', {
    username: 'zhangsan',
    password: '123456',
  });
  console.log(data);
})();
