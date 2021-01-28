const CATEGORY = [
    {
        "_id": "5f16750cbd39ae51e43a6177",
        "name": "Action",
        "description": "Thể loại này thường có nội dung về đánh nhau, bạo lực, hỗn loạn, với diễn biến nhanh",
        "url": "action",
        "__v": 0
    },
    {
        "_id": "5f168e428eaebd246008fc82",
        "name": "Adult",
        "description": "Thể loại Adult đề cập đến vấn đề nhạy cảm, chỉ dành cho tuổi 17+",
        "url": "adult",
        "__v": 0
    },
    {
        "_id": "5f168e638eaebd246008fc83",
        "name": "Adventure",
        "description": "Thể loại phiêu lưu, mạo hiểm, thường là hành trình của các nhân vật",
        "url": "adventure",
        "__v": 0
    },
    {
        "_id": "5f168e8f8eaebd246008fc84",
        "name": "Anime",
        "description": "Truyện đã được chuyển thể thành film Anime",
        "url": "anime",
        "__v": 0
    },
    {
        "_id": "5f168ea58eaebd246008fc85",
        "name": "Chuyển Sinh",
        "description": "Thể loại này là những câu chuyện về người ở một thế giới này xuyên đến một thế giới khác, có thể là thế giới mang phong cách trung cổ với kiếm sĩ và ma thuật, hay thế giới trong game, hoặc có thể là bạn chết ở nơi này và được chuyển sinh đến nơi khác",
        "url": "chuyen-sinh",
        "__v": 0
    },
    {
        "_id": "5f168ede8eaebd246008fc86",
        "name": "Comedy",
        "description": "Thể loại có nội dung trong sáng và cảm động, thường có các tình tiết gây cười, các xung đột nhẹ nhàng",
        "url": "comedy",
        "__v": 0
    },
    {
        "_id": "5f32608bbde62a7d0729bdd7",
        "name": "Comic",
        "description": "Truyện tranh Châu Âu và Châu Mĩ.",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325a14bde62a7d0729bdaf",
        "name": "Cooking",
        "description": "Thể loại có nội dung về nấu ăn, ẩm thực",
        "url": "Cooking",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325a5abde62a7d0729bdb0",
        "name": "Cổ Đại",
        "description": "Truyện có nội dung xảy ra ở thời cổ đại phong kiến.",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325a79bde62a7d0729bdb1",
        "name": "Doujinshi",
        "description": "Thể loại truyện phóng tác do fan hay có thể cả những Mangaka khác với tác giả truyện gốc. Tác giả vẽ Doujinshi thường dựa trên những nhân vật gốc để viết ra những câu chuyện theo sở thích của mình",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325afcbde62a7d0729bdb3",
        "name": "Ecchi",
        "description": "Thường có những tình huống nhạy cảm nhằm lôi cuốn người xem.",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325b0dbde62a7d0729bdb4",
        "name": "Fantasy",
        "description": "Thể loại xuất phát từ trí tưởng tượng phong phú, từ pháp thuật đến thế giới trong mơ thậm chí là những câu chuyện thần tiên",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325b25bde62a7d0729bdb5",
        "name": "Gender Bender",
        "description": "Là một thể loại trong đó giới tính của nhân vật bị lẫn lộn: nam hoá thành nữ, nữ hóa thành nam...",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325becbde62a7d0729bdb6",
        "name": "Harem",
        "description": "Thể loại truyện tình cảm, lãng mạn mà trong đó, nhiều nhân vật nữ thích một nam nhân vật chính",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325bfbbde62a7d0729bdb7",
        "name": "Historical",
        "description": "Thể loại có liên quan đến thời xa xưa",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325c11bde62a7d0729bdb8",
        "name": "Horror",
        "description": "Horror là: rùng rợn, nghe cái tên là bạn đã hiểu thể loại này có nội dung thế nào. Nó làm cho bạn kinh hãi, khiếp sợ, ghê tởm, run rẩy, có thể gây sock - một thể loại không dành cho người yếu tim",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325c89bde62a7d0729bdbc",
        "name": "Hàn Quốc",
        "description": "Truyện tranh Hàn Quốc, đọc từ trái sang phải",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325c24bde62a7d0729bdb9",
        "name": "Josei",
        "description": "Thể loại của manga hay anime được sáng tác chủ yếu bởi phụ nữ cho những độc giả nữ từ 18 đến 30. Josei manga có thể miêu tả những lãng mạn thực tế , nhưng trái ngược với hầu hết các kiểu lãng mạn lí tưởng của Shoujo manga với cốt truyện rõ ràng, chín chắn",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325c36bde62a7d0729bdba",
        "name": "Live action",
        "description": "Truyện đã được chuyển thể thành phim",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325c49bde62a7d0729bdbb",
        "name": "Manga",
        "description": "Truyện tranh của Nhật Bản",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325ca2bde62a7d0729bdbd",
        "name": "Martial Arts",
        "description": "Giống với tên gọi, bất cứ gì liên quan đến võ thuật trong truyện từ các trận đánh nhau, tự vệ đến các môn võ thuật như akido, karate, judo hay taekwondo, kendo, các cách né tránh",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325cb5bde62a7d0729bdbe",
        "name": "Mature",
        "description": "Thể loại dành cho lứa tuổi 17+ bao gồm các pha bạo lực, máu me, chém giết, tình dục ở mức độ vừa",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325cc6bde62a7d0729bdbf",
        "name": "Mecha",
        "description": "Mecha, còn được biết đến dưới cái tên meka hay mechs, là thể loại nói tới những cỗ máy biết đi (thường là do phi công cầm lái)",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325cdbbde62a7d0729bdc0",
        "name": "Mystery",
        "description": "Thể loại thường xuất hiện những điều bí ấn không thể lí giải được và sau đó là những nỗ lực của nhân vật chính nhằm tìm ra câu trả lời thỏa đáng",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325cf0bde62a7d0729bdc1",
        "name": "Ngôn Tình",
        "description": "Truyện thuộc kiểu lãng mạn, kể về những sự kiện vui buồn trong tình yêu của nhân vật chính.",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325d06bde62a7d0729bdc2",
        "name": "One shot",
        "description": "Những truyện ngắn, thường là 1 chapter.",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325d1dbde62a7d0729bdc3",
        "name": "Psychological",
        "description": "Thể loại liên quan đến những vấn đề về tâm lý của nhân vật ( tâm thần bất ổn, điên cuồng ...)",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325d30bde62a7d0729bdc4",
        "name": "Romance",
        "description": "Thường là những câu chuyện về tình yêu, tình cảm lãng mạn. Ớ đây chúng ta sẽ lấy ví dụ như tình yêu giữa một người con trai và con gái, bên cạnh đó đặc điểm thể loại này là kích thích trí tưởng tượng của bạn về tình yêu.",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325d40bde62a7d0729bdc5",
        "name": "School Life",
        "description": "Trong thể loại này, ngữ cảnh diễn biến câu chuyện chủ yếu ở trường học.",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325d85bde62a7d0729bdc6",
        "name": "Seinen",
        "description": "Thể loại của manga thường nhằm vào những đối tượng nam 18 đến 30 tuổi, nhưng người xem có thể lớn tuổi hơn, với một vài bộ truyện nhắm đến các doanh nhân nam quá 40. Thể loại này có nhiều phong cách riêng biệt , nhưng thể loại này có những nét riêng biệt, thường được phân vào những phong cách nghệ thuật rộng hơn và phong phú hơn về chủ đề, có các loại từ mới mẻ tiên tiến đến khiêu dâm",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325d98bde62a7d0729bdc7",
        "name": "Shoujo",
        "description": "Đối tượng hướng tới của thể loại này là phái nữ. Nội dung của những bộ manga này thường liên quan đến tình cảm lãng mạn, chú trọng đầu tư cho nhân vật (tính cách,...)",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325da8bde62a7d0729bdc8",
        "name": "Shoujo Ai",
        "description": "Thể loại quan hệ hoặc liên quan tới đồng tính nữ, thể hiện trong các mối quan hệ trên mức bình thường giữa các nhân vật nữ trong các manga, anime",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325dd0bde62a7d0729bdc9",
        "name": "Shounen",
        "description": "Đối tượng hướng tới của thể loại này là phái nam. Nội dung của những bộ manga này thường liên quan đến đánh nhau và/hoặc bạo lực (ở mức bình thường, không thái quá)",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325de1bde62a7d0729bdca",
        "name": "Shounen Ai",
        "description": "Thể loại có nội dung về tình yêu giữa những chàng trai trẻ, mang tính chất lãng mạn nhưng ko đề cập đến quan hệ tình dục",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325df3bde62a7d0729bdcb",
        "name": "Slice of Life",
        "description": "Nói về cuộc sống đời thường",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325e16bde62a7d0729bdcc",
        "name": "Smut",
        "description": "Những truyện có nội dung hơi nhạy cảm, đặc biệt là liên quan đến tình dục",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325e27bde62a7d0729bdcd",
        "name": "Soft Yaoi",
        "description": "Boy x Boy. Nặng hơn Shounen Ai tí.",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325e3abde62a7d0729bdce",
        "name": "Soft Yuri",
        "description": "Girl x Girl. Nặng hơn Shoujo Ai tí.",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325e4cbde62a7d0729bdcf",
        "name": "Sports",
        "description": "Đúng như tên gọi, những môn thể thao như bóng đá, bóng chày, bóng chuyền, đua xe, cầu lông,... là một phần của thể loại này",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325e67bde62a7d0729bdd0",
        "name": "Supernatural",
        "description": "Thể hiện những sức mạnh đáng kinh ngạc và không thể giải thích được, chúng thường đi kèm với những sự kiện trái ngược hoặc thách thức với những định luật vật lý",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325e7abde62a7d0729bdd1",
        "name": "Thiếu Nhi",
        "description": "Truyện tranh dành cho lứa tuổi thiếu nhi",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325e8fbde62a7d0729bdd2",
        "name": "Tragedy",
        "description": "Thể loại chứa đựng những sự kiện mà dẫn đến kết cục là những mất mát hay sự rủi ro to lớn",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325ea0bde62a7d0729bdd3",
        "name": "Trinh Thám",
        "description": "Các truyện có nội dung về các vụ án, các thám tử cảnh sát điều tra...",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325edcbde62a7d0729bdd5",
        "name": "Truyện Màu",
        "description": "Tổng hợp truyện tranh màu, rõ, đẹp",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325ecabde62a7d0729bdd4",
        "name": "Truyện scan",
        "description": "Các truyện đã phát hành tại VN được scan đăng online",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325f67bde62a7d0729bdd6",
        "name": "Xuyên Không",
        "description": "Xuyên Không, Xuyên Việt là thể loại nhân vật chính vì một lý do nào đó mà bị đưa đến sinh sống ở một không gian hay một khoảng thời gian khác. Nhân vật chính có thể trực tiếp xuyên qua bằng thân xác mình hoặc sống lại bằng thân xác người khác.",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    },
    {
        "_id": "5f325ae0bde62a7d0729bdb2",
        "name": "Đam Mỹ",
        "description": "Truyện tình cảm giữa nam và nam.",
        "url": "Cổ Đại",
        "image": "13213",
        "__v": 0
    }
]
export default CATEGORY ;