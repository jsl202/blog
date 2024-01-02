import Post from './models/posts';

export default async function createFakeData() {
  // 0, 1, ... 39로 이루어진 배열을 생성한 후 포스트 데이터로 변환
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 #${i}`,
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac lacinia est, eu hendrerit nibh. Pellentesque ultricies urna non faucibus facilisis. Proin eu sagittis nisl, ac sodales erat. Nulla ullamcorper tellus tellus, ut eleifend nisl varius eget. In et dictum dolor. Mauris sed lorem et diam dignissim vehicula vitae pretium metus. Suspendisse mollis mattis lacus, quis pellentesque sem facilisis vulputate. Pellentesque a eleifend orci. Phasellus finibus imperdiet mollis. Nullam scelerisque porttitor nulla, nec porttitor nunc sagittis luctus. Mauris eget ullamcorper diam, eu luctus lectus.',
    tags: ['가짜', '데이터'],
  }));

  try {
    const result = await Post.insertMany(posts);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
