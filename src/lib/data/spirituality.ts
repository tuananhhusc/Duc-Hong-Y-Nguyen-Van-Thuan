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
            'Ngài thường nhấn mạnh: chỉ cần trung thành với ý Chúa trong giây phút hiện tại là đã cộng tác vào công trình cứu độ.'
        ],
        keyPrinciples: [
            'Thiên Chúa khác với những việc làm cho Thiên Chúa.',
            'Ơn gọi căn bản là thuộc về Thiên Chúa, không phải là làm việc này việc kia.',
            'Chiêm niệm trong hành động: đặt hành động vào vị trí hoa trái của tình yêu.'
        ]
    },
    {
        id: 'hope',
        title: 'Chứng Nhân Hy Vọng',
        summary: 'Trong hoàn cảnh tưởng như hoàn toàn bế tắc, ngài vẫn chọn tín thác vào sự hiện diện và kế hoạch của Thiên Chúa.',
        content: [
            'Đức Hồng y được biết đến trên toàn thế giới như một "chứng nhân của hy vọng". Hy vọng của ngài không phải là sự lạc quan thụ động, mà là sự xác tín vào tình yêu Thiên Chúa.',
            'Ngài viết: "Chấm này nối tiếp chấm kia, ngàn vạn chấm thành một đường dài. Phút này nối tiếp phút kia, muôn triệu phút thành một đời sống. Chấm mỗi chấm cho đúng, đường sẽ đẹp. Sống mỗi phút cho tốt, đời sẽ thánh."'
        ],
        relatedQuotes: ['DHV_0978', 'DHV_0979'] // References to corpus IDs
    },
    {
        id: 'unity',
        title: 'Tinh thần hiệp nhất và Phong trào Focolare',
        summary: 'Ngài chịu ảnh hưởng sâu sắc của linh đạo hiệp nhất, đặc biệt là kinh nghiệm về "Chúa Giêsu bị bỏ rơi".',
        content: [
            'Cuộc gặp gỡ với linh đạo "Chúa Giêsu bị bỏ rơi" (Jesus Forsaken) – trọng tâm trong Focolare – đã cho ngài một chìa khoá để sống những giây phút tăm tối nhất trong tù như sự kết hiệp với Đức Kitô trên thập giá.',
            'Chính ngài từng nói rằng khám phá này đã "cứu" ngài trong thời gian tù đày.'
        ]
    },
    {
        id: 'justice-peace',
        title: 'Công lý, Hòa bình và Phát triển',
        summary: 'Linh đạo mở rộng từ mức độ cá nhân đến xã hội, quan tâm đến công bằng và nhân phẩm.',
        content: [
            'Trong vai trò Chủ tịch Hội đồng Công lý và Hoà bình, ngài quan tâm đến nợ nước nghèo, công bằng kinh tế, và quyền lợi con người.',
            'Ngài trở thành một tiếng nói Á Châu trong lòng Giáo Hội hoàn vũ, nói thay cho các dân tộc nhỏ bé và bị áp bức, xây dựng hoà bình trên nền tảng lương tâm và Tin Mừng.'
        ]
    }
];
