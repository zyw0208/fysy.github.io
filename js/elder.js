// 切换老年模式   
function toggleElderMode() {
    document.body.classList.toggle('elder-mode');

    // 保存用户偏好到本地存储
    const isElderMode = document.body.classList.contains('elder-mode');
    localStorage.setItem('elderMode', isElderMode);

    // 更新按钮文本
    const button = document.querySelector('.elder-mode-toggle');
    button.textContent = isElderMode ? '退出老年模式' : '进入老年模式';
}

// 页面加载时检查用户偏好   
document.addEventListener('DOMContentLoaded', function () {
    const savedMode = localStorage.getItem('elderMode') === 'true';
    if (savedMode) {
        document.body.classList.add('elder-mode');
    }

    // 添加切换按钮
    const button = document.createElement('button');
    button.className = 'elder-mode-toggle';
    button.classList.add('elder-mode')
    button.textContent = savedMode ? '退出老年模式' : '进入老年模式';
    button.onclick = toggleElderMode;
    document.body.appendChild(button);
});