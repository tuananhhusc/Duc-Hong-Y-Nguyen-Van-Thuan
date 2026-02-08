export interface TimelineEvent {
    id: string;
    date: string;
    year: number;
    age: number;
    title: string;
    description: string;
    category: 'early-life' | 'bishop' | 'imprisonment' | 'rome' | 'canonization';
    significance: string;
    imageUrl?: string;
    sources: string[];
}

export const timelineEvents: TimelineEvent[] = [
    {
        id: 'birth',
        date: '1928-04-17',
        year: 1928,
        age: 0,
        title: 'Sinh tại Huế',
        description: 'Sinh trong gia đình Công giáo đạo đức; liên hệ họ hàng với gia đình Ngô Đình Diệm.',
        category: 'early-life',
        significance: 'Khởi đầu cuộc đời với nền tảng đức tin vững chắc.',
        sources: ['[2]', '[8]']
    },
    {
        id: 'seminary',
        date: '1940', // Approximation for "Thiếu niên"
        year: 1940,
        age: 12,
        title: 'Vào Tiểu chủng viện An Ninh',
        description: 'Bắt đầu con đường ơn gọi linh mục.',
        category: 'early-life',
        significance: 'Đáp lại tiếng Chúa gọi từ khi còn nhỏ.',
        sources: ['[2]']
    },
    {
        id: 'ordination',
        date: '1953-06-11',
        year: 1953,
        age: 25,
        title: 'Thụ phong linh mục',
        description: 'Thụ phong linh mục cho giáo phận Huế do Đức cha Jean-Baptiste Urrutia truyền chức.',
        category: 'early-life',
        significance: 'Chính thức trở thành mục tử của Chúa.',
        sources: ['[2]', '[4]']
    },
    {
        id: 'studies-rome',
        date: '1953',
        year: 1953,
        age: 25,
        title: 'Du học Rôma',
        description: 'Học tiến sĩ giáo luật tại Đại học Urbaniana; tốt nghiệp xuất sắc (1953-1959).',
        category: 'early-life',
        significance: 'Chuẩn bị kiến thức sâu rộng để phục vụ Giáo Hội.',
        sources: ['[4]', '[6]']
    },
    {
        id: 'seminary-director',
        date: '1959',
        year: 1959,
        age: 31,
        title: 'Giám đốc Tiểu chủng viện',
        description: 'Làm giáo sư, Giám đốc Tiểu chủng viện Hoan Thiện, Huế; Tổng Đại diện giáo phận (1959-1967).',
        category: 'early-life',
        significance: 'Đào tạo thế hệ linh mục tương lai và quản trị giáo phận.',
        sources: ['[2]', '[6]']
    },
    {
        id: 'bishop-nhatrang',
        date: '1967-04-13',
        year: 1967,
        age: 39,
        title: 'Bổ nhiệm Giám mục Nha Trang',
        description: 'Được Đức Phaolô VI bổ nhiệm làm Giám mục Nha Trang.',
        category: 'bishop',
        significance: 'Nhận lãnh trách nhiệm mục tử của một giáo phận rộng lớn.',
        sources: ['[2]', '[4]']
    },
    {
        id: 'bishop-ordination',
        date: '1967-06-24',
        year: 1967,
        age: 39,
        title: 'Thụ phong Giám mục',
        description: 'Lễ tấn phong tại Huế với khẩu hiệu "Gaudium et Spes" (Vui mừng và Hy vọng).',
        category: 'bishop',
        significance: 'Cam kết mang niềm vui và hy vọng đến cho mọi người theo tinh thần Vatican II.',
        sources: ['[2]', '[8]']
    },
    {
        id: 'nhatrang-ministry',
        date: '1967',
        year: 1967,
        age: 39,
        title: 'Mục vụ tại Nha Trang',
        description: 'Chú trọng phát triển tông đồ giáo dân, quan tâm người nghèo và đào tạo nhân sự (1967-1975).',
        category: 'bishop',
        significance: 'Xây dựng giáo phận vững mạnh về nhân sự và đức tin.',
        sources: ['[8]']
    },
    {
        id: 'coadjutor-saigon',
        date: '1975-04-24',
        year: 1975,
        age: 47,
        title: 'Tổng Giám mục phó Sài Gòn',
        description: 'Được bổ nhiệm làm Tổng Giám mục phó Sài Gòn chỉ 6 ngày trước khi Sài Gòn thất thủ.',
        category: 'bishop',
        significance: 'Sẵn sàng dấn thân vào nơi khó khăn nhất.',
        sources: ['[2]', '[4]']
    },
    {
        id: 'arrest',
        date: '1975-08-15',
        year: 1975,
        age: 47,
        title: 'Bị bắt giữ',
        description: 'Bị bắt và giam giữ không xét xử; bị coi là "phản động".',
        category: 'imprisonment',
        significance: 'Bắt đầu hành trình "Chứng nhân Hy vọng" trong lao tù.',
        sources: ['[2]', '[4]']
    },
    {
        id: 'imprisonment-years',
        date: '1975',
        year: 1975,
        age: 47,
        title: '13 năm tù đày',
        description: 'Trải qua 13 năm tù, trong đó có 9 năm biệt giam (1975-1988).',
        category: 'imprisonment',
        significance: 'Thời gian thử thách đức tin tột cùng và viết nên "Đường Hy Vọng".',
        sources: ['[2]', '[4]', '[9]']
    },
    {
        id: 'choosing-god',
        date: '1976', // User approximate date
        year: 1976,
        age: 48,
        title: 'Kinh nghiệm "Chọn Chúa"',
        description: 'Quyết định phân biệt giữa "Thiên Chúa" và "công việc của Thiên Chúa" trong tù.',
        category: 'imprisonment',
        significance: 'Bước ngoặt linh đạo: tìm thấy tự do nội tâm ngay trong xiềng xích.',
        sources: ['[8]', '[9]']
    },
    {
        id: 'release',
        date: '1988-11-21',
        year: 1988,
        age: 60,
        title: 'Được trả tự do',
        description: 'Được phóng thích nhưng vẫn bị quản thúc tại Tòa Tổng Giám mục Hà Nội.',
        category: 'imprisonment',
        significance: 'Kết thúc 13 năm tù, nhưng vẫn chưa thực sự tự do hoạt động mục vụ.',
        sources: ['[2]', '[4]']
    },
    {
        id: 'exile',
        date: '1991',
        year: 1991,
        age: 63,
        title: 'Buộc phải sống lưu vong',
        description: 'Được phép sang Rôma chữa bệnh và không được trở lại Việt Nam.',
        category: 'rome',
        significance: 'Bắt đầu sứ vụ mới tại trung tâm Giáo Hội hoàn vũ.',
        sources: ['[2]']
    },
    {
        id: 'justice-peace-vp',
        date: '1994-11-24',
        year: 1994,
        age: 66,
        title: 'Phó Chủ tịch HĐGH Công lý và Hoà bình',
        description: 'Bắt đầu làm việc trong Giáo triều Rôma.',
        category: 'rome',
        significance: 'Đóng góp kinh nghiệm đau thương của mình cho công lý và hòa bình thế giới.',
        sources: ['[4]', '[8]']
    },
    {
        id: 'justice-peace-pres',
        date: '1998-06-24',
        year: 1998,
        age: 70,
        title: 'Chủ tịch HĐGH Công lý và Hoà bình',
        description: 'Trở thành Chủ tịch Hội đồng, chịu trách nhiệm về các vấn đề xã hội toàn cầu.',
        category: 'rome',
        significance: 'Tiếng nói của Giáo Hội về nhân quyền và phát triển.',
        sources: ['[2]', '[4]', '[8]']
    },
    {
        id: 'retreat-preacher',
        date: '2000',
        year: 2000,
        age: 72,
        title: 'Giảng tĩnh tâm cho Giáo triều',
        description: 'Giảng tĩnh tâm Mùa Chay cho Đức Thánh Cha Gioan Phaolô II và Giáo triều.',
        category: 'rome',
        significance: 'Chia sẻ linh đạo hy vọng cho cấp lãnh đạo cao nhất của Giáo Hội.',
        sources: ['[8]']
    },
    {
        id: 'cardinal',
        date: '2001-02-21',
        year: 2001,
        age: 72,
        title: 'Vinh thăng Hồng y',
        description: 'Được Đức Thánh Cha Gioan Phaolô II vinh thăng Hồng y phó tế.',
        category: 'rome',
        significance: 'Sự ghi nhận cao quý của Giáo Hội đối với chứng tá của ngài.',
        sources: ['[2]', '[4]']
    },
    {
        id: 'death',
        date: '2002-09-16',
        year: 2002,
        age: 74,
        title: 'Qua đời tại Rôma',
        description: 'An nghỉ trong Chúa sau thời gian bệnh tật; được chôn cất tại Santa Maria della Scala.',
        category: 'rome',
        significance: 'Hoàn tất cuộc đời chứng nhân anh dũng.',
        sources: ['[2]', '[4]', '[8]']
    },
    {
        id: 'beatification-open',
        date: '2010-10-22',
        year: 2010,
        age: 82, // Posthumous
        title: 'Khai mạc án phong chân phước',
        description: 'Án phong chân phước được chính thức khai mạc tại Rôma.',
        category: 'canonization',
        significance: 'Giáo Hội chính thức xem xét sự thánh thiện của ngài.',
        sources: ['[7]']
    },
    {
        id: 'venerable',
        date: '2017-05-04',
        year: 2017,
        age: 89, // Posthumous
        title: 'Đấng Đáng Kính',
        description: 'Đức Giáo hoàng Phanxicô tuyên bố ngài là Đấng Đáng Kính (Venerable).',
        category: 'canonization',
        significance: 'Công nhận ngài đã sống các nhân đức ở mức độ anh hùng.',
        sources: ['[2]', '[5]']
    }
];

export const categoryLabels: Record<TimelineEvent['category'], string> = {
    'early-life': 'Thiếu thời & Ơn gọi',
    'bishop': 'Giám mục',
    'imprisonment': 'Lao tù',
    'rome': 'Sứ vụ tại Rôma',
    'canonization': 'Tiến trình Phong thánh'
};
