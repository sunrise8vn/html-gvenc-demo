const menuData = [
  {
    type: 'single',
    title: 'Trang chủ',
    link: 'index.html',
    tag: 'HOME',
  },
  {
    type: 'multi',
    title: 'Giới thiệu ',
    link: '#',
    tag: 'ABOUT',
    children: [
      {
        title: 'Giới thiệu chung',
        link: 'gioi-thieu.html',
        tag: 'ABOUT',
      },
      {
        title: 'Tầm nhìn, sứ mệnh',
        link: 'gioi-thieu.html#tnsm',
        tag: 'ABOUT',
      },
      {
        title: 'Tôn chỉ, mục đích',
        link: 'gioi-thieu.html#tcmd',
        tag: 'ABOUT',
      },
      {
        title: 'Sơ đồ tổ chức',
        link: 'organizational-chart.html',
        tag: 'ABOUT',
      },
    ],
  },
  {
    type: 'multi',
    title: 'Thành viên CLB ',
    link: '#',
    tag: 'MEMBER',
    children: [
      {
        title: 'Điều lệ hoạt động',
        link: 'quy-dinh.html',
        tag: 'MEMBER',
      },
      {
        title: 'Hội phí',
        link: 'membership-fee.html',
        tag: 'MEMBER',
      },
      {
        title: 'Đăng ký thành viên',
        link: 'sign-up.html',
        tag: 'MEMBER',
      },
    ],
  },
  {
    type: 'multi',
    title: 'Tin tức ',
    link: '#',
    tag: 'NEWS',
    children: [
      {
        title: 'Tin tức',
        link: 'bai-viet.html',
        tag: 'NEWS',
      },
      // {
      //   title: 'Truyền thông',
      //   link: 'truyen-thong.html',
      // },
      {
        title: 'Video',
        link: 'video.html',
        tag: 'NEWS',
      },
    ],
  },
  {
    type: 'single',
    title: 'Liên hệ ',
    link: 'lien-he.html',
    tag: 'CONTACT',
  },
];

function getLocation(item, tag) {
  const locationPathname = window.location.pathname.replace('/', '');
  const locationHash = window.location.hash;

  const locationUrl = tag
    ? $(item).attr('href')
    : locationPathname + locationHash;

  renderMenuHeader(locationUrl);
}

const renderMenuHeader = (locationUrl) => {
  const headerMenu = $('#headerMenu');

  headerMenu.empty();

  menuData.forEach((menu) => {
    if (menu.type === 'single') {
      const active = menu.link === locationUrl ? 'active' : '';

      headerMenu.append(
        `<li class="nav-item">
            <a class="nav-link ${active}" aria-current="page" href="${menu.link}">${menu.title}</a>
        </li>`
      );
    } else if (menu.type === 'multi') {
      let active = '';
      let temp = '';
      let change = false;

      menu.children.forEach((child) => {
        const childActive = child.link === locationUrl ? 'active' : '';

        if (child.link === locationUrl && child.tag === menu.tag) {
          if (!change) {
            change = !change;
            active = 'active';
          }
        }

        temp += `<li><a class="${childActive}" href="${child.link}" onclick="getLocation(this, true);">${child.title}</a></li>`;
      });

      let tempParent = `
        <li class="nav-item">
          <a class="nav-link ${active}" href="${menu.link}">${menu.title} <i class="far fa-angle-down"></i></a>
          <ul class="droap_menu">
            ${temp}
          </ul>
        </li>`;

      headerMenu.append(tempParent);
    }
  });
};

const locationPathname = window.location.pathname.replace('/', '');
const locationHash = window.location.hash;

const locationUrl = locationPathname + locationHash;

renderMenuHeader(locationUrl);
