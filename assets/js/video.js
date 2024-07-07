const youtubeData = [
  {
    id: 'Jf4krnGHgMo',
    title:
      'BẤT NGỜ VỚI CÁCH NỮ DOANH NHÂN 9X DÙNG GVENC ĐỂ PHÁT TRIỂN DOANH NGHIỆP',
  },
  {
    id: 'YMYGvuFegMI',
    title:
      'GVENC VÀ BÍ MẬT ĐẰNG SAU DOANH NGHIỆP 600 NHÂN SỰ MÀ BẠN CHƯA BIẾT ĐẾN',
  },
  {
    id: 'sB5qbir2jPw',
    title:
      'TỪ CỬA HÀNG NHỎ ĐẾN DOANH NGHIỆP ĐỘT PHÁ - HÀNH TRÌNH THÀNH CÔNG CÙNG GVENC',
  },
  {
    id: '3YEMyLrkXHY',
    title: 'HÀNH TRÌNH ĐẾN VỚI GVENC, BƯỚC NGOẶT LỚN THAY ĐỔI CUỘC ĐỜI',
  },
  {
    id: 'WNVK9rh9QBI',
    title:
      'NHỜ GVENC, DOANH THU TĂNG 1,5 LẦN VÀ PHÁT TRIỂN BẢN THÂN ĐÁNG KINH NGẠC!',
  },
  {
    id: 'bIvRZNAG7pQ',
    title:
      'XÂY DỰNG HỆ THỐNG PHÁT TRIỂN DOANH NGHIỆP THÔNG QUA QUY TRÌNH CHI TIẾT CỦA GVENC',
  },
];

const youtubeFrame = $('#youtubeFrame');

const videoModal = $('#video_modal');

const showVideo = (youtubeId) => {
  youtubeFrame.empty();

  youtubeFrame.append(
    `<iframe class='embed-youtube' src="https://www.youtube.com/embed/${youtubeId}"></iframe>`
  );

  videoModal.modal('show');
};

const videoYoutube = $('#videoYoutube');

videoYoutube.empty();

youtubeData.forEach((item) => {
  videoYoutube.append(`
      <div class="col-xl-4 col-md-6 wow fadeInUp" data-wow-duration="1s">
        <div class="tf__single_blog">
          <div class="tf__single_blog_img youtube-img">
            <img src="assets/images/youtube/${item.id}.jpg" onclick="showVideo('${item.id}')" alt="author" class="img-fluid w-100">
          </div>
          <div class="tf__single_blog_text">
            <a class="title" href="javascript:void(0)" onclick="showVideo('${item.id}')">${item.title}</a>
          </div>
        </div>
      </div>
  `);
});
