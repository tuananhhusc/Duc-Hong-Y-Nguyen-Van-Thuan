export interface SpiritualityTheme {
    id: string;
    title: string;
    summary: string;
    content: string[];
    keyPrinciples?: string[];
    relatedQuotes?: string[];
}

export const spiritualityData: SpiritualityTheme[] = [
    {
        id: 'distinction',
        title: 'Phân biệt "Thiên Chúa" và "Công việc của Thiên Chúa"',
        summary: 'Điểm then chốt trong linh đạo Nguyễn Văn Thuận là sự phân biệt rõ ràng giữa chính Thiên Chúa và những công trình tông đồ, mục vụ.',
        content: [
            'Khi mọi dự phóng bị sụp đổ, ngài học "chọn Chúa" trong hiện tại, thay vì bám víu vào những kế hoạch đã mất. Điều này giải phóng ngài khỏi cay đắng, và giúp biến nhà tù thành nơi thánh hoá bản thân và yêu thương người chung quanh.',
            'Ngài thường nhấn mạnh: chỉ cần trung thành với ý Chúa trong giây phút hiện tại là đã cộng tác vào công trình cứu độ.',
            'Trong đêm đầu tiên bị bắt, ngài đã trải qua một cuộc đấu tranh nội tâm dữ dội. Mọi kế hoạch mục vụ ngài ấp ủ cho giáo phận đều tan vỡ. Nhưng rồi tiếng nói trong lòng vang lên: "Con phải phân biệt giữa Thiên Chúa và các công việc của Thiên Chúa." Từ giây phút đó, ngài quyết định chọn Chúa thay vì công việc của Chúa.'
        ],
        keyPrinciples: [
            'Thiên Chúa khác với những việc làm cho Thiên Chúa.',
            'Ơn gọi căn bản là thuộc về Thiên Chúa, không phải là làm việc này việc kia.',
            'Chiêm niệm trong hành động: đặt hành động vào vị trí hoa trái của tình yêu.',
            'Mỗi hoàn cảnh đều là cơ hội để gặp gỡ Thiên Chúa.'
        ]
    },
    {
        id: 'ten-rules',
        title: '10 Quy Tắc Sống',
        summary: 'Những nguyên tắc thực hành được đúc kết từ "Đường Hy Vọng" - kim chỉ nam cho đời sống Kitô hữu.',
        content: [
            'Trong 13 năm tù đày, Đức Hồng y đã đúc kết những bài học quý giá thành 10 quy tắc sống. Đây không phải là lý thuyết trừu tượng, mà là những nguyên tắc đã được thử luyện trong lửa thử thách.',
            'Những quy tắc này được truyền tay nhau trong các nhà tù, và sau này trở thành nguồn cảm hứng cho hàng triệu người trên khắp thế giới.'
        ],
        keyPrinciples: [
            '1. Sống trọn vẹn giây phút hiện tại.',
            '2. Phân biệt Thiên Chúa và công việc của Thiên Chúa.',
            '3. Neo đời sống vào Thánh Thể.',
            '4. Làm chứng nhân hy vọng trong mọi hoàn cảnh.',
            '5. Tha thứ ngay lập tức và luôn luôn.',
            '6. Kết hợp đau khổ với Chúa Kitô trên Thập Giá.',
            '7. Yêu thương cả những người bách hại mình.',
            '8. Vui tươi ngay trong khó khăn.',
            '9. Cầu nguyện không ngừng.',
            '10. Tín thác vào Chúa Quan Phòng.'
        ]
    },
    {
        id: 'five-madnesses',
        title: 'Năm Điên Rồ Thánh Thiện',
        summary: 'Năm thái độ "điên rồ" theo tinh thần Tin Mừng mà ngài đã sống và dạy.',
        content: [
            '"Năm Điên Rồ" là cách Đức Hồng y diễn tả những thái độ của người môn đệ đích thực - những điều mà thế gian coi là điên rồ nhưng lại là khôn ngoan trước mặt Thiên Chúa.',
            'Ngài đã sống những "điên rồ" này trong suốt 13 năm tù đày, trở thành chứng nhân sống động cho sức mạnh của Tin Mừng.'
        ],
        keyPrinciples: [
            'Điên Rồ Tin: Tin tưởng khi mọi bằng chứng ngược lại.',
            'Điên Rồ Cậy: Hy vọng khi mọi sự dường như đã mất.',
            'Điên Rồ Mến: Yêu thương những người ghét bỏ mình.',
            'Điên Rồ Vui: Hân hoan trong đau khổ và thử thách.',
            'Điên Rồ Tha Thứ: Tha thứ không điều kiện và không giới hạn.'
        ]
    },
    {
        id: 'eucharist',
        title: 'Linh Đạo Thánh Thể',
        summary: '"Thánh Thể là xa lộ đưa tôi lên Thiên đàng" - trọng tâm linh đạo trong ngục tù.',
        content: [
            'Trong tù, ngài đã cử hành Thánh lễ bí mật hàng ngày. Rượu lễ được gửi vào dưới nhãn "thuốc đau bao tử". Bánh lễ là những mẩu bánh nhỏ. Chỉ với vài giọt rượu và chút bánh trong lòng bàn tay, ngài dâng Thánh lễ.',
            'Ngài viết: "Mỗi lần dâng Thánh lễ, tôi có cơ hội giang tay ra nối chân tay với Chúa Giêsu, cùng Ngài dâng lên Chúa Cha. Cùng với Ngài, tôi dâng máu thịt tôi, đổ ra hợp với giáo dân của tôi."',
            'Thánh Thể trở thành nguồn sức mạnh để ngài có thể yêu thương những người canh giữ mình, biến nhà tù thành nhà tạm, và sống niềm vui Phục Sinh ngay trong bóng tối của tử địa.'
        ],
        keyPrinciples: [
            'Thánh Thể là trung tâm đời sống Kitô hữu.',
            'Mỗi Thánh lễ là cơ hội kết hợp với hy tế của Chúa Kitô.',
            'Sống tinh thần Thánh Thể là trở nên tấm bánh bẻ ra cho người khác.',
            'Chầu Thánh Thể nuôi dưỡng đức tin ngay cả khi không có Nhà Thờ.'
        ]
    },
    {
        id: 'prison-cross',
        title: 'Cây Thánh Giá Trong Tù',
        summary: 'Biểu tượng đức tin được làm từ dây điện và xà phòng - ánh sáng trong bóng tối.',
        content: [
            'Trong tù, ngài đã tự làm một cây thánh giá nhỏ bằng dây điện hoặc dây kẽm, với thân Chúa được nặn từ xà phòng. Cây thánh giá này trở thành biểu tượng mạnh mẽ về sự hiện diện của Đức Kitô trong nhà tù.',
            'Ngài luôn mang theo cây thánh giá này, và nó đã theo ngài suốt hành trình từ tù đày đến Vatican. Đây là lời nhắc nhở rằng đức tin có thể nảy sinh và phát triển ngay trong những hoàn cảnh khắc nghiệt nhất.',
            'Cây thánh giá này sau đó được trưng bày như một thánh tích, là chứng tích của đức tin bất khuất và tình yêu vô bờ bến.'
        ],
        keyPrinciples: [
            'Thánh Giá là nguồn sức mạnh, không phải gánh nặng.',
            'Trong mọi hoàn cảnh, Chúa Kitô đồng hành với chúng ta.',
            'Đức tin sáng tạo tìm cách biểu lộ ngay trong giới hạn.',
            'Vật chất đơn giản có thể trở thành thánh thiêng.'
        ]
    },
    {
        id: 'hope',
        title: 'Chứng Nhân Hy Vọng',
        summary: 'Trong hoàn cảnh tưởng như hoàn toàn bế tắc, ngài vẫn chọn tín thác vào sự hiện diện và kế hoạch của Thiên Chúa.',
        content: [
            'Đức Hồng y được biết đến trên toàn thế giới như một "chứng nhân của hy vọng". Hy vọng của ngài không phải là sự lạc quan thụ động, mà là sự xác tín vào tình yêu Thiên Chúa.',
            'Ngài viết: "Chấm này nối tiếp chấm kia, ngàn vạn chấm thành một đường dài. Phút này nối tiếp phút kia, muôn triệu phút thành một đời sống. Chấm mỗi chấm cho đúng, đường sẽ đẹp. Sống mỗi phút cho tốt, đời sẽ thánh."',
            'Năm 2000, ngài được mời giảng Tĩnh tâm Mùa Chay cho Đức Giáo Hoàng Gioan Phaolô II và Giáo triều Rôma. Các bài giảng này được xuất bản thành sách "Chứng nhân Hy vọng" (Testimony of Hope), lan tỏa thông điệp hy vọng đến khắp thế giới.'
        ],
        keyPrinciples: [
            'Hy vọng là đức tin đang chờ đợi.',
            'Hy vọng không dựa vào hoàn cảnh mà dựa vào Thiên Chúa.',
            'Gieo hy vọng ở mọi nơi, trong mọi hoàn cảnh.',
            'Sống hiện tại trọn vẹn là nền tảng của hy vọng.'
        ],
        relatedQuotes: ['DHV_0978', 'DHV_0979']
    },
    {
        id: 'unity',
        title: 'Tinh thần Hiệp nhất và Phong trào Focolare',
        summary: 'Ngài chịu ảnh hưởng sâu sắc của linh đạo hiệp nhất, đặc biệt là kinh nghiệm về "Chúa Giêsu bị bỏ rơi".',
        content: [
            'Cuộc gặp gỡ với linh đạo "Chúa Giêsu bị bỏ rơi" (Jesus Forsaken) – trọng tâm trong Focolare – đã cho ngài một chìa khoá để sống những giây phút tăm tối nhất trong tù như sự kết hiệp với Đức Kitô trên thập giá.',
            'Chính ngài từng nói rằng khám phá này đã "cứu" ngài trong thời gian tù đày. Khi cảm thấy hoàn toàn cô đơn và bị bỏ rơi, ngài nhận ra mình đang sống mầu nhiệm của Chúa Giêsu trên thập giá.',
            'Ngài trở thành một trong những vị Hồng y có ảnh hưởng sâu sắc trong phong trào Focolare, và linh đạo của ngài tiếp tục được lan truyền qua phong trào này.'
        ],
        keyPrinciples: [
            'Hiệp nhất là con đường đến với Thiên Chúa.',
            'Chúa Giêsu bị bỏ rơi là chìa khóa để sống đau khổ.',
            'Tình yêu huynh đệ là nền tảng của đời sống Kitô hữu.',
            'Trong tương quan với anh chị em, chúng ta gặp gỡ Thiên Chúa.'
        ]
    },
    {
        id: 'justice-peace',
        title: 'Công lý, Hòa bình và Phát triển',
        summary: 'Linh đạo mở rộng từ mức độ cá nhân đến xã hội, quan tâm đến công bằng và nhân phẩm.',
        content: [
            'Trong vai trò Chủ tịch Hội đồng Giáo hoàng Công lý và Hoà bình (1998-2002), ngài quan tâm đặc biệt đến vấn đề nợ của các nước nghèo, công bằng kinh tế, và quyền lợi con người.',
            'Ngài trở thành một tiếng nói Á Châu trong lòng Giáo Hội hoàn vũ, nói thay cho các dân tộc nhỏ bé và bị áp bức, xây dựng hoà bình trên nền tảng lương tâm và Tin Mừng.',
            'Ngài đã vận động cho việc xóa nợ các nước Thế giới thứ ba trong dịp mừng Đại Năm Thánh 2000, coi đây là cách thực thi công lý và bác ái Kitô giáo trên bình diện quốc tế.'
        ],
        keyPrinciples: [
            'Công lý là nền tảng của hòa bình.',
            'Phẩm giá con người là bất khả xâm phạm.',
            'Người nghèo và bị áp bức cần được ưu tiên.',
            'Hòa bình xây dựng từ lương tâm và Tin Mừng.'
        ]
    }
];

