// 获取到按钮元素
let toggleLanguage = document.getElementById("toggleLanguage");
let body = document.body;

// 页面加载时读取之前保存的语言状态
window.addEventListener('load', function () {
    const savedLanguage = localStorage.getItem('selectedLanguage');

    if (savedLanguage) {
        if (savedLanguage === 'english') {
            toggleLanguage.checked = true;
            body.classList.add('english');
            body.classList.remove('chinese');
            translate.changeLanguage('english');
        } else {
            toggleLanguage.checked = false;
            body.classList.add('chinese');
            body.classList.remove('english');
            translate.changeLanguage('chinese_simplified');
        }
        translate.selectLanguageTag.refreshRender();
        translate.execute(); // 进行翻译
    }

    // 监听语言切换事件
    toggleLanguage.addEventListener("change", () => {
        const selectedLanguage = toggleLanguage.checked ? 'english' : 'chinese_simplified';
        localStorage.setItem('selectedLanguage', selectedLanguage); // 保存当前选择的语言

        if (toggleLanguage.checked) {
            // 滑块在右，切换到英文
            body.classList.add('english');
            body.classList.remove('chinese');
            translate.changeLanguage('english');
        } else {
            // 滑块在左，切换到中文
            body.classList.add('chinese');
            body.classList.remove('english');
            translate.changeLanguage('chinese_simplified');
        }
        translate.selectLanguageTag.refreshRender();
        translate.execute(); // 进行翻译

        // 翻译完成后提示
        translate.listener.renderTaskFinish = function (task) {
            alert("翻译完成");
        }
    });
});