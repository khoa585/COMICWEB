import Head from 'next/head';
const HeaderTag = props =>(
    <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keyword" content="doc truyen tranh, manga, doc manga, ngon tinh, tien hiep"/>
        <meta name="theme-color" content="#59B858" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:title" content={props.title || "Truyện Mới 247.com"} />
        <meta property="title" content={props.title || "Truyện Mới 247.com"} />
        <meta property="og:site_name" content="TruyenMoi247.com" />
        <meta property="site_name" content="Truyện Mới 247.com" />
        <meta itemProp="name" content={props.title || "Truyện Mới 247.com"} />
        <meta property="og:type" content="article" />
        <meta property="image" content={props.image || "https://zekangg.tk/img/logo.png"} />
        <meta property="og:image" content={props.image || "https://zekangg.tk/img/logo.png"} />
        <meta property="og:description" content={props.description || "Sản Phẩm Vẩy nến"} />
        <meta property="description" content={props.description || "Web đọc truyện tranh online lớn nhất được cập nhật liên tục mỗi ngày - Cùng tham gia đọc truyện và thảo luận với hơn ✅10 triệu thành viên tạiTruyenMoi247.Com"} />
        <link rel="icon" type="image/png" href="../img/logo.png"/>
        {!!props.video && <meta property='og:video' content={props.video} />}
        {!!props.video && <meta property='video' content={props.video} />}
        <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&amp;subset=latin-ext,vietnamese" rel="stylesheet" />
        <title>{props.title||"Đọc truyện tranh Manhwa, Manga, Manhua Online Tai TruyenMoi247"}</title>
  </Head>
)

export default React.memo(HeaderTag) ;