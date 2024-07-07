const menuData = [
  {
    type: 'single',
    title: 'Trang chủ',
    link: 'index.html',
  },
  {
    type: 'multi',
    title: 'Giới thiệu ',
    link: '#',
    children: [
      {
        title: 'Giờ thiệu chung',
        link: 'gioi-thieu.html',
      },
      {
        title: 'Tầm nhìn, sứ mệnh',
        link: 'gioi-thieu.html#tnsm',
      },
      {
        title: 'Tôn chỉ, mục đích',
        link: 'gioi-thieu.html#tcmd',
      },
      {
        title: 'Sơ đồ tổ chức',
        link: 'organizational-chart.html',
      },
    ],
  },
  {
    type: 'multi',
    title: 'Thành viên CLB ',
    link: '#',
    children: [
      {
        title: 'Điều lệ hoạt động',
        link: 'quy-dinh.html',
      },
      {
        title: 'Hội phí',
        link: 'membership-fee.html',
      },
      {
        title: 'Đăng ký thành viên',
        link: 'sign-up.html',
      },
    ],
  },
  {
    type: 'multi',
    title: 'Tin tức ',
    link: '#',
    children: [
      {
        title: 'Tin tức',
        link: 'bai-viet.html',
      },
      // {
      //   title: 'Truyền thông',
      //   link: 'truyen-thong.html',
      // },
      {
        title: 'Video',
        link: 'video.html',
      },
    ],
  },
  {
    type: 'single',
    title: 'Liên hệ ',
    link: 'lien-he.html',
  },
];

const headerMenu = $('#headerMenu');

headerMenu.empty();

menuData.forEach((menu) => {
  if (menu.type === 'single') {
    headerMenu.append(
      `<li class="nav-item">
            <a class="nav-link active" aria-current="page" href="${menu.link}">${menu.title}</a>
        </li>`
    );
  } else if (menu.type === 'multi') {
    let temp = `<li class="nav-item">
                  <a class="nav-link" href="${menu.link}">${menu.title} <i class="far fa-angle-down"></i></a>
                <ul class="droap_menu">
    `;

    menu.children.forEach((child) => {
      temp += `<li><a href="${child.link}">${child.title}</a></li>`;
    });

    temp += `</ul>
          </li>`;

    headerMenu.append(temp);
  }
});
