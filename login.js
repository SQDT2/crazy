document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // 验证用户名和密码
        if (username === 'fengkuang' && password === 'sanrenzu') {
            alert('登录成功！');
            window.location.href = 'home.html'; // 修改这里，改为 home.html
        } else {
            alert('用户名或密码错误，请重试！');
        }
    });
}); 