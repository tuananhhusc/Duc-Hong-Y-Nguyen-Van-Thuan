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
        period: '1928 - 1967',
        description: 'Từ cậu bé vùng Phú Cam đến vị linh mục trẻ đầy nhiệt huyết.',
        sections: [
            {
                subtitle: 'Gia đình và môi trường đạo đức',
                content: [
                    'Đức Hồng y Nguyễn Văn Thuận sinh ngày 17 tháng 4 năm 1928 tại Phú Cam, Huế, trong một gia đình Công giáo có truyền thống đạo đức lâu đời. Nhiều thân nhân trong gia tộc thuộc hàng tử đạo Việt Nam từ thế kỷ XVII–XIX.',
                    'Mẹ ngài là bà Êlisabét Ngô Đình Thị Hiệp, con gái ông Ngô Đình Khả, khiến ngài là cháu của Tổng thống Ngô Đình Diệm và Tổng Giám mục Ngô Đình Thục. Từ nhỏ, ngài được nuôi dưỡng trong bầu không khí thiêng liêng đặc biệt. Mỗi tối, người mẹ kể chuyện Kinh Thánh và các thánh tử đạo Việt Nam, dạy con yêu thương, biết tha thứ và yêu quê hương.'
                ],
                sources: ['[3]', '[4]', '[6]']
            },
            {
                subtitle: 'Ơn gọi và Đào tạo',
                content: [
                    'Thiếu niên Thuận gia nhập Tiểu chủng viện An Ninh, sau đó học triết và thần học tại Đại chủng viện Kim Long (Huế). Ngài được thụ phong linh mục ngày 11 tháng 6 năm 1953.',
                    'Sau đó, ngài được gửi sang Rôma học giáo luật tại Đại học Urbaniana, đậu Tiến sĩ Giáo luật với điểm tối đa "maxima cum laude" cho luận án về tuyên úy quân đội. Trở về Việt Nam, ngài làm giáo sư rồi giám đốc Tiểu chủng viện Hoan Thiện, đồng thời là Tổng Đại diện giáo phận Huế.'
                ],
                sources: ['[2]', '[4]', '[6]']
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
                    'Ngày 13 tháng 4 năm 1967, Đức Phaolô VI bổ nhiệm ngài làm Giám mục Nha Trang; lễ tấn phong diễn ra ngày 24 tháng 6 năm 1967. Ngài chọn khẩu hiệu "Gaudium et Spes" (Vui mừng và Hy vọng) – tên Hiến chế mục vụ của Công đồng Vaticanô II.',
                    'Tại Nha Trang, Đức cha Thuận rất chú trọng đào tạo giáo dân, xây dựng các hội đoàn và linh đạo tông đồ giáo dân, đồng thời quan tâm sâu sắc đến người nghèo và việc truyền giáo. Ngài được ghi nhận là vị mục tử năng động, gần gũi, có tầm nhìn mục vụ phù hợp với tinh thần Công đồng Vaticanô II.'
                ],
                sources: ['[2]', '[7]', '[8]']
            },
            {
                subtitle: 'Biến cố 1975',
                content: [
                    'Ngày 24 tháng 4 năm 1975, Đức Phaolô VI thuyên chuyển ngài làm Tổng Giám mục phó Sài Gòn – chỉ 6 ngày trước khi Sài Gòn thất thủ (30 tháng 4 năm 1975). Bối cảnh chính trị biến động, cộng thêm mối liên hệ gia đình với chế độ cũ, khiến ngài nhanh chóng bị chính quyền mới coi là nguy hiểm.',
                    'Ngày 15 tháng 8 năm 1975, ngài bị chính quyền bắt giữ mà không xét xử, mở đầu cho 13 năm tù đày.'
                ],
                sources: ['[2]', '[4]']
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
                    'Trong những năm đầu bị giam, ngài quằn quại vì cảm giác mọi kế hoạch mục vụ mình ấp ủ đều tan vỡ. Ngài từng kể mình đã trải qua một đêm đấu tranh nội tâm dữ dội, cho đến khi nghe như có tiếng nói trong lòng: "Con phải phân biệt giữa Thiên Chúa và các công việc của Thiên Chúa."',
                    'Từ đó, ngài quyết định "chọn Thiên Chúa chứ không chọn công việc của Thiên Chúa", chấp nhận hoàn cảnh tù đày như nơi sống trọn ơn gọi linh mục trong hiện tại, với những người đang ở cạnh mình (kể cả công an, cai tù, bạn tù).'
                ],
                quote: 'Con chọn Chúa, chứ không chọn công việc của Chúa.',
                sources: ['[7]', '[9]']
            },
            {
                subtitle: 'Thánh lễ trong tù',
                content: [
                    'Trong trại giam, ngài đã cử hành Thánh lễ bí mật nhiều năm: rượu được gửi vào dưới nhãn "thuốc đau bao tử", bánh lễ là những mẩu bánh nhỏ; chỉ với vài giọt rượu và chút bánh, ngài dâng lễ trên lòng bàn tay.',
                    'Ngài cũng tự làm một cây thánh giá nhỏ bằng dây điện hoặc dây kẽm và xà phòng; về sau cây thánh giá này trở thành một biểu tượng mạnh mẽ về sự hiện diện của Đức Kitô trong nhà tù.'
                ],
                sources: ['[10]']
            },
            {
                subtitle: 'Đường Hy Vọng ra đời',
                content: [
                    'Khi bị quản thúc ở một giáo xứ hẻo lánh (Cây Vông), ngài dùng mặt sau các tờ lịch bloc để viết những câu suy niệm ngắn cho giáo dân. Những mảnh giấy ấy được chuyển tay, chép lại, sau này tập hợp thành cuốn "Đường Hy Vọng" – một tác phẩm linh đạo với 1001 tư tưởng hướng dẫn đời sống Kitô hữu.',
                    '"Đường Hy Vọng" về sau được dịch ra nhiều thứ tiếng và trở thành một trong những tác phẩm nổi tiếng nhất về linh đạo Kitô giáo trong thế kỷ XX.'
                ],
                sources: ['[9]', '[11]']
            }
        ]
    },
    rome: {
        id: 'rome',
        title: 'Tự Do và Sứ Vụ Hoàn Vũ',
        period: '1988 - 2002',
        description: 'Từ người tù đến Chủ tịch Hội đồng trù bị cho Công lý và Hòa bình.',
        sections: [
            {
                subtitle: 'Lưu vong và Phục vụ Tòa Thánh',
                content: [
                    'Ngày 21 tháng 11 năm 1988, ngài được phóng thích nhưng bị buộc phải rời Việt Nam năm 1991. Ngài định cư tại Rôma và được Thánh Gioan Phaolô II tin tưởng giao nhiều trọng trách.',
                    'Năm 1998, ngài trở thành Chủ tịch Hội đồng Giáo hoàng Công lý và Hoà bình, phụ trách các vấn đề như nợ của các nước thế giới thứ ba, công bằng xã hội, nhân quyền, và hoà bình.'
                ],
                sources: ['[4]', '[8]']
            },
            {
                subtitle: 'Di sản cuối đời',
                content: [
                    'Năm 2000, ngài giảng tĩnh tâm Mùa Chay cho Giáo triều Rôma; các bài giảng này sau được in thành sách "Chứng nhân Hy vọng". Ngày 21 tháng 2 năm 2001, ngài được vinh thăng Hồng y.',
                    'Ngài qua đời tại Rôma ngày 16 tháng 9 năm 2002 sau một thời gian chống chọi với bệnh tật, trong thái độ phó thác bình an.'
                ],
                sources: ['[2]', '[8]']
            }
        ]
    }
};
