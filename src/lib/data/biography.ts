export interface BiographySection {
    subtitle: string;
    content: string[]; // Paragaphs
    quote?: string;
    image?: string;
    imageCaption?: string;
    sources?: string[];
}

export interface BiographyChapter {
    id: string;
    title: string;
    period: string;
    description: string;
    sections: BiographySection[];
}

export const biographyData: Record<string, BiographyChapter> = {
    earlyLife: {
        id: 'early-life',
        title: 'Chân Dung và Nguồn Gốc',
        period: '1928 - 1953',
        description: 'Từ cậu bé vùng Phú Cam đến vị linh mục trẻ đầy nhiệt huyết.',
        sections: [
            {
                subtitle: 'Gia đình và môi trường đạo đức',
                content: [
                    'Đức Hồng y Phanxicô Xaviê Nguyễn Văn Thuận sinh ngày 17 tháng 4 năm 1928 tại giáo xứ Phú Cam, Huế, trong một gia đình Công giáo có truyền thống đạo đức lâu đời. Ngài là con cả trong 8 anh chị em. Nhiều thân nhân trong gia tộc thuộc hàng tử đạo Việt Nam từ thế kỷ XVII–XIX (1698-1885).',
                    'Mẹ ngài là bà Êlisabét Ngô Đình Thị Hiệp, con gái ông Ngô Đình Khả, khiến ngài là cháu của Tổng thống Ngô Đình Diệm và Tổng Giám mục Pierre Marie Ngô Đình Thục. Từ nhỏ, ngài được nuôi dưỡng trong bầu không khí thiêng liêng đặc biệt.',
                    'Mỗi tối, người mẹ kể chuyện Kinh Thánh và các thánh tử đạo Việt Nam, dạy con yêu thương, biết tha thứ và yêu quê hương. Chính những câu chuyện này đã gieo mầm đức tin sâu xa trong tâm hồn cậu bé Thuận.'
                ],
                sources: ['[1]', '[2]', '[5]', '[6]']
            },
            {
                subtitle: 'Ơn gọi và Đào tạo',
                content: [
                    'Thiếu niên Thuận gia nhập Tiểu chủng viện An Ninh, sau đó học triết và thần học tại Đại chủng viện Kim Long (Huế). Ngài được thụ phong linh mục ngày 11 tháng 6 năm 1953 cho Giáo phận Huế.',
                    'Sau hai năm phục vụ mục vụ (1953-1955), ngài được gửi sang Rôma học giáo luật tại Đại học Urbaniana (1955-1959). Ngài đậu Tiến sĩ Giáo luật với điểm tối đa "summa cum laude" cho luận án về tuyên úy quân đội.'
                ],
                sources: ['[1]', '[2]', '[4]']
            },
            {
                subtitle: 'Thời kỳ đào tạo nhân sự',
                content: [
                    'Trở về Việt Nam, cha Thuận làm giáo sư rồi giám đốc Tiểu chủng viện Hoan Thiện (1962-1967). Đồng thời, ngài được bổ nhiệm làm Tổng Đại diện giáo phận Huế từ năm 1964.',
                    'Trong thời kỳ này, ngài đã bộc lộ tài năng lãnh đạo và tầm nhìn mục vụ sâu rộng, chuẩn bị cho sứ vụ Giám mục sau này.'
                ],
                sources: ['[2]', '[4]', '[5]']
            }
        ]
    },
    bishop: {
        id: 'bishop',
        title: 'Sứ Vụ Giám Mục',
        period: '1967 - 1975',
        description: 'Vị mục tử năng động của Giáo phận Nha Trang và biến cố 1975.',
        sections: [
            {
                subtitle: 'Giám mục Nha Trang',
                content: [
                    'Ngày 13 tháng 4 năm 1967, Đức Phaolô VI bổ nhiệm ngài làm Giám mục tiên khởi người Việt của Giáo phận Nha Trang. Lễ tấn phong diễn ra ngày 24 tháng 6 năm 1967 tại Huế, do Đức Khâm sứ Angelo Palmas chủ phong. Ngài được chính thức nhậm chức ngày 10 tháng 7 năm 1967.',
                    'Ngài chọn khẩu hiệu "Gaudium et Spes" (Vui mừng và Hy vọng) – tên Hiến chế mục vụ của Công đồng Vaticanô II, thể hiện tinh thần cởi mở và hy vọng của ngài.'
                ],
                quote: 'Gaudium et Spes – Vui mừng và Hy vọng',
                sources: ['[1]', '[2]', '[3]', '[4]']
            },
            {
                subtitle: 'Thành tựu mục vụ tại Nha Trang',
                content: [
                    'Tại Nha Trang, Đức cha Thuận đã đạt được những thành tựu đáng kể trong việc phát triển giáo phận. Số chủng sinh tăng từ 42 lên 147 người; số tiểu chủng sinh tăng từ 200 lên 500 người.',
                    'Ngài đào tạo linh mục cho 6 giáo phận khác nhau, phát triển công tác mục vụ cơ sở, và đặc biệt chú trọng đào tạo giáo dân theo tinh thần Tông đồ giáo dân của Công đồng Vaticanô II.',
                    'Ngài rất quan tâm đến người nghèo và việc truyền giáo, được ghi nhận là vị mục tử năng động, gần gũi, có tầm nhìn mục vụ phù hợp với tinh thần canh tân của Công đồng.'
                ],
                sources: ['[4]', '[5]']
            },
            {
                subtitle: 'Biến cố 1975',
                content: [
                    'Ngày 24 tháng 4 năm 1975, Đức Phaolô VI thuyên chuyển ngài làm Tổng Giám mục Phó Sài Gòn với quyền kế vị – chỉ 6 ngày trước khi Sài Gòn thất thủ (30 tháng 4 năm 1975).',
                    'Bối cảnh chính trị biến động, cộng thêm mối liên hệ gia đình với chế độ cũ (cháu của cố Tổng thống Ngô Đình Diệm), khiến ngài nhanh chóng bị chính quyền mới coi là nguy hiểm.',
                    'Ngày 15 tháng 8 năm 1975 – Lễ Đức Mẹ Lên Trời – ngài bị chính quyền bắt giữ mà không xét xử, không kết án, mở đầu cho 13 năm tù đày.'
                ],
                sources: ['[1]', '[2]', '[3]']
            }
        ]
    },
    imprisonment: {
        id: 'imprisonment',
        title: 'Chứng Nhân Trong Lao Tù',
        period: '1975 - 1988',
        description: '13 năm tù đày, 9 năm biệt giam và hành trình hoán cải nội tâm.',
        sections: [
            {
                subtitle: 'Khủng hoảng và Hoán cải',
                content: [
                    'Trong những năm đầu bị giam, ngài quằn quại vì cảm giác mọi kế hoạch mục vụ mình ấp ủ đều tan vỡ. Trong số 13 năm tù, ngài phải chịu 9 năm biệt giam – hình phạt khắc nghiệt nhằm cô lập và bẻ gãy tinh thần.',
                    'Ngài từng kể mình đã trải qua một đêm đấu tranh nội tâm dữ dội, cho đến khi nghe như có tiếng nói trong lòng: "Con phải phân biệt giữa Thiên Chúa và các công việc của Thiên Chúa."',
                    'Từ đó, ngài quyết định "chọn Thiên Chúa chứ không chọn công việc của Thiên Chúa", chấp nhận hoàn cảnh tù đày như nơi sống trọn ơn gọi linh mục trong hiện tại, với những người đang ở cạnh mình – kể cả công an, cai tù, và bạn tù.'
                ],
                quote: 'Con chọn Chúa, chứ không chọn công việc của Chúa.',
                sources: ['[7]', '[9]']
            },
            {
                subtitle: 'Thánh lễ trong tù',
                content: [
                    'Trong trại giam, ngài đã cử hành Thánh lễ bí mật hàng ngày suốt nhiều năm. Rượu lễ được gia đình gửi vào dưới nhãn "thuốc đau bao tử"; bánh lễ là những mẩu bánh nhỏ.',
                    'Ngài dâng lễ trên lòng bàn tay, chỉ với vài giọt rượu và chút bánh. Ngài viết: "Thánh Thể là xa lộ đưa tôi lên Thiên đàng" – thể hiện trọng tâm linh đạo Thánh Thể của ngài.',
                    'Ngài cũng tự làm một cây thánh giá nhỏ bằng dây điện hoặc dây kẽm và xà phòng. Cây thánh giá này trở thành biểu tượng mạnh mẽ về sự hiện diện của Đức Kitô trong nhà tù, và theo ngài suốt hành trình đến Vatican.'
                ],
                sources: ['[7]', '[10]']
            },
            {
                subtitle: 'Đường Hy Vọng ra đời',
                content: [
                    'Khi bị quản thúc ở một giáo xứ hẻo lánh (Cây Vông, Giang Xá), ngài dùng mặt sau các tờ lịch bloc để viết những câu suy niệm ngắn cho giáo dân. Ban đầu là 300 trang ghi chép trên lá thuốc lá, được bí mật chuyển ra ngoài.',
                    'Những mảnh giấy ấy được truyền tay, chép lại, và sau này tập hợp thành cuốn "Đường Hy Vọng" – một tác phẩm linh đạo với 1001 tư tưởng hướng dẫn đời sống Kitô hữu.',
                    '"Đường Hy Vọng" về sau được dịch ra hơn 10 thứ tiếng và trở thành một trong những tác phẩm nổi tiếng nhất về linh đạo Kitô giáo trong thế kỷ XX, ảnh hưởng đến hàng triệu người trên khắp thế giới.'
                ],
                sources: ['[6]', '[7]', '[9]']
            }
        ]
    },
    rome: {
        id: 'rome',
        title: 'Tự Do và Sứ Vụ Hoàn Vũ',
        period: '1988 - 2002',
        description: 'Từ người tù đến Chủ tịch Hội đồng Giáo hoàng Công lý và Hòa bình.',
        sections: [
            {
                subtitle: 'Phóng thích và Lưu vong',
                content: [
                    'Ngày 21 tháng 11 năm 1988, sau 13 năm tù đày, ngài được phóng thích nhưng vẫn bị quản thúc tại Hà Nội. Năm 1991, trong một chuyến đi Rôma chữa bệnh, ngài bị tuyên bố "không được hoan nghênh" (persona non grata) và không thể trở về Việt Nam.',
                    'Từ đó, ngài định cư tại Rôma và được Thánh Gioan Phaolô II tin tưởng giao nhiều trọng trách trong Giáo triều.'
                ],
                sources: ['[1]', '[3]']
            },
            {
                subtitle: 'Phục vụ Tòa Thánh',
                content: [
                    'Ngày 24 tháng 11 năm 1994, ngài được bổ nhiệm làm Phó Chủ tịch Hội đồng Giáo hoàng Công lý và Hoà bình, đồng thời từ chức Tổng Giám mục Phó Sài Gòn.',
                    'Ngày 24 tháng 6 năm 1998, ngài được thăng làm Chủ tịch Hội đồng Giáo hoàng Công lý và Hoà bình – một trong những cơ quan quan trọng nhất của Tòa Thánh, phụ trách các vấn đề như nợ của các nước thế giới thứ ba, công bằng xã hội, nhân quyền, và hoà bình thế giới.',
                    'Năm 1999, ngài tham dự Thượng Hội đồng Giám mục về Châu Âu. Ngài cũng làm thỉnh nguyện viên cho vụ phong chân phước của Chân phước Marcel Van.'
                ],
                sources: ['[1]', '[2]', '[3]']
            },
            {
                subtitle: 'Tĩnh tâm Mùa Chay 2000 và Hồng y',
                content: [
                    'Năm 2000, ngài được Đức Giáo hoàng Gioan Phaolô II mời giảng Tĩnh tâm Mùa Chay cho Giáo triều Rôma – một vinh dự lớn lao. Các bài giảng này sau được in thành sách "Chứng nhân Hy vọng" (Testimony of Hope), lan tỏa thông điệp hy vọng đến khắp thế giới.',
                    'Ngày 21 tháng 2 năm 2001, ngài được Đức Giáo hoàng Gioan Phaolô II vinh thăng Hồng y Phó tế, với hiệu tòa Santa Maria della Grazie a Via Trionfale – trở thành Hồng y người Việt thứ hai trong lịch sử.'
                ],
                quote: 'Chấm mỗi chấm cho đúng, đường sẽ đẹp. Sống mỗi phút cho tốt, đời sẽ thánh.',
                sources: ['[2]', '[3]']
            },
            {
                subtitle: 'Di sản cuối đời',
                content: [
                    'Ngài qua đời tại Rôma ngày 16 tháng 9 năm 2002 sau một thời gian chống chọi với bệnh ung thư, trong thái độ phó thác bình an. Ngài hưởng thọ 74 tuổi.',
                    'Ngày 4 tháng 5 năm 2017, Đức Giáo hoàng Phanxicô đã công nhận ngài là Đấng Đáng Kính (Venerable) – bước quan trọng trên con đường phong thánh. Di sản của ngài tiếp tục sống động qua hơn 30 tác phẩm được dịch ra nhiều thứ tiếng, và qua hàng triệu người được ngài truyền cảm hứng.'
                ],
                sources: ['[1]', '[2]', '[8]']
            }
        ]
    }
};

