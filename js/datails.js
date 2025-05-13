// 为国家级和省级按钮添加事件监听
// 国家级按钮事件
document.addEventListener('click', function (e) {
    // 国家级按钮
    if (e.target.closest('.national-toggle')) {
        const section = document.querySelector('.national-more');
        const btn = e.target.closest('button');
        toggleSection(section, btn, '国家级');
    }

    // 省级按钮
    if (e.target.closest('.provincial-toggle')) {
        const section = document.querySelector('.provincial-more');
        const btn = e.target.closest('button');
        toggleSection(section, btn, '省级');
    }
    //市级按钮
    if (e.target.closest('.municipal-toggle')) {
        const section = document.querySelector('.municipal-more');
        const btn = e.target.closest('button');
        toggleSection(section, btn, '市级');
    }
});

function toggleSection(section, btn, level) {
    const isExpanded = section.style.display === 'grid';
    section.style.display = isExpanded ? 'none' : 'grid';
    btn.querySelector('span').textContent = isExpanded ? `展开查看更多${level}非遗` : '收起';
    btn.classList.toggle('active');
    translate.execute();
}


document.addEventListener('DOMContentLoaded', function () {
    // 获取URL参数
    const urlParams = new URLSearchParams(window.location.search);
    const level = urlParams.get('level');

    // 获取所有非遗级别容器
    const nationalSection = document.getElementById('national-level');
    const provincialSection = document.getElementById('provincial-level');
    const municipalSection = document.getElementById('municipal-level');
    // 获取所有"更多"内容区域
    const nationalMore = document.querySelector('.national-more');
    const provincialMore = document.querySelector('.provincial-more');
    const municipalMore = document.querySelector('.municipal-more');
    //获取按钮
    const nationalButton = document.querySelector('.national-toggle');
    const provincialButton = document.querySelector('.provincial-toggle');
    const municipalButton = document.querySelector('.municipal-toggle');
    // 默认显示所有（如果没有参数）
    if (!level) {
        nationalSection.style.display = 'block';
        provincialSection.style.display = 'block';
        municipalSection.style.display = 'block';
        return;
    }

    // 先隐藏所有
    nationalSection.style.display = 'none';
    provincialSection.style.display = 'none';
    municipalSection.style.display = 'none';

    // 根据参数显示对应的部分
    switch (level) {
        case 'national':
            nationalSection.style.display = 'block';
            nationalMore.style.display = 'grid'; // 直接显示国家级全部内容
            nationalButton.style.display = 'none';
            break;
        case 'provincial':
            provincialSection.style.display = 'block';
            provincialMore.style.display = 'grid'; // 直接显示省级全部内容
            provincialButton.style.display = 'none';
            break;
        case 'municipal':
            municipalSection.style.display = 'block';
            municipalMore.style.display = 'grid'; // 直接显示市级全部内容
            municipalButton.style.display = 'none';
            break;
        default:
            // 如果参数不匹配任何已知值，显示全部
            nationalSection.style.display = 'block';
            provincialSection.style.display = 'block';
            municipalSection.style.display = 'block';
    }
});
// 在DOM加载完成后、翻译库执行前，立即备份所有中文标题  
document.addEventListener('DOMContentLoaded', () => {
    // 遍历所有卡片，将原始中文标题存储到data属性
    document.querySelectorAll('.attraction-card h3').forEach(titleEl => {
        const chineseTitle = titleEl.textContent.trim(); 
        titleEl.dataset.originalChinese = chineseTitle; 
    });
});

// 为每个卡片添加点击事件
document.querySelectorAll('.attraction-card').forEach(card => {
    card.addEventListener('click', function () {
        // 获取卡片标题作为ID
        const title = this.querySelector('h3').textContent;
        // 编码标题作为URL参数
        // const id = encodeURIComponent(title);
        const chineseId = card.querySelector('h3').dataset.originalChinese;
        console.log('传递的中文ID:', chineseId); // 测试用
        window.location.href = `heritagedetail.html?id=${encodeURIComponent(chineseId)}`;
        // 跳转到详情页
        // window.location.href = `heritagedetail.html?id=${id}`;
    });
});
