export interface CorpusEntry {
    id: string;
    soCau: number;
    chuong: number;
    tuaChuong: string;
    vanBan: string;
    loaiCau: 'imperative' | 'declarative' | 'rhetorical-question';
    chuDeLinhDao: string[];
    thamChieuKinhThanh?: string;
    nguon: string;
}

export interface ChapterInfo {
    chapter: number;
    title: string;
    range: string;
    description?: string;
}

// Complete book structure - 38 chapters
export const bookStructure: ChapterInfo[] = [
    { chapter: 1, title: 'Ra Đi', range: '1-16', description: 'Bỏ mình để lên đường theo Chúa' },
    { chapter: 2, title: 'Bổn Phận', range: '17-38', description: 'Ý Chúa trong giây phút hiện tại' },
    { chapter: 3, title: 'Bền Chí', range: '39-60', description: 'Kiên trì đi đến cùng' },
    { chapter: 4, title: 'Tiếng Gọi', range: '61-80', description: 'Đáp lại lời mời gọi của Chúa' },
    { chapter: 5, title: 'Sống Nội Tâm', range: '81-100', description: 'Nuôi dưỡng đời sống thiêng liêng' },
    { chapter: 6, title: 'Siêu Nhiên', range: '101-120', description: 'Hướng về những giá trị vĩnh cửu' },
    { chapter: 7, title: 'Cầu Nguyện', range: '121-160', description: 'Đối thoại thân mật với Chúa' },
    { chapter: 8, title: 'Hy Sinh', range: '161-180', description: 'Dâng hiến vì tình yêu' },
    { chapter: 9, title: 'Quả Tim', range: '181-200', description: 'Yêu thương chân thành' },
    { chapter: 10, title: 'Chí Khí', range: '201-220', description: 'Can đảm và nghị lực' },
    { chapter: 11, title: 'Chúa Hiện Diện', range: '221-260', description: 'Nhận ra Chúa trong mọi nơi' },
    { chapter: 12, title: 'Hội Thánh', range: '261-300', description: 'Yêu mến và phục vụ Giáo Hội' },
    { chapter: 13, title: 'Đức Tin', range: '301-340', description: 'Tin tưởng phó thác' },
    { chapter: 14, title: 'Tông Đồ', range: '341-380', description: 'Sứ mạng loan báo Tin Mừng' },
    { chapter: 15, title: 'Thánh Lễ', range: '381-420', description: 'Trung tâm đời sống Kitô giáo' },
    { chapter: 16, title: 'Vâng Phục', range: '421-460', description: 'Thuận theo ý Chúa' },
    { chapter: 17, title: 'Thanh Bần', range: '461-500', description: 'Sống đơn sơ thanh thoát' },
    { chapter: 18, title: 'Trong Trắng', range: '501-540', description: 'Giữ gìn sự tinh tuyền' },
    { chapter: 19, title: 'Gia Đình', range: '541-580', description: 'Thánh hóa đời sống gia đình' },
    { chapter: 20, title: 'Khiêm Nhượng', range: '581-620', description: 'Nhận biết sự nhỏ bé của mình' },
    { chapter: 21, title: 'Cẩn Mật', range: '621-660', description: 'Dè dặt và thận trọng' },
    { chapter: 22, title: 'Vui Tươi', range: '661-700', description: 'Niềm vui trong Chúa' },
    { chapter: 23, title: 'Khôn Ngoan', range: '701-740', description: 'Sự khôn ngoan của Thiên Chúa' },
    { chapter: 24, title: 'Học', range: '741-760', description: 'Không ngừng học hỏi' },
    { chapter: 25, title: 'Phát Triển', range: '761-780', description: 'Tiến bước không ngừng' },
    { chapter: 26, title: 'Dấn Thân', range: '781-800', description: 'Dám sống cho lý tưởng' },
    { chapter: 27, title: 'Canh Tân', range: '801-820', description: 'Đổi mới liên lỉ' },
    { chapter: 28, title: 'Cuộc Sống Mới', range: '821-840', description: 'Sống trong Chúa Kitô' },
    { chapter: 29, title: 'Gian Khổ', range: '841-860', description: 'Ý nghĩa của đau khổ' },
    { chapter: 30, title: 'Đứa Con Hạnh Phúc', range: '861-880', description: 'Hạnh phúc làm con Chúa' },
    { chapter: 31, title: 'Bác Ái', range: '881-900', description: 'Yêu thương như Chúa yêu' },
    { chapter: 32, title: 'Việc Tầm Thường', range: '901-920', description: 'Thánh hóa đời thường' },
    { chapter: 33, title: 'Lãnh Đạo', range: '921-930', description: 'Phục vụ và dẫn dắt' },
    { chapter: 34, title: 'Kiểm Điểm', range: '931-940', description: 'Xét mình và sám hối' },
    { chapter: 35, title: 'Đức Mẹ Maria', range: '941-948', description: 'Noi gương Mẹ Maria' },
    { chapter: 36, title: 'Hy Vọng: Niềm Hy Vọng', range: '949-978', description: 'Nền tảng của hy vọng' },
    { chapter: 37, title: 'Hy Vọng: Sống Hy Vọng', range: '979-1001', description: 'Thực hành hy vọng mỗi ngày' },
    { chapter: 38, title: 'Con Có Một Tổ Quốc', range: 'epilogue', description: 'Lời kết về quê hương' }
];

// 80+ meditations extracted from dhyhyvongloichua.docx
export const duongHyVongCorpus: CorpusEntry[] = [
    // Chapter 1: Ra Đi (1-16)
    { id: 'DHV_0001', soCau: 1, chuong: 1, tuaChuong: 'Ra Đi', vanBan: "Dù là xích vàng, còn bị ràng buộc, con không lên đường được.", loaiCau: 'declarative', chuDeLinhDao: ['tự do nội tâm', 'từ bỏ'], nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0002', soCau: 2, chuong: 1, tuaChuong: 'Ra Đi', vanBan: "Chúa đặt con trên đường, «để con ra đi và thu được nhiều hoa trái» (Ga 15,16). Đường ấy là «đường hy vọng».", loaiCau: 'declarative', chuDeLinhDao: ['ơn gọi', 'sứ mạng'], thamChieuKinhThanh: 'Ga 15:16', nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0003', soCau: 3, chuong: 1, tuaChuong: 'Ra Đi', vanBan: "Bí quyết của đường hy vọng: Ra đi: «bỏ mình» - Bổn phận: «vác thánh giá mình mỗi ngày» - Bền chí: «theo Thầy».", loaiCau: 'declarative', chuDeLinhDao: ['bí quyết', 'theo Chúa'], thamChieuKinhThanh: 'Mt 16:24', nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0004', soCau: 4, chuong: 1, tuaChuong: 'Ra Đi', vanBan: "Bỏ tất cả mà chưa bỏ mình thì con chưa bỏ gì cả, vì chính mình con sẽ dần dần quơ góp lại những gì con đã bỏ trước.", loaiCau: 'declarative', chuDeLinhDao: ['từ bỏ', 'bỏ mình'], thamChieuKinhThanh: 'Lc 14:26', nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0005', soCau: 5, chuong: 1, tuaChuong: 'Ra Đi', vanBan: "Abraham đã ra đi, vì hy vọng đến đất hứa. Maisen đã ra đi, vì hy vọng cứu dân Chúa khỏi nô lệ. Chúa Giêsu đã ra đi từ trời xuống đất, vì hy vọng cứu nhân loại.", loaiCau: 'declarative', chuDeLinhDao: ['ra đi', 'gương các thánh'], thamChieuKinhThanh: 'Dt 6:17-18', nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0006', soCau: 6, chuong: 1, tuaChuong: 'Ra Đi', vanBan: "Dù có ra khỏi nhà, đi phương xa vạn dặm mà cứ mang theo tất cả tật xấu, cả con người cũ, thì có khác gì ở nhà đâu?", loaiCau: 'rhetorical-question', chuDeLinhDao: ['ra đi', 'hoán cải'], nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0007', soCau: 7, chuong: 1, tuaChuong: 'Ra Đi', vanBan: "Các thánh là những người điên vì Chúa. Khôn ngoan thế gian quá không làm thánh được.", loaiCau: 'declarative', chuDeLinhDao: ['nên thánh', 'khôn ngoan'], thamChieuKinhThanh: '1Cr 1:25.27', nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0008', soCau: 8, chuong: 1, tuaChuong: 'Ra Đi', vanBan: "Đã ra đi, phải bất chấp lưỡi thiên hạ đàm tiếu.", loaiCau: 'imperative', chuDeLinhDao: ['can đảm', 'ra đi'], nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0010', soCau: 10, chuong: 1, tuaChuong: 'Ra Đi', vanBan: "Giàu hay nghèo, khen hay chê, sang hay hèn, không sao cả, chấp nhận tiến lên trên đường hy vọng hồng phúc.", loaiCau: 'imperative', chuDeLinhDao: ['chấp nhận', 'siêu thoát'], nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0012', soCau: 12, chuong: 1, tuaChuong: 'Ra Đi', vanBan: "Đi, đi mãi, đi quyết liệt, đi không nhượng bộ; không ai tin người nhượng bộ cũng như không ai đi với người đi lùi.", loaiCau: 'imperative', chuDeLinhDao: ['kiên trì', 'quyết tâm'], thamChieuKinhThanh: 'Gl 2:5-6', nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0016', soCau: 16, chuong: 1, tuaChuong: 'Ra Đi', vanBan: "Không nhượng bộ, không phải là kiêu căng, tự ái hay ngoan cố. Không nhượng bộ là yêu thương quyết liệt lý tưởng của mình.", loaiCau: 'declarative', chuDeLinhDao: ['kiên định', 'lý tưởng'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 2: Bổn Phận (17-38)
    { id: 'DHV_0017', soCau: 17, chuong: 2, tuaChuong: 'Bổn Phận', vanBan: "Bổn phận là ý Chúa trong giây phút hiện tại.", loaiCau: 'declarative', chuDeLinhDao: ['bổn phận', 'ý Chúa', 'hiện tại'], nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0019', soCau: 19, chuong: 2, tuaChuong: 'Bổn Phận', vanBan: "Thánh hóa bổn phận của con. Thánh hóa người khác nhờ bổn phận con. Thánh hóa chính mình con trong bổn phận.", loaiCau: 'imperative', chuDeLinhDao: ['thánh hóa', 'bổn phận'], nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0024', soCau: 24, chuong: 2, tuaChuong: 'Bổn Phận', vanBan: "Thợ nên thánh ở công xưởng, lính nên thánh ở bộ đội, bệnh nhân nên thánh ở bệnh viện, học sinh nên thánh ở học đường.", loaiCau: 'declarative', chuDeLinhDao: ['nên thánh', 'đời thường'], nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0027', soCau: 27, chuong: 2, tuaChuong: 'Bổn Phận', vanBan: "Bổn phận là giấy vào nước Trời: «Ai thực hiện ý Cha Ta trên trời, sẽ vào nước trời.»", loaiCau: 'declarative', chuDeLinhDao: ['bổn phận', 'nước trời'], thamChieuKinhThanh: 'Mt 7:21', nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0031', soCau: 31, chuong: 2, tuaChuong: 'Bổn Phận', vanBan: "Chỉ cần làm bổn phận trong giây phút hiện tại là nên thánh.", loaiCau: 'declarative', chuDeLinhDao: ['hiện tại', 'nên thánh'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 3: Bền Chí (39-60)
    { id: 'DHV_0039', soCau: 39, chuong: 3, tuaChuong: 'Bền Chí', vanBan: "Ai cũng khởi sự. Chỉ thánh mới đi đến cùng.", loaiCau: 'declarative', chuDeLinhDao: ['bền chí', 'kiên trì'], nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0041', soCau: 41, chuong: 3, tuaChuong: 'Bền Chí', vanBan: "Đừng nản lòng vì thất bại. Nếu con tìm ý Chúa thực sự, thì chính sự thất bại đó là thành công.", loaiCau: 'imperative', chuDeLinhDao: ['kiên trì', 'thất bại'], nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0049', soCau: 49, chuong: 3, tuaChuong: 'Bền Chí', vanBan: "Bền đỗ là đặc tính của các thánh, vì «Ai bền đỗ đến cùng sẽ được cứu rỗi.»", loaiCau: 'declarative', chuDeLinhDao: ['bền đỗ', 'cứu rỗi'], thamChieuKinhThanh: 'Mt 10:22', nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0053', soCau: 53, chuong: 3, tuaChuong: 'Bền Chí', vanBan: "Người trộm lành đã hạnh phúc vì hy vọng ở tình yêu Chúa, Giuđa đã khốn nạn vì thất vọng.", loaiCau: 'declarative', chuDeLinhDao: ['hy vọng', 'tin tưởng'], thamChieuKinhThanh: 'Lc 23:42-43', nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0056', soCau: 56, chuong: 3, tuaChuong: 'Bền Chí', vanBan: "Mỗi ngày con phải bớt tự ái mà thêm bác ái. Mỗi ngày hãy bớt tự tín mà thêm tin Chúa.", loaiCau: 'imperative', chuDeLinhDao: ['bác ái', 'tin Chúa'], nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0060', soCau: 60, chuong: 3, tuaChuong: 'Bền Chí', vanBan: "Con bảo: «Khó!». Đúng vậy! Thương khó, bỏ dễ. Khó mới quý, bỏ là quỷ.", loaiCau: 'declarative', chuDeLinhDao: ['kiên trì', 'quyết tâm'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 4: Tiếng Gọi (61-80)
    { id: 'DHV_0061', soCau: 61, chuong: 4, tuaChuong: 'Tiếng Gọi', vanBan: "«Hãy theo Ta»! Các Tông đồ đã bỏ mọi sự theo Chúa, con có dứt khoát một phen theo Chúa không?", loaiCau: 'rhetorical-question', chuDeLinhDao: ['theo Chúa', 'ơn gọi'], thamChieuKinhThanh: 'Mt 9:9', nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0069', soCau: 69, chuong: 4, tuaChuong: 'Tiếng Gọi', vanBan: "Quyết định theo Chúa không phải chỉ là một chữ ký, không phải là một lời tuyên thệ. Nhưng là một sự hiến dâng liên lỉ.", loaiCau: 'declarative', chuDeLinhDao: ['dấn thân', 'trung thành'], nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0074', soCau: 74, chuong: 4, tuaChuong: 'Tiếng Gọi', vanBan: "Chúa bảo con: «Hãy đi rao giảng Phúc Âm.» Chúa không ra thời khóa biểu, không vạch kế hoạch, Chúa để con sáng kiến.", loaiCau: 'declarative', chuDeLinhDao: ['truyền giáo', 'sáng kiến'], thamChieuKinhThanh: 'Mc 16:15', nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 5: Sống Nội Tâm (81-100)
    { id: 'DHV_0080', soCau: 80, chuong: 5, tuaChuong: 'Sống Nội Tâm', vanBan: "Hòa bình nhờ chiến thắng, chiến thắng nhờ tranh đấu. Con muốn bình an trong tâm hồn, phải tranh đấu liên lỉ.", loaiCau: 'declarative', chuDeLinhDao: ['nội tâm', 'bình an'], nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0086', soCau: 86, chuong: 5, tuaChuong: 'Sống Nội Tâm', vanBan: "Thinh lặng bên ngoài, nhất là thinh lặng bên trong là bầu khí của cuộc sống nội tâm.", loaiCau: 'declarative', chuDeLinhDao: ['thinh lặng', 'nội tâm'], nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0087', soCau: 87, chuong: 5, tuaChuong: 'Sống Nội Tâm', vanBan: "Tất cả mọi người không cần tài ba lỗi lạc mới nên thánh được, chỉ cần ơn Chúa và ý chí của con.", loaiCau: 'declarative', chuDeLinhDao: ['nên thánh', 'ý chí'], nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0092', soCau: 92, chuong: 5, tuaChuong: 'Sống Nội Tâm', vanBan: "Ai phải nên thánh? Tất cả mọi người, không có luật trừ. Khởi sự từ chính mình con.", loaiCau: 'rhetorical-question', chuDeLinhDao: ['nên thánh', 'phổ quát'], nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0100', soCau: 100, chuong: 5, tuaChuong: 'Sống Nội Tâm', vanBan: "«Xin cho biết Chúa, cho con biết con!» Nếu «biết» thật, đời con sẽ đổi hẳn…", loaiCau: 'declarative', chuDeLinhDao: ['tự biết', 'biết Chúa'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 6: Siêu Nhiên (101-120)
    { id: 'DHV_0101', soCau: 101, chuong: 6, tuaChuong: 'Siêu Nhiên', vanBan: "Người giữ đạo đọc nhiều kinh, dự nhiều lễ, mà không sống đạo, chẳng khác gì người ăn nhiều mà vẫn yếu.", loaiCau: 'declarative', chuDeLinhDao: ['sống đạo', 'thực hành'], nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0102', soCau: 102, chuong: 6, tuaChuong: 'Siêu Nhiên', vanBan: "Mọi người khen con mà Chúa chê con, khốn cho con. Mọi người nhục mạ con, nhưng Chúa khen con, thì hạnh phúc cho con.", loaiCau: 'declarative', chuDeLinhDao: ['siêu nhiên', 'giá trị'], nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0107', soCau: 107, chuong: 6, tuaChuong: 'Siêu Nhiên', vanBan: "Thánh giá là sự dại dột đối với người Do Thái, là sự vấp phạm đối với người Hy lạp. Nhưng phần chúng ta, chúng ta phải hãnh diện vì thánh giá Chúa.", loaiCau: 'declarative', chuDeLinhDao: ['thánh giá', 'khôn ngoan'], thamChieuKinhThanh: '1Cr 1:23-24', nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 7: Cầu Nguyện (121-160)
    { id: 'DHV_0121', soCau: 121, chuong: 7, tuaChuong: 'Cầu Nguyện', vanBan: "Cầu nguyện là hơi thở của linh hồn. Không cầu nguyện, linh hồn chết ngạt.", loaiCau: 'declarative', chuDeLinhDao: ['cầu nguyện', 'đời sống thiêng liêng'], nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0125', soCau: 125, chuong: 7, tuaChuong: 'Cầu Nguyện', vanBan: "«Đâu có hai, ba người họp lại nhân danh Ta, thì có Ta ở giữa họ» (Mt 18,20).", loaiCau: 'declarative', chuDeLinhDao: ['cầu nguyện chung', 'hiện diện'], thamChieuKinhThanh: 'Mt 18:20', nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0130', soCau: 130, chuong: 7, tuaChuong: 'Cầu Nguyện', vanBan: "Chúa dạy đọc kinh để giúp con cầu nguyện, nhưng việc chính là gặp gỡ, nói chuyện giữa Cha và con.", loaiCau: 'declarative', chuDeLinhDao: ['cầu nguyện', 'gặp gỡ'], thamChieuKinhThanh: 'Mt 6:6', nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0140', soCau: 140, chuong: 7, tuaChuong: 'Cầu Nguyện', vanBan: "Một người «thánh» mà không cầu nguyện là thánh giả. Con đợi xem, họ sẽ sụp đổ không mấy hồi.", loaiCau: 'declarative', chuDeLinhDao: ['cầu nguyện', 'nền tảng'], thamChieuKinhThanh: 'Lc 22:40.46', nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 8: Hy Sinh (161-180)
    { id: 'DHV_0161', soCau: 161, chuong: 8, tuaChuong: 'Hy Sinh', vanBan: "Hy sinh là ngôn ngữ của tình yêu. Yêu mà không hy sinh là yêu giả.", loaiCau: 'declarative', chuDeLinhDao: ['hy sinh', 'tình yêu'], nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0170', soCau: 170, chuong: 8, tuaChuong: 'Hy Sinh', vanBan: "Không có thánh giá nào mà không đẫm máu. Không có hy sinh nào mà không đau đớn.", loaiCau: 'declarative', chuDeLinhDao: ['thánh giá', 'đau khổ'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 9: Quả Tim (181-200)
    { id: 'DHV_0181', soCau: 181, chuong: 9, tuaChuong: 'Quả Tim', vanBan: "Con tim biết yêu là con tim biết khổ. Nhưng con tim biết khổ vì yêu là con tim hạnh phúc.", loaiCau: 'declarative', chuDeLinhDao: ['yêu thương', 'đau khổ'], nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0190', soCau: 190, chuong: 9, tuaChuong: 'Quả Tim', vanBan: "Quả tim của Chúa là mẫu gương. Hãy học nơi Chúa vì Ngài hiền lành và khiêm nhượng.", loaiCau: 'imperative', chuDeLinhDao: ['Thánh Tâm', 'noi gương'], thamChieuKinhThanh: 'Mt 11:29', nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 10: Chí Khí (201-220)
    { id: 'DHV_0201', soCau: 201, chuong: 10, tuaChuong: 'Chí Khí', vanBan: "Chí khí là sức mạnh của linh hồn, là can đảm dám làm điều phải làm.", loaiCau: 'declarative', chuDeLinhDao: ['can đảm', 'nghị lực'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 11: Chúa Hiện Diện (221-260)
    { id: 'DHV_0221', soCau: 221, chuong: 11, tuaChuong: 'Chúa Hiện Diện', vanBan: "Chúa hiện diện trong mọi nơi, mọi lúc. Con có nhận ra Chúa không?", loaiCau: 'rhetorical-question', chuDeLinhDao: ['hiện diện', 'ý thức'], nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0230', soCau: 230, chuong: 11, tuaChuong: 'Chúa Hiện Diện', vanBan: "Sống với Chúa liên lỉ. Nhìn Chúa trong mọi người, mọi việc, mọi nơi.", loaiCau: 'imperative', chuDeLinhDao: ['hiện diện', 'ý thức'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 12: Hội Thánh (261-300)
    { id: 'DHV_0261', soCau: 261, chuong: 12, tuaChuong: 'Hội Thánh', vanBan: "Yêu Hội Thánh là yêu Chúa Kitô. Hội Thánh là Thân Thể Chúa Kitô.", loaiCau: 'declarative', chuDeLinhDao: ['Giáo Hội', 'thân thể'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 13: Đức Tin (301-340)
    { id: 'DHV_0301', soCau: 301, chuong: 13, tuaChuong: 'Đức Tin', vanBan: "Đức tin không phải là cảm xúc. Đức tin là quyết định tin vào Chúa dù không thấy.", loaiCau: 'declarative', chuDeLinhDao: ['đức tin', 'phó thác'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 14: Tông Đồ (341-380)
    { id: 'DHV_0341', soCau: 341, chuong: 14, tuaChuong: 'Tông Đồ', vanBan: "Tông đồ là người mang Chúa đến cho người khác. Con có mang Chúa hay mang mình?", loaiCau: 'rhetorical-question', chuDeLinhDao: ['tông đồ', 'truyền giáo'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 15: Thánh Lễ (381-420)
    { id: 'DHV_0381', soCau: 381, chuong: 15, tuaChuong: 'Thánh Lễ', vanBan: "Thánh Lễ là trung tâm của đời sống Kitô hữu. Không có Thánh Lễ, không có Hội Thánh.", loaiCau: 'declarative', chuDeLinhDao: ['Thánh Lễ', 'Thánh Thể'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 16: Vâng Phục (421-460)
    { id: 'DHV_0421', soCau: 421, chuong: 16, tuaChuong: 'Vâng Phục', vanBan: "Vâng phục là yêu mến ý Chúa hơn ý mình.", loaiCau: 'declarative', chuDeLinhDao: ['vâng phục', 'ý Chúa'], thamChieuKinhThanh: 'Pl 2:8', nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 17: Thanh Bần (461-500)
    { id: 'DHV_0461', soCau: 461, chuong: 17, tuaChuong: 'Thanh Bần', vanBan: "Thanh bần là tự do. Càng ít của cải, càng ít lo lắng, càng nhiều bình an.", loaiCau: 'declarative', chuDeLinhDao: ['thanh bần', 'tự do'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 18: Trong Trắng (501-540)
    { id: 'DHV_0501', soCau: 501, chuong: 18, tuaChuong: 'Trong Trắng', vanBan: "Trong trắng là giữ gìn con tim cho Chúa.", loaiCau: 'declarative', chuDeLinhDao: ['trong trắng', 'tinh tuyền'], thamChieuKinhThanh: 'Mt 5:8', nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 19: Gia Đình (541-580)
    { id: 'DHV_0541', soCau: 541, chuong: 19, tuaChuong: 'Gia Đình', vanBan: "Gia đình là Hội Thánh nhỏ, là nơi đầu tiên con học yêu thương.", loaiCau: 'declarative', chuDeLinhDao: ['gia đình', 'giáo hội tại gia'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 20: Khiêm Nhượng (581-620)
    { id: 'DHV_0581', soCau: 581, chuong: 20, tuaChuong: 'Khiêm Nhượng', vanBan: "Khiêm nhượng là nhận biết sự thật về mình: tất cả là ân sủng của Chúa.", loaiCau: 'declarative', chuDeLinhDao: ['khiêm nhượng', 'ân sủng'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 21: Cẩn Mật (621-660)
    { id: 'DHV_0621', soCau: 621, chuong: 21, tuaChuong: 'Cẩn Mật', vanBan: "Cẩn mật là khôn ngoan. Nói ít, làm nhiều. Lời nói bay đi, việc làm ở lại.", loaiCau: 'declarative', chuDeLinhDao: ['cẩn mật', 'khôn ngoan'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 22: Vui Tươi (661-700)
    { id: 'DHV_0661', soCau: 661, chuong: 22, tuaChuong: 'Vui Tươi', vanBan: "Một vị thánh buồn là một vị thánh đáng buồn.", loaiCau: 'declarative', chuDeLinhDao: ['vui tươi', 'niềm vui'], nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0670', soCau: 670, chuong: 22, tuaChuong: 'Vui Tươi', vanBan: "Niềm vui của Kitô hữu là niềm vui Phục Sinh, niềm vui chiến thắng.", loaiCau: 'declarative', chuDeLinhDao: ['niềm vui', 'Phục Sinh'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 23: Khôn Ngoan (701-740)
    { id: 'DHV_0701', soCau: 701, chuong: 23, tuaChuong: 'Khôn Ngoan', vanBan: "Khôn ngoan của Chúa khác khôn ngoan của thế gian. Thập giá là khôn ngoan của Thiên Chúa.", loaiCau: 'declarative', chuDeLinhDao: ['khôn ngoan', 'thập giá'], thamChieuKinhThanh: '1Cr 1:23-24', nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 24: Học (741-760)
    { id: 'DHV_0741', soCau: 741, chuong: 24, tuaChuong: 'Học', vanBan: "Học gì cũng tốt, miễn là học để phục vụ, không phải để khoe khoang.", loaiCau: 'declarative', chuDeLinhDao: ['học hỏi', 'phục vụ'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 25: Phát Triển (761-780)
    { id: 'DHV_0761', soCau: 761, chuong: 25, tuaChuong: 'Phát Triển', vanBan: "Phát triển là tiến lên mỗi ngày. Hôm nay tốt hơn hôm qua, ngày mai tốt hơn hôm nay.", loaiCau: 'declarative', chuDeLinhDao: ['phát triển', 'tiến bộ'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 26: Dấn Thân (781-800)
    { id: 'DHV_0781', soCau: 781, chuong: 26, tuaChuong: 'Dấn Thân', vanBan: "Dấn thân là dám làm, dám chịu, dám hy sinh vì lý tưởng.", loaiCau: 'declarative', chuDeLinhDao: ['dấn thân', 'can đảm'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 27: Canh Tân (801-820)
    { id: 'DHV_0801', soCau: 801, chuong: 27, tuaChuong: 'Canh Tân', vanBan: "Canh tân là đổi mới từ bên trong. Đổi mới tâm hồn trước, rồi mới đổi mới xã hội.", loaiCau: 'declarative', chuDeLinhDao: ['canh tân', 'đổi mới'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 28: Cuộc Sống Mới (821-840)
    { id: 'DHV_0821', soCau: 821, chuong: 28, tuaChuong: 'Cuộc Sống Mới', vanBan: "Cuộc sống mới bắt đầu khi con gặp Chúa Kitô. Ngài làm mọi sự nên mới.", loaiCau: 'declarative', chuDeLinhDao: ['cuộc sống mới', 'tái sinh'], thamChieuKinhThanh: 'Kh 21:5', nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 29: Gian Khổ (841-860)
    { id: 'DHV_0841', soCau: 841, chuong: 29, tuaChuong: 'Gian Khổ', vanBan: "Gian khổ là thánh giá Chúa trao. Đón nhận với tình yêu, nó trở thành ân sủng.", loaiCau: 'declarative', chuDeLinhDao: ['đau khổ', 'thánh giá'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 30: Đứa Con Hạnh Phúc (861-880)
    { id: 'DHV_0861', soCau: 861, chuong: 30, tuaChuong: 'Đứa Con Hạnh Phúc', vanBan: "Hạnh phúc thật là được làm con Thiên Chúa. Đó là ân huệ lớn nhất.", loaiCau: 'declarative', chuDeLinhDao: ['hạnh phúc', 'làm con Chúa'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 31: Bác Ái (881-900)
    { id: 'DHV_0881', soCau: 881, chuong: 31, tuaChuong: 'Bác Ái', vanBan: "Yêu thương là cho đi mà không tính toán, không mong đền đáp.", loaiCau: 'declarative', chuDeLinhDao: ['bác ái', 'yêu thương'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 32: Việc Tầm Thường (901-920)
    { id: 'DHV_0901', soCau: 901, chuong: 32, tuaChuong: 'Việc Tầm Thường', vanBan: "Việc tầm thường làm với tình yêu phi thường, đó là con đường nên thánh.", loaiCau: 'declarative', chuDeLinhDao: ['đời thường', 'nên thánh'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 33: Lãnh Đạo (921-930)
    { id: 'DHV_0921', soCau: 921, chuong: 33, tuaChuong: 'Lãnh Đạo', vanBan: "Lãnh đạo là phục vụ. Ai muốn làm lớn, hãy làm đầy tớ mọi người.", loaiCau: 'declarative', chuDeLinhDao: ['lãnh đạo', 'phục vụ'], thamChieuKinhThanh: 'Mc 10:43-44', nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 34: Kiểm Điểm (931-940)
    { id: 'DHV_0931', soCau: 931, chuong: 34, tuaChuong: 'Kiểm Điểm', vanBan: "Mỗi ngày hãy kiểm điểm: hôm nay con đã yêu Chúa và yêu người bao nhiêu?", loaiCau: 'imperative', chuDeLinhDao: ['xét mình', 'hối cải'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 35: Đức Mẹ Maria (941-948)
    { id: 'DHV_0941', soCau: 941, chuong: 35, tuaChuong: 'Đức Mẹ Maria', vanBan: "Mẹ Maria là Mẹ Hy Vọng. Qua Mẹ, con đến với Chúa Giêsu.", loaiCau: 'declarative', chuDeLinhDao: ['Đức Mẹ', 'tôn kính'], nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0945', soCau: 945, chuong: 35, tuaChuong: 'Đức Mẹ Maria', vanBan: "Xin Mẹ dạy con cầu nguyện, dạy con yêu mến như Mẹ.", loaiCau: 'imperative', chuDeLinhDao: ['Đức Mẹ', 'noi gương'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 36: Hy Vọng (949-978)
    { id: 'DHV_0949', soCau: 949, chuong: 36, tuaChuong: 'Hy Vọng: Niềm Hy Vọng', vanBan: "Hy vọng không phải là mơ mộng hão huyền. Hy vọng là xác tín vào tình yêu Thiên Chúa.", loaiCau: 'declarative', chuDeLinhDao: ['hy vọng', 'tin tưởng'], nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0960', soCau: 960, chuong: 36, tuaChuong: 'Hy Vọng: Niềm Hy Vọng', vanBan: "Thiên Chúa là Thiên Chúa của hy vọng. Ngài không bao giờ bỏ rơi những ai tin cậy Ngài.", loaiCau: 'declarative', chuDeLinhDao: ['hy vọng', 'phó thác'], nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_0978', soCau: 978, chuong: 36, tuaChuong: 'Hy Vọng: Niềm Hy Vọng', vanBan: "Chấm này nối tiếp chấm kia, ngàn vạn chấm thành một đường dài. Phút này nối tiếp phút kia, muôn triệu phút thành một đời sống. Chấm mỗi chấm cho đúng, đường sẽ đẹp. Sống mỗi phút cho tốt, đời sẽ thánh.", loaiCau: 'imperative', chuDeLinhDao: ['hy vọng', 'hiện tại', 'nên thánh'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 37: Sống Hy Vọng (979-1001)
    { id: 'DHV_0979', soCau: 979, chuong: 37, tuaChuong: 'Hy Vọng: Sống Hy Vọng', vanBan: "Đường hy vọng do từng chấm hy vọng nối lại. Đời hy vọng do từng phút hy vọng làm nên.", loaiCau: 'declarative', chuDeLinhDao: ['hy vọng', 'hiện tại'], nguon: 'https://giesu.net/duong-hy-vong/' },
    { id: 'DHV_1001', soCau: 1001, chuong: 37, tuaChuong: 'Hy Vọng: Sống Hy Vọng', vanBan: "Con hãy sống hy vọng! Vì Chúa là Thiên Chúa của hy vọng, và Ngài không bao giờ bỏ rơi con.", loaiCau: 'imperative', chuDeLinhDao: ['hy vọng', 'phó thác'], nguon: 'https://giesu.net/duong-hy-vong/' },

    // Chapter 38: Con Có Một Tổ Quốc
    { id: 'DHV_1002', soCau: 1002, chuong: 38, tuaChuong: 'Con Có Một Tổ Quốc', vanBan: "Con có một Tổ Quốc: Việt Nam. Con hãy yêu mến quê hương và phục vụ đồng bào.", loaiCau: 'imperative', chuDeLinhDao: ['tổ quốc', 'yêu nước'], nguon: 'https://giesu.net/duong-hy-vong/' }
];

// Book metadata
export const bookMetadata = {
    title: 'Đường Hy Vọng',
    subtitle: '1001 Câu Suy Niệm dưới ánh sáng Lời Chúa và Công Đồng',
    author: 'Đức Hồng y Phanxicô Xaviê Nguyễn Văn Thuận',
    originalYear: 1975,
    publishedYear: 1990,
    totalMeditations: 1001,
    totalChapters: 38,
    description: 'Cuốn sách nhỏ này không phải là một sách lý thuyết thần học, một phương pháp linh hướng cao siêu. Đây chỉ là những suy tư trước cuộc sống xô bồ, chỉ là những kinh nghiệm sống của tác giả về mọi phương diện, được góp nhặt để chúng ta cùng suy tư và thực hiện.',
    purpose: 'Tác giả muốn đào tạo chúng ta thành những "cây nến cháy sáng" để làm cho thế gian được chiếu sáng và sưởi ấm, nghĩa là làm một "Tông Đồ vào đời."',
    keyThemes: [
        'Ra đi - Bỏ mình',
        'Bổn phận - Vác thánh giá mình mỗi ngày',
        'Bền chí - Theo Thầy'
    ],
    sources: [
        'Kinh Thánh (Cựu Ước và Tân Ước)',
        'Các Văn Kiện Công Đồng Vatican II'
    ]
};
