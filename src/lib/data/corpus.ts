export interface CorpusEntry {
    stt: number;
    noi_dung: string;
    chuong: number;
    loi_chua?: string[];
    tham_chieu?: string[];
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
    {
        stt: 1,
        noi_dung: "Chúa đặt con trên đường, để con ra đi và thu được nhiều hoa trái (Ga 15,16). Đư ờng ấy là đường hy vọng, vì chan chứa hy vọng, vì đẹp như hy vọng. Sao không hy vọng khi con đi với Chúa Giêsu, khi con về cùng Chúa Cha? và cắt cử anh em để anh em ra đi, sinh được hoa trái, và hoa trái của anh em tồn tại, hầu tất cả những gì anh em xin c ùng Chúa Cha nh ân danh Th ầy, thì Người ban cho anh em. loại và đôi khi tỏ ra như một đoàn chiên nhỏ, nhưng lại là một mầm mống của hiệp nhất, hy vọng và cứu rỗi vững chắc nhất cho toàn thể nhân loại. Dân tộc thiên sai ấy được Chúa Kitô thiết lập để thông dự vào sự sống, bác ái và chân lý, được Người sử dụng như khí cụ cứu rỗi cho mọi người, và được sai đi khắp thế giới như ánh sáng trần gian và muối đất (x. Mt 5,13-16).",
        chuong: 1,
        loi_chua: [
            "Ga 15,16a: Không phải anh em đã chọn Thầy, nhưng chính Thầy đã chọn anh em,",
            "GH 9b: Dân tộc thiên sai ấy (Giáo hội), tuy hiện nay chưa bao gồm toàn thể nhân",
        ],
        tham_chieu: [
            "GH 10a; MV 22d, 41a; TG 5b",
        ],
    },
    {
        stt: 2,
        noi_dung: "Bí quyết của đường hy vọng 1. Ra đi : bỏ mình 2. Bổn phận : vác thánh giá mình mỗi ngày",
        chuong: 1,
    },
    {
        stt: 3,
        noi_dung: "Bền chí : theo Thầy (Mt 16,24). mình, vác thập giá mình mà theo. chính con đường mà Chúa Kit ô đã đi là nghèo khó, v âng lời, phục vụ và tự hiến thân cho đến chết để rồi toàn thắng nhờ sự sống lại của Người. Chính các Tông đồ trong niềm hy vọng cũng đã bước đi trên đường lối đó… 3. Bỏ tất cả mà chưa bỏ mình thì con chưa bỏ gì cả, vì chính mình con sẽ dần dần quơ góp lại những gì con đã bỏ trước. mạng sống mình nữa, thì không thể làm môn đệ Ta được.",
        chuong: 1,
        loi_chua: [
            "Mt 16,24: Đ ức Giêsu nói với các môn đệ: Ai muốn theo Thầy, phải từ bỏ chính",
            "TG 5b: …Gi áo hội được Thánh Thần Chúa Kitô thúc đẩy cũng phải tiến bước trên",
            "Lc 14,26: Ai đến với Ta mà không dứt bỏ cha mẹ, vợ con, anh em, ch ị em, và cả",
        ],
        tham_chieu: [
            "Mt 10,38; Mc 8,34; Lc 9,23; 14,26-27",
            "GH 7e; MV 22c, 38a; DT 5d; TĐ  4b",
            "Mt 8,19-22; 10,37; Lc 9,59-60",
        ],
    },
    {
        stt: 4,
        noi_dung: "Abraham đã ra đi, vì hy v ọng đến đất hứa. Maisen đã ra đi, vì hy v ọng cứu dân Chúa khỏi nô lệ. Chúa Giêsu đã ra đi từ trời xuống đất, vì hy vọng cứu nhân loại. hưởng lời hứa được biết về ý định bất di b ất dịch của Người, nên Người đã dùng lời thề mà bảo đảm điều Người đã hứa. Như vậy, cả lời hứa lẫn lời thề đều bất di bất dịch, và khi thề hứa, Thiên Chúa không thể nói dối được. Do đó, chúng ta là những kẻ ẩn náu bên Thiên Chúa, chúng ta được mạnh mẽ khuyến khích nắm giữ niềm hy vọng dành cho chúng ta. điều là dưới sự dẫn dắt của Chúa Thánh Thần, Giáo hội tiếp tục công cuộc của chính Chúa Kitô, Đ ấng đã đến thế gian để làm chứng nhân cho chân lý, để cứu rỗi chứ không luận phạt, để phục vụ chứ không để được hầu hạ.",
        chuong: 1,
        loi_chua: [
            "Dt 6,17 -18: Vì Thi ên Ch úa mu ốn ch ứng minh r õ h ơn cho nh ững ng ười th ừa",
            "MV 3b: Kh ông bị một tham v ọng trần thế nào thúc đẩy, Giáo hội chỉ nhắm một",
        ],
        tham_chieu: [
            "Lc 4,18-19.43; Cv 7,34 tt; Rm 4,18-21; 8,15-17; 1Ga 4,9b.14",
            "GH 3a; MK 3-4; MV 45b; LM 22c; NK 4b",
        ],
    },
    {
        stt: 5,
        noi_dung: "Dù có ra khỏi nhà, đi phương xa vạn dặm mà cứ mang theo tất cả tật xấu, cả con người cũ, thì có khác gì ở nhà đâu?",
        chuong: 1,
    },
    {
        stt: 6,
        noi_dung: "Các th ánh l à nh ững ng ười điên vì Ch úa. Kh ôn ngoan th ế gian qu á kh ông l àm th ánh được. người, và cái yếu đuối của Thiên Chúa còn hơn cái mạnh mẽ của loài người. Song những gì th ế gian cho l à điên dại, thì Thi ên Chúa đã chọn để hạ nhục những kẻ khôn ngoan, và những gì thế gian cho là yếu kém, thì Thiên Chúa đã chọn để hạ nhục những kẻ hùng mạnh.",
        chuong: 1,
        loi_chua: [
            "1Cr 1,25.27: Vì c ái điên r ồ c ủa Thi ên Ch úa c òn h ơn c ái kh ôn ngoan c ủa lo ài",
        ],
        tham_chieu: [
            "Rm 1,22; 8,7",
        ],
    },
    {
        stt: 7,
        noi_dung: "Đ ã ra đi, phải bất chấp lưỡi thiên hạ đàm tiếu. Ba đạo sĩ ra đi, hy vọng gặp Chúa Cứu Thế, họ đã gặp; Phanxicô Xaviê ra đi, hy vọng cứu các linh hồn, ông đã gặp; Gôrétti ra đi, thoát chước cám dỗ, hy vọng gặp được Chúa, chịđã gặp.",
        chuong: 1,
    },
    {
        stt: 8,
        noi_dung: "Mất để được, chết để sống, từ để gặp. Ba đạo sĩ liều hiểm nguy, chế nhạo; Phanxicô liều xa cha mẹ, mất của cải, chức tước, thú vui; Gôrétti liều mạng sống. vì Thầy, thì sẽ tìm thấy được. ứng ơn Thiên triệu, vì th ế, chẳng những phải chết đi cho t ội lỗi (x. Rm 6,11), nhưng còn phải từ bỏ thế gian để sống cho một mình Thiên Chúa.",
        chuong: 1,
        loi_chua: [
            "Mt 10,39: Ai giữ lấy mạng sống mình, thì sẽ mất; còn ai liều mất mạng sống mình",
            "DT 5a: … Chính nh ờ khấn giữ các lời khuyên Phúc âm mà mình (tu s ĩ) đã đáp",
        ],
        tham_chieu: [
            "Mt 16,25; Mc 8,34t; Lc 9,24; 17,33; Ga 12,25; Rm 6,11",
            "GH 7b; PV 6a; TG 14b; HN 22a",
        ],
    },
    {
        stt: 9,
        noi_dung: "Tiến lên trên đường hy vọng, bất chấp những van nài, tan n át lòng của tình thân thuộc cố tri, như Phaolô: Xiềng xích với gian nan đang chờ tôi (Cv 20,23), như Chúa Giêsu: Này Thầy lên Giêrusalem để chịu nạn (Mt 20,18).",
        chuong: 1,
    },
    {
        stt: 10,
        noi_dung: "Giàu hay nghèo, Khen hay chê, Sang hay hèn, Không sao cả, chấp nhận tiến lên trên đường hy vọng hồng phúc và đợi ngày trở lại của Chúa Giêsu Kitô, Đ ấng Cứu chuộc chúng ta.",
        chuong: 1,
    },
    {
        stt: 11,
        noi_dung: "Ta là sự thật (Ga 14,6). Không phải báo chí là sự thật, không phải đài phát thanh là sự thật, không phải ti-vi là sự thật. Con theo loại sự thật nào? đến với ai? Thầy mới có những lời đem lại sự sống đời đời. có nhiệm vụ chính thức loan b áo và truyền dạy Chân lý là Chúa Kitô… (C ác Kitô hữu) phải cố gắng toả ánh sáng sự sống với tất cả lòng tin t ưởng vững chắc và lòng can đảm của người tông đồ, cho d ù phải đổ máu. Bởi thế, mỗi môn đệ đều c ó bổn phận quan tr ọng đối v ới Chúa Kitô, Thầy chí th ánh của mình, là phải luôn luôn tìm cách thấu hiểu chân lý mà Người đã trao ban, phải trung thành loan truyền và can đảm bảo vệ…",
        chuong: 1,
        loi_chua: [
            "Ga 6,68: Ông Si-môn Phê-rô nói: ??? Thưa Thầy, bỏ Thầy thì ch úng con bi ết",
            "TD 14c: … Theo ý định của Chúa Kitô, Giáo hội Công giáo là thầy dạy chân lý và",
        ],
        tham_chieu: [
            "Lc 9,51",
            "GH 36a, 67; MK 2; MV 3b; TD 3b",
        ],
    },
    {
        stt: 12,
        noi_dung: "Đ i, đi mãi, đi quyết liệt, đi không nhượng bộ; không ai tin ng ười nhượng bộ cũng như không ai đi với người đi lùi. trong giây lát, để duy trì cho anh em ch ân lý của Tin Mừng. Còn về các vị có thế giá - lúc bấy giờ các vịấy có là gì đi nữa, điều đó không quan hệ đối với tôi: Thiên Chúa không thiên vị ai, c ác vị có thế giá ấy đã không đưa ra th êm điều gì cho tôi. dữ dù phải trải qua nhiều gian nan cũng như phải chết nữa.",
        chuong: 1,
        loi_chua: [
            "Gl 2,5-6: Nhưng với những người ấy, chúng tôi đã không chịu nhượng bộ, dù chỉ",
            "MV 22d: Người Kitô hữu chắc chắn cần thiết và có bổn phận chiến đấu chống sự",
        ],
        tham_chieu: [
            "Lc 9,51",
            "GH 38; MV 21e; LM 13d; TG 5b",
        ],
    },
    {
        stt: 13,
        noi_dung: "Không nhượng bộ cho xác thịt, Không nhượng bộ cho lười biếng, Không nhượng bộ cho ích kỷ… Con không thể gọi đen là trắng, xấu là tốt, gian là ngay được.",
        chuong: 1,
    },
    {
        stt: 14,
        noi_dung: "Ba phải? Đ i đường nào được? Chẳng lẽ có: Ba Chúa? Ba Hội Thánh? Ba luân lý? Ba lương tâm? Phải chi ng ươi l ạnh h ẳn hay n óng h ẳn đi! Nh ưng vì ng ươi h âm h ẩm chẳng nóng chẳng lạnh, nên Ta sắp mửa ngươi ra khỏi miệng Ta.",
        chuong: 1,
        loi_chua: [
            "Kh 3,15-16: Ta biết các việc ngươi làm: ngươi chẳng lạnh mà cũng chẳng nóng.",
        ],
        tham_chieu: [
            "Ep 4,4-5; Dt 13,8-9",
        ],
    },
    {
        stt: 15,
        noi_dung: "Không nhượng bộ, không phải là kiêu căng, tự ái hay ngoan c ố. Không nhượng bộ là yêu thương quyết liệt lý tưởng của mình.",
        chuong: 1,
    },
    {
        stt: 16,
        noi_dung: "Thà mất tiền của, chức tước, thà mất mạng sống để giữ lý tưởng, danh dự, đức tin, con chấp nhận. Nhưng không bao giờ con chấp nhận đổi ngược lại: lỗ lã quá! thiệt thòi. Hơn nữa, tôi coi tất cả mọi sự là thiệt thòi, so với mối lợi tuyệt vời, là được biết Đ ức Kitô Giêsu, Chúa của tôi. Vì Người, tôi đành mất hết, và tôi coi tất cả như rác, để được Đ ức Kitô. chuyên lo l àm đẹp lòng Thiên Chúa hơn làm đẹp lòng người ta. H ọ luôn sẵn sàng từ bỏ mọi sự vì Chúa Kitô (x. Lc 14,26), và chịu bách hại vì sự công chính (x. Mt 5,10) vì nhớ lời Chúa: Nếu ai muốn theo Ta, phải từ bỏ mình, vác thập giá mình mà theo Ta (Mt 16,24). Bổn phận là giấy vào Nước Trời",
        chuong: 1,
        loi_chua: [
            "Pl 3,7-8: Nhưng, những gì xưa kia tôi cho là có lợi, thì nay, vì Đ ức Kitô, tôi cho là",
            "TĐ  4b: B ắt ch ước Ch úa Kitô khiêm hạ, họ không háo danh (x. Gl 5,26) nh ưng",
            " ",
        ],
        tham_chieu: [
            "GH 42b; MV 38a; LM 12b; Đ T 10a; DT 5a",
        ],
    },
    {
        stt: 17,
        noi_dung: "Bổn phận là ý Chúa trong giây phút hiện tại. muốn của Đ ấng đã sai Thầy, và hoàn tất công trình của Người. những hoàn cảnh thường xuyên của cuộc sống mà vẫn không tách rời đời sống mình khỏi sự kết hiệp với Chúa Kitô, nhưng càng kết hiệp mật thiết hơn chính khi thi hành công việc của mình theo ý Thiên Chúa.",
        chuong: 2,
        loi_chua: [
            "Ga 4,34: Đ ức Gi êsu n ói v ới c ác m ôn đệ: Lương th ực c ủa Th ầy l à thi h ành ý",
            "TĐ  4a: Ng ười gi áo d ân ph ải l àm th ế n ào để chu to àn nhi ệm vụ tr ần thế trong",
        ],
        tham_chieu: [
            "Mt 7,21; Ga 5,30; 6,38; Pl 2,13; Dt 10,7.9; Gc 4,15",
            "GH 41g; MV 93; LM 14a, 15a; DT 14a",
        ],
    },
    {
        stt: 18,
        noi_dung: "Có người không vác thánh giá của mình hay c ủa người khác mà tưởng tượng thánh giá mình quá nặng. Có người vác thánh giá cả làng mà không vác thánh giá của mình. C ó người vác thánh giá cả làng và gán thánh giá của mình bắt kẻ khác vác. không buồn động ngón tay vào.",
        chuong: 2,
        loi_chua: [
            "Mt 23,4: Họ bó những gánh nặng mà chất lên vai người ta, nhưng chính họ thì lại",
        ],
        tham_chieu: [
            "Mt 16,24; Mc 8,34; Lc 9,23; 14,27; 1Tx 2,9",
        ],
    },
    {
        stt: 19,
        noi_dung: "Thánh ho á b ổn ph ận c ủa con. Th ánh ho á ng ười kh ác nh ờ b ổn ph ận con. Th ánh ho á chính mình con trong bổn phận. không phải chỉ nhờ đức tin mà thôi. cuộc sống, tất cả mọi Kitô hữu ngày càng được thánh thiện hơn, nếu họ biết tin tưởng lãnh nhận tất cả mọi sự từ tay Cha trên Trời và biết cộng tác với thánh ý Thiên Chúa bằng cách tỏ lộ cho m ọi người biết tình y êu của Thiên Chúa đối với thế giới trong chính việc họ phục vụ trần thế.",
        chuong: 2,
        loi_chua: [
            "Gc 2,24: Anh em thấy đó, nhờ hành động mà con người được nên công chính, chứ",
            "GH 41g: … Trong v à nhờ những trạng huống, ch ức nghiệp hay ho àn cảnh của",
        ],
        tham_chieu: [
            "Lc 7,10; 1Tx 4,3.10-12; 1Pr 1,15",
            "GH 31, 36ab, 39; TĐ  3,4; TG 15g",
        ],
    },
    {
        stt: 20,
        noi_dung: "Nếu ai cũng thánh hoá trong bổn phận thì tâm hồn mới, gia đình mới, thế giới mới. liên t ục l àm cho tr ật tự tr ần th êm t ốt đẹp. … Gi áo d ân ph ải đảm nh ận vi ệc canh tân trật tự trần thế như là nhiệm vụ riêng, và trong nhi ệm vụ đó, được hướng dẫn nhờ ánh sáng Phúc âm và theo tinh th ần của Giáo hội, với bác ái Kitô giáo thúc đẩy, họ phải trực tiếp và cương quyết hành động.",
        chuong: 2,
        loi_chua: [
            "TĐ  1ac: Ý định của Thiên Chúa về thế giới là loài người đồng tâm canh t ân và",
        ],
        tham_chieu: [
            "GH 36ab, 48d; MV 39b; TĐ  6b, 16bc",
        ],
    },
    {
        stt: 21,
        noi_dung: "Một vị thánh ngoài bổn phận là thánh ở xa xa, th ường hay l àm phép lạ sái nơi, sái giờ. Đ ến gần thì gây lộn xộn và hoang mang, khó sống.",
        chuong: 2,
    },
    {
        stt: 22,
        noi_dung: "Giáo dân nghĩ: thánh là sốt sắng kinh nguy ện, giảng giải, xa l ánh thế gian: h ọ hoá ra giáo sĩ, tu sĩ thời xưa. Tu sĩ nghĩ: thánh là dấn thân giúp việc xã hội, hoạt động chính trị, tranh đua với thế gian mà nhập thế. Loạn xà ngầu!",
        chuong: 2,
    },
    {
        stt: 23,
        noi_dung: "Thế giới không đổi mới, vì người ta quan niệm thánh thiện ngoài bổn phận.",
        chuong: 2,
    },
    {
        stt: 24,
        noi_dung: "Công nhân nên thánh ở xí nghiệp, bệnh nhân nên thánh ở bệnh viện, học sinh nên thánh ở học đường, nông phu nên thánh ở ruộng rẫy, lính nên thánh trong quân đội, linh mục nên thánh trong mục vụ. Mỗi bước tiến là một bước hy sinh trong bổn phận. đến sự trọn lành thánh thiện như Chúa Cha trọn lành, tùy theo con đường của mỗi người.",
        chuong: 2,
        loi_chua: [
            "GH 11c: Mọi Kitô hữu dù ở địa vị nào, bậc sống nào đều được Chúa kêu gọi đạt",
        ],
        tham_chieu: [
            "GH 39,40a, 41a, 42l; MV 43d",
        ],
    },
    {
        stt: 25,
        noi_dung: "Các thánh nên thánh không phải vì nói tiên tri hay làm phép lạ. Các Ngài đâu làm gì lạ! Họ chỉ chu toàn bổn phận.",
        chuong: 2,
    },
    {
        stt: 26,
        noi_dung: "Sống bổn phận hiện tại không phải là thụ động, nhưng: là liên lỉ canh tân, là quyết định chọn Chúa, là tìm Nước Chúa, là tin ở tình yêu vô bờ của Chúa, là hành động với tất cả hăng say, là thể hiện mến Chúa yêu người, ngay trong giây phút này. biếng nhác, đã ăn dưng ở rỗi còn thích xen vào chuyện người khác. Nhân danh Chúa Cứu Thế Giêsu, chúng tôi truyền bảo và kêu gọi họ phải yên lặng làm việc để mưu sinh. bước bằng con đường đức tin s ống động, đức tin kh ởi động đức cậy và hoạt động nhờ đức ái.",
        chuong: 2,
        loi_chua: [
            "2Tx 3,11-12: Tuy nhiên, chúng tôi nghe trong anh em c ó mấy người sống bê tha,",
            "GH 41a: M ỗi ng ười, t ùy theo ân s ủng v à nhi ệm v ụ mình, ph ải nh ất quy ết ti ến",
        ],
        tham_chieu: [
            "1Cr 16,14; Cl 3,23; 4,12b",
            "GH 41g; MV 21e, 43a; TG 25b",
        ],
    },
    {
        stt: 27,
        noi_dung: "Bổn phận là giấy vào Nước Trời: Ai thực hiện ý Cha trên trời, sẽ vào Nước Trời. Nước Trời cả đâu! Nhưng chỉ ai thi h ành ý muốn của Cha Th ầy là Đ ấng ngự trên trời, mới được vào mà thôi. với tha nhân và hơn nữa đối với chính Thiên Chúa, khiến phần rỗi đời đời của mình bịđe dọa. Theo gương Chúa Giêsu đã sống như một người thợ, các Kitô hữu hãy vui mừng vì có thể thi hành mọi sinh hoạt trần thế mà đồng thời có thể liên kết trong m ột tổng hợp sống động duy nh ất, c ác cố gắng nhân loại, gia đình, nghề nghiệp, khoa học hay kỹ thuật với các giá trị tôn giáo.",
        chuong: 2,
        loi_chua: [
            "Mt 7,21: Không phải bất cứ ai thưa với Thầy: Lạy Chúa! lạy Chúa! là được vào",
            "MV 43a: Đ ối với Kitô hữu, xao lãng bổn phận trần thế là xao lãng bổn phận đối",
        ],
        tham_chieu: [
            "1Ga 2,17",
            "GH 14b, 16, 40b; MV 39a",
        ],
    },
    {
        stt: 28,
        noi_dung: "Chấp nhận thánh ý Chúa, vâng theo th ánh ý Chúa, ưng muốn thánh ý Chúa, yêu mến thánh ý Chúa. Con tiến đến bậc nào rồi? như nô lệ của Đ ức Kitô, đem cả tâm hồn thi hành ý Thiên Chúa.",
        chuong: 2,
        loi_chua: [
            "Ep 6,6: Đ ừng chỉ vâng lời tr ước mặt, như muốn làm đẹp lòng người ta, nh ưng",
        ],
        tham_chieu: [
            "1Cr 16,14; Cl 3,23; 1Ga 5,3",
        ],
    },
    {
        stt: 29,
        noi_dung: "Nếu Chúa để con chịu sỉ nhục vì bổn phận, chính lúc ấy Chúa muốn con được vinh hiển vì Thánh giá Chúa.",
        chuong: 2,
    },
    {
        stt: 30,
        noi_dung: "Con hãy thưa: Lạy Chúa, bổn phận con là núi Calvariô và con là của lễ toàn thiêu.",
        chuong: 2,
    },
    {
        stt: 31,
        noi_dung: "Chỉ cần làm bổn phận trong gi ây phút hiện tại là nên thánh. Một khám phá, một mạc khải đem bình an và phấn khởi cho tâm hồn con. hãy đem ra thực hành, và Thiên Chúa là nguồn bình an sẽ ở với anh em.",
        chuong: 2,
        loi_chua: [
            "Pl 4,9: Những gì anh em đã học hỏi, đã lãnh nhận, đã nghe, đã thấy ở nơi tôi, thì",
        ],
        tham_chieu: [
            "Lc 17,9t; Dt 10,10",
        ],
    },
    {
        stt: 32,
        noi_dung: "Chính sự chết cũng là một bổn phận cuối cùng mà con l àm cách sẵn sàng và đầy yêu mến. không ai chết cho chính mình. Chúng ta có sống là sống cho Chúa, mà có chết cũng là chết cho Chúa. Vậy, dù sống, dù chết, chúng ta vẫn thuộc về Chúa.",
        chuong: 2,
        loi_chua: [
            "Rm 14,7 -8: Th ật v ậy, kh ông ai trong ch úng ta s ống cho chính mình, c ũng nh ư",
        ],
        tham_chieu: [
            "Lc 23,46; Cv 7,59-60; 1Pr 4,19; Kh 14,13",
        ],
    },
    {
        stt: 33,
        noi_dung: "Tiến lên trong bổn phận mỗi ngày, con sẽ thấy ách Ta êm ái, gánh Ta nhẹ nhàng (Mt 11,30)",
        chuong: 2,
    },
    {
        stt: 34,
        noi_dung: "Vì thương thuyết đòi điều kiện trong bổn phận, vì không theo ý Chúa, vì theo ý Chúa có giới hạn mà tâm hồn con khắc khoải, bất an. hậu và khiêm nhường. Tâm hồn anh em sẽ được nghỉ ngơi bồi dưỡng.",
        chuong: 2,
        loi_chua: [
            "Mt 11,29: Anh em hãy mang lấy ách của tôi, và hãy học với tôi, vì tôi có lòng hiền",
        ],
    },
    {
        stt: 35,
        noi_dung: "Không gắn bó với ý Chúa từng giây phút, con sẽ bỏ dở đường hy vọng, vì con cho b ổn phận bình lặng, vô danh và đồng điệu quá! vinh Thiên Chúa.",
        chuong: 2,
        loi_chua: [
            "1Cr 10,31: Dù ăn, dù uống, hay làm bất cứ việc gì, anh em h ãy làm tất cả để tôn",
        ],
        tham_chieu: [
            "Lc 9,23; 1Pr 4,2",
        ],
    },
    {
        stt: 36,
        noi_dung: "Vấn đề rất đơn giản: trước khi hành động con nghĩ: Chúa muốn con làm gì? Hãy thực hiện ý Chúa! nguyện và kêu xin Thiên Chúa cho anh em được am tường thánh ý Người, với tất cả sự khôn ngoan v à hiểu biết mà Thần Khí ban cho. Nh ư vậy, anh em s ẽ sống được như Chúa đòi hỏi, và làm đẹp lòng Người về mọi phương diện, sẽ sinh hoa trái là mọi thứ việc lành, và mỗi ngày một hiểu biết Thiên Chúa hơn. nhận ra Chúa trong mọi sự và mọi lúc, vì trong Ngài ta sống, ta hoạt động, ta hiện hữu (Cv 17,28). Tìm ý Chúa trong mọi biến cố, thấy Chúa Kitô trong mọi người, dù là người thân hay kẻ lạ, phê phán đúng đắn về ý nghĩa đích thực và giá trị c ủa sự v ật trần thế, x ét nơi chính n ó v à xét theo t ương quan v ới cứu cánh của con người.",
        chuong: 2,
        loi_chua: [
            "Cl 1,9 -10: T ừ ng ày chúng t ôi nghe bi ết…, ch úng t ôi c ũng kh ông ng ừng c ầu",
            "TĐ  4c: Chỉ nhờ ánh sáng đức tin và nhờ suy niệm Lời Chúa, mỗi người mới có thể",
        ],
        tham_chieu: [
            "Lc 1,38; Ep 5,17; Dt 10,7",
            "LM 14, 15a, 17a; TG 6b",
        ],
    },
    {
        stt: 37,
        noi_dung: "Chúa muốn mưa, con cũng muốn, Chúa muốn nắng, con cũng muốn, Chúa muốn sướng, con cũng muốn, Chúa muốn cực, con cũng muốn, Chúa muốn vui, con cũng muốn, Chúa muốn khổ, con cũng muốn, Chúa và con chỉ có một ý. Bí quyết hạnh phúc của con. Con. Nhưng xin đừng làm điều Con muốn, mà làm điều Cha muốn.",
        chuong: 2,
        loi_chua: [
            "Mc 14,36: Người nói: Áp-ba, Cha ơi, Cha làm được mọi sự, xin cất chén này xa",
        ],
        tham_chieu: [
            "Ga 5,30; 4,15",
        ],
    },
    {
        stt: 38,
        noi_dung: "Trong cuộc sống hằng ngày, Chúa ban cho ta h ạnh phúc tham d ự mầu nhiệm cứu rỗi. Đ ối với mỗi người, con đường thánh giá đi theo con đường bổn phận. nguyện hy sinh mọi sự và tự hiến chính bản thân cho các linh hồn, để như vậy họ gia t ăng tình y êu Thi ên Ch úa v à tha nh ân bằng vi ệc thi h ành nhiệm v ụ hằng ngày. Như thế, vâng theo th ánh ý Chúa Cha, họ sẽ cùng với Chúa Kitô tiếp tục sứ mệnh của Người dưới quyền phẩm trật trong Gi áo hội, và sẽ cộng tác vào mầu nhiệm cứu rỗi. Ai cũng khởi sự Chỉ thánh mới đi đến cùng",
        chuong: 2,
        loi_chua: [
            "TG 25b: Vì l òng nhiệt thành với các linh h ồn, họ (các nhà truyền giáo) phải tự",
            " ",
        ],
        tham_chieu: [
            "GH 7be, 31, 33d, 34b; LM 13c",
        ],
    },
    {
        stt: 39,
        noi_dung: "Bạo dạn không phải là phiêu lưu, bất khôn. Muốn đi cùng đường Hy vọng con phải bạo dạn. Có mấy người đứng bên Chúa dưới thánh giá? giá của hội đồng, và cũng là người vẫn mong đợi Triều Đ ại của Thiên Chúa. Ông đã mạnh dạn đến gặp tổng trấn Phi-la-tô để xin thi hài Đ ức Giêsu.",
        chuong: 3,
        loi_chua: [
            "Mc 15,43: Ông Giô-xếp tới. Ông là người thành A-ri-ma-thê, thành viên có thế",
        ],
        tham_chieu: [
            "2Cr 11,21-33",
        ],
    },
    {
        stt: 40,
        noi_dung: "Bạo dạn để thưa với Chúa tất cả những gì con mu ốn, con ngh ĩ: Cho đến nay c ác con không xin gì nh ân danh Ta, h ãy xin và các con s ẽ được… (Ga 16,24). B ạo dạn là tin yêu như con với cha.",
        chuong: 3,
    },
    {
        stt: 41,
        noi_dung: "Đ ừng nản lòng vì thất bại. Nếu con tìm ý Chúa thực sự, thì chính sự thất bại đó là thành công. Chúa muốn vậy. Xem gương Chúa Giêsu trên thánh giá. của Thi ên Ch úa: gian nan, kh ốn qu ẫn, lo âu, đòn v ọt, t ù t ội, lo ạn ly, nh ọc nhằn, vất vả, mất ăn mất ngủ, chúng tôi đều rất mực kiên trì chịu đựng. Chúng tôi còn chứng tỏ điều đó bằng cách ăn ở trong s ạch, khôn khéo, nhẫn nhục, nhân hậu, bằng một tinh thần thánh thiện, một tình thương không giả dối, bằng lời chân lý, bằng sức mạnh của Thiên Chúa. Chúng tôi lấy sự công chính làm vũ khí tấn công và tự vệ. thôi nhưng còn có thể thấu triệt thực tại siêu hình một cách thực sự chắc chắn, cho dù trí tuệ phần nào đã bị mờ tối và suy nhược do hậu quả của tội lỗi… Nhờ h ồng ân c ủa Ch úa Thánh Thần, con ng ười, qua đức tin, ti ến tới s ự chi êm ngưỡng và nếm hưởng mầu nhiệm thánh ý Thiên Chúa.",
        chuong: 3,
        loi_chua: [
            "2Cr 6,4-7: Trong m ọi sự, ch úng tôi luôn chứng tỏ mình l à những thừa tác viên",
            "MV 15ad: Trí khôn con người không hẳn chỉ giới hạn trong những hiện tượng mà",
        ],
        tham_chieu: [
            "Rm 8,28; 2Cr 4,16-18; Dt 12,1-3",
            "GH 3,41g; MV 35b",
        ],
    },
    {
        stt: 42,
        noi_dung: "Kết quả và thành công khác nhau. Có thể không kết quả bên ngoài, nhưng thêm kinh nghiệm, thêm khiêm tốn, thêm tin Chúa, đó là thành công dưới mắt siêu nhiên.",
        chuong: 3,
    },
    {
        stt: 43,
        noi_dung: "Chỉ có một sự thất bại là không hy v ọng vào Chúa: Họ đã hy v ọng vào Chúa và đã không phải hổ thẹn (Tv 22,6). trường c ửu thì ph ẩm gi á con ng ười s ẽ b ị t ổn th ương c ách tr ầm tr ọng nh ư thường thấy ngày nay, và những bí ẩn về sự sống, sự chết, về tội lỗi và đau khổ vẫn không giải đáp được, như thế con người nhiều khi rơi vào tuyệt vọng.",
        chuong: 3,
        loi_chua: [
            "MV 21c: N ếu thiếu căn bản là Thiên Chúa và thiếu niềm hy v ọng vào đời sống",
        ],
        tham_chieu: [
            "GH 16; MV 82d, 93a; TĐ  4e",
        ],
    },
    {
        stt: 44,
        noi_dung: "Đư ờng Hy v ọng dài thăm thẳm. Con đừng làm Thánh lâm thời: phong ba d ồn dập, nước sơn sẽ phai nhạt và tượng thánh sẽ hiện hình quỷ. tin. Hai ông n ói: Chúng ta ph ải ch ịu nhi ều gian kh ổ m ới được v ào N ước Thiên Chúa. sống sự thánh thiện mà họ đã lãnh nhận. Họ được thánh Tông đồ khuyên sống xứng đáng như những vị thánh (Ep 5,3) v à mặc lấy lòng thương xót, nhân hậu, khiêm nhượng, tiết độ và nhẫn nại như những người đã được Thiên Chúa chọn l ựa, th ánh ho á v à y êu th ương (Cl  3,12), v à d ùng hoa tr ái c ủa Thánh Thần để thánh hoá mình (x. Gl 5,22; Rm 6,22). Nh ưng vì ch úng ta ai c ũng có nhiều lầm lỗi (x. Gc 3,2), n ên chúng ta lu ôn cần đến lòng nhân từ của Thiên Chúa và hằng ngày phải cầu nguyện xin Chúa tha nợ chúng tôi (Mt 6,12).",
        chuong: 3,
        loi_chua: [
            "Cv 14,22: Hai ông củng cố tinh thần các môn đệ, và khuyên nhủ họ giữ vững đức",
            "GH 40a: Với ơn Chúa, họ (các tín hữu) phải luôn gìn giữ và hoàn thành trong đời",
        ],
        tham_chieu: [
            "Mt 24,13; Rm 2,7; Dt 10,36; Kh 2,10; 3,10-12",
            "GH 14a; MK 3; LM 13; TG 5b",
        ],
    },
    {
        stt: 45,
        noi_dung: "Nhân đức toả hương thơm chứ không náo động.",
        chuong: 3,
    },
    {
        stt: 46,
        noi_dung: "Thành tín tr ên đường con đi; Ph êrô kh ông n ộp Ch úa, kh ông c áo Ch úa, nh ưng Phêrô không được một lời bênh Chúa: Tôi không biết người ấy (Lc 22,57). Phêrô muốn yên thân, khỏi liên lụy: Phêrô bỏ Chúa dọc đường và tháo lui.",
        chuong: 3,
    },
    {
        stt: 47,
        noi_dung: "Con run sợ: vấp ngã, khó khăn, hiểu lầm, công kích, sỉ nhục, tử hình… Con qu ên Phúc âm sao? Chúa Giêsu đã chịu tất cả. Cứ theo Ngài con sẽ phục sinh. Đ ấng xuất thân từ dòng dõi Đ a-vít, như tôi vẫn nói trong Tin M ừng tôi loan báo. Vì Tin Mừng ấy, tôi chịu khổ, tôi còn phải mang cả xiềng xích như một tên gian phi. Nh ưng lời Thiên Chúa đâu bị xiềng xích! Đâ y l à lời đáng tin c ậy: Nếu ta cùng chết với Người, ta sẽ cùng sống với Người.",
        chuong: 3,
        loi_chua: [
            "2Tm 2,8-9.11: Anh h ãy nhớ đến Đ ức Giêsu Kitô, Đ ấng đã sống lại từ c õi chết,",
        ],
    },
    {
        stt: 48,
        noi_dung: "Mỗi sáng thức dậy, con kh ởi sự lại cuộc đời, hăng say v à lạc quan. D ù đường đi trục trặc, con cứ đi với Chúa, như về làng Emmau, con sẽ đến đích. của chúng tôi có tiêu tan đi, thì con ng ười bên trong của chúng tôi ngày càng đổi mới.",
        chuong: 3,
        loi_chua: [
            "2Cr 4,16: Cho n ên chúng tôi không chán nản. Trái lại, dù con ng ười bên ngoài",
        ],
    },
    {
        stt: 49,
        noi_dung: "Bền đỗ là đặc tính của các thánh, vì ai bền đỗ đến cùng sẽ được cứu rỗi (Mt 10,22). trường sinh bất tử, thì Thiên Chúa sẽ cho họ được sống đời đời.",
        chuong: 3,
        loi_chua: [
            "Rm 2,7: Nh ững ai b ền chí l àm vi ệc thiện mà tìm vinh quan g, danh d ự v à phúc",
        ],
        tham_chieu: [
            "Mt 24, 12-13; 2Tm 4,7-8",
        ],
    },
    {
        stt: 50,
        noi_dung: "Dù mọi người bỏ dở hành trình, con c ứ tiến. Quần chúng dễ bị lôi cuốn thì đông đảo, lãnh đạo sáng suốt lại hiếm hoi. Con phải có bản lãnh, đừng theo quần chúng mù quáng. đến với ai? Thầy mới có những lời đem lại sự sống đời đời.",
        chuong: 3,
        loi_chua: [
            "Ga 6,68: Ông Si-môn Phê-rô nói: ??? Thưa Thầy, bỏ Thầy thì ch úng con bi ết",
        ],
        tham_chieu: [
            "2Tm 4,3-5",
        ],
    },
    {
        stt: 51,
        noi_dung: "Giữ vững tinh th ần của con, m ặc dù cảm thấy rã rời, nguội lạnh. Mây mù sẽ qua đi, không che mãi được mặt trời. Chỉđợi mây bay qua thôi. nạn, bắt bớ, ngặt nghèo vì Đ ức Kitô. Vì khi tôi yếu, chính là lúc tôi mạnh.",
        chuong: 3,
        loi_chua: [
            "2Cr 12,10: Vì vậy, tôi cảm thấy vui sướng khi mình yếu đuối, khi bị sỉ nhục, hoạn",
        ],
    },
    {
        stt: 52,
        noi_dung: "Đ ừng nói mất hứng rồi. Con làm vì hứng sao? Việc Chúa đâu phải làm thơ. Hãy làm vì yêu mến và con biết không bao giờ mất yêu mến Chúa cả. thiện cho hết mọi người, nhất là cho những người có cùng một niềm tin (x. Gl 6,10), từ bỏ mọi gian ác, mọi lường gạt, giả trá, lòng ghen ghét và mọi lời nói hành (1Pr 2,1), và như vậy họ lôi kéo mọi người đến với Chúa Kitô. Hơn nữa tình yêu của Chúa giãi khắp lòng ta do Chúa Thánh Thần đã ban cho ta (Rm 5,5) làm cho giáo dân có sức biểu lộ thực sự trong đời sống mình tinh thần các mối phúc thật.",
        chuong: 3,
        loi_chua: [
            "TĐ  4b: Lòng yêu thương phát xuất từ Thiên Chúa thúc đẩy họ (giáo dân) làm việc",
        ],
        tham_chieu: [
            "MV 43a; LM 2e, 9b; DT 25; TĐ  3a, 4ac, 8a",
        ],
    },
    {
        stt: 53,
        noi_dung: "Người trộm lành đã hạnh phúc vì hy v ọng ở tình yêu Chúa, Giuđa đã khốn nạn vì thất vọng (x. Mt 27,5; Lc 23,42-43).",
        chuong: 3,
    },
    {
        stt: 54,
        noi_dung: "Trong giờ phút chán nản nhất, thất vọng nhất của Chúa Giêsu: Lạy Thiên Chúa tôi, sao Ngài bỏ tôi! (Mt 27,46), c ó Đ ức Mẹ đứng bên thánh giá. Mẹ thinh l ặng nhưng tình thương Mẹ đã nâng đỡ Con cho đến lúc nói: Đ ã hoàn tất (Ga 19,30). Ngài (Linh mục) có thể tận tâm tìm kiếm những dấu hiệu của thánh ý Chúa và những th úc đẩy c ủa ơn th ánh Ng ài trong nh ững bi ến c ố kh ác nhau c ủa đời sống, và như thế ngày càng trở nên dễ dàng vâng phục sứ mệnh đã nhận lãnh trong Chúa Thánh Thần hơn. Các Ngài luôn tìm thấy gương mẫu lạ lùng về sự vâng phục đó nơi Đ ức Trinh Nữ Maria, người được Chúa Thánh Thần dẫn dắt đã hiến toàn thân cho mầu nhiệm cứu chuộc loài người; các Linh mục phải lấy lòng con thảo thành kính tôn sùng và mến yêu Đ ức Trinh Nữ Maria là Mẹ của Linh mục Thượng phẩm vĩnh viễn, là Nữ Vương các Tông đồ và là Đ ấng bảo trợ thừa tác vụ Linh mục.",
        chuong: 3,
        loi_chua: [
            "LM 18b: Dưới ánh sáng đức tin được nuôi dưỡng bằng việc đọc Sách thánh, các",
        ],
        tham_chieu: [
            "GH 68; DT 25",
        ],
    },
    {
        stt: 55,
        noi_dung: "Con trai bà goá thành Naim chết được khiêng đi chôn, Lagiarô chết thối trong mồ, Chúa còn gọi chỗi dậy được. Con hãy hy vọng và khiêm tốn hối cải. Chúa sẽ cho con sống lại. vào Thầy, thì dù đã chết, cũng sẽ được sống. Ai sống và tin vào Thầy, sẽ không bao giờ phải chết. Chị có tin thế không?",
        chuong: 3,
        loi_chua: [
            "Ga 11,25-26: Đ ức Giêsu phán: Chính Thầy là sự sống lại và là sự sống. Ai tin",
        ],
        tham_chieu: [
            "Lc 7,12tt",
        ],
    },
    {
        stt: 56,
        noi_dung: "Mỗi ngày con phải bớt tự ái mà thêm bác ái. Mỗi ngày hãy bớt tự tín mà thêm tin Chúa.",
        chuong: 3,
    },
    {
        stt: 57,
        noi_dung: "Nếu con không quyết tâm bền chí, đừng nói tôi hiền, phải nói tôi hèn.",
        chuong: 3,
    },
    {
        stt: 58,
        noi_dung: "Con cứ than thở: Tôi mà được ở chỗ này, được cộng tác với người kia, được nắm chức vụ nọ, chắc tôi thành công rực rỡ. Làm việc Chúa giao cho, con ở nơi Chúa đặt con, con sẽ đi thẳng! Chạy lăng xăng không đến đích đâu! phận không có cùng một chức năng, thì ch úng ta c ũng vậy: tuy nhi ều nhưng chỉ là một thân thể trong Đ ức Kitô, mỗi người liên đới với những người khác như những bộ phận của một thân thể.",
        chuong: 3,
        loi_chua: [
            "Rm 12,4-5: Cũng như trong một thân thể, chúng ta có nhiều bộ phận, mà các bộ",
        ],
    },
    {
        stt: 59,
        noi_dung: "Trong tâm hồn con, có hai người: Gioan và Giuđa. bao lâu con còn bền chí phấn đấu, là dấu con theo Gioan trung th ành; giờ phút nào con h èn nhát đầu hàng, con ch ọn Giuđa làm quan thầy và thắp hương tôn thờ quan thầy phản bội ấy.",
        chuong: 3,
    },
    {
        stt: 60,
        noi_dung: "Con bảo: Khó!. Đúng vậy! Thương khó, bỏ dễ. Khó mới qúy, bỏ là quỷ. 4. TIẾNG GỌI Đ ộng viên toàn lực theo tiếng Chúa",
        chuong: 3,
        loi_chua: [
            " ",
        ],
    },
    {
        stt: 61,
        noi_dung: "Hãy theo Ta (Mt 9,9)! C ác Tông đồ đã bỏ mọi sự theo Ch úa, con c ó dứt khoát một phen theo Chúa không? Chúa phải gọi con mấy lần rồi? họ.",
        chuong: 3,
        loi_chua: [
            "Mt 8,22: Đ ức Giêsu bảo: Anh hãy đi theo t ôi, cứ để kẻ chết chôn kẻ chết của",
        ],
        tham_chieu: [
            "Mt 9,9; Mc 3,13",
        ],
    },
    {
        stt: 62,
        noi_dung: "Chọn lựa bao giờ cũng tiếc nuối, do dự, suy nghĩ, nhưng cuối cùng phải quyết định dứt khoát. anh ta: Anh ch ỉ thi ếu c ó một điều, l à h ãy đi b án nh ững gì anh c ó m à cho người nghèo, anh sẽ được một kho tàng trên trời. Rồi hãy đến theo tôi. Nghe lời đó, anh ta sa sầm nét mặt và buồn rầu bỏ đi, vì anh ta có nhiều của cải.",
        chuong: 3,
        loi_chua: [
            "Mc 10,21-22: Đ ức Giêsu đưa mắt nhìn anh ta v à đem lòng yêu mến. Người bảo",
        ],
        tham_chieu: [
            "Mc 4,22",
        ],
    },
    {
        stt: 63,
        noi_dung: "Chúa Giêsu rõ ràng quyết liệt: Ai muốn theo Ta, h ãy… (Mt 16,24) – Ai kh ông… chẳng đáng làm môn đệ Ta (Mt 10,38). Đư ờng lối sáng tỏ, tiếng gọi không úp mở. phân tán. nên tất cả các hội dòng phải coi tiêu chuẩn ấy như là quy luật tối thượng.",
        chuong: 3,
        loi_chua: [
            "Mt 12,30: Ai kh ông đi với tôi, là chống lại tôi; và ai kh ông cùng tôi thu g óp, là",
            "DT 2b: Theo Ch úa Kitô như Phúc âm dạy là tiêu chuẩn tối hậu của đời tu dòng,",
        ],
        tham_chieu: [
            "LM 11a; DT 5; TĐ  4g; TG 23A, 24a",
        ],
    },
    {
        stt: 64,
        noi_dung: "Hãy đi rao gi ảng Phúc Âm… (Mc 16,15), Ch úa cần những người cảm tử để đảm nhận một sứ mạng cao c ả như thế. Hai ng àn năm lịch sử Hội Thánh cho ta th ấy, giai đoạn nào cũng không thiếu cảm tử, từ mọi tầng lớp giáo dân. tim tôi? Phần tôi, tôi sẵn sàng không những để cho người ta trói, mà còn chịu chết tại Giê-ru-sa-lem vì danh Chúa Giêsu. đáp ứng hành động của Chúa Quan Ph òng: chính Ng ười ban những ơn thích hợp cho những ai được Người tuyển chọn để tham dự chức Linh mục phẩm trật của Ch úa Kit ô v à Ng ười gi úp đỡ h ọ b ằng ân sủng Ng ười, đồng thời c òn ủy nhiệm cho các thừa tác viên hợp pháp của Giáo hội quyền được gọi những ứng sinh mà các Ngài nhận thấy có đủ khả năng, đã được thử thách, có ý ngay lành và hoàn toàn tự do xin thi h ành chức vụ cao cả này; các Ngài còn được quyền thánh hiến họ bằng ấn tích Chúa Thánh Thần để họ phụng thờ Thiên Chúa và phục vụ Giáo hội.",
        chuong: 3,
        loi_chua: [
            "Cv 21,13: Ông Phao-lô nói: ??? Có gì mà anh em phải khóc và làm tan nát trái",
            "Đ T 2c: Vi ệc toàn dân Thiên Chúa hăng say hi ệp lực cổ võ các ơn thiên triệu sẽ",
        ],
        tham_chieu: [
            "Cv 15,25-26; Ep 6,14-17; Pl 1,20-21",
            "LM 22c; TĐ  17a; TG 4,7b, 23a, 24a, 25, 38cd",
        ],
    },
    {
        stt: 65,
        noi_dung: "Có những người suốt đời chỉ nhờ thiên hạ quyết định giùm. Con có thuộc vào hạng đó không? phụ n ữ: Không c òn ph ải vì l ời ch ị k ể m à ch úng t ôi tin. Qu ả th ật, chính chúng tôi đã nghe và biết rằng Người thật là Đ ấng cứu độ trần gian.",
        chuong: 3,
        loi_chua: [
            "Ga 4,41-42: Số người tin vì l ời Đ ức Giêsu nói còn đông hơn nữa. Họ bảo người",
        ],
    },
    {
        stt: 66,
        noi_dung: "Con muốn tháo lui vì có những việc trái ý, vì gặp những người không thể chịu nổi! Con theo Chúa hay theo mấy người ấy?",
        chuong: 3,
    },
    {
        stt: 67,
        noi_dung: "Con ngạc nhiên sao đủ hạng người tình nguyện làm cảm tử theo tiếng gọi của Chúa? Vì Chúa đã nói: Thầy ở cùng chúng con mọi ngày cho đến tận thế (Mt 28,20). nói đi, đừng làm thinh, vì Th ầy ở với anh; kh ông ai tra tay h ại anh được, vì Thầy có một dân đông đảo trong th ành này. Ông Phao-lô ở lại đó một năm rưỡi, dạy cho họ lời Thiên Chúa.",
        chuong: 3,
        loi_chua: [
            "Cv 18,9-11: Một đêm, Chúa bảo ông Phao-lô trong m ột thị kiến: Đ ừng sợ! Cứ",
        ],
    },
    {
        stt: 68,
        noi_dung: "Người ngo ài, kh ông hiểu được t ại sao ta theo ti ếng gọi c ủa Ch úa, h ọ cho ta l à điên. Chính Chúa Giêsu cũng bị Hêrôđê gọi là điên, và chúng ta hãnh diện được ở trong nhà thương Biên Hoà của Chúa. môn đệ không sao ăn uống được. Thân nhân của Người hay tin ấy, liền đi bắt Người, vì họ nói rằng Người đã mất trí.",
        chuong: 3,
        loi_chua: [
            "Mc 3,20-21: Người trở về nhà và đám đông lại kéo đến, thành thử Người và các",
        ],
        tham_chieu: [
            "Lc 23,11",
        ],
    },
    {
        stt: 69,
        noi_dung: "Quyết định theo Ch úa c ủa con kh ông phải ch ỉ là m ột ch ữ k ý, kh ông ph ải l à m ột l ời tuyên thệ thôi. Nhưng là một sự hiến dâng liên lỉ thực hiện trong cả cuộc sống.",
        chuong: 3,
    },
    {
        stt: 70,
        noi_dung: "Này chúng con đã bỏ mọi sự mà theo Thầy, chúng con sẽ được gì? (Mt 19,27). Con bỏ tất cả nhưng theo Chúa Quan Phòng, con còn lo gì? danh Thầy, thì sẽ được gấp bội và còn được sự sống vĩnh cửu làm gia nghiệp.",
        chuong: 3,
        loi_chua: [
            "Mt 19,29: Phàm ai bỏ nhà cửa, anh em, chị em, cha mẹ, con cái hay ruộng đất, vì",
        ],
        tham_chieu: [
            "Mt 6,25-34; Lc 18,28-30",
        ],
    },
    {
        stt: 71,
        noi_dung: "Con đừng lấy làm lạ, lúc theo Ch úa con nghe ti ếng gọi của khoái lạc, của danh v ọng, của cả bạn thân, cha mẹ, quyến rũ con bỏ đường Chúa. Cứ tiến lên, Chúa đã nói trước: Ai cầm cầy còn ngoảnh mặt lui, không đáng vào Nước Thiên Chúa (Lc 9,62). quanh, chúng ta h ãy cởi bỏ mọi gánh nặng và tội lỗi đang trói buộc mình, v à hãy kiên trì chạy trong cuộc đua dành cho ta.",
        chuong: 3,
        loi_chua: [
            "Dt 12,1: Ph ần ch úng ta, được ng ần ấy nh ân ch ứng đức tin nh ư đám m ây bao",
        ],
    },
    {
        stt: 72,
        noi_dung: "Tiếng gọi vẫn tiếp tục nhắc nh ở con trong m ọi việc nh ỏ: Hãy theo Th ầy! và tiếng Vâng của con cũng tiếp tục cho đến hơi thở cuối cùng. vi, đang ngồi ở trạm thu thuế. Người bảo ông: Anh hãy theo tôi! Ông bỏ tất cả, đứng dậy đi theo Người. linh mục tự hiến toàn thân cho Chúa, và trong khi được Mình Chúa Kitô nuôi dưỡng, tự thâm tâm mình, các Ngài tham dự vào tình yêu của Đ ấng đã tự hiến làm lương thực nuôi các tín hữu.",
        chuong: 3,
        loi_chua: [
            "Lc 5,27-28: Sau đó, Đ ức Giêsu đi ra và trông thấy một người thu thuế, tên là Lê-",
            "LM 13: Trong khi liên kết với hành động của Chúa Kitô Linh mục, hằng ngày các",
        ],
        tham_chieu: [
            "GH 42c; MV 93; LM 14a; TĐ  4a",
        ],
    },
    {
        stt: 73,
        noi_dung: "Thưa Vâng thì d ễ, nhưng hãy xem Ch úa Giêsu đã theo ti ếng gọi cho đến chết trên thánh giá. Hãy bỏ mình, vác thánh giá mỗi ngày và đóng đinh mình trên thánh giá ấy. khấn giữ các lời khuyên Phúc âm mà mình đã đáp ứng ơn thiên triệu, vì th ế, chẳng những phải chết đi cho t ội lỗi (x. Rm 6,11), nh ưng còn phải từ bỏ thế gian để sống cho một mình Thiên Chúa. Thực vậy, họ đã tận hiến toàn thể cuộc đời để làm tôi Thiên Chúa, và sự tận hiến ấy đã thực sự tạo nên một hiến lễ đặc biệt, ăn r ễ s âu trong hi ến l ễ c ủa ng ày ch ịu ph ép r ửa t ội, đồng th ời bi ểu l ộ, đồng thời biểu lộ hiến lễ này cách trọn hảo hơn… Việc phụng sự Thiên Chúa như thế phải hối thúc và nung đúc họ thực hành các nhân đức, nhất là đức khiêm nhượng và vâng lời, can đảm và khiết tịnh, nhờ những nhân đức ấy, họ tham dự vào sự tự hủy của Chúa Kitô (x. Pl 2,7 -8) và đồng thời sự sống của Người trong tinh thần (x. Rm 8,1-13).",
        chuong: 3,
        loi_chua: [
            "DT 5ac: Tu s ĩ của bất cứ hội dòng nào cũng phải ghi tâm điều này: chính nh ờ",
        ],
        tham_chieu: [
            "GH 10a, 11a, 41a; MV 38a; LM 13; DT 1b; TĐ  4g",
        ],
    },
    {
        stt: 74,
        noi_dung: "Chúa bảo con: Hãy đi rao giảng Phúc âm (Mc 16,15). Chúa không ra thời khoá biểu, không vạch kế hoạch, Chúa để con sáng kiến thực hiện, miễn là con mang Phúc âm. và loan báo Tin Mừng về Đ ức Kitô Giêsu. nhiệm vụ loan b áo cho m ọi người Phúc âm của Thiên Chúa, để khi thi h ành mệnh lệnh của Chúa: Các con h ãy đi khắp thế gian rao gi ảng Phúc âm cho mọi t ạo v ật (Mc 16,15) c ác ng ài thi ết l ập d ân Ch úa v à l àm cho d ân Ch úa càng ngày càng đông thêm.",
        chuong: 3,
        loi_chua: [
            "Cv 5,42: Mỗi ngày, trong Đ ền Thờ và tại tư gia, các ông không ngừng giảng dạy",
            "LM 4a: C ác linh m ục, vì l à cộng sự viên của các Giám mục, n ên trước tiên có",
        ],
        tham_chieu: [
            "1Cr 1,17; Ep 6,14-17",
            "GH 25a; GM 12a; DT 20b; TĐ  33; TG 15h",
        ],
    },
    {
        stt: 75,
        noi_dung: "Công đồng Vaticanô II dạy ta trở về nguồn. Con hãy khám phá lại đời sống các Tông đồ, những người đã thấy tận mắt, đã nghe tận tai, đã sờ tận tay, đã sống với Chúa Cứu Thế và làm chứng về Ngài. các Tông đồ đã để lại những người kế vị là các Giám mục, và trao lại cho họ quyền gi áo hu ấn c ủa c ác ng ài. B ởi v ậy, Th ánh truy ền đó c ùng v ới Th ánh Kinh Cựu Ư ớc và Tân Ư ớc, là như tấm gương mà Giáo hội lữ thứ trên trần gian nhìn v ào để chiêm ngưỡng Thiên Chúa, nơi Ngài Giáo hội nhận lãnh tất cả, cho đến khi được dẫn tới để nhìn th ấy Ngài, diện đối diện, như chính b ản tính Ngài (x. 1Ga 3,2).",
        chuong: 3,
        loi_chua: [
            "1Cr 11,1: Anh em hãy bắt chước tôi, như tôi bắt chước Đ ức Kitô.",
            "MK 7b: … Đ ể Phúc âm được giữ gìn toàn vẹn và sống động mãi trong Giáo hội,",
        ],
        tham_chieu: [
            "2Cr 6,3-10; 1Ga 1,1-3",
            "GH 20b; MK 8ab, 9, 10ab, 18b, 21a; TG 5b; HN 4e",
        ],
    },
    {
        stt: 76,
        noi_dung: "Chương trình đang thực hiện tốt đẹp phải bỏ dở, hoạt động đang hăng say phải bó tay, nhiệm vụ đang quan tr ọng phải hạ tầng công tác! Uất ức và chán nản! Chúa gọi con Hãy theo Thầy hay Hãy theo việc nọ, người kia? Đ ể đó, Chúa sẽ liệu.",
        chuong: 3,
    },
    {
        stt: 77,
        noi_dung: "Con không tin ai, không trao công việc cho ai, không chịu nhường chỗ cho ai. Con toàn năng hơn Chúa nữa sao?",
        chuong: 3,
    },
    {
        stt: 78,
        noi_dung: "Tại sao con kh ư kh ư ôm l ấy c ông vi ệc n ọ, c ông vi ệc kia, kh ông ch ịu bu ông ra khi thượng cấp thuyên chuyển? Việc đó của Chúa hơn là việc của con! Có Chúa lo.",
        chuong: 3,
    },
    {
        stt: 79,
        noi_dung: "Lúc con tự mãn về công việc tông đồ của con là lúc nguy hiểm nhất. Ma quỷ tập trung lực lượng để đánh úp con. Đ ời chiêm niệm được cụ thể hóa trong hành động",
        chuong: 3,
        loi_chua: [
            " ",
        ],
    },
    {
        stt: 80,
        noi_dung: "Hoà bình nhờ chiến thắng, chiến thắng nhờ tranh đấu. Con muốn bình an trong tâm hồn, phải tranh đấu liên lỉ. không phải để đem bình an, nhưng để đem gươm giáo.",
        chuong: 5,
        loi_chua: [
            "Mt 10,34: Anh em đừng t ưởng Th ầy đến đem bình an cho tr ái đất; Th ầy đến",
        ],
        tham_chieu: [
            "Ga 14,27; Rm 8,21-23; Ep 6,10-11; 1Tm 1,18-19; 1Pr 5,8-9",
        ],
    },
    {
        stt: 81,
        noi_dung: "Khí giới của con l à nguyện ngắm hy sinh, c ác nhiệm tích, chu ỗi Mân côi, tĩnh tâm… Đ ồng minh của con là Đ ức Mẹ, Thánh Giuse, Thiên Thần, Thánh Bổn mạng, Cha Linh hướng. Con ch ắc chắn thắng trận, trừ khi con d ần dần hạ khí gi ới và phản đồng minh của con. đen tối, và cầm lấy vũ khí của sự sáng để chiến đấu. ngài có thể tận tâm tìm kiếm những dấu hiệu của thánh ý Chúa và những thúc đẩy của ơn thánh Ngài trong nh ững biến cố khác nhau c ủa đời sống, và như thế ngày càng trở nên dễ dàng vâng phục sứ mệnh đã nhận lãnh trong Ch úa Thánh Thần hơn. Các linh mục luôn tìm thấy gương mẫu lạ lùng về sự dễ vâng phục đó nơi Đ ức Trinh N ữ Maria, Ng ười được Chúa Thánh Thần dẫn dắt đã hiến to àn thân cho m ầu nhiệm cứu chu ộc lo ài người; c ác linh m ục ph ải l ấy lòng con thảo thành kính tôn sùng và mến yêu Đ ức Trinh Nữ Maria là Mẹ của Linh mục Thượng phẩm vĩnh viễn, là Nữ Vương các Tông đồ và là Đ ấng bảo trợ thừa tác vụ Linh mục.",
        chuong: 5,
        loi_chua: [
            "Rm 13,12: Đê m sắp tàn, ngày gần đến. Vậy chúng ta hãy loại bỏ những việc làm",
            "LM 18b: Dưới ánh sáng đức tin được nuôi dưỡng bằng việc đọc Sách thánh, các",
        ],
        tham_chieu: [
            "2Cr 6,7; Ep 6,17-18",
            "GH 49, 50, 51, 62a; PV 59a",
        ],
    },
    {
        stt: 82,
        noi_dung: "Đ ứng trên tầng lầu cao, nhìn xuống đường, con thấy làn sóng người cuồn cuộn chảy. Đ ủ loại xe, đủ hạng người dành nhau, tông nhau, đâm đầu chạy, vội vã hấp tấp, hốt hoảng, vì tình, vì tiền, vì tham vọng, vì đua sống. Chừng nào chúng ta lao mình vào việc Chúa, bất kể sống chết, đức tin ta mới sống, hồn tông đồ ta mới nóng.",
        chuong: 5,
    },
    {
        stt: 83,
        noi_dung: "Nếu mỗi năm con quyết tập một nhân đức, hằng ngày con rèn luyện một ít, đến nay con đã khá trọn lành. lòng tin thì c ó thêm đức độ, có đức độ lại thêm hiểu biết, có hiểu biết lại thêm tiết độ, có tiết độ lại thêm kiên nhẫn, có kiên nhẫn lại thêm đạo đức, có đạo đức lại thêm tình huynh đệ, có tình huynh đệ lại thêm bác ái.",
        chuong: 5,
        loi_chua: [
            "2Pr 1,5-7: Chính vì th ế, anh em h ãy đem tất cả nhiệt tình, l àm sao để khi đã có",
        ],
    },
    {
        stt: 84,
        noi_dung: "Thủy thủ lặn đáy biển, phi hành gia bay trên không gian để dấn thân mạo hiểm vì khoa học. Ngày nào con b ỏ tất cả và bất cứ giây phút nào cũng sẵn sàng liều mình vì Ch úa, người ta mới tin đời nội tâm con. Thiên Ch úa. T ôi c ùng ch ịu đóng đinh v ới Đ ức Kit ô v ào th ập gi á. T ôi s ống, nhưng không còn phải là tôi, mà là Đ ức Kitô sống trong tôi. Thiên Ch úa tr ên hết m ọi s ự, vì Ng ười đã y êu ch úng ta tr ước (x. 1Ga 4,10); trong mọi hoàn cảnh, phải cố gắng phát triển đời sống ẩn dật cùng Chúa Kitô trong Thiên Chúa (x. Cl 3,3), vì đó là nguồn mạch và động lực phát sinh tình yêu tha nh ân nhằm cứu rỗi nhân loại và xây dựng Giáo hội. Cũng chính đức mến này làm linh động, điều khiển việc thực hành các lời khuyên Phúc âm.",
        chuong: 5,
        loi_chua: [
            "Gl 2,19-20a: Quả thế, tại vì Lề Luật mà tôi đã chết đối với Lề Luật, để sống cho",
            "DT 6a: Những ai khấn giữ các lời khuyên Phúc âm, đều phải tìm kiếm và yêu mến",
        ],
        tham_chieu: [
            "Pl 1,20-21",
            "GM 30c; LM 14b; TĐ  8c; TG 20",
        ],
    },
    {
        stt: 85,
        noi_dung: "Con muốn đốt cháy cả thế giới bằng tình yêu truyền giáo, chinh phục cả năm châu. Mỗi giây phút của con ph ải là một tia lửa của nhiệm vụ, của tuân phục, của nhẫn nại…, tia lửa sẽ bốc cháy và chiếu sáng cả thế giới. lửa ấy đã bùng lên!",
        chuong: 5,
        loi_chua: [
            "Lc 12,49: Th ầy đã đến ném lửa vào mặt đất, và Thầy những ước mong ph ải chi",
        ],
        tham_chieu: [
            "Mt 5,14",
        ],
    },
    {
        stt: 86,
        noi_dung: "Thinh lặng bên ngoài, nhất là thinh bên trong là bầu khí của cuộc sống nội tâm. cùng Cha c ủa anh, Đ ấng hiện diện nơi kín đáo. Và Cha c ủa anh, Đ ấng thấu suốt những gì kín đáo, sẽ trả lại cho anh.",
        chuong: 5,
        loi_chua: [
            "Mt 6,6: C òn anh, khi c ầu nguyện, hãy vào phòng, đóng cửa lại, và cầu nguyện",
        ],
    },
    {
        stt: 87,
        noi_dung: "Tất cả mọi người không cần tài ba l ỗi lạc mới nên thánh, chỉ cần ơn Chúa và ý chí. Ít người làm thánh, vì học tập thành tài dễ hơn là thay đổi cả cuộc sống để nên thánh. Chúa chúng ta làm cho anh em được xứng đáng với ơn gọi, và xin Người dùng quyền năng mà hoàn thành mọi thiện chí của anh em và mọi công việc anh em làm vì l òng tin. Như vậy, danh c ủa Chúa chúng ta l à Đ ức Giêsu, sẽ được tôn vinh nơi anh em, v à anh em được tôn vinh n ơi Người, chiếu theo ân sủng của Thiên Chúa chúng ta và của Chúa Giêsu Kitô. giảng dạy cho tất cả và cho mỗi một môn đệ, bất luận thuộc cảnh vực nào, một đời sống thánh thiện mà chính Ng ười v ừa là Đ ấng kh ởi x ướng v ừa là Đ ấng hoàn tất: Vậy các con hãy trở nên trọn lành như Cha các con ở trên trời (Mt 5,48). Bởi vậy, Người đã sai Th ánh Thần đến với mọi người, để từ bên trong Ngài thôi thúc họ yêu mến Thiên Chúa hết lòng, hết linh hồn, hết trí khôn cùng hết sức họ (x. Mc 12,30), và yêu thương nhau như Chúa Kitô yêu thương họ (x. Ga 13,34; 15,12). Đư ợc T hiên Ch úa k êu g ọi v à được c ông chính ho á trong Chúa Gi êsu, kh ông ph ải vì c ông lao ri êng, nh ưng vì ý định v à ân ph úc c ủa Ngài, các môn đệ Chúa Giêsu, nhờ lãnh nhận phép rửa, bí tích đức tin, đã thực sự trở nên con c ái Thiên Chúa và được thông phần vào bản tính Ngài, và do đó, thực sự trở nên thánh. Cho nên với ơn Chúa họ phải luôn gìn giữ và hoàn thành trong đời sống sự thánh thiện mà họ đã lãnh nhận.",
        chuong: 5,
        loi_chua: [
            "2Tx 1,11-12: Vì th ế, lúc nào chúng tôi cũng cầu nguyện cho anh em: xin Thi ên",
            "GH 40a: Ch úa Giêsu, thầy dạy và mẫu mực thần linh c ủa mọi sự trọn lành, đã",
        ],
        tham_chieu: [
            "Cl 1,9-10; 2Pr 1,10",
            "GH 40b, 41a; PV 61; MV 17; LM 12a, 16c",
        ],
    },
    {
        stt: 88,
        noi_dung: "Con hăng say phụng sự Chúa, rất tốt! Nhưng lòng sốt sắng không đi đôi với sự canh tân tâm hồn thì không đẹp ý Chúa. thập phân về bạc hà, vân hương, và đủ thứ rau cỏ, mà xao lãng lẽ công bình và lòng yêu mến Thiên Chúa. Các điều này phải làm, mà các điều kia cũng không được bỏ.",
        chuong: 5,
        loi_chua: [
            "Lc 11,42: Kh ốn cho c ác ng ười, h ỡi c ác ng ười Pha -ri-sêu! C ác ng ười n ộp thu ế",
        ],
        tham_chieu: [
            "Lc 18,11-12.14",
        ],
    },
    {
        stt: 89,
        noi_dung: "Thế gian sợ thinh lặng vì họ sẽ thấy mình trống rỗng cô đơn. Nhưng người sống nội tâm quý sự thinh lặng, vì họ tìm thấy một thế giới mới mẻ tốt đẹp, trong cuộc sống thân mật với Chúa Ba Ngôi, mà thế gian không thể khám phá được. và cầu nguyện ở đó. tâm phụng sự một mình Thiên Chúa trong cô tịch và lặng lẽ, trong việc chuyên lo cầu nguyện và hân hoan h ãm mình, cho d ù nhu c ầu hoạt động tông đồ có khẩn thiết đi nữa, thì những hội dòng ấy vẫn phải luôn luôn giữ địa vị cao quý trong Nhiệm thể Chúa Kitô, trong đó, mỗi chi thể đều có một tác động khác nhau (Rm12,4).",
        chuong: 5,
        loi_chua: [
            "Mc 1,35: Sáng sớm, lúc trời còn tối mịt, Người đã dậy, đi ra một nơi hoang vắng",
            "DT 7: Trong nh ững hội dòng hoàn toàn chuyên lo chiêm niệm, các tu sĩ chỉ nhất",
        ],
        tham_chieu: [
            "Mt 14,23; Lc 4,42",
            "GH 41c; Đ T 11c; DT 1c",
        ],
    },
    {
        stt: 90,
        noi_dung: "Cứ mỗi năm con d ốc lòng trừ một tính x ấu, hằng ngày sửa một chút, ngày nay con đã bớt bao nhiêu khuyết điểm.",
        chuong: 5,
    },
    {
        stt: 91,
        noi_dung: "Con hỏi phải khởi sự sống nội tâm từ lúc nào? Phải khởi sự ngay t ừ bây giờ và phải khởi sự lại mỗi ngày.",
        chuong: 5,
    },
    {
        stt: 92,
        noi_dung: "Ai phải nên thánh? Tất cả mọi người, không có luật trừ. Khởi sự từ chính mình con, vì Chúa mời gọi tất cả. Đ ấng Thánh đã kêu gọi anh em, vì c ó lời Kinh Th ánh chép: Hãy sống thánh thiện, vì Ta là Đ ấng Thánh. vị nào, đều được kêu gọi tiến đến sự viên mãn của đời sống Kitô giáo và đến sự trọn lành của đức Ái.",
        chuong: 5,
        loi_chua: [
            "1Pr 1,15 -16: Anh em h ãy s ống th ánh thi ện trong c ách ăn n ết ở, để n ên gi ống",
            "GH 40b: Mọi người đều thấy rõ tất cả các Kitô hữu, bất cứ theo bậc sống hay địa",
        ],
        tham_chieu: [
            "Mt 5,48; Ep 1,4; 1Tx 4,3; 2Tx 2,13",
            "GH 11c, 39, 41g, 42e",
        ],
    },
    {
        stt: 93,
        noi_dung: "Trên đời không có gì quý bằng ơn thánh, Thiên đàng đã khởi sự trong lòng ngay từ trần gian. Cha Thầy và Thầy sẽ đến và ở lại với người ấy.",
        chuong: 5,
        loi_chua: [
            "Ga 14,23: Ai y êu mến Thầy, thì s ẽ giữ lời Thầy. Cha Th ầy sẽ yêu mến người ấy.",
        ],
        tham_chieu: [
            "2Cr 6,16; Kh 3,20",
        ],
    },
    {
        stt: 94,
        noi_dung: "Hạt kim cương óng ánh, đắt giá quý báu, được cấu tạo từ ngàn vạn năm trong lòng đất, trong khối đá. Con có trưởng thành từ bên trong như vậy không? đón nhận. Nhưng nó không đâm rễ mà là kẻ nhất thời: khi gặp gian nan hay bị ngược đãi vì Lời, nó vấp ngã ngay.",
        chuong: 5,
        loi_chua: [
            "Mt 13,20-21: Còn kẻ được gieo tr ên nơi sỏi đá, đó là kẻ nghe L ời và liền vui v ẻ",
        ],
        tham_chieu: [
            "Ep 3,16-19",
        ],
    },
    {
        stt: 95,
        noi_dung: "Hãy chạy khắp thế gian và la lớn tiếng với mọi người: Có một người đã chết cho bạn. đó là: Đ ức Kitô đã chết vì tội lỗi chúng ta, đúng như lời Kinh Thánh.",
        chuong: 5,
        loi_chua: [
            "1Cr 15,3: Trước hết, tôi đã truyền lại cho anh em điều mà chính tôi đã lãnh nhận,",
        ],
        tham_chieu: [
            "2Cr 5,14-15; 1Tx 5,9-10",
        ],
    },
    {
        stt: 96,
        noi_dung: "Trên màn ảnh, ngọn lửa phừng phực làm mọi người kinh khiếp, nhưng không đốt nóng, không nấu chín; vì đó là lửa giả, không do một lò lửa hồng bốc lên.",
        chuong: 5,
    },
    {
        stt: 97,
        noi_dung: "Lòng m ến Ch úa ph ải tuyệt đối! Ch úa d ạy: Không ai c ó thể làm tôi hai ch ủ… (Mt 6,24). Con làm tôi mấy chủ?",
        chuong: 5,
    },
    {
        stt: 98,
        noi_dung: "Mỗi ngày dành riêng một ít phút thinh lặng để giúp đời nội tâm tiến lên. Lâu nay con để dành mấy phút?",
        chuong: 5,
    },
    {
        stt: 99,
        noi_dung: "Người ta bảo: Khủng hoảng đức tin, khủng hoảng quyền bính, Cha ngh ĩ: Khủng hoảng thánh thiện. Chúa muốn thanh lọc để thấy rõ, đâu là thánh, đâu là quỷ!",
        chuong: 5,
    },
    {
        stt: 100,
        noi_dung: "Con không hiểu tại sao thánh Augustinô cầu nguyện: Xin cho con bi ết Chúa, cho con biết con! Vì Ch úa n ói với Philipphê: Đ ã bao l âu rồi, Ta ở với các ngươi! Thế mà, Philipphê, ngươi đã không biết Ta sao? (Ga 14,9). Nếu biết thật, đời con sẽ đổi hẳn. nguyện và kêu xin Thiên Chúa cho anh em được am tường thánh ý Người, với tất cả sự khôn ngoan v à hiểu biết mà Thần Khí ban cho. Nh ư vậy, anh em s ẽ sống được như Chúa đòi hỏi, và làm đẹp lòng Người về mọi phương diện, sẽ sinh hoa trái là mọi thứ việc lành, và mỗi ngày một hiểu biết Thiên Chúa hơn.",
        chuong: 5,
        loi_chua: [
            "Cl 1,9-10: Từ ngày chúng tôi nghe biết như vậy, chúng tôi cũng không ngừng cầu",
        ],
    },
    {
        stt: 101,
        noi_dung: "Người giữ đạo đọc nhiều kinh, d ự nhiều lễ, mà không sống đạo, chẳng khác gì ng ười được hỏi: Bạn có khỏe không? liền đáp: Tôi ăn một ngày sáu bữa. Chưa hẳn ăn nhiều bữa là đã khỏe. Nước Trời cả đâu! Nhưng chỉ ai thi h ành ý muốn của Cha Th ầy là Đ ấng ngự trên trời, mới được vào mà thôi. Trời, nhưng chỉ có những ai thực hiện ý Chúa Cha và can đảm làm việc. Thực thế, Chúa Cha muốn chúng ta nhìn nhận Chúa Kitô là anh cả trong tất cả mọi người và yêu mến Người cách cụ thể bằng lời nói cũng như bằng việc làm. Sống siêu nhiên Sống thánh ý Chúa trăm phần trăm",
        chuong: 5,
        loi_chua: [
            "Mt 7,21: Không phải bất cứ ai thưa với Thầy: Lạy Chúa! lạy Chúa! là được vào",
            "MV 93a: Kh ông ph ải  nh ững ai n ói Lạy Ch úa, l ạy Ch úa s ẽ được v ào N ước",
            " ",
        ],
        tham_chieu: [
            "Mc 7,6; Lc 6,46; Rm 2,13; Gc 1,22.25",
            "GH 38, 40b; MV 27ab",
        ],
    },
    {
        stt: 102,
        noi_dung: "Mọi người khen con, mà Chúa chê con, khốn cho con. Mọi người nhục mạ, vu cáo, ghê gớm con, nhưng Chúa khen con thì hạnh phúc cho con, vì nước thiên đàng là của con. chăng tôi tìm c ách làm đẹp lòng người đời? Nếu tôi còn muốn làm đẹp lòng người đời, thì tôi không phải là tôi tớ của Đ ức Kitô.",
        chuong: 6,
        loi_chua: [
            "Gl 1,10: Giờ đây tôi tìm cách lấy lòng người đời, hay lấy lòng Thiên Chúa? Phải",
        ],
        tham_chieu: [
            "Lc 6,22; 1Tx 2,4-6",
        ],
    },
    {
        stt: 103,
        noi_dung: "Mọi ng ười khen con, m à Ch úa ch ê con, được ích gì? M ọi ng ười nh ạo c ười con, m à Chúa khen con, h ạnh phúc cho con. Khi d ân chúng kêu: Xin tha Baraba! Baraba v ẫn là kẻ trộm. Khi d ân chúng la l ối: Hãy đóng đinh nó! Chúa Giêsu vẫn là Con Thi ên Chúa vô tội.",
        chuong: 6,
    },
    {
        stt: 104,
        noi_dung: "Trước nh ững vô ơn, ph ản bội, vu c áo, đau đớn, nhất là những ác ý phi l ý, do nh ững nhân vật không thể ngờ được, phản ứng của con là: – Tha thứ thật lòng. – Xin họ tha thứ nếu họ không bằng lòng con. – Yêu thương cầu nguyện cho họ thức tỉnh. Như vậy, con càng khỏi dựa vào sự an ủi thế gian. ngược đãi anh em.",
        chuong: 6,
        loi_chua: [
            "Mt 5,44: Còn Thầy, Thầy bảo anh em: hãy yêu kẻ thù và cầu nguyện cho những kẻ",
        ],
        tham_chieu: [
            "Mt 6,14; 18,21-22; Lc 23,34; Cl 3,12-14",
        ],
    },
    {
        stt: 105,
        noi_dung: "Hãy vui mừng vì con thành công và hãy cám ơn Chúa vì có người khác thành công hơn con.",
        chuong: 6,
    },
    {
        stt: 106,
        noi_dung: "Sự điên dại trước mắt loài người là sự khôn ngoan trước mặt Chúa. những kẻ khôn ngoan, và những gì thế gian cho là yếu kém, thì Thiên Chúa đã chọn để hạ nhục những kẻ hùng mạnh.",
        chuong: 6,
        loi_chua: [
            "1Cr 1,27: Những gì thế gian cho l à điên dại, thì Thiên Chúa đã chọn để hạ nhục",
        ],
        tham_chieu: [
            "Cv 26,25; Rm 1,22",
        ],
    },
    {
        stt: 107,
        noi_dung: "Thánh giá là sự dại dột đối với người Do thái, là cớ vấp phạm đối với người Hy lạp. Nhưng phần chúng ta, chúng ta phải hãnh diện vì thánh giá Chúa. người Hy -lạp tìm ki ếm lẽ kh ôn ngoan, thì ch úng tôi lại rao gi ảng một Đ ấng Kitô bịđóng đinh, điều mà người Do-thái coi l à ô nhục không thể chấp nhận, và dân ngoại cho là điên rồ. Nhưng đối với những ai được Thiên Chúa kêu gọi, dù là Do-thái hay Hy -lạp, Đ ấng ấy chính l à Đ ức Kitô, sức mạnh và sự khôn ngoan của Thiên Chúa",
        chuong: 6,
        loi_chua: [
            "1Cr 1,22 -24: Trong khi ng ười Do -thái đòi h ỏi nh ững điềm thi êng d ấu l ạ, c òn",
        ],
        tham_chieu: [
            "1Cr 1,18; Gl 6,14",
        ],
    },
    {
        stt: 108,
        noi_dung: "Ở  trong nhà thờ suốt ngày cũng chưa hẳn là nhân đức, nếu còn bắt lý lẽ, nếu còn phản ứng theo kh ôn ngoan th ế gian, c òn tự ái… Gioan v à Giacôbê ở với Chúa luôn, nhưng Ngài phải hỏi: Chúng con có tinh thần của ai? (Lc 9,55).",
        chuong: 6,
    },
    {
        stt: 109,
        noi_dung: "Đ ừng nói tôi làm theo lương tâm. Còn lương tâm không mà theo? bóng tối, thì chúng ta nói dối và không hành động theo sự thật… N ếu chúng ta nói l à ch úng ta kh ông c ó t ội, ch úng ta t ự l ừa d ối mình, v à s ự th ật kh ông ở trong chúng ta. thế mà mất hết phẩm giá. Nhưng không thể nói như vậy khi con người ít lo lắng tìm điều chân và điều thiện cũng như khi vì th ói quen ph ạm tội mà lương tâm dần dần trở nên mù quáng.",
        chuong: 6,
        loi_chua: [
            "1Ga 1,6.8: N ếu chúng ta n ói là ch úng ta hiệp thông v ới Người mà lại đi trong",
            "MV 16: Lương tâm nhiều khi lầm lạc vì vô tri bất khả thắng, nhưng cũng không vì",
        ],
        tham_chieu: [
            "MV 8b, 87c; TĐ  5; TD 11a",
        ],
    },
    {
        stt: 110,
        noi_dung: "Khó nghèo, vâng phục, hãm mình, nhịn nhục, bác ái, tha thứ, khiêm tốn đều là dại trước mặt người đời, nhưng cao trọng trước mặt Chúa. Thế gian cho là xui, Chúa cho là phúc thật.",
        chuong: 6,
    },
    {
        stt: 111,
        noi_dung: "Hãy nhìn mọi sự với con mắt của Thiên Chúa, con sẽ thấy giá trị khác, kích thước khác. và đức mến… Chỉ nhờ ánh sáng đức tin v à nhờ suy ni ệm lời Chúa, mỗi người mới có thể nhận ra Chúa trong mọi nơi và mọi lúc, vì trong Ngài ta sống, ta hoạt động, ta hiện hữu (Cv 17,28). Tìm ý Ch úa trong m ọi bi ến c ố, th ấy Ch úa Kit ô trong m ọi người, dù là kẻ thân hay người lạ, phê phán đúng đắn về ý nghĩa đích thực và giá trị c ủa sự v ật trần thế, x ét nơi chính n ó v à xét theo t ương quan v ới cứu cánh của con người.",
        chuong: 6,
        loi_chua: [
            "TĐ  4bc: Đ ời sống tông đồ như thế đòi hỏi việc thực hành liên tục đức tin, đức cậy",
        ],
        tham_chieu: [
            "MV 11a, 18b; LM 18b; DT 6c",
        ],
    },
    {
        stt: 112,
        noi_dung: "Trong tất cả vận động, đấu tranh, con h ãy phân tích ra: c ó mấy phần trăm của Chúa? Mấy phần trăm tự ái? của vụ lợi? của ý riêng? – Sợ phần Chúa không còn bao nhiêu?",
        chuong: 6,
    },
    {
        stt: 113,
        noi_dung: "Phaolô trồng, Apôllô tưới, Thiên Chúa cho kết qủa. thế, kẻ trồng hay người tưới chẳng là gì cả, nhưng Thiên Chúa, Đ ấng làm cho lớn lên, mới đáng kể.",
        chuong: 6,
        loi_chua: [
            "1Cr 3,6-7: Tôi trồng, anh A-pô-lô tưới, nhưng Thiên Chúa mới làm cho lớn lên. Vì",
        ],
        tham_chieu: [
            "Ga 4,37-38; Cv 14,26",
        ],
    },
    {
        stt: 114,
        noi_dung: "Nếu không có sự phục sinh thì người công giáo là hạng người vô phúc nhất trần gian. trống rỗng, và cả đức tin c ủa anh em c ũng trống rỗng… N ếu chúng ta đặt hy vọng v ào Đ ức Kit ô ch ỉ vì đời n ày m à th ôi, thì ch úng ta l à nh ững k ẻ đáng thương hơn hết mọi người.",
        chuong: 6,
        loi_chua: [
            "1Cr 15,14.19: Mà nếu Đ ức Kitô đã không trỗi dậy, thì lời rao giảng của chúng tôi",
        ],
        tham_chieu: [
            "Rm 10,9.11; 1Tx 4,13-14",
        ],
    },
    {
        stt: 115,
        noi_dung: "Trong lúc con tuyên bố: Vì Chúa, vì H ội Thánh, con hãy thinh lặng trước mặt Chúa và thành thật hỏi Chúa: Chúa thấy con hành động hoàn toàn vì Chúa không? Hay Chúa là lý do thứ yếu, còn lý do khác mạnh hơn, con không tiện nói. cho chính mình. Ch úng ta có sống là sống cho Chúa, mà có chết cũng là chết cho Chúa. Vậy, dù sống, dù chết, chúng ta vẫn thuộc về Chúa. Chúa Kitô là Đ ầu. Họ được chính Chúa chỉđịnh làm việc tông đồ, vì phép Rửa tội sát nhập họ v ào Nhiệm Thể Chúa Kitô, ph ép Thêm sức l àm cho họ thêm mạnh m ẽ nh ờ quy ền n ăng c ủa Ch úa Th ánh Th ần. H ọ được th ánh hi ến v ào chức vụ tư tế vương giả và dân tộc thánh (x. 1Pr 2,2-10), hầu trong mọi việc họ dâng nh ững l ễ v ật thiêng liêng v à l àm chứng cho Ch úa Kit ô ở m ọi n ơi tr ên hoàn c ầu. Đà ng kh ác, đức ái nh ư l à linh h ồn c ủa t ất c ả vi ệc t ông đồ, được chuyển thông và nuôi dưỡng nhờ các bí tích nhất là bí tích Thánh Thể.",
        chuong: 6,
        loi_chua: [
            "Rm 14,7-8: Không ai trong chúng ta sống cho chính mình, cũng như không ai chết",
            "TĐ  3a: Gi áo dân có bổn phận và quyền làm tông đồ do chính vi ệc kết hợp với",
        ],
        tham_chieu: [
            "1Cr 10,31; 2Cr 5,15",
            "MV 43a; LM 2e; TĐ  4ac, 8a",
        ],
    },
    {
        stt: 116,
        noi_dung: "Tại sao tận hiến cho Chúa mà con còn so sánh mình với người đời, phàn nàn vì thua sút điều này, điều nọ. Con tiếc vì bị thiệt thòi khi làm tôi Chúa sao? con, chúng con đã bỏ mọi sự mà theo Th ầy. Vậy chúng con s ẽ được gì? Và phàm ai b ỏ nhà cửa, anh em, ch ị em, cha m ẹ, con c ái hay ru ộng đất, vì danh Thầy, thì sẽ được gấp bội và còn được sự sống vĩnh cửu làm gia nghiệp.",
        chuong: 6,
        loi_chua: [
            "Mt 19,27.29: B ấy giờ ông Phê-rô lên tiếng thưa Người: Thầy coi, ph ần chúng",
        ],
    },
    {
        stt: 117,
        noi_dung: "Thưa Thầy, nhân danh Thầy thì cả ma quỷ cũng phải lụy phục chúng con – Các con chớ mừng vì ma qu ỷ phải lụy phục các con, một hãy mừng vì tên các con đã được ghi trên trời (Lc 17-20). Cầu nguyện, nghề của tôi",
        chuong: 6,
        loi_chua: [
            " ",
        ],
    },
    {
        stt: 118,
        noi_dung: "Hoạt động không cầu nguyện là vô ích tr ước mặt Chúa. Máy móc tự động có thể làm hơn con. việc rao giảng Lời Thiên Chúa để lo việc ăn uống, là điều không phải.",
        chuong: 7,
        loi_chua: [
            "Cv 6,2: Nhóm Mười Hai triệu tập toàn thể các môn đệ và nói: Chúng tôi mà bỏ",
        ],
    },
    {
        stt: 119,
        noi_dung: "Thứ nhất cầu nguyện, thứ hai hy sinh, thứ ba mới đến hoạt động.",
        chuong: 7,
    },
    {
        stt: 120,
        noi_dung: "Cầu nguyện là nền tảng của đời sống thiêng liêng. Lúc cầu nguyện, con n ối liền, kết hiệp với Thiên Chúa. Bóng điện sáng nhờ nối liền với máy phát điện. lời cầu khẩn, van xin v à tạ ơn, mà giãi bày trước mặt Thiên Chúa những điều anh em th ỉnh nguyện. Và bình an c ủa Thiên Chúa, bình an v ượt lên trên mọi hiểu biết, sẽ giữ cho lòng trí anh em được kết hợp với Đ ức Kitô Giêsu. chuyên t âm đàm đạo h ằng ng ày v ới Ch úa Kit ô trong l úc vi ếng Mình Th ánh Chúa và trong việc cá nhân tôn sùng phép Thánh Thể Chí Thánh; các ngài hãy tự ý chăm lo vi ệc tĩnh tâm thiêng liêng và mến chuộng việc linh h ướng. Bằng nhiều cách, nhất là bằng tâm nguyện vẫn được thực hành trong Gi áo hội và bằng những hình th ức kinh nguy ện khác nhau tùy các ngài tự ý lựa chọn, các Linh mục tự luyện và cố tâm khẩn cầu Chúa ban cho mình m ột tinh th ần thờ phượng đích thực, nhờ đó các ngài cùng với dân được trao phó sẽ kết hiệp mật thiết với Chúa Kitô là Đ ấng Trung gian c ủa Giao ước mới, và như thế, họ có thể kêu lên như những nghĩa tử Abba, Cha (Rm 8,15).",
        chuong: 7,
        loi_chua: [
            "Pl 4,6-7: Anh em đừng lo lắng gì cả. Nhưng trong mọi hoàn cảnh, anh em cứ đem",
            "LM 18c: Đ ể trung thành chu toàn thừa tác vụ của mình, các ngài (linh mục) phải",
        ],
        tham_chieu: [
            "Ga 15,5",
            "GH 42a; PV 12; LM 5c, 6f, 18a; TG 25b",
        ],
    },
    {
        stt: 121,
        noi_dung: "Con tin vào hiệu năng của lời cầu nguyện không? Hãy suy lời Chúa: Ta bảo các con: Hãy xin thì sẽ được; hãy tìm thì sẽ gặp; hãy gõ thì sẽ mở cho (Lc 11,9). Có công ty bảo hiểm nào bảo đảm cho các con chắc chắn hơn lời ấy không? * Ga 15,7: N ếu anh em ở lại trong Thầy và lời Thầy ở lại trong anh em, thì mu ốn gì, anh em cứ xin, anh em sẽ được như ý.",
        chuong: 7,
    },
    {
        stt: 122,
        noi_dung: "Bí quyết nuôi dưỡng đời sống Kitô hữu là cầu nguyện. Ai không cầu nguyện, dù có làm phép lạ, con cũng đừng tin. thông với nhau, siêng năng tham dự lễ bẻ bánh, và cầu nguyện không ngừng.",
        chuong: 7,
        loi_chua: [
            "Cv 2,42: C ác tín h ữu chuyên cần nghe c ác Tông Đ ồ giảng dạy, lu ôn luôn hiệp",
        ],
    },
    {
        stt: 123,
        noi_dung: "Con h ãy c ầu nguy ện lu ôn, b ất c ứ ở đâu. Ch úa G iêsu đã n ói: H ãy t ỉnh th ức v à c ầu nguyện (Mt 26,41). ơn.",
        chuong: 7,
        loi_chua: [
            "Cl 4,2: Anh em h ãy siêng năng cầu nguyện; hãy tỉnh thức mà cầu nguyện và tạ",
        ],
        tham_chieu: [
            "Lc 18,1tt; Ep 6,18; Pl 4,6",
        ],
    },
    {
        stt: 124,
        noi_dung: "Đâ u có hai, ba người họp lại nhân danh Ta, thì có Ta ở giữa họ (Mt 18,20). Lời Chúa Giêsu đã ứng nghiệm, đặc biệt nơi nhiều cộng đoàn cầu nguyện, họ sống xa linh m ục từng ngàn cây số mà vẫn hướng dẫn nhau cầu nguyện, kiên trì giữa gian nan và cô đơn. mấy ng ười phụ nữ, v ới bà Ma-ri-a thân mẫu Đ ức Gi êsu, v à với anh em c ủa Đ ức Giêsu.",
        chuong: 7,
        loi_chua: [
            "Cv 1,14: Tất cả các ông đều đồng tâm nhất trí, chuy ên cần cầu nguyện cùng với",
        ],
        tham_chieu: [
            "Cl 3,16-17",
        ],
    },
    {
        stt: 125,
        noi_dung: "Con ngạc nhiên vì sao nhiều người mất ơn Chúa gọi, mất đức tin, phản bội Hội Thánh? Trong bao nhiêu lý do, luôn luôn có một lý do chính: họ bỏ cầu nguyện từ lâu.",
        chuong: 7,
    },
    {
        stt: 126,
        noi_dung: "Đ ừng xem th ường việc đọc kinh, c ác Tông đồ đã thưa: Lạy Thầy xin d ạy chúng con cầu nguyện (Lc 11,1). Ch úa Giêsu đáp: Các con h ãy cầu nguyện thế này: Lạy Cha chúng con ở trên trời… (Mt 6,9). Chính Ch úa Giêsu dạy đọc kinh.",
        chuong: 7,
    },
    {
        stt: 127,
        noi_dung: "Chúa dạy đọc kinh để giúp con c ầu nguyện, nhưng việc chính l à gặp gỡ, n ói chuyện giữa Cha v à con: C òn ngươi khi c ầu nguyện thì h ãy vào buồng, khóa cửa lại mà cầu nguyện với Cha ng ươi, có mặt cả nơi kín ẩn; và Cha ngươi, Đ ấng thấu suốt cả nơi kín ẩn sẽ hoàn trả lại cho ngươi (Mt 6,6). Tuy cần hình thức, nhưng chính yếu vẫn là tâm tình phụ tử. thánh. B ởi vì ng ười Kit ô h ữu được m ời g ọi c ầu nguy ện chung, nh ưng c ũng phải vào phòng riêng âm thầm cầu nguyện cùng Chúa Cha, hơn nữa phải cầu nguyện không ngừng như lời vị Tông đồ đã dạy. Chính vị Tông đồ này còn dạy chúng ta ph ải mang trong mình s ự kh ổ ch ế c ủa Chúa Giêsu để sự sống c ủa Người được phô diễn trong xác thể hay chết của chúng ta.",
        chuong: 7,
        loi_chua: [
            "PV 12: Đ ời sống thiêng liêng không chỉ giới hạn trong vi ệc tham d ự Phụng vụ",
        ],
        tham_chieu: [
            "PV 6; LM 18c",
        ],
    },
    {
        stt: 128,
        noi_dung: "Lời kinh Phụng vụ rất đẹp lòng Chúa, vì đó là lời Thánh kinh, là lời cầu của Hội Thánh, nhiệm th ể Ch úa Gi êsu. Con h ãy d ùng s ách l ễ, s ách ca v ịnh, s ách nguy ện m à c ầu nguyện. Chúa những bài thánh vịnh, thánh thi và thánh ca, do Thần Khí linh hứng. thánh hiến trọn ngày đêm bằng lời ngợi khen Thi ên Chúa. Vì, khi b ài ca ng ợi khen tuyệt diệu đó được chu to àn đúng nghi th ức bởi các linh m ục hoặc bởi những người khác được ủy nhiệm làm công việc đó theo sự thiết định của Giáo hội, hoặc các Kitô hữu hợp cùng linh m ục cầu nguyện theo th ể thức đã được chuẩn nhận, thì đó thực là tiếng của chính Hiền thê nói với Phu quân mình, và hơn thế nữa, còn là lời cầu nguyện của Chúa Kitô và Thân thể Người dâng lên Thiên Chúa Cha.",
        chuong: 7,
        loi_chua: [
            "Cl 3,16b: Đ ể t ỏ l òng biết ơn, anh em h ãy đem c ả t âm h ồn m à h át d âng Thi ên",
            "PV 84: Theo truy ền thống xa x ưa của Kitô giáo, Kinh Nh ật tụng được lập ra để",
        ],
        tham_chieu: [
            "Ep 5,19",
            "PV 2,7c, 8, 10a; DT 6b",
        ],
    },
    {
        stt: 129,
        noi_dung: "Cha nói: Thứ nhất cầu nguyện, không phải là vô căn cớ. Chúa Giêsu bảo: …Maria đã chọn phần tốt rồi, và sẽ không bị ai giựt mất! (Lc 10,42). Khi ngồi dưới chân Chúa, nghe lời Chúa, yêu mến Chúa, Maria đã được Thánh Thể, Thánh Kinh, Thánh nguyện. Cha Thầy và Thầy sẽ đến và ở lại với người ấy.",
        chuong: 7,
        loi_chua: [
            "Ga 14,23: Ai y êu mến Thầy, thì s ẽ giữ lời Thầy. Cha Th ầy sẽ yêu mến người ấy.",
        ],
    },
    {
        stt: 130,
        noi_dung: "Con tìm b ạn để an ủi, nâng đỡ con kh ỏi cô đơn. Sao con kh ông tìm ng ười bạn không bao giờ phản bội con, và có thể ở với con liên lỉ bất cứ nơi nào? sẽ cho nghỉ ngơi bồi dưỡng.",
        chuong: 7,
        loi_chua: [
            "Mt 11,28: Tất cả những ai đang vất vả mang gánh nặng nề, hãy đến cùng tôi, tôi",
        ],
        tham_chieu: [
            "Ga 15,15",
        ],
    },
    {
        stt: 131,
        noi_dung: "Một ng ười th ánh m à kh ông c ầu nguy ện l à th ánh gi ả. Con đợi xem, h ọ s ẽ s ụp đổ không mấy hồi. dỗ.… Ng ười liền nói với các ông: Sao anh em lại ngủ? Dậy mà cầu nguyện, kẻo sa chước cám dỗ.",
        chuong: 7,
        loi_chua: [
            "Lc 22,40.46: Ng ười b ảo c ác ông: Anh em h ãy c ầu nguy ện k ẻo sa ch ước c ám",
        ],
        tham_chieu: [
            "Ga 15,4.6",
        ],
    },
    {
        stt: 132,
        noi_dung: "Muốn đánh giá công việc tông đồ của ai, con hãy xem người ấy cầu nguyện thế nào?",
        chuong: 7,
    },
    {
        stt: 133,
        noi_dung: "Nếu con không cầu nguyện, chẳng ai tin con làm việc vì Chúa đâu!",
        chuong: 7,
    },
    {
        stt: 134,
        noi_dung: "Tại sao có khủng hoảng trong Hội Thánh? Vì hạ giá việc cầu nguyện.",
        chuong: 7,
    },
    {
        stt: 135,
        noi_dung: "Ai hiểu được mãnh lực của lời cầu nguyện? Sốt sắng như các Tông đồ và Đ ức Mẹ trong nhà tiệc ly, ph ó thác như Chúa Giêsu ở vườn Cây dầu, cương quyết như Maisen giang tay trên núi, tha thiết như người trộm lành, khiêm tốn như người thu thuế.",
        chuong: 7,
        loi_chua: [
            "Gc 5,16b: Lời cầu xin tha thiết của người công chính rất có hiệu lực.",
        ],
        tham_chieu: [
            "Mt 26,39.44; Lc 18,13-14; 23,42; Cv 1,14",
        ],
    },
    {
        stt: 136,
        noi_dung: "Người ta s ống không chỉ nhờ cơm bánh mà còn nhờ những lương thực thiêng liêng (x. Mt 4,4): Thánh Thể, Thánh kinh, Thánh nguyện. Nếu không, con không có sự sống thần linh. mỗi một tín hữu phải sẵn lòng lo lắng nghe lời Chúa, và với ơn Ngài thực hành thánh ý Ngài; phải năng lãnh nhận các bí tích, nhất là bí tích Thánh Thể, năng tham dự các nghi l ễ cầu nguyện, từ bỏ mình, nhi ệt thành phục vụ anh em v à chuyên cần luyện tập các nhân đức.",
        chuong: 7,
        loi_chua: [
            "GH 42a: Đ ể đức ái, tựa hạt giống tốt, lớn lên trong tâm hồn và kết sinh hoa trái,",
        ],
        tham_chieu: [
            "MK 21; PV 24; LM 18a; DT 6b; TĐ  4c",
        ],
    },
    {
        stt: 137,
        noi_dung: "Một người chưa vào đạo mà cầu nguyện là dấu rất tốt, khởi sự cầu nguyện là khởi sự có đức tin.",
        chuong: 7,
    },
    {
        stt: 138,
        noi_dung: "Tinh thần cầu nguyện giống như một lò lửa nung đốt tâm hồn tông đồ của con. Mu ốn nuôi ngọn lửa ấy, con hãy nhen vào đó những thanh gỗ lớn của hy sinh, của những cuộc tĩnh tâm và cả những que củi nhỏ của lời nguyện tắt và hy sinh thầm kín. và bổ túc những gì còn thiếu trong đức tin của anh em. của mọi việc Tông đồ trong Giáo hội, nên hiển nhiên là kết qủa phong phú của việc tông đồ giáo dân tuỳ thuộc ở sự kết hiệp sống động của chính họ với Chúa Kitô, Đ ấng phán rằng: Ai ở trong Th ầy và Thầy ở trong k ẻ ấy, như vậy mới sinh được nhiều hoa trái vì ngoài Thầy ra chúng con chẳng làm gì được (Ga 15,5).",
        chuong: 7,
        loi_chua: [
            "1Tx 3,10: Đê m ngày chúng tôi tha thi ết nài xin Chúa cho được thấy mặt anh em",
            "TĐ  4a: Vì Ch úa Kitô, Đ ấng được Chúa Cha sai đến, là nguồn mạch nguyên ủy",
        ],
        tham_chieu: [
            "Ep 6,18",
            "GH 41c; PV 12; DT 8b; TĐ  16ag",
        ],
    },
    {
        stt: 139,
        noi_dung: "Dầu miệng con kh ông nói ra, Ch úa đã hiểu thấu lòng con. Con h ãy xem g ương người đàn bà băng huyết: động đến gấu áo Chúa, được nhận lời ngay. nói nhiều là được nhận lời. Đ ừng bắt chước họ, vì Cha anh em đã biết rõ anh em cần gì, trước khi anh em cầu xin.",
        chuong: 7,
        loi_chua: [
            "Mt  6,7-8: Khi cầu nguyện, anh em đừng lải nhải như dân ngoại; họ nghĩ rằng: cứ",
        ],
        tham_chieu: [
            "Mt 9,20; Lc 12,30",
        ],
    },
    {
        stt: 140,
        noi_dung: "Con t ội lỗi không dám ra t rước mặt Chúa, nhưng lời Hội thánh khiến con v ững tâm: Nhờ Đ ức Kitô, Chúa chúng con. Tất cả công nghiệp của Chúa Giêsu, Đ ức Mẹ và các thánh không đủ bao bọc lời cầu nhỏ bé của con sao? những điều này, để anh em đừng phạm tội. Nhưng nếu ai phạm tội, thì chúng ta có một Đ ấng Bảo Trợ trước mặt Chúa Cha: đó là Đ ức Giêsu Kitô, Đ ấng Công Chính. Chính Đ ức Giêsu Kitô là của lễ đền bù tội lỗi chúng ta, kh ông những tội lỗi chúng ta mà thôi, nhưng còn tội lỗi cả thế gian nữa. đưa chúng ta t ới gần Chúa Kitô hơn, thì s ự liên kết với các thánh cũng hiệp nhất chúng ta với Người, là Đ ầu và là Nguồn phát sinh mọi ân sủng và sự sống của chính D ân Thiên Chúa. Do đó, điều hết sức thích đáng l à ch úng ta y êu mến các bạn hữu và các người đồng thừa tự của Chúa Kitô, cũng là anh em và ân nhân đặc biệt của chúng ta, cũng như chúng ta dâng lời cảm tạ Thiên Chúa vì các ngài và thành khẩn van n ài, chạy đến xin c ác ngài cầu nguyện và trợ lực, giúp đỡ, hầu Chúa Cha ban cho nhiều ơn lành, nhờ Chúa Giêsu Kitô, Con Chúa, Chúa chúng ta, Đ ấng Cứu chuộc và Giải thoát duy nhất của chúng ta.",
        chuong: 7,
        loi_chua: [
            "1Ga 2,1-2: Hỡi anh em l à những người con b é nhỏ của tôi, tôi viết cho anh em",
            "GH 50c: C ũng như mối hiệp thông giữa các Kitô hữu còn sống trên dương thế",
        ],
        tham_chieu: [
            "Rm 8,34; DT 7,25",
            "GH 49, 50a, 51a, 62a",
        ],
    },
    {
        stt: 141,
        noi_dung: "Con tưởng trẻ em chưa làm gì được, người bệnh không còn làm gì được cho Hội thánh sao? Không đâu, sau l ời cầu chính th ức của Hội thánh, lời nguyện của trẻ em v à bệnh nhân rất đẹp lòng Chúa. Năng nhắc họ ý thức! Người ấy hãy hát thánh ca.",
        chuong: 7,
        loi_chua: [
            "Gc 5,13: Ai trong anh em đau khổ ư? Người ấy hãy cầu nguyện. Ai vui vẻ chăng?",
        ],
        tham_chieu: [
            "Mt 19,13-15",
        ],
    },
    {
        stt: 142,
        noi_dung: "Giờ cầu nguyện là giờ tâm sự với Chúa là Cha, ch ứ không phải là giờ làm bài, là giờ của quả tim, chứ không phải là giờ của luân lý. Đ ừng nặn óc bóp trán để trình bày với Chúa. chúng ta kh ông biết cầu nguyện thế nào cho ph ải; nhưng chính Th ần Khí c ầu thay nguyện giúp chúng ta, bằng những tiếng rên siết khôn tả.",
        chuong: 7,
        loi_chua: [
            "Rm 8,26: H ơn n ữa, l ại c ó Th ần Khí gi úp đỡ ch úng ta l à nh ững k ẻ y ếu hèn, vì",
        ],
    },
    {
        stt: 143,
        noi_dung: "Nhiều xứ không có linh mục đã giữ vững đức tin su ốt nhiều chục năm, nhờ đọc kinh cầu nguyện trong các gia đình.",
        chuong: 7,
    },
    {
        stt: 144,
        noi_dung: "Lời cầu nguyện của con ph ải phổ cập, quả tim con ph ải chứa đựng cả thế gian, nh ưng đừng vì đó mà quên những thực tế trong con và chung quanh con. tạ ơn cho tất cả mọi người… Đó  là điều tốt và đẹp lòng Thiên Chúa, Đ ấng cứu độ chúng ta, Đ ấng muốn cho mọi người được cứu độ và nhận biết chân lý.",
        chuong: 7,
        loi_chua: [
            "1Tm 2,1.3-4: Trước hết, tôi khuyên ai nấy dâng lời cầu xin, khẩn nguyện, nài van,",
        ],
        tham_chieu: [
            "Ep 6,18",
        ],
    },
    {
        stt: 145,
        noi_dung: "Sách thêng liêng làm nhiều người nên thánh, đó là dầu nuôi lò lửa cầu nguyện.",
        chuong: 7,
    },
    {
        stt: 146,
        noi_dung: "Đ ặc bi ệt với t âm h ồn toàn hi ến, đáng lẽ trong l ý l ịch ph ải khai: Ng ười nghiệp: c ầu nguyện. C ác ngh ề kh ác th ế gian đều l àm c ả. Th ế gian đòi h ỏi con gi ữ đại l ý c ầu nguyện và nài xin con: Cầu nguyện cho tôi. Chúa. cầu nguy ện, m úc l ấy n ơi ngu ồn m ạch đích th ực của n ền tu đức Kit ô gi áo. Trước hết, hằng ngày phải có quyển Thánh Kinh trong tay, để nhờ đọc và suy gẫm m à h ọc được nh ững kiến th ức si êu việt về Ch úa Giêsu Kit ô (Pl 3,8). Phải theo tinh thần của Giáo hội mà đem hết tâm hồn, miệng lưỡi chu toàn các Lễ nghi Phụng vụ, nhất là Mầu nhiệm Thánh Thể, lại phải nuôi dưỡng đời sống tu đức bằng nguồn mạch phong phú ấy.",
        chuong: 7,
        loi_chua: [
            "Cv 6,4: C òn chúng tôi, chúng tôi sẽ chuyên lo c ầu nguyện và phục vụ Lời Thiên",
            "DT 6b: Tu s ĩ của các hội dòng cần mẫn luyện tập tinh th ần cầu nguyện và cả sự",
        ],
        tham_chieu: [
            "Cv 2,42; Ep 1,16",
            "GH 26c, 27c; LM 14a, 18c; Đ T 8b",
        ],
    },
    {
        stt: 147,
        noi_dung: "Không phải Maria ngồi yên dưới chân Chúa vì làm biếng. Phúc âm không phong thánh người làm biếng. Maria chọn phần nhứt: nghe Chúa nói, để lời Chúa thấm tận tâm can, lay chuyển mình, làm việc trong mình. Có gì hoạt động bằng sự lột xác, sự biến đổi ấy? (x. Lc 10.42) cách riêng các tu sĩ hãy năng đọc Thánh Kinh để học biết khoa học siêu việt của Chúa Giêsu Kitô (Pl 3,8), Vì không biết Thánh Kinh là không biết Chúa Kitô. Hy sinh là dấu chứng của tình yêu.",
        chuong: 7,
        loi_chua: [
            "MK 25a: Thánh Công đồng cũng tha thiết và đặc biệt khuyến khích mọi Kitô hữu,",
            " ",
        ],
        tham_chieu: [
            "MK 26; LM 13b; TD 11b",
        ],
    },
    {
        stt: 148,
        noi_dung: "Hy sinh và nguyện ngắm đi đôi: Nếu con không hy sinh, con đừng phàn nàn vì nguyện ngắm nguội lạnh.",
        chuong: 8,
    },
    {
        stt: 149,
        noi_dung: "Con phải hy sinh nhi ều, khi s ống giữa những người khác chính ki ến con, kh ác địa vị con, khác lý tưởng con. Hãy xem gương Chúa Giêsu là Thiên Chúa, Ngài sống giữa loài người tội lỗi,33 năm hy sinh liên lỉ. thông hiệp này biết hy sinh ý riêng mình, qua vi ệc vâng lời phục vụ Chúa và anh em, b ằng cách lấy tinh th ần đức tin m à lãnh nhận và tuân theo nh ững gì được Đ ức Giáo Hoàng, Đ ức Giám Mục của mình, c ũng như các Bề trên khác truyền dạy và khuyên bảo, bằng cách hoàn toàn sẵn lòng tự hiến và tự hiến hết mức cho mình dù là thấp kém và nghèo hèn.",
        chuong: 8,
        loi_chua: [
            "LM 15b: Đ ức bác ái mục vụ thôi thúc các Linh m ục đang hoạt động trong m ối",
        ],
        tham_chieu: [
            "GH 10b, 41a; Đ T 9a",
        ],
    },
    {
        stt: 150,
        noi_dung: "Gặp người làm khổ con, con có thể có hai thái độ: Người này hại tôi! – Người này thánh hóa tôi. thấy họ sẽ bị hư vong, còn đối với anh em, thì lại là dấu chỉơn cứu độ. Đ iều ấy là ân huệ Thiên Chúa ban.",
        chuong: 8,
        loi_chua: [
            "Pl 1,28: Về bất cứ điều gì, đừng sợ những kẻ chống đối anh em: đó là dấu chỉ cho",
        ],
        tham_chieu: [
            "1Pr 2,19-20",
        ],
    },
    {
        stt: 151,
        noi_dung: "Thiên hạ nói: Người này là mối họa cho tôi! Con phải nói: Người này là khí cụ Chúa dùng biến đổi tôi!",
        chuong: 8,
    },
    {
        stt: 152,
        noi_dung: "Ai cũng kính trọng những người được in năm dấu thánh, nhưng ai cũng sợ Chúa in năm dấu thánh trên mình bằng hy sinh.",
        chuong: 8,
    },
    {
        stt: 153,
        noi_dung: "Con nghĩ rằng con không có gì để hy sinh cho Chúa, nhưng Chúa thấy con bỏ qua nhiều dịp: tươi cười với một người nói móc họng, thinh l ặng trước một vu cáo bất công, yêu thương một người bạn phản bội, không nói một lời hóc búa trả đũa. Mỗi giây phút đều có dịp hy sinh.",
        chuong: 8,
    },
    {
        stt: 154,
        noi_dung: "Đ ừng hy sinh kiểu Biệt phái, hãy hy sinh theo Phúc âm. cho ra vẻ thiểu não, để thiên hạ thấy là chúng ăn chay. Thầy bảo thật anh em, chúng đã được phần thưởng rồi.",
        chuong: 8,
        loi_chua: [
            "Mt 6,16: Khi ăn chay, anh em chớ làm bộ rầu rĩ như bọn đạo đức giả: chúng làm",
        ],
    },
    {
        stt: 155,
        noi_dung: "Người thực sự yêu thương, luôn luôn hy sinh mà không bao giờ kể công.",
        chuong: 8,
        loi_chua: [
            "Mt 6,3: Còn anh, khi bố thí, đừng cho tay trái biết việc tay phải làm.",
        ],
        tham_chieu: [
            "Mt 6,17-18",
        ],
    },
    {
        stt: 156,
        noi_dung: "Con nói: Tôi không có dịp hy sinh; đó là dấu con chưa mến Chúa. Thánh Thần, được thánh hiến để trở thành chỗ ở thiêng liêng và nhận chức tư tế thánh, hầu qua m ọi hoạt động của con ng ười Kitô hữu, dâng hy t ế thiêng liêng và rao truy ền những kỳ công của Đ ấng đã gọi họ từ bóng tối đến ánh sáng kỳ diệu của Ngài (x. 1Pr 2,4-10). Vì thế, tất cả các môn đệ của Chúa Kitô, trong khi ki ên tâm cầu nguyện và cùng nhau ca t ụng Thiên Chúa (x. Cv 2,42 - 47), họ phải dâng mình làm hy vật sống động, thánh thiện đẹp lòng Thiên Chúa (x. Rm 12,1), phải làm chứng về Chúa Kitô trên khắp mặt đất và trình bày niềm hy vọng về cuộc sống vĩnh cửu mà họ ôm ấp cho những ai đang khao khát (x. 1Pr 3,15).",
        chuong: 8,
        loi_chua: [
            "GH 10a: Những người đã lãnh phép rửa, nhờ sự tái sinh v à xức dầu của Chúa",
        ],
        tham_chieu: [
            "MV 38a; LM 13b, 15; TG 12a, 25b",
        ],
    },
    {
        stt: 157,
        noi_dung: "Không hy sinh, kh ông có nhân đức thánh thiện. Ai ch ưa bỏ mình v ác thánh giá thì chưa theo Thầy được. Đó  là điều kiện tiên quyết. mọi sự (x. Mc 10,28), để theo Ng ười (x. Mt 19,21) nh ư một điều cần thiết duy nhất (x. Lc 10,42), nghe lời Người (x. Lc 10,39) và lo âu đến những gì thuộc về Người (x. 1Cr 7,32).",
        chuong: 8,
        loi_chua: [
            "Mt 10,38: Ai không vác thập giá mình mà theo Thầy, thì không xứng với Thầy.",
            "DT 5d: C ác tu s ĩ phải trung th ành với lời khấn của mình v à vì Chúa Kitô, từ bỏ",
        ],
        tham_chieu: [
            "Mt 16,24",
            "PV 12; LM 12b, 13; Đ T 9a",
        ],
    },
    {
        stt: 158,
        noi_dung: "Hy sinh con, đừng hy sinh kẻ khác!",
        chuong: 8,
    },
    {
        stt: 159,
        noi_dung: "Vì yêu thương, ta sẵn sàng hy sinh tất cả như Chúa Giêsu: … để cho thế gian biết là Ta yêu mến Cha, v à như Cha truy ền dạy Ta sao, Ta l àm như vậy. Đ ứng dậy! Ta đi khỏi đây! (Ga 14,31). hữu sống bác ái và khuyên họ phải có tâm tình như Chúa Giêsu Kitô Đ ấng tự diệt mình, nhận lấy hình hài tôi tớ…, v à vâng lời cho đến chết (Pl 2,7-8), và vì chúng ta, Người đã trở nên nghèo nàn tuy Ng ười vốn giàu sang (2Cr 8,9). Việc noi theo v à làm chứng đức ái cùng sự khiêm hạ của Chúa Kitô cần được các môn đệ thực hiện không ngừng; nên Giáo hội là Mẹ chúng ta vui l òng khi thấy trong lòng mình có nhiều con cái nam nữ muốn theo sát gương Đ ấng Cứu Thế và tỏ lộ rõ ràng hơn sự tự diệt của Người.",
        chuong: 8,
        loi_chua: [
            "GH 42d: Giáo hội cũng nhớ lời khuyên nhủ của thánh Tông đồ thúc giục các tín",
        ],
        tham_chieu: [
            "MV 22c; TG 25b",
        ],
    },
    {
        stt: 160,
        noi_dung: "Nếu con không hy sinh bên ngoài, không ai tin con hy sinh bên trong. Hy sinh giác quan rất quan hệ: Đ avít đã sa ngã vì không giữ mắt. thà mất một phần thân thể, còn hơn là toàn thân bị ném vào hoả ngục.",
        chuong: 8,
        loi_chua: [
            "Mt 5,29: Nếu mắt phải của anh làm cớ cho anh sa ngã, thì hãy móc mà ném đi; vì",
        ],
    },
    {
        stt: 161,
        noi_dung: "Đ ức Giêsu… đã yêu mến các kẻ thuộc về Ngài còn trong thế gian, thì Ngài đã yêu mến họ đến cùng (Ga 13,1). Tận cùng ấy là Thánh gia. Hy sinh của con phải trọn vẹn, phải là lễ toàn thiêu, nếu con yêu mến đến tận cùng!. sinh mạng sống vì chúng ta, nên không ai có tình yêu cao cả hơn người hy sinh mạng sống vì Ch úa và vì anh em (x. 1Ga 3,16; Ga 15,13). M ột số Kitô hữu ngay từ thời sơ khai đã được gọi và sẽ còn được gọi mãi để làm chứng tình yêu ấy cách hùng hồn trước mặt mọi người, nhất là trước mặt những kẻ bách hại mình. Khi tử đạo, người môn đệ đồng hoá với Thầy mình, Đ ấng đã tình nguyện chấp nhận cái chết để cứu độ thế giới, và người môn đệ nên giống Người trong việc đổ máu; Giáo hội coi việc tử đạo đó như một ân huệ lớn lao và một bằng chứng cao cả về đức ái.",
        chuong: 8,
        loi_chua: [
            "GH 42b: Vì Chúa Giêsu, Con Thiên Chúa, đã tỏ tình yêu của Người bằng cách hy",
        ],
        tham_chieu: [
            "GH 41b; MV 93; LM 12b, 13c, 13d; DT 9a",
        ],
    },
    {
        stt: 162,
        noi_dung: "Cái gì làm con xa Ch úa, hãy hy sinh nó đi: Móc mắt, chặt tay, cưa chân… (x. Mt 5,29 - 30; 18,8-9).",
        chuong: 8,
    },
    {
        stt: 163,
        noi_dung: "Chúa thường gởi hy sinh đến những người Chúa yêu, nhưng hạng người được Chúa yêu ít lắm, vì không mấy ai chấp nhận hy sinh. đến diệt vong, m à nhiều người lại đi qua đó. Còn cửa hẹp và đường chật thì đưa đến sự sống, nhưng ít người tìm được lối ấy.",
        chuong: 8,
        loi_chua: [
            "Mt 7,13-14: Hãy qua cửa hẹp mà vào, vì cửa rộng và đường thênh thang thì đưa",
        ],
    },
    {
        stt: 164,
        noi_dung: "Không hy sinh nổi những việc nhỏ, con sẽ đầu hàng trước những hy sinh lớn hơn.",
        chuong: 8,
    },
    {
        stt: 165,
        noi_dung: "Đ ể thúc đẩy con, mỗi lần hy sinh hãy định rõ một mục tiêu: cứu một linh hồn, dâng cho một bệnh nhân, cầu cho Hội thánh ở một địa phương đang gặp khó khăn.",
        chuong: 8,
    },
    {
        stt: 166,
        noi_dung: "Ai hăng hái chỗi dậy ban sáng, sẽ hăng hái suốt ngày. Phút thức dậy rất quan hệ.",
        chuong: 8,
    },
    {
        stt: 167,
        noi_dung: "Đ ừng nhát sợ! Hãy xem g ương thánh Phaolô: đói khát, rách rưới, trộm cướp, roi đòn, đắm tàu, vu vạ, tù ngục, chết chóc… Nếu con sợ, đừng làm tông đồ. gian truân, khốn khổ, đói rách, hiểm nguy, bắt bớ, gươm giáo ?",
        chuong: 8,
        loi_chua: [
            "Rm 8,35: Ai c ó thể tách chúng ta ra kh ỏi tình y êu của Đ ức Kitô? Phải chăng là",
        ],
        tham_chieu: [
            "Rm 8,38-39; Pl 1,12-14; 1Tx 2,1-2; 1Pr 3,13-14",
        ],
    },
    {
        stt: 168,
        noi_dung: "Nếu biết chế ngự bằng hy sinh, h ồn và xác con l à hai ng ười bạn đoàn kết và vô địch. Nếu không biết chế ngự: hồn và xác con là hai kẻ thù không bao giờ lìa nhau. người khác, chính tôi lại bị loại.",
        chuong: 8,
        loi_chua: [
            "1Cr 9,27: Tôi bắt thân thể phải chịu cực và phục tùng, kẻo sau khi rao giảng cho",
        ],
        tham_chieu: [
            "Rm 7,15; 1Pr 4,1-2",
        ],
    },
    {
        stt: 169,
        noi_dung: "Người hy sinh bi ết r ộng l ượng tr ước khuy ết điểm c ủa ng ười v à nghi êm kh ắc tr ước khuyết điểm của mình.",
        chuong: 8,
    },
    {
        stt: 170,
        noi_dung: "Có những người hy sinh mà muốn mọi người biết mình hy sinh. Có những người không hy sinh mà muốn mọi người biết mình hy sinh. Có những người hy sinh luôn, mà không muốn ai biết mình hy sinh.",
        chuong: 8,
    },
    {
        stt: 171,
        noi_dung: "Trong một cuộc hành hương long tr ọng, hằng vạn người tham gia, ai c ũng muốn vác thánh giá đi tiên phong. Nhưng trong cu ộc hành hương của mỗi ngày, mấy ai sẵn lòng vác thánh giá của mình? Anh hùng thinh lặng khó lắm!",
        chuong: 8,
    },
    {
        stt: 172,
        noi_dung: "Thánh thiện và tội lỗi, lắm lúc chỉ do thắng bại của một phút hy sinh.",
        chuong: 8,
    },
    {
        stt: 173,
        noi_dung: "Kinh Tin Kính ph ải đánh động con, vì s ự hy sinh c ủa Ch úa Gi êsu: Người đã nh ập thể… v à đã làm người. Người chịu đóng đinh… ch ịu tử hình, và mai t áng… Hy sinh trong cả cuộc sống, như của lễ toàn thiêu. sống cho chính mình nữa, mà sống cho Đ ấng đã chết và sống lại vì mình.",
        chuong: 8,
        loi_chua: [
            "2Cr 5,15: Đ ức Kitô đã chết thay cho mọi người, để những ai đang sống không còn",
        ],
        tham_chieu: [
            "Dt 12,1-3",
        ],
    },
    {
        stt: 174,
        noi_dung: "Con c ó thể hy sinh m ạng sống, hy sinh c ả cu ộc đời, vì hy sinh chan ch ứa v ào Ch úa Giêsu: Người sống lại như lời Thánh kinh, Người lên trời. Người sẽ trở lại trong vinh quang… N ước Người sẽ không bao giờ cùng. Đ ấng xuất thân từ dòng dõi Đ a-vít, như tôi vẫn nói trong Tin M ừng tôi loan báo. Vì Tin Mừng ấy, tôi chịu khổ, tôi còn phải mang cả xiềng xích như một tên gian phi. Nh ưng lời Thiên Chúa đâu bị xiềng xích! Đâ y l à lời đáng tin c ậy: Nếu ta cùng chết với Người, ta sẽ cùng sống với Người.",
        chuong: 8,
        loi_chua: [
            "2Tm 2,8-9.11: Anh h ãy nhớ đến Đ ức Giêsu Kitô, Đ ấng đã sống lại từ c õi chết,",
        ],
        tham_chieu: [
            "1Tx 1,9-10",
        ],
    },
    {
        stt: 175,
        noi_dung: "Đ ừng nghĩ chỉ có mình con hy sinh. Hãy nhìn quanh con, từ những đứa bé bán báo kiếm tiền phụ giúp cha m ẹ, đến những cụ già hy sinh t ất cả để nuôi con, nuôi cháu… Con phải hổ thẹn, con hãy cảm phục. Có những người đói rách, nhưng dưới lớp áo tả tơi, có quả tim anh hùng. Đ ừng để quả tim con già nua",
        chuong: 8,
        loi_chua: [
            " ",
        ],
    },
    {
        stt: 176,
        noi_dung: "Đ ừng dâng tim con cho Ch úa, rồi tìm quả tim người khác thay vào. Chúa không muốn con chơi: Trò ghép tim ấy đâu.",
        chuong: 9,
    },
    {
        stt: 177,
        noi_dung: "Các thánh càng già thì quả tim họ càng tươi trẻ.",
        chuong: 9,
    },
    {
        stt: 178,
        noi_dung: "Đ ừng để tháng ngày làm cho qu ả tim con gi à nua. H ãy yêu thương với một tình y êu ngày càng mãnh liệt, mới mẻ, trong trắng hơn: tình yêu Chúa đổ vào quả tim con. vinh hiển, ban cho anh em được củng cố mạnh mẽ nhờ Thần Khí của Người, để con người nội tâm nơi anh em được vững vàng. Xin cho anh em, nh ờ lòng tin, được Đ ức Kit ô ng ự trong t âm h ồn; xin ch o anh em được b én rễ s âu v à x ây dựng vững chắc trên đức ái, để cùng toàn thể dân thánh, anh em đủ sức thấu hiểu mọi kích thước dài rộng cao sâu. của người nghèo và những ai đau khổ, cũng là vui mừng và hy vọng, ưu sầu và lo lắng của các môn đệ Chúa Kitô, và không có gì th ực sự của con ng ười mà lại không gieo âm hưởng trong quả tim họ.",
        chuong: 9,
        loi_chua: [
            "Ep 3,16-18: Tôi nguyện xin Chúa Cha, thể theo sự phong phú của Người là Đ ấng",
            "MV 1: Vui m ừng và hy vọng, ưu sầu và lo l ắng của con ng ười ngày nay, nh ất là",
        ],
        tham_chieu: [
            "GH 42a; DT 1c, 6a",
        ],
    },
    {
        stt: 179,
        noi_dung: "Ngần ngại gì? Hãy cắt đứt xích xiềng ràng buộc con, dù là xích vàng, để tiến lên. Cuối đường có Chúa đón chờ con. đem cho ng ười nghèo, anh s ẽ được một kho t àng trên trời. Rồi hãy đến theo Ta. Nghe lời đó, người thanh niên buồn rầu bỏ đi, vì anh ta có nhiều của cải. vọng vì h ọ nghĩ rằng: Những đau khổ hiện thời chẳng thấm vào đâu so v ới vinh quang sắp tới sẽ được giãi bày cho chúng ta (Rm 8,18).",
        chuong: 9,
        loi_chua: [
            "Mt 19,21-22: Nếu anh mu ốn nên hoàn thiện, thì h ãy đi bán tài sản của anh v à",
            "TĐ  4e: Gi ữa những cơn thử thách đời này họ tìm th ấy sức mạnh trong ni ềm hy",
        ],
        tham_chieu: [
            "GH 7e; MV 22d; LM 16bc; Đ T 5a",
        ],
    },
    {
        stt: 180,
        noi_dung: "Con thường nói: Phải mà tôi đã dứt khoát từ đầu! Mong con đừng còn phải nhắc lại lời hối tiếc muộn màng ấy.",
        chuong: 9,
    },
    {
        stt: 181,
        noi_dung: "Con cảm thấy quả tim con y ếu đuối. Các thánh cũng như con. Nh ưng nhờ vậy họ mới làm thánh: nhờ ơn Chúa và ý chí. cứ làm.",
        chuong: 9,
        loi_chua: [
            "Rm 7,19: Sự thiện tôi muốn thì tôi không làm, nhưng sự ác tôi không muốn, tôi lại",
        ],
    },
    {
        stt: 182,
        noi_dung: "Con dâng cho Chúa một quả tim, trong đó đủ mọi thụ tạo chen nhau chi ếm chỗ rồi con bảo Chúa nhận và giữ quả tim ấy sao? linh hồn và hết trí khôn ngươi.",
        chuong: 9,
        loi_chua: [
            "Mt 22,37: Ng ươi phải yêu mến Đ ức Chúa, Thiên Chúa của ngươi, hết lòng, hết",
        ],
        tham_chieu: [
            "1Cr 6,15",
        ],
    },
    {
        stt: 183,
        noi_dung: "Con đổi một quả tim nhàu nát, để lấy Thánh Tâm yêu thương Chúa sao được? chúng ta trước.",
        chuong: 9,
        loi_chua: [
            "1Ga 4,19: Phần chúng ta, chúng ta hãy yêu thương, vì Thiên Chúa đã yêu thương",
        ],
    },
    {
        stt: 184,
        noi_dung: "Con nói: Đâ y là những tình bạn nâng đỡ tôi. Hãy xem, nếu không tiến lên thì đó chỉ là gánh nặng đè bẹp con xuống thôi.",
        chuong: 9,
    },
    {
        stt: 185,
        noi_dung: "Con muốn mang quả tim con rao b án qua tay m ọi người, khi đã chê chán rồi mới đem dâng cho Chúa! Chúa dại hơn con sao?",
        chuong: 9,
    },
    {
        stt: 186,
        noi_dung: "Chúa muốn tất cả lòng con, Chúa không chấp nhận chia sẻ với ai. hoặc sẽ gắn bó với chủ này mà khinh dể chủ nọ. Anh em không thể vừa làm tôi Thiên Chúa vừa làm tôi Tiền Của được.",
        chuong: 9,
        loi_chua: [
            "Mt 6,24: Không ai có thể làm tôi hai chủ, vì hoặc sẽ ghét chủ này mà yêu chủ kia,",
        ],
        tham_chieu: [
            "Gl 4,8-11; 1Ga 2,15",
        ],
    },
    {
        stt: 187,
        noi_dung: "Bỏ tất cả, con sẽ được tất cả, sẽ cứu tất cả. Chúa Giêsu đã nói: Và Ta, một khi Ta được giương cao khỏi đất, Ta sẽ kéo mọi người lại với Ta (Ga 12,32). ban cho m ột s ố ng ười (x. Mt 19,11; 1Cr 7,7), để h ọ t ận hi ến tr ọn tình y êu không chia sẻ cho một mình Chúa cách dễ dàng hơn, trong bậc đồng trinh hay độc thân (x. 1Cr 7,32 -34). Sự tiết dục hoàn toàn vì Nước Trời luôn được Giáo hội đặc bi ệt qu ý tr ọng v à coi nh ư d ấu ch ỉ v à động l ực c ủa đức ái, v à nh ư nguồn mạch đặc biệt sinh nhiều ơn ích thiêng liêng trong thế giới.",
        chuong: 9,
        loi_chua: [
            "GH 42c: Trong những lời khuyên, trước hết phải kể ân huệ cao quý mà Chúa Cha",
        ],
        tham_chieu: [
            "MV 22c, 32c; DT 1c",
        ],
    },
    {
        stt: 188,
        noi_dung: "Đ ừng nghĩ rằng bỏ mọi sự, quả tim con s ẽ lạnh nhạt, đời con sẽ cô đơn, không thu hút được ai. Không! Con sẽ được ánh sáng và sức nóng của Thánh Tâm Chúa thay vào. Hãy xem sức mạnh của các thánh. thuộc thượng giới, nơi Đ ức Kitô đang ngự bên hữu Thiên Chúa. Anh em h ãy hướng lòng trí về những gì thuộc thượng giới, chứ đừng chú tâm vào những gì thuộc hạ giới. Thật vậy, anh em đã chết, và sự sống mới của anh em hiện đang tiềm tàng với Đ ức Kitô nơi Thiên Chúa.",
        chuong: 9,
        loi_chua: [
            "Cl 3,1-3: Anh em đã được trỗi dậy cùng với Đ ức Kitô, nên hãy tìm kiếm những gì",
        ],
        tham_chieu: [
            "Gl 2,20; Pl 1,21",
        ],
    },
    {
        stt: 189,
        noi_dung: "Các thánh bỏ mọi sự, nhưng các thánh đi đâu, thiên hạ theo đến đó: Xem g ương Cha Piô, thánh Gioan Vianney…",
        chuong: 9,
    },
    {
        stt: 190,
        noi_dung: "Không chịu theo Chúa, nhưng con đành làm nô lệ, theo ý riêng của người nọ, người kia!",
        chuong: 9,
    },
    {
        stt: 191,
        noi_dung: "Quả tim v à bổn phận, phải chọn bên nào? Hãy chọn bổn phận và thực hiện với tất cả quả tim. tuyển chọn ngay giữa Dân Chúa, nhưng không phải để tách biệt khỏi họ hoặc bất cứ một người nào, mà để hoàn toàn tận hiến làm công việc Chúa đã chọn họ l àm. C ác ng ài kh ông th ể l àm th ừa t ác vi ên c ủa Ch úa Kit ô nếu kh ông l à chứng nhân và là người ban phát một đời sống khác một đời sống thế tục; tuy nhiên c ác ng ài kh ông th ể ph ục v ụ nh ân lo ại n ếu l ại s ống xa cu ộc s ống v à những hoàn cảnh của họ. Chính th ừa tác vụ của các ngài, vì mang m ột danh nghĩa đặc biệt, nên đòi buộc các ngài không được theo th ói thế gian; nh ưng đồng thời lại đòi hỏi các ngài sống trong thế gian giữa loài người.",
        chuong: 9,
        loi_chua: [
            "LM 3: C ác Linh m ục Tân Ư ớc, do ơn gọi và chức thánh, một cách nào đó được",
        ],
        tham_chieu: [
            "GH 34b, 41cg; MV 34b, 38a, 93",
        ],
    },
    {
        stt: 192,
        noi_dung: "Dùng tình yêu để làm tông đồ, một cớ rất hay! Nhưng hãy xét lại, bây giờ chỉ còn tình chứ không còn gờ – ram tông đồ nào nữa.",
        chuong: 9,
    },
    {
        stt: 193,
        noi_dung: "Bao nhiêu mối tình vớ vẩn vấn vương, bấy nhiêu vòng xích buộc con không bay lên cao được.",
        chuong: 9,
    },
    {
        stt: 194,
        noi_dung: "Không phải tổng số hoạt động là quan h ệ, nhưng chính cao độ của tình y êu biến đổi hành động của con mới quan hệ. toàn Lề Luật vậy. Quyết mê một cuốn sách: PHÚC ÂM Quyết theo một lý tưởng: CUỘ C Đ Ờ I CHÚA GIÊSU",
        chuong: 9,
        loi_chua: [
            "Rm 13,10: Đ ã yêu thương thì kh ông làm hại người đồng loại; yêu thương là chu",
            " ",
        ],
    },
    {
        stt: 195,
        noi_dung: "Chúa ban cho con một Đ ức Giêsu, Chúa cũng ban tự do để con làm thành một đời thánh thiện, cao đẹp, hữu ích hay ph á tán thành một cuộc sống cằn cỗi, phản bội, độc hại, đê hèn. em do l òng yêu thương của Người. Anh em h ãy làm mọi việc mà đừng kêu ca hay phản kháng. Như thế, anh em s ẽ trở nên trong s ạch, không ai ch ê trách được điều gì, v à sẽ trở nên những người con v ẹn toàn của Thiên Chúa, giữa một thế hệ gian tà, sa đoạ. Giữa thế hệ đó, anh em phải chiếu sáng như những vì sao trên vòm trời con ng ười. B ởi vì Thi ên Ch úa đã mu ốn để con ng ười t ự định li ệu, h ầu con người tự mình đi tìm Đ ấng Tạo Dựng và nhờ kết hợp với Ngài con người tiến tới sự hoàn thiện trọn vẹn và hạnh phúc. Vậy phẩm giá của con người đòi hỏi họ phải hành động theo sự chọn lựa ý thức và tự do, nghĩa là chính con người được thúc đẩy và hướng dẫn tự bên trong, ch ứ không do b ản năng mù quáng hay cưỡng chế hoàn toàn bên ngoài.",
        chuong: 10,
        loi_chua: [
            "Pl 2,13-15: Vì chính Thiên Chúa tác động đến ý chí cũng như hành động của anh",
            "MV 17: T ự do đích thực là dấu chỉ cao c ả nhất của hình ảnh Thiên Chúa trong",
        ],
        tham_chieu: [
            "Pl 4,8; Dt 6,7-8",
            "TD 2b",
        ],
    },
    {
        stt: 196,
        noi_dung: "Người ích kỷ tránh trách nhiệm, tránh mệt nhọc, tránh hy sinh, họ muốn tạo hạnh phúc, tạo một thiên đàng dành riêng cho họ giữa trần gian, nhưng họ sẽ mất thiên đàng vĩnh viễn. mình ở đời này, thì sẽ giữ lại được cho sự sống đời đời.",
        chuong: 10,
        loi_chua: [
            "Ga 12,25: Ai y êu quý mạng sống mình, thì s ẽ mất; còn ai coi thường mạng sống",
        ],
        tham_chieu: [
            "Pl 3,18-19",
        ],
    },
    {
        stt: 197,
        noi_dung: "Người chí khí xem hi ên hạ là anh em, nhìn c ông việc của thiên hạ như công việc của chính mình. Người ích kỷ xem thiên hạ là nấc thang để mình tiến lên, chỉ biết cái tôi, chỉ biết công việc của tôi. cho anh em.  Th ật vậy, ai nấy đều tìm lợi ích cho mình, ch ứ không tìm lợi ích cho Đ ức Kitô Giêsu. trách nhiệm cá nhân và đoàn thể: khi h ành xử những quyền lợi của mình, c á nhân cũng như đoàn thể, phải tuân giữ luật luân lý nghĩa là phải quan tâm đến quyền l ợi c ủa ng ười kh ác, c ũng nh ư nh ững b ổn ph ận c ủa mình đối v ới tha nhân v à lợi ích chung đối v ới mọi người. Phải đối x ử với mọi người theo l ẽ công bình và tình nhân loại.",
        chuong: 10,
        loi_chua: [
            "Pl 2,20-21: Chẳng có ai khác cùng chia sẻ một tâm tình với tôi và tận tâm lo lắng",
            "TD 7b: Vậy khi hưởng dùng mọi quyền tự do, nguyên tắc luân lý phải tuân giữ là",
        ],
        tham_chieu: [
            "Pl 2,1-4",
            "MV 25c, 83",
        ],
    },
    {
        stt: 198,
        noi_dung: "Lợi dụng quần chúng để tiến thân, không phải là tư cách người lãnh đạo. Con sẽ xứng đáng là người lãnh đạo, nếu con không tránh quần chúng nhưng tìm đến với họ và liều thân cứu họ. những Tin Mừng của Thiên Chúa, mà cả mạng sống của chúng tôi nữa, vì anh em đã trở nên những người thân yêu của chúng tôi.",
        chuong: 10,
        loi_chua: [
            "1Tx 2,8: Chúng tôi đã quý mến anh em, đến nỗi sẵn sàng hiến cho anh em, không",
        ],
        tham_chieu: [
            "Rm 9,3",
        ],
    },
    {
        stt: 199,
        noi_dung: "Đ ừng cho khi ếp nhược là khôn ngoan. Chính vì nhi ều con c ái ánh sáng khôn ngoan kiểu đó, mà con cái tối tăm chiếm đoạt nhiều môi trường họ không dám mơ ước. lỏi vào dò xét sự tự do của chúng ta, sự tự do chúng ta có được trong Đ ức Kitô Giêsu; họ làm như vậy là để bắt chúng ta tr ở thành nô lệ. Nhưng với những người ấy, chúng tôi đã không chịu nhượng bộ, dù chỉ trong giây lát, để duy trì cho anh em chân lý của Tin Mừng. với tha nhân và hơn nữa đối với chính Thiên Chúa, khiến phần rỗi đời đời của mình bịđe dọa… … Nh ưng tốt hơn là chính họ, được đức khôn ngoan Kitô giáo soi dẫn và cẩn thận chú ý các giáo huấn của Giáo hội, hãy nhận lấy trách nhiệm của mình.",
        chuong: 10,
        loi_chua: [
            "Gl 2,4-5: Vì có những tên xâm nhập, những kẻ giả danh giả nghĩa anh em, đã len",
            "MV 43ab: Đ ối với Kitô hữu, xao lãng bổn phận trần thế là xao lãng bổn phận đối",
        ],
        tham_chieu: [
            "MV 34c",
        ],
    },
    {
        stt: 200,
        noi_dung: "Người chí khí không tự mãn. Óc tự mãn như bức tường ngăn con xa Thiên Chúa, xa anh em, xa tất cả, và con không cần ai nữa. xin tạ ơn Chúa, vì con không như bao kẻ khác: tham lam, bất chính, ngoại tình, hoặc như tên thu thuế kia. Tôi nói cho các ông biết: người này, khi trở xuống mà về nhà, thì đã được nên công chính rồi; còn người kia thì kh ông. Vì phàm ai tôn mình lên sẽ bị hạ xuống; còn ai hạ mình xuống sẽ được tôn lên.",
        chuong: 10,
        loi_chua: [
            "Lc 18,11.14: Người Pha-ri-sêu đứng thẳng, nguyện thầm rằng: Lạy Thiên Chúa,",
        ],
        tham_chieu: [
            "Pl 3,3-4",
        ],
    },
    {
        stt: 201,
        noi_dung: "Người chí khí không khoe khoang nhưng có tinh thần hy sinh như thẻ đường, hạt muối: chấp nhận tan biến để làm cho thức ăn có mùi vị ngon lành. chuyện nắm men b à kia l ấy vùi vào ba th úng bột, cho đến khi t ất cả bột dậy men.",
        chuong: 10,
        loi_chua: [
            "Mt 13,33: Ng ười còn kể cho h ọ một dụ ngôn khác: Nước Trời cũng giống như",
        ],
        tham_chieu: [
            "Pl 3,7-8",
        ],
    },
    {
        stt: 202,
        noi_dung: "Người chí khí c ó tâm hồn ngay thẳng và cảm thấy đê nhục khi b ươi móc việc kẻ khác hoặc sống quanh co. thắt điều gì là do ác quỷ.",
        chuong: 10,
        loi_chua: [
            "Mt 5,37: Nh ưng hễ có thì ph ải nói có, không thì ph ải nói không. Thêm",
        ],
        tham_chieu: [
            "Ep 4,14-15.25; 1Tx 2,3.5",
        ],
    },
    {
        stt: 203,
        noi_dung: "Người chí khí không lăng xăng nhúng tay vào công việc mọi người. Phải nhận biết giới hạn của con.",
        chuong: 10,
    },
    {
        stt: 204,
        noi_dung: "Người chí khí bi ết thinh lặng, ăn nói bừa bãi, thiếu suy nghĩ, gieo rắc chia rẽ, thủ đoạn đó là khí cụ của ma quỷ để hạ đức bác ái. dữ, n óng nảy, độc ác, nào là thoá mạ, ăn nói thô tục. Anh em đừng nói dối nhau, vì anh em đã cởi bỏ con người cũ với những hành vi của nó rồi",
        chuong: 10,
        loi_chua: [
            "Cl 3,8-9: Nhưng nay, cả anh em n ữa, hãy từ bỏ tất cả những cái đó: nào là giận",
        ],
        tham_chieu: [
            "Gc 3,5-6; 1Pr 2,1-3",
        ],
    },
    {
        stt: 205,
        noi_dung: "Người chí khí kh ông tọc mạch, dòm ngó việc người khác, nhưng đem tất cả ý chí để biết mình rõ ràng.",
        chuong: 10,
    },
    {
        stt: 206,
        noi_dung: "Tính chỉ trích phê bình là một trở ngại lớn cho đời sống siêu nhiên của con; chỉ tiêu cực phàn nàn kẻ khác, con quấy rầy họ và nuôi dưỡng sự đắng cay trong lòng con.",
        chuong: 10,
    },
    {
        stt: 207,
        noi_dung: "Không bao giờ đem những thất bại, thử thách, đau khổ của con ra nói cách chua chát để chỉ trích người khác.",
        chuong: 10,
    },
    {
        stt: 208,
        noi_dung: "Lờ đi, đó là một từ trong t ự điển của người hèn nhát, lười biếng, không muốn phấn đấu, những người tự nhận lấy thất bại trước rồi.",
        chuong: 10,
    },
    {
        stt: 209,
        noi_dung: "Đ ừng khiêm tốn lỗi thời. Phải c ó cao v ọng: muốn biết, muốn hành động, muốn liều, nhưng vì Chúa, vì Hội thánh. muốn một nhiệm vụ cao đẹp.",
        chuong: 10,
        loi_chua: [
            "1Tm 3,1: Đâ y là lời đáng tin c ậy: ai mong được làm giám quản, người ấy ước",
        ],
    },
    {
        stt: 210,
        noi_dung: "Đ ừng ham cãi vã sôi nổi, con sẽ ra mù quáng. Đ am mê như mây mù, che khuất ánh sáng khôn ngoan của Thiên Chúa. biết r ằng nh ững th ứ ấy sinh ra c ãi c ọ. Th ế m à người t ôi t ớ Ch úa thì kh ông được cãi cọ, nhưng phải dịu dàng với mọi người, có khả năng giảng dạy, biết chịu đựng gian kh ổ. Người ấy phải lấy lòng hiền hoà mà giáo dục những kẻ chống đối: biết đâu Thiên Chúa lại chẳng ban cho họ ơn sám hối để nhận biết chân lý",
        chuong: 10,
        loi_chua: [
            "2Tm 2,23-25: Những tranh lu ận điên rồ và ngu xuẩn, anh h ãy gạt ra một bên, vì",
        ],
        tham_chieu: [
            "2Tm 2,14-15; Tt 3,9",
        ],
    },
    {
        stt: 211,
        noi_dung: "Va chạm người khác là sự thường. Một xã hội không có va ch ạm chỉ có thể là thiên đàng. Một hòn đá nhờ va chạm mà láng hơn, tròn hơn, sạch hơn, đẹp hơn.",
        chuong: 10,
    },
    {
        stt: 212,
        noi_dung: "Con đừng mang bệnh nhẹ tính, nhẹ dạ, nó làm chí khí chết mòn. Triệu chứng của nó là hay thay đổi ý ki ến v à ho ạt động. Đ ời con đừng ch ồng ch ất m ột đống ch ương trình không bao giờ thực hiện.",
        chuong: 10,
    },
    {
        stt: 213,
        noi_dung: "Người nhẹ dạ là một bù nhìn, múa máy mà vô hiệu, vô ích. Chương trình của con, phải làm từ hôm nay, đừng để sang ngày mai.",
        chuong: 10,
    },
    {
        stt: 214,
        noi_dung: "Không có hành động nào mà không phải là thánh giá, nếu không vác nổi thánh giá thì chẳng làm được gì cả.",
        chuong: 10,
    },
    {
        stt: 215,
        noi_dung: "Những việc nhỏ đều quan hệ, con đừng khinh thường. Thắng mình liên lỉ trong các việc nhỏ, con luyện ý chí thành sắt đá và làm chủ bản thân con.",
        chuong: 10,
    },
    {
        stt: 216,
        noi_dung: "Đ iều cần nói, con hãy nói với một giọng khác, bác ái dịu dàng sẽ làm cho lý luận của con truyền cảm hơn, lôi cuốn hơn. Cùng một điều nhưng hai c ách nói, do hai t âm hồn khác nhau và mang lại hai hiệu quả khác nhau. hiện tại.  Lời nói của anh em phải luôn luôn mặn mà dễ thương, để anh em biết đối đáp sao cho phải với mỗi người.",
        chuong: 10,
        loi_chua: [
            "Cl 4,5-6: Anh em h ãy ăn ở khôn ngoan v ới người ngoài; hãy tận dụng thời buổi",
        ],
    },
    {
        stt: 217,
        noi_dung: "Đ ừng đùng đùng quát mắng khi người khác có lỗi. Hãy nhẫn nại đợi chờ. Với lời lẽ dịu dàng v à t ất c ả ý ngay l ành, con đạt nhi ều k ết qu ả h ơn l à ch ửi m ắng nhau t ừng gi ờ. Thành công cho bản thân con và chế ngự được tính tình con. mạ, và hãy loại trừ mọi hành vi gian ác. Trái lại, phải đối xử tốt với nhau, phải có lòng thương xót và biết tha th ứ cho nhau, nh ư Thiên Chúa đã tha th ứ cho anh em trong Đ ức Kitô.",
        chuong: 10,
        loi_chua: [
            "Ep 4,31-32: Đ ừng bao giờ chua cay gắt gỏng, nóng nảy giận hờn, hay la lối thoá",
        ],
        tham_chieu: [
            "Ep  4,2-4; Cl 3,12-14; 2Tm 2,24-26",
        ],
    },
    {
        stt: 218,
        noi_dung: "Ý chí cương quyết: việc phải làm cứ làm, không do dự, không e ngại… B ạo dạn và hy vọng, ơn Chúa và can đảm. chúng tôi đã dạy cho anh e m, bằng lời nói hay b ằng thư từ. Xin chính Ch úa chúng ta l à Đ ức Gi êsu Kit ô, v à xin Thi ên Ch úa là Cha ch úng ta, Đ ấng y êu thương chúng ta và đã dùng ân sủng mà ban cho ch úng ta niềm an ủi bất diệt và niềm cậy trông tốt đẹp, xin c ác Ng ài an ủi và cho t âm hồn anh em được vững mạnh, để làm và nói tất cả những gì tốt lành.",
        chuong: 10,
        loi_chua: [
            "2Tx 2,15-17: Thưa anh em, anh em h ãy đứng vững và nắm giữ các truyền thống",
        ],
        tham_chieu: [
            "2Tx 3,4-5; Rm 8,31-32",
        ],
    },
    {
        stt: 219,
        noi_dung: "Trước trở ngại, con h ãy đứng vững như một tên khổng lồ. Ơ n Chúa không thiếu. Nếu con phải hạn chế hoạt động trong một thời gian, có can gì đâu! Việc con làm là việc của Chúa hơn là việc của con.",
        chuong: 10,
    },
    {
        stt: 220,
        noi_dung: "Thời giờ và sức lực là của Chúa, sao lại phí phạm chỉ vì những trở ngại dọc đường? Đ ại dương bao giờ cũng có sóng, thuyền cứ vững vàng lướt đi, không nghĩ gì đến sóng.",
        chuong: 10,
    },
    {
        stt: 221,
        noi_dung: "Bình tĩnh! Tại sao hốt hoảng tức tối? Thái độ ấy khiến Chúa bị xúc phạm, thiên hạ bực mình, rồi chính con cũng đau khổ… C ó lợi ích gì đâu? Sau đó chỉ mình con hối tiếc và mệt nhọc thêm! nghe, đừng vội nói, và khoan giận, vì khi nóng giận, con người không thực thi đường lối công chính của Thiên Chúa.",
        chuong: 10,
        loi_chua: [
            "Gc 1,19-20: Anh em thân mến của tôi, anh em nên biết rằng: mỗi người phải mau",
        ],
    },
    {
        stt: 222,
        noi_dung: "Đ ừng nói: Tôi tự nhiên vậy, sửa sao được. Không, đó là những khuyết điểm bất xứng với con. Con phải nên người, nên con Chúa. phải vì công lao riêng, nhưng vì ý định và ân phúc của Ngài, các môn đệ Chúa Kitô, nhờ lãnh nhận phép rửa, bí tích đức tin, đã thực sự trở nên con cái Thiên Chúa v à được th ông ph ần v ào b ản tính Ng ài, v à do đó, th ực s ự đã tr ở nên thánh. Cho nên với ơn Chúa họ phải luôn gìn gữ và hoàn thành trong đời sống sự thánh thiện mà họ đã lãnh nhận.",
        chuong: 10,
        loi_chua: [
            "GH: Đư ợc Thiên Chúa kêu gọi và được công chính hoá trong Chúa Giêsu, không",
        ],
        tham_chieu: [
            "GH 14b; LM 12d; HN 4f",
        ],
    },
    {
        stt: 223,
        noi_dung: "Hãy quay l ưng cho h ạng ti ểu nh ân đang r ỉ tai con: D ại gì cho kh ổ c ái đời! Ch úa Giêsu đã đuổi Phêrô: Xéo đi sau Ta! H ỡi Satan! Ng ươi là cớ vấp phạm cho Ta, vì ý tưởng c ủa ng ươi, kh ông ph ải ý t ưởng c ủa Thi ên Ch úa, m à l à c ủa lo ài ng ười (Mt 16,23). lạc đường. Ai s ống công chính, k ẻ ấy là người công chính, nh ư Đ ức Giêsu là Đ ấng Công Chính.",
        chuong: 10,
        loi_chua: [
            "1Ga 3,7: Hỡi anh em l à những người con b é nhỏ, đừng để ai làm cho anh em đi",
        ],
        tham_chieu: [
            "2Tx 3,6; 2Tm 3,1-5; 2Pr 3,17",
        ],
    },
    {
        stt: 224,
        noi_dung: "Con phải tập biết từ chối, biết nói không.",
        chuong: 10,
        loi_chua: [
            "Mt 14,4: Ông Gio-an có nói với vua: Ngài không được phép lấy bà ấy.",
        ],
    },
    {
        stt: 225,
        noi_dung: "Đ ừng n ặng óc địa ph ương, h ãy m ở r ộng l òng con, để m ọi ng ười c ó ch ỗ ở đó. N ếu không, con chỉ có tên, chứ chưa phải là người công giáo đích thực. lấy Đ ức Kitô. Không còn chuyện phân biệt Do-thái hay Hy -lạp, nô lệ hay t ự do, đàn ông hay đàn bà; nhưng tất cả anh em chỉ là một trong Đ ức Kitô.",
        chuong: 10,
        loi_chua: [
            "Gl 3,27-28: Bất cứ ai trong anh em được thanh tẩy để thuộc về Đ ức Kitô, đều mặc",
        ],
        tham_chieu: [
            "Rm 10,12; 1Cr 12,13; Cl 3,11",
        ],
    },
    {
        stt: 226,
        noi_dung: "Chiếu sáng đời con b ằng đức tin v à đức ái. Đ ốt cháy thế gian v ới ngọn lửa Chúa đặt trong tim con. mặc áo giáp là đức tin và đức mến, đội mũ chiến là niềm hy vọng ơn cứu độ. nhập thể trở nên hiện diện và như thể thấy được bằng cách chính Giáo hội tự đổi mới và không ngừng tinh luy ện chính mình d ưới sự hướng dẫn của Chúa Thánh Thần. Đ iều đó trước h ết nhờ ch ứng tá của một đức tin s ống động v à trưởng th ành, ngh ĩa là một đức tin đã được hu ấn luy ện để c ó th ể s áng suốt nhận định v à thắng vượt những kh ó kh ăn ấy. Rất nhiều vị tử đạo đã v à c òn đang hùng hồn làm chứng cho đức tin ấy. Đ ức tin ấy phải biểu lộ sự phong phú của mình b ằng cách thâm nhập vào toàn thể đời sống của các tín h ữu, kể cả đời sống thế tục và thúc đẩy họ sống công bằng, bác ái nhất là đối với người nghèo khổ. Sau hết, điều có thể làm chứng về sự hiện diện của Thiên Chúa hơn cả là đức ái huynh đệ của các tín h ữu như họ đồng tâm nhất trí c ộng tác cho đức tin Phúc âm và tỏ ra họ là dấu chỉ hiệp nhất.",
        chuong: 10,
        loi_chua: [
            "1Tx 5,8: … Nh ưng chúng ta, ch úng ta thuộc về ban ng ày, nên hãy sống tiết độ,",
            "MV 21e: Nhi ệm vụ của Giáo hội là làm sao cho Thi ên Chúa Cha v à Chúa Con",
        ],
        tham_chieu: [
            "Cl 1,3-4; 2Tx 1,3-4; 2Tm 2,22",
            "GH 11a, 17, 35b; Đ T 8b; DT 25",
        ],
    },
    {
        stt: 227,
        noi_dung: "Hãy làm thế nào để tư tưởng, ngôn ngữ, hành động con khiến người ta ph ải phản ứng: Con người này đã say mê một cuốn sách: PHÚC ÂM, đã bị lôi cuốn bởi một lý tưởng: CUỘ C Đ Ờ I CHÚA GIÊSU. đang cố gắng chạy tới, mong chi ếm đoạt, bởi lẽ chính t ôi đã được Đ ức Kitô Giêsu chiếm đoạt. nên tất cả các hội đồng phải coi tiêu chuẩn ấy như là quy luật tối thượng.",
        chuong: 10,
        loi_chua: [
            "Pl 3,12: Kh ông phải là tôi đã đoạt giải, hay đã nên hoàn thiện đâu; nhưng tôi",
            "DT 2b: Theo Ch úa Kitô như Phúc âm dạy là tiêu chuẩn tối hậu của đời tu dòng,",
        ],
        tham_chieu: [
            "1Ga 2,5-6",
            "MK 18a, 20a",
        ],
    },
    {
        stt: 228,
        noi_dung: "Nghiêm trang v à vững vàng, cử chỉ bên ngoài phải phản ảnh tâm hồn bên trong: t âm hồn bình an, tự chủ, không trẻ nít lúng túng hồi hộp. phải tinh tuy ền, thái độ phải đàng hoàng, lời lẽ phải lành mạnh, không ai bắt bẻ được, khiến đối phương phải bẽ mặt, vì kh ông thể nói xấu chúng ta được điều gì.",
        chuong: 10,
        loi_chua: [
            "Tt 2,7-8: Chính anh hãy làm gương về mặt đức hạnh. Khi anh giảng dạy thì đạo lý",
        ],
        tham_chieu: [
            "1Cr 16,13",
        ],
    },
    {
        stt: 229,
        noi_dung: "Thân phụ Bernadette dẫn chị vào dòng và đặt điều kiện: Đ ừng ép con tôi ăn phó mát, nó chết mất! Suốt bảy năm, ngày ngày Bernadette chi ến đấu ở bàn ăn: Tôi phải ăn phó m át, Tôi kh ông ăn ph ó m át được, T ôi ph ải ăn ph ó m át. Cu ối c ùng ch ị ăn được, chịđã thắng, chịđã làm thánh. Có Chúa đời đâu còn cô đơn.",
        chuong: 10,
        loi_chua: [
            " ",
        ],
    },
    {
        stt: 230,
        noi_dung: "Con hãy năng đặt tay trên ngực và tự nhủ: Chúa ở với tôi, trong tôi. Dần dần Chúa sẽ cho con nếm hạnh phúc ấy. Thánh Thần Thiên Chúa ngự trong anh em sao?",
        chuong: 11,
        loi_chua: [
            "1Cr 3,16: N ào anh em ch ẳng biết rằng anh em l à Đ ền Thờ của Thiên Chúa, và",
        ],
        tham_chieu: [
            "1Cr 6,19; Gl 2,20; Ep 3,17",
        ],
    },
    {
        stt: 231,
        noi_dung: "Chúa ở đâu? – Chúa ở trên trời. Dạy trẻ em trả lời như vậy, là một thiếu sót. Muốn trả lời xác đáng, phải thêm: Chúa ở trong con. Gần gũi, sung sướng biết bao! thấy Người, tuy rằng thực sự Người không ở xa mỗi người chúng ta. Thật vậy, chính ở nơi Người mà chúng ta s ống, cử động, và hiện hữu, như một số thi s ĩ của quý vịđã nói: Chúng ta cũng thuộc dòng giống của Người. ngự giữa đền thờ (x. 1Cr 3,16; 6, 19). Trong h ọ, Ngài cầu nguyện và chứng nhận họ là dưỡng tử (x. Gl 4,6; Rm 8,15-16.26).",
        chuong: 11,
        loi_chua: [
            "Cv 17,27-28: Như vậy là để họ tìm ki ếm Thiên Chúa; may ra h ọ dò dẫm mà tìm",
            "GH 4: Ch úa Thánh Thần ngự trong Gi áo hội và trong t âm hồn các tín h ữu như",
        ],
        tham_chieu: [
            "GH 6c, 50b; PV 7a; MV 21e, 48d",
        ],
    },
    {
        stt: 232,
        noi_dung: "Từng ngàn bệnh nhân trong nh à thánh Cottôlengô có một nét đặc biệt trên khuôn mặt. Thỉnh thoảng máy vi âm lại dịu dàng nhắc: Chúng ta đang ở bên Chúa!",
        chuong: 11,
    },
    {
        stt: 233,
        noi_dung: "Nghe một hồi chuông, thấy một ngọn tháp, con hãy nhớ Chúa đang ở trong nhà tạm gần con. Lòng con sốt sắng, hướng đến thờ lạy yêu mến Chúa. hữu tụ họp và tìm được sự nâng đỡ ủi an trong khi t ôn sùng sự hiện diện của Con. Thi ên Ch úa, Đ ấng C ứu chu ộc ch úng ta, Đ ấng đã được hi ến d âng vì chúng ta tr ên b àn t ế l ễ: Nh à n ày c ần ph ải s ạch s ẽ, x ứng h ợp v ới vi ệc c ầu nguyện và những lễ nghi long trọng. Chính nơi đây, chủ chăn và tín hữu được mời đến, để với lòng biết ơn, họ đáp lại ân huệ của Đ ấng đã dùng Nhân tính mà kh ông ng ừng đổ tr àn s ự s ống si êu nhi ên v ào c ác chi th ể c ủa Th ân Th ể Người.",
        chuong: 11,
        loi_chua: [
            "LM 5e: Nhà cầu nguyện là nơi để cử hành và cất giữ Thánh Thể, cũng như để tín",
        ],
        tham_chieu: [
            "PV 7a, 47; LM 5b; Đ T 8a; TG 9b",
        ],
    },
    {
        stt: 234,
        noi_dung: "Chúa hiện diện thực sự, chứ không phải chỉ là lý thuyết. Chúa là Cha, ở bên con, với tất cả quyền năng và tình yêu. Ngài năn nỉ, khuyên bảo, mời gọi, trách móc, tha thứ và luôn luôn yêu thương. Người là Cha giàu lòng từ bi lân ái, và là Thiên Chúa hằng sẵn sàng nâng đỡ ủi an. Người luôn nâng đỡ ủi an chúng ta trong mọi cơn gian nan thử thách, để sau khi đã được Thiên Chúa nâng đỡ, chính chúng ta cũng biết an ủi những ai lâm cảnh gian nan khốn khó.",
        chuong: 11,
        loi_chua: [
            "2Cr 1,3-4: Chúc tụng Thiên Chúa là Thân Phụ Đ ức Giêsu Kitô, Chúa chúng ta.",
        ],
        tham_chieu: [
            "Lc 15,11-31; Rm 8,15; Gl 4,6",
        ],
    },
    {
        stt: 235,
        noi_dung: "Chúa Giêsu là tất cả của con: là cùng đích các ý hướng, là lý do các quyết định, là động lực các tình cảm, là gương mẫu các hành động của con. nhánh là chúng ta. Nhờ Giáo hội, chúng ta ở trong Người; và không có Người, chúng ta không thể làm gì được (x. Ga 15,1-5).",
        chuong: 11,
        loi_chua: [
            "Gl 2,20a: Tôi sống, nhưng không còn phải là tôi, mà là Đ ức Kitô sống trong tôi.",
            "GH 6c: Chúa Kitô là cây nho đích thực. Người ban sức sống và hoa trái cho các",
        ],
        tham_chieu: [
            "Pl 3,12; 1Ga 2,5-6",
            "GH 7; MV 22d; TĐ  4a",
        ],
    },
    {
        stt: 236,
        noi_dung: "Sự hiện diện âu yếm và phấn khởi của bản thân, sự hiện diện dịu hiền và thắm thiết của người mẹ, sự hiện diện đầy tín nhiệm và tri ân của khách quý. Tất cả tình yêu, tất cả dịu dàng, tất cả vinh dự ấy sánh với sự hiện diện của Chúa bên con, còn xa vời hơn trời xa đất muôn ngàn lần.",
        chuong: 11,
    },
    {
        stt: 237,
        noi_dung: "Tại sao người Kitô hữu than van mình cô đơn? Chúa Kitô của họ ở đâu? nhờ Người, chúng ta cũng được chứa chan niềm an ủi.",
        chuong: 11,
        loi_chua: [
            "2Cr 1,5: Vì c ũng như chúng ta chia s ẻ muôn vàn nỗi khổ đau của Đ ức Kitô, thì",
        ],
        tham_chieu: [
            "Ga 15,6a",
        ],
    },
    {
        stt: 238,
        noi_dung: "Lời chào của Thiên thần: Vui l ên! Hỡi người đầy ơn phúc! Chúa ở cùng người (Lc 1,28). Và lời chào của Hội thánh: Chúa ở cùng anh chị em có mang một ý nghĩa sâu xa, khả dĩ biến đổi cuộc đời con không? đức mà Chúa Thánh Thần đổ đầy tâm hồn mọi phần tử của Giáo hội. Lại nữa, nhờ giới răn tình y êu, giới răn cao th ượng nhất của Chúa, mọi tín h ữu được thúc đẩy để tìm vinh danh Thiên Chúa bằng cách làm cho nước Ngài trịđến để họ nh ận bi ết m ột Thi ên Ch úa ch ân th ật v à Đ ấng Ng ài đã sai đến l à Ch úa Giêsu Kitô (x. Ga 17,3).",
        chuong: 11,
        loi_chua: [
            "TĐ  3b: Việc tông đồ được thực thi nhờ đức tin, đức cậy, đức mến, là những nhân",
        ],
        tham_chieu: [
            "GH 42a; PV 86",
        ],
    },
    {
        stt: 239,
        noi_dung: "Đ ối với Thiên Chúa, lương tâm đã đủ, nhưng đối với người đời, cần khôn ngoan vì mắt họ không nhìn thấu lương tâm con. lẽ tự nhiên mà làm những gì Luật dạy, thì họ là Luật cho chính mình, m ặc dầu họ không có Luật Mô-sê. đây con ng ười chỉ hiện diện một mình v ới Thiên Chúa và tiếng nói của Ngài vang dội trong thâm tâm họ. Lương tâm làm cho con người nhận biết một cách tuyệt vời luật mến Chúa, yêu người. Trung th ành với lương tâm, các Kitô hữu phải li ên k ết v ới nh ững ng ười kh ác để tìm ki ếm ch ân l ý v à gi ải quy ết trong chân lý biết bao v ấn đề luân lý được đặt ra trong đời sống cá nhân cũng như trong giao tiếp xã hội.",
        chuong: 11,
        loi_chua: [
            "Rm 2,14: Dân ngoại là những người không có Luật Mô-sê; nhưng mỗi khi họ theo",
            "MV 16: Lương tâm là tâm điểm sâu kín nhất và là cung thánh của con người, nơi",
        ],
        tham_chieu: [
            "MV 50b; TD 14c",
        ],
    },
    {
        stt: 240,
        noi_dung: "Hãy nhờ Đ ức Mẹ đưa con đến với Chúa Giêsu, con sẽ quen sống bên Chúa.",
        chuong: 11,
    },
    {
        stt: 241,
        noi_dung: "Chúa hiện diện bên con, không phải chỉ là một tâm tình, nhưng là việc Chúa chiếm hữu cả con người con, hướng dẫn, yêu thương, an ủi con.",
        chuong: 11,
    },
    {
        stt: 242,
        noi_dung: "Hãy sống bên Chúa, và con sẽ nên thánh, thiên đàng không gì khác hơn là Thiên Chúa hiện diện.",
        chuong: 11,
    },
    {
        stt: 243,
        noi_dung: "Đ iều khiến Chúa hiện diện trong con, vui lòng, sung sướng nhất, là con năng nói chuyện với Mẹ Maria, Mẹ yêu dấu của Chúa.",
        chuong: 11,
    },
    {
        stt: 244,
        noi_dung: "Chúa Ba Ng ôi ở trong con, con tr ở nên đền thờ Chúa, con l à của lễ toàn thiêu, là lời ngợi khen không ngừng, là đoá hoa muôn sắc dâng lên Chúa. bỏ, nhưng đã được Thiên Chúa chọn lựa và coi là quý giá. Hãy để Thiên Chúa dùng anh em nh ư những viên đá sống động mà xây nên ngôi Đ ền Thờ thiêng liêng, và hãy để Thiên Chúa đặt anh em làm hàng tư tế thánh, dâng những lễ tế thiêng liêng đẹp lòng Người, nhờ Đ ức Giêsu Kitô.",
        chuong: 11,
        loi_chua: [
            "1Pr 2,4-5: Anh em h ãy tiến lại gần Đ ức Kitô, viên đá sống động bị người ta loại",
        ],
        tham_chieu: [
            "Ep 1,6-12",
        ],
    },
    {
        stt: 245,
        noi_dung: "Tại sao ham xây đền thờ gỗ đá, mà quên xây dựng và tu bổ đền thờ tâm hồn? ngươi sẽ xây cho Ta nhà nào, và nơi nào sẽ là chốn Ta nghỉ ngơi. Chẳng phải chính tay Ta đã làm nên mọi sự ấy sao?",
        chuong: 11,
        loi_chua: [
            "Cv 7,49-50: Chúa phán: Trời là ngai c ủa Ta, c òn đất là bệ dưới chân Ta. C ác",
        ],
    },
    {
        stt: 246,
        noi_dung: "Ở  lầu son, gác tiá, hay lều tranh vách đất con không lo, miễn là con luôn luôn làm cho nhà ấy đáng yêu, lúc ấy biến thành thiên đàng vì có Chúa. Một toàn thể: HỘ I THÁNH Một lãnh tụ: Đ Ứ C THÁNH CHA Một nguyện vọng: MỌ I NGƯ Ờ I NÊN MỘ T",
        chuong: 11,
        loi_chua: [
            " ",
        ],
    },
    {
        stt: 247,
        noi_dung: "Mỗi khi ai tỏ ý lo sợ Ngài đau khổ, nhọc mệt, Đ ức Phaolô VI luôn luôn trả lời: Vì Hội thánh! Vì Hội thánh! Con hãy sống và trả lời như vậy. mối bận tâm lo cho tất cả các Hội Thánh! Có ai yếu đuối mà tôi lại không cảm thấy mình yếu đuối? Có ai vấp ngã mà tôi lại không cảm thấy lòng sôi lên? (xt Cv 20,18-21; 1Cr 9,19-23 ).",
        chuong: 12,
        loi_chua: [
            "2Cr 11,28-29: Không kể các điều khác, còn có nỗi ray r ứt hằng ngày của tôi là",
        ],
    },
    {
        stt: 248,
        noi_dung: "Không ai phá Hội thánh vì yêu Hội thánh.",
        chuong: 12,
    },
    {
        stt: 249,
        noi_dung: "Phêrô, con là Đá  và trên Đá ấy, Ta sẽ xây Hội thánh của Ta, và cửa Hỏa ngục sẽ không thắng nổi (Mt 16,18). Hai mươi thế kỷ qua, bao nhiêu thăng trầm, bao nhiêu biến động, nội c ông, ngoại kích, l ắm giai đoạn đến mức tuyệt vọng, nh ưng Hội th ánh vẫn đứng vững vì Hội thánh Chúa không phải hội của loài người. thính giả đón nhận nhờ tác động của Chúa Thánh Thần, c ác ngài quy t ụ họ thành Giáo hội phổ quát, Giáo hội này đã được Chúa thiết lập trên các Tông đồ và xây dựng trên thánh Phêrô, thủ lãnh của các ngài; và Chúa Giêsu Kitô là Viên Đá góc của Giáo hội ấy (x. Kh 21,14; Mt 16,18; Ep 2,20).",
        chuong: 12,
        loi_chua: [
            "GH 19: Khi c ác Tông đồ rao giảng Phúc âm khắp nơi (x. Mc 16,20) v à có nhiều",
        ],
        tham_chieu: [
            "GH 9c, 22b; HN 3e",
        ],
    },
    {
        stt: 250,
        noi_dung: "Tôi tin c ó Hội thánh duy nh ất, thánh thiện, công giáo và tông truyền. Một niềm tin, một hạnh phúc, một quyết tâm! chúng về. Chúng sẽ nghe tiếng tôi. Và sẽ chỉ có một đoàn chiên và một mục tử. nhân loại biết con đường, để nhờ đó trong khi ph ụng thờ Ngài, con ng ười có thể được cứu rỗi và hạnh phúc trong Ch úa Kitô. Chúng tôi tin r ằng Tôn giáo chân thật, duy nhất này tồn tại trong Giáo hội Công giáo và Tông truyền, Giáo hội mà Chúa Giêsu đã ủy thác nhiệm vụ truyền bá cho m ọi người, khi Ng ười phán cùng các Tông đồ: Vậy các con hãy đi dạy dỗ muôn dân, rửa tội cho họ nhân Danh Cha và Con và Thánh Thần; hãy dạy dỗ họ vâng giữ mọi điều Thầy đã truy ền cho c ác con  (Mt 28,1 9-20). V ậy m ọi ng ười đều c ó nhi ệm v ụ tìm kiếm chân lý, nhất là những chân lý có liên quan t ới Thiên Chúa và Giáo hội Người, và khi nhận biết rồi, họ phải tin theo và tuân giữ.",
        chuong: 12,
        loi_chua: [
            "Ga 10,16: Tôi còn có những chiên khác không thuộc ràn này. Tôi cũng phải đưa",
            "TD 1b: Trước hết Thánh Công đồng tuyên bố rằng chính Thiên Chúa đã chỉ cho",
        ],
        tham_chieu: [
            "1Cr 10,17; Ep 4,4-6; 5,25-27",
            "GH 8b, 26a, 32ab",
        ],
    },
    {
        stt: 251,
        noi_dung: "Đ ừng ngạc nhiên khi người ta phá Hội thánh, vì đó là Nhiệm Thể Chúa Kitô. Họ muốn tiếp tục giết Chúa Kitô, nhưng không giết được Ngài nữa, bèn phá Hội thánh. trong đau thương và bách hại, chúng ta c ùng hiệp thông với những đau khổ của Người như thân thể kết hợp với đầu, hiệp với sự thương khó của Người để được cùng Người vinh hiển (x. Rm 8,17).",
        chuong: 12,
        loi_chua: [
            "Ga 15,18: Nếu thế gian ghét anh em, anh em hãy biết rằng nó đã ghét Thầy trước.",
            "GH 7e: Đ ang khi còn lữ hành trên mặt đất, bước theo vết chân Người (Chúa Kitô)",
        ],
        tham_chieu: [
            "Mt 24,9; Lc 6,22; 1Ga 3,13",
            "GH 9c, 49; TG 5b",
        ],
    },
    {
        stt: 252,
        noi_dung: "Nhiều người chê cách tổ chức của giáo triều La-mã. Tôi đồng ý rằng giáo triều La-mã không trọn lành, nhưng tôi xin họ xét xem chính nước họ có được tổ chức hoàn hảo hơn không? Hơn thế, còn phải phân biệt, giáo triều là một cơ quan, không phải là Hội thánh.",
        chuong: 12,
    },
    {
        stt: 253,
        noi_dung: "Yêu mến Hội thánh, vâng lời Hội thánh, trung thành với Hội thánh, cầu nguyện cho Hội thánh.",
        chuong: 12,
    },
    {
        stt: 254,
        noi_dung: "Có người hễ nghe n ói đến Hội thánh là chỉ trích gi áo triều ù lì, nh à thờ tốn tiền, nghi thức rườm rà… H ội thánh đâu phải giáo triều, nhà thờ, nghi thức. Hiểu như thế là sai lạc quá! Hội thánh là toàn thể dân Chúa đang tiến về Nước Trời. thể hữu hình v à cộng đồng thiêng liêng, Giáo hội tại thế và Giáo hội dư tràn của cải trên trời không được quan niệm như hai thực thể nhưng chỉ là một thực thể phức tạp, duy nhất, do yếu tố  nhân loại và thần linh kết thành. Vì thế nhờ loại suy x ác đáng chúng ta c ó thể ví Gi áo hội với mầu nhiệm Ngôi Lời nhập thể. Thực vậy, nhân tính mà Ngôi Lời Thiên Chúa mặc lấy phục vụ Người như cơ quan c ứu rỗi sống động và kết hiệp với Người cách bất khả phân ly, c ũng thế, toàn thể cơ cấu xã hội của Giáo hội phục vụ Thánh Thần Chúa Kitô, Đ ấng làm cho Giáo hội sống động để tăng trưởng thân thể (x. Ep 4,16).",
        chuong: 12,
        loi_chua: [
            "GH 8a: Giáo hội là xã hội tổ chức theo phẩm trật và Nhiệm Thể Chúa Kitô, đoàn",
        ],
        tham_chieu: [
            "GH 9c, 33a",
        ],
    },
    {
        stt: 255,
        noi_dung: "Cần phân biệt vấn đề thần học lịch sử và vấn đề khả năng: Đ ức Giáo Hoàng không buộc phải là người có nhiều khả năng hơn cả, nhưng bất cứ ai l à người Chúa chọn và trao quyền thì con vâng phục vì Chúa giao chìa khoá Nước Trời cho người ấy. điều gì, tr ên trời cũng sẽ cầm buộc như vậy; dưới đất, anh th áo cởi điều gì, trên trời cũng sẽ tháo cởi như vậy. kế vị Phêrô, người được Chúa Kitô trao ph ó chiên mẹ và chiên con để chăn dắt, do Chúa thiết lập, được hưởng dụng quyền tối cao, toàn diện, trực tiếp và phổ quát trong việc chăm sóc các linh hồn. Bởi vậy, với tư cách chủ chăn toàn thể tín hữu, ngài có sứ mệnh mưu ích chung cho toàn thể Giáo hội và cho từng Giáo hội địa phương, nên ngài được quyền tối thượng thường xuyên trên mọi Giáo hội.",
        chuong: 12,
        loi_chua: [
            "Mt 16,19: Th ầy sẽ trao cho anh chìa kho á Nước Trời: dưới đất, anh c ầm buộc",
            "GM 2a: Trong Gi áo hội này của Chúa Kitô, Đ ức Giáo Hoàng Rôma, vì l à Đ ấng",
        ],
        tham_chieu: [
            "GH 18, 22, 23a, 25; GM 9a",
        ],
    },
    {
        stt: 256,
        noi_dung: "Sống đạo không phải chỉđể mưu tìm ơn cứu rỗi cho riêng mình. Sống đạo là hiệp nhất với toàn thể dân Chúa trên khắp thế giới, hiệp nhất với đầu là Đ ức Kitô, và đại diện cho Ngài là Đ ức Giáo Hoàng, để tiếp tục sự chết và sự phục sinh gi ải phóng nhân loại. Ở ngoài sự thông hiệp ấy, như cành nho đã lià cây, chỉ còn là công giáo trong hồ sơ lý lịch. mọi phương diện, vươn tới Đ ức Kitô vì Ng ười là Đ ầu. Chính Ng ười làm cho các bộ phận ăn khớp với nhau và toàn thân được kết cấu chặt chẽ, nhờ mọi thứ gân mạch nuôi dưỡng và mỗi chi thể hoạt động theo chức năng của mình. Như thế Người làm cho toàn thân lớn lên và được xây dựng trong tình bác ái. cũng giảng dạy và tuyên bố rằng: Chúa Giêsu Kitô, Mục tử vĩnh cửu đã thiết lập Giáo hội thánh thiện khi sai c ác tông đồ như Chúa Cha đã phái Người (x. Ga 20,21), v à Ng ười đã mu ốn c ác Đ ấng k ế v ị, t ức c ác Gi ám m ục, l àm ch ủ chăn trong Giáo hội cho đến tận thế. Nhưng để chức Giám mục được duy nhất và không bị phân chia, Ch úa đã đặt thánh Phêrô làm Thủ lãnh các Tông đồ khác, và trong Ng ài, Chúa đã đặt nguyên lý cùng nền tảng vĩnh cửu v à hữu hình của hiệp nhất đức tin và hiệp thông.",
        chuong: 12,
        loi_chua: [
            "Ep 4,15-16: Nhưng, sống theo sự thật và trong tình bác ái, chúng ta sẽ lớn lên về",
            "GH 18b: B ước theo d ấu v ết của Công đồng Vaticanô I, Th ánh Công Đ ồng này",
        ],
        tham_chieu: [
            "Ga 10,16; Ep 2,19.22",
            "GH 7b, 8d, 9a, 27c; MV 32a, 40b; Đ T 9a",
        ],
    },
    {
        stt: 257,
        noi_dung: "Đ ừng nói Hội thánh đã canh tân rồi, phải nói Hội thánh liên lỉ canh tân. người, nhất là nhận biết nơi những kẻ nghèo khó và đau khổ hình ảnh Đ ấng Sáng lập khó nghèo và khổ đau, ra s ức giảm bớt nỗi cơ cực của họ và nhằm phụng s ự Ch úa Kit ô trong h ọ. Nh ưng Ch úa Kit ô thánh thi ện, v ô t ội, tinh tuyền (Dt 7,26), kh ông hề phạm tội (x. 2Cr 5,21), ch ỉđến để đền tội lỗi dân chúng (x. Dt 2,17), c òn Giáo hội vì ôm ấp những kẻ có tội trong lòng, nên vừa thánh thiện vừa phải luôn thanh tẩy mình. Do đó, Giáo hội luôn thực hiện việc sám hối và canh tân.",
        chuong: 12,
        loi_chua: [
            "GH 8c: Giáo hội trìu mến và ấp ủ tất cả những ai đau khổ vì sự hèn yếu của con",
        ],
        tham_chieu: [
            "GH 48c, HN 6a",
        ],
    },
    {
        stt: 258,
        noi_dung: "Hội thánh được sinh ra tr ên thánh giá, Hội thánh lớn lên bằng tiếp tục sự thương khó Chúa Giêsu đến tận thế. Con l ầm lạc, nếu tin v ào tiền bạc, ngoại giao, quy ền thế, vận động, con sẽ là nạn nhân trước hết! Khi con sáng mắt thì đã quá chậm. Chúa của cha ông chúng ta đã làm cho Ng ười trỗi dậy, và Thiên Chúa đã ra tay uy quyền nâng Người lên, đặt làm thủ lãnh và Đ ấng Cứu Đ ộ, hầu đem lại cho Ít-ra-en ơn sám hối và ơn tha tội. Về những sự kiện đó, chúng tôi xin làm chứng, cùng với Thánh Thần, Đ ấng mà Thiên Chúa đã ban cho những ai vâng lời Người. bách hại, Giáo hội cũng được mời gọi đi cùng đường lối ấy hầu thông ban ơn cứu rỗi cho lo ài người. Chúa Giêsu Kitô vốn là địa vị Thiên Chúa… t ự hủy diệt mình, tự nhận thân phận tôi tớ (Pl 2,6-7), và vốn giàu có, Người đã hoá ra nghèo hèn vì chúng ta (2Cr 8,9): cũng thế, tuy cần đến những phương tiện nhân loại để chu toàn sứ mệnh mình, Giáo hội được thiết lập không phải để tìm kiếm vinh quang tr ần thế, nh ưng để truyền bá khiêm nhường v à từ bỏ, bằng gương lành của chính mình.",
        chuong: 12,
        loi_chua: [
            "Cv 5,30 -32: Đ ức Gi êsu đã bị c ác ông treo l ên cây g ỗ mà giết đi; nhưng Thi ên",
            "GH 8c: Nh ư Ch úa Kit ô đã ho àn t ất c ông trình c ứu chu ộc trong kh ó ngh èo v à",
        ],
        tham_chieu: [
            "Ga 12,32; Gl 3,13-14",
            "GH 3a; MV 3b, 76d; LM 6g; TG 5a; TD 11a",
        ],
    },
    {
        stt: 259,
        noi_dung: "Con bảo con không phản Hội thánh, nhưng con chống những người đại diện Hội thánh; con làm trò của biệt phái: họ không bao giờ chống Đ ức Giavê nhưng họ giết kẻ Ngài sai đến. Lý luận tinh vi!",
        chuong: 12,
    },
    {
        stt: 260,
        noi_dung: "Con công kích cơ cấu, tại sao chính con lại khư khư đòi tổ chức kiểu này, xếp đặt người nọ, lập các ủy ban, tiểu ban, văn phòng! Con giống nhóm người tuyên bố: Đ ời này có bệnh viết tắt như ONU, UNESCO… Ch úng tôi cực lực phản đối, và lập hội: Chống viết tắt tên là ASS (Association sans sigle). Mâu thuẫn!",
        chuong: 12,
    },
    {
        stt: 261,
        noi_dung: "Có thứ công giáo vụ lợi, có thứ công giáo lý lịch, có thứ công giáo xu thời, có thứ công giáo da nh d ự. Ch úa ch ỉ ch ấp nhận hạng công gi áo tr ăm ph ần trăm, c ông giáo vô điều kiện: Họ đã bỏ mọi sự mà theo Ngài (Lc 5,11). ngồi bên hữu, một người được ngồi bên tả Thầy, khi Th ầy được vinh quang. Đ ức Giêsu bảo: Các anh không biết các anh xin gì! Các anh có uống nổi chén Thầy sắp uống, hay chịu được phép rửa Thầy sắp chịu không?",
        chuong: 12,
        loi_chua: [
            "Mc 10,37 -38: C ác ông thưa: Xin cho hai anh em ch úng con, m ột ng ười được",
        ],
    },
    {
        stt: 262,
        noi_dung: "Đ ối với Hội thánh, không ai t ự nhiên cố ý phản bội để phản bội. Nhưng thường có ba trường hợp người ta lâm vào thế phản bội: 1. Khi kẹt vấn đề tiền tài, tình cảm. 2. Khi bất mãn vì tham vọng. 3. Khi sợ cực, sợ đau, sợ chết.",
        chuong: 12,
    },
    {
        stt: 263,
        noi_dung: "Hai ngàn năm nay, c ó những giai đoạn, những cá nhân trong h àng ngũ Tông đồ, Giáo Hoàng, Hồng Y, Giám mục, linh mục, tu sĩ, giáo dân đã phản bội Hội thánh không thể tưởng tượng. Đ ức Phaolô VI g ọi là tự hủy diệt. Nhưng mỗi lần như thế Hội thánh lại canh tân hơn, tươi sáng hơn, mãnh liệt hơn; Hội thánh tiếp tục mầu nhiệm Tử nạn và Phục sinh. bì do tay ng ười phàm, nhưng là phép cắt bì c ủa Đ ức Kitô, có sức lột bỏ con người tội lỗi của anh em. Anh em đã cùng được mai táng với Đ ức Kitô khi chịu phép rửa, lại cùng được trỗi dậy với Người, vì tin v ào quyền năng của Thiên Chúa, Đ ấng làm cho Người trỗi dậy từ cõi chết. trung tín của Chúa mình và không ngừng là dấu chỉơn cứu rỗi trong thế giới, tuy nhi ên Gi áo h ội bi ết rõ r ằng tr ải qua bao nhi êu th ế k ỷ v ẫn kh ông thi ếu những phần tử trong Giáo hội, giáo dân hoặc tu sĩ, sống bất trung cùng Thánh Thần Chúa. Ngay trong th ời đại chúng ta, Gi áo hội không quên sự cách biệt lớn lao giữa sứ điệp do Giáo hội công bố và sự yếu đuối nhân loại của những người được giao phó rao giảng Phúc âm.",
        chuong: 12,
        loi_chua: [
            "Cl 2,11-12: Trong Người, anh em đã được chịu phép cắt bì, không phải phép cắt",
            "MV 43b: M ặc dù Giáo hội với sức mạnh của Chúa Thánh Thần, vẫn là hiền thê",
        ],
        tham_chieu: [
            "Cl 1,24",
            "GH 8d; MV 22d",
        ],
    },
    {
        stt: 264,
        noi_dung: "Hội thánh có nhiều khuyết điểm và gương xấu, nhưng Hội thánh có lời hứa của Chúa. Hội th ánh là một phép lạ liên lỉ, tuy nhi ên đừng vì th ế mà ph ơi bày khuyết điểm và gương xấu cho m ọi người. Cũng đừng vì đó mà tha h ồ làm gương xấu, để Chúa làm phép lạ mỗi ngày. phải sa ngã, thì thà treo cối đá lớn vào cổ nó mà xô cho chìm xu ống đáy biển còn hơn. Khốn cho thế gian, vì l àm cớ cho người ta sa ng ã. Tất nhiên phải có những cớ gây sa ngã, nhưng khốn cho kẻ làm cớ cho người ta sa ngã. nhờ ơn Thiên Chúa, mà Chúa Giêsu đã hứa ban, hầu Giáo hội vẫn hoàn toàn trung tín, s ống như một Hiền thê xứng đáng của Chúa mình, d ù xác thịt yếu hèn, và không ngừng tự đổi mới dưới tác động của Chúa Thánh Thần cho đến ngày, nhờ thánh giá, đạt đến ánh sáng không hề tắt.",
        chuong: 12,
        loi_chua: [
            "Mt 18,6-7: Nhưng ai l àm cớ cho m ột trong nh ững kẻ bé mọn đang tin Th ầy đây",
            "GH 9c: Ti ến bước gi ữa c ơn c ám dỗ và đau thương, Gi áo hội được vững mạnh",
        ],
        tham_chieu: [
            "GH 8c, 15; PV 2",
        ],
    },
    {
        stt: 265,
        noi_dung: "Con hãy sẵn sàng hy sinh cho Hội thánh và hy sinh vì Hội thánh. cứu độ. Chúng tôi có được an ủi, thì cũng là để anh em được an ủi, khiến anh em c ó sức kiên trì ch ịu đựng c ùng những nỗi th ống kh ổ mà chính ch úng tôi phải chịu.",
        chuong: 12,
        loi_chua: [
            "2Cr 1,6: Chúng tôi có phải chịu gian nan, thì đó là để anh em được an ủi và được",
        ],
        tham_chieu: [
            "Gl 4,19",
        ],
    },
    {
        stt: 266,
        noi_dung: "Ai nghe các con là nghe Ta, v à ai chối bỏ các con là chối bỏ Ta, mà ai chối bỏ Ta, là chối bỏ Đ ấng đã sai Ta (Lc 10,16). Su ốt đời con h ãy ghi l òng tạc dạ: luôn luôn kính trọng người của Hội thánh, bí tích c ủa Hội thánh, chỉ thị của Hội thánh, phụng vụ của Hội thánh, Chúa sẽ chúc lành cho con. khinh, kh ông tởm; trái lại anh em đã tiếp đón tôi như một sứ giả c ủa Thiên Chúa, như Đ ức Kitô Giêsu. Tông đồ là, Mục tử Giáo hội. Bởi vậy, ai nghe l ời các ngài là nghe l ời Chúa Kitô, còn ai khinh d ể các ngài là khinh d ể Chúa Kitô và Đ ấng đã phái Chúa Kitô đến (x. Lc 10,16).",
        chuong: 12,
        loi_chua: [
            "Gl 4,14: Mặc dù thân xác tôi là một dịp thử thách cho anh em, anh em đã không",
            "GH 20c: Th ánh C ông Đ ồng d ạy r ằng, chính Ch úa đã l ập c ác Gi ám m ục k ế v ị",
        ],
        tham_chieu: [
            "Mt 10,40,41",
            "GH 8b, 18b, 25ac; MK 10b",
        ],
    },
    {
        stt: 267,
        noi_dung: "Trong Hội thánh mọi người được mời gọi và có bổn phận nên thánh. Nếu con kh ông sống thánh thiện, con đừng lên mặt canh t ân Hội thánh. Không ai tuy ên sấm bởi sức Thần khí Thi ên Chúa lại đi nói: Giêsu, đồ chúc dữ! Và không ai c ó thể nói: Giêsu là Chúa! mà lại không phải bởi sức Thánh Thần (1Cr 12,3). lành theo bậc sống mình.",
        chuong: 12,
        loi_chua: [
            "GH 42e: M ọi Kitô hữu đều được kêu mời và có bổn phận nên thánh và nên trọn",
        ],
        tham_chieu: [
            "GH 11c, 15, 48a; HN 4f, 7a",
        ],
    },
    {
        stt: 268,
        noi_dung: "Con tin H ội thánh vì chính Ch úa Giêsu đã lập Hội thánh, và chỉ lập Hội thánh ấy thôi. Con đau khổ vì những bất toàn nơi bộ mặt nhân loại của Hội thánh, nhưng con liên đới với những bất toàn ấy để nổ lực tẩy luyện và thực hiện ý Chúa Giêsu nơi Hội thánh. thương Hội Thánh và hiến mình vì H ội Thánh; như vậy, Người thánh hoá và thanh tẩy Hội Thánh bằng nước và lời hằng sống, để trước mặt Người, có một Hội Th ánh xin h đẹp l ộng l ẫy, kh ông t ỳ ố, kh ông v ết nh ăn ho ặc b ất c ứ m ột khuyết điểm nào, nhưng thánh thiện và tinh tuyền. phép Thánh tẩy, đồng thời, Người đã xác nhận sự cần thiết của Giáo hội mà mọi người phải bước vào qua c ửa phép Thánh tẩy. Vì th ế, những ai bi ết rằng Giáo h ội c ông gi áo, được Thi ên Ch úa thi ết l ập nh ờ Ch úa Gi êsu Kit ô, nh ư phương tiện cứu rỗi cần thiết, mà vẫn không muốn kiên trì sống trong Giáo hội thì không thể được cứu rỗi.",
        chuong: 12,
        loi_chua: [
            "Ep 5,25 -27: Ng ười l àm ch ồng, h ãy y êu th ương v ợ, nh ư chính Đ ức Kit ô y êu",
            "TG 7a: Chính Chúa Kitô đã minh nhiên công bố sự cần thiết của đức tin và của",
        ],
        tham_chieu: [
            "GH 12b, 14a, 48b; HN 4f",
        ],
    },
    {
        stt: 269,
        noi_dung: "Trước khi c ông kích, con h ãy tìm hi ểu c ác v ăn ki ện, c ác th ông điệp c ủa c ác Gi áo Hoàng. Con sẽ ngạc nhiên và khám phá ra các Ngài đã đề cập đến tất cả mọi vấn đề với những tư tưởng tuyệt hảo, cách mạng, với đường lối canh t ân, bắt nguồn từ một tinh thần Kitô giáo rất tiến bộ, rút trong Thánh kinh, ơn Chúa và thời triệu. Nếu chúng ta chỉ thực hiện hai ph ần trăm, như Đ ức Piô XII n ói, Hội thánh và thế giới đã biến đổi khác hẳn. chân lý thần linh và công giáo khi các ngài hiệp thông với Giáo Hoàng Rôma mà dạy dỗ; các tín h ữu phải chấp nhận phán quyết của Giám mục mình, khi nhân danh Ch úa Kitô, công bố những gì v ề đức tin v à phong ho á, cũng như phải tuân theo các ngài với một lòng kính cẩn tuân phục. Mọi người phải lấy ý chí và lý trí m à kính c ẩn tuân phục một cách đặc biệt những giáo huấn chính thức của Giáo Hoàng Rôma, dù khi ngài không tuyên bố từ thượng toà.",
        chuong: 12,
        loi_chua: [
            "GH 25a: M ọi người phải kính tr ọng các Giám mục như những chứng nhân của",
        ],
        tham_chieu: [
            "GH 12a, 25d, 37b; MK 10c; MV 43b, 50b; TĐ  31d",
        ],
    },
    {
        stt: 270,
        noi_dung: "Hội thánh của giới trẻ, Hội thánh của giới già, Hội thánh của trí thức, Hội thánh của lao động, Hội thánh của người nghèo, Hội thánh của người giàu, Hội thánh của da v àng, Hội thánh của da đen, Hội thánh của phụ nữ, Hội thánh của nam giới, Hội thánh của tất cả, Hội thánh chấp nhận tất cả, Hội thánh không kỳ thị ai. K ỳ thị và chia r ẽ không có chỗ trong Hội thánh. Tuy dân của Nước Ngài là công dân của các nước, song thực ra, đặc tính của Nước ấy không thuộc về thời gian nhưng thuộc về Trời. Quả thực, mọi tín hữu rải rác trên khắp hoàn cầu đều hiệp thông trong Thánh Thần với tất cả các tín hữu khác, và vì thế kẻ ở Rôma biết rằng người Ấn độ là chi thể mình. Nhưng vì Nước Chúa Kitô không thuộc về thế gian n ày (x. Ga 18,36), n ên Giáo hội, tức Dân Thiên Chúa, hợp thành Nước ấy, không loại bỏ di sản trần thế của bất cứ dân tộc nào; trái lại, Giáo hội cổ võ và thu d ụng tất cả những gì t ốt lành nơi tài sản, nguồn lực và phong hoá của các dân tộc, và khi thu dụng, Giáo hội tinh luyện, kiện toàn và thăng hoá chúng. Đ ốt sáng trần gian với ngọn lửa đức tin",
        chuong: 12,
        loi_chua: [
            "Cv 10,34: Quả thật, tôi biết rõ Thiên Chúa không thiên vị người nào.",
            "GH 13b: D ân duy nh ất của Thiên Chúa hiện diện nơi mọi dân nước trần gian.",
            " ",
        ],
        tham_chieu: [
            "Cv 15,8-11; 1Cr 12,13; Gl 3,27-28; Cl 3,10-11",
            "GH 9bc; 32b; MV 42d, 58c, 76b; TG 6f; HN 1a",
        ],
    },
    {
        stt: 271,
        noi_dung: "Trên đường Hy v ọng, con c ần một địa bàn để chỉđường cho con trong nh ững lúc tăm tối gian nan nh ất, đó là đức tin, địa bàn Hội thánh trao cho con ng ày chịu phép Thánh tẩy. trong bóng tối. giữa chúng ta trong th ân thể Người là Giáo hội; chính Ng ười đã minh nhi ên công bố sự cần thiết của đức tin và của phép rửa (x. Mc 16,16; Ga 3,3), đồng thời Người đã xác nhận sự cần thiết của Giáo hội mà mọi người phải bước vào qua cửa phép rửa. Vì th ế, những ai bi ết rằng Giáo hội công giáo được Thiên Chúa thiết lập nhờ Chúa Giêsu Kit ô, nh ư phương tiện c ứu rỗi cần thiết, mà vẫn không muốn gia nh ập hoặc không muốn kiên trì s ống trong Gi áo hội này thì không thể được cứu rỗi.",
        chuong: 13,
        loi_chua: [
            "Ga 12,46: T ôi là ánh sáng đến thế gian, để bất cứ ai tin v ào tôi, thì kh ông ở lại",
            "GH 14a: Chỉ mình Chúa Kitô là trung gian v à là đường cứu độ, Người hiện diện",
        ],
        tham_chieu: [
            "Ga 8,12; Ep 3,12-13",
            "MV 11a; TG 7a; TD 1b",
        ],
    },
    {
        stt: 272,
        noi_dung: "Trước những lời hứa hẹn đường mật nhất, những hăm dọa kinh kh ủng nhất, con ph ải nói: T ôi l à con Ch úa, con H ội th ánh, l à d òng d õi c ác Th ánh, t ôi theo đức tin d ẫn đàng. sống kết hợp với Người. Anh em hãy bén rễ sâu và xây dựng đời mình trên nền tảng là Đ ức Kitô Giêsu, hãy dựa vào đức tin mà anh em đã được thụ huấn, và để cho l òng chan ch ứa niềm tri ân cảm tạ. Hãy coi ch ừng chớ để ai g ài bẫy anh em b ằng m ồi tri ết l ý v à nh ững t ư t ưởng gi ả d ối r ỗng tu ếch theo tru yền thống người phàm và theo những yếu tố của vũ trụ chứ không theo Đ ức Kitô. sách linh ứng, phải được bảo tồn và liên tục lưu truyền cho đến tận thế. Do đó khi truyền lại những gì chính mình đã lãnh nhận, các Tông đồ khuyến cáo các tín hữu phải giữ gìn các truyền thống họ đã học biết qua lời chỉ giáo hay bằng thư từ (x. 2Tx 2,15), v à phải chiến đấu để bảo vệ đức tin ch ỉđược truyền dạy cho họ một lần thôi (Gđa 3).",
        chuong: 13,
        loi_chua: [
            "Cl 2,6 -8: V ậy nh ư anh em đã nh ận Đ ức Kit ô Giêsu l àm Chúa, thì h ãy tiếp t ục",
            "MK 8a: Nh ững l ời giảng d ạy c ủa c ác Tông đồ được đặc bi ệt ghi l ại trong c ác",
        ],
        tham_chieu: [
            "Dt 12,1-3; 13,8-9",
            "GH 12a. 48b, 64",
        ],
    },
    {
        stt: 273,
        noi_dung: "Nắm vững đức tin, con phân biệt đâu là đường Hy vọng của tâm hồn tông đồ, đâu là lối chết của thế gian. thẹn, vì t ôi biết tôi tin v ào ai, v à xác tín r ằng: Người có đủ quyền năng bảo toàn giáo lý đã được giao phó cho tôi, mãi cho tới Ngày đó.",
        chuong: 13,
        loi_chua: [
            "2Tm 1,12: Vì l ý do ấy mà tôi phải chịu những đau khổ này; nhưng tôi không hổ",
        ],
        tham_chieu: [
            "2Cr 6,14tt; 1Tm 1,18-19; Dt 2,1tt; 10,22-23",
        ],
    },
    {
        stt: 274,
        noi_dung: "Nhiều người nói: Tôi có đức tin, t ôi có đức tin! C ó lẽ đức tin c ủa giấy khai sinh, không phải đức tin của đời sống. Ít người sống theo đức tin.",
        chuong: 13,
    },
    {
        stt: 275,
        noi_dung: "Xem hành động của con, ph ản ứng của con, đủ biết đức tin c ủa con s ống động hay l à đức tin nhãn hiệu. đức tin, thì nào có ích lợi gì? Đ ức tin có thể cứu người ấy được chăng? Cũng vậy, đức tin không có hành động thì quả là đức tin chết. những sự trên trời. Đó  là điều chẳng những không bớt mà còn làm tăng bổn phận c ủa h ọ l à g óp s ức v ới m ọi ng ười ki ến t ạo m ột th ế gi ới nh ân đạo h ơn. Thực ra, mầu nhiệm của đức tin Kitô giáo đã đem đến cho họ nhiều khích lệ và trợ lực quý giá để họ chu toàn bổn phận ấy cách hăng say hơn và nhất là để họ khám phá được ý nghĩa trọn vẹn của công việc họ làm.",
        chuong: 13,
        loi_chua: [
            "Gc 2,14.17: Thưa anh em, ai b ảo rằng mình có đức tin mà không hành động theo",
            "MV 57a: Người Kitô hữu đang hành trình v ề quê trời phải tìm kiếm và yêu thích",
        ],
        tham_chieu: [
            "Ga 4,42; 20,27; Gc 1,22-24",
            "GH 50a; MV 21e, 43a; HN 23b",
        ],
    },
    {
        stt: 276,
        noi_dung: "Chúa đặt điều kiện quá dễ: nếu ai có đức tin bằng hạt cải, khiến núi dời cũng được. Tại sao thế? Vì không phải ta làm, nhưng chính Chúa làm. nếu anh em c ó lòng tin l ớn bằng hạt cải thôi, thì d ù anh em c ó bảo núi này: Rời kh ỏi đây, qua b ên kia! nó cũng sẽ qua, v à sẽ chẳng có gì m à anh em không làm được.",
        chuong: 13,
        loi_chua: [
            "Mt 17,20: Ng ười nói với các ông: Tại anh em k ém tin! Th ầy bảo thật anh em:",
        ],
        tham_chieu: [
            "Mt 21,21; Ep 1,19; Dt 11,11-12.17-19.32-35",
        ],
    },
    {
        stt: 277,
        noi_dung: "Không phải tin một Chúa xa xôi mơ hồ, nhưng tin như Phêrô: Thầy là Đ ức Kitô, Con Thiên Chúa hằng sống (Mt 16,16), nh ư Gioan: Ai kh ông yêu mến thì đã không biết Thiên Chúa, vì Thiên Chúa là Tình yêu (1Ga 4,8). phàm, cùng thân phận với các bạn. Chúng tôi loan Tin M ừng cho c ác bạn, là hãy bỏ những cái hão huyền này đi, mà trở lại cùng Thiên Chúa hằng sống, Đ ấng đã tạo thành trời đất với biển khơi cùng muôn loài trong đó.",
        chuong: 13,
        loi_chua: [
            "Cv 14,15: Hỡi các bạn, các bạn làm gì thế này? Chúng tôi đây cũng chỉ là người",
        ],
        tham_chieu: [
            "Cv 17,27-28",
        ],
    },
    {
        stt: 278,
        noi_dung: "Hãy có một đức tin s ắt đá, con s ẽ làm được tất cả, vì m ỗi lần làm phép lạ, Chúa hỏi: Con có tin không? … L òng tin của ngươi đã cứu chữa ngươi (Lc 7,50). thể đối với người tin.",
        chuong: 13,
        loi_chua: [
            "Mc 9,23: Đ ức Giêsu nói với ông ta: Sao lại nói: nếu Thầy có thể? Mọi sự đều có",
        ],
        tham_chieu: [
            "Mt 15,28; Ga 11,40; Cv 3,16",
        ],
    },
    {
        stt: 279,
        noi_dung: "Trong Phúc âm các Tông đồ đã khiêm tốn thuật lại đức tin yếu hèn của họ, để chúng ta mạnh tin hơn. Tô-ma đáp: Nếu tôi không thấy dấu đinh ở tay Người, nếu tôi không xỏ ngón tay vào lỗ đinh và không đặt bàn tay vào cạnh sườn Người, tôi chẳng có tin.",
        chuong: 13,
        loi_chua: [
            "Ga 20,25: C ác môn đệ khác nói với ông: Chúng tôi đã được thấy Chúa! Ông",
        ],
        tham_chieu: [
            "Ga 18,15-18.25-27",
        ],
    },
    {
        stt: 280,
        noi_dung: "Con đừng bao giờ mãn nguyện với một đức tin lý thuyết và hình thức, nhưng phải sống một đức tin chân thực, thiết ái và trung thành.",
        chuong: 13,
    },
    {
        stt: 281,
        noi_dung: "Có gì h ạnh phúc bằng xác tín mình đang ở trong H ội thánh, nơi đó những khắc khoải của tinh thần được giải quyết và quả tim đầy tràn hy vong.",
        chuong: 13,
    },
    {
        stt: 282,
        noi_dung: "Hãy thành thực cầu xin như các Tông đồ: Xin thêm đức tin cho chúng con (Lc 17,5).",
        chuong: 13,
        loi_chua: [
            "Mc 9,24: Tôi tin! Nhưng xin Thầy giúp lòng tin yếu kém của tôi!",
        ],
        tham_chieu: [
            "Ga 6,44.65",
        ],
    },
    {
        stt: 283,
        noi_dung: "Tin là chấp nhận Chúa Giêsu vô điều kiện và quyết tâm sống chết với Ngài. Người, mà còn được chịu đau khổ vì Người. Abraham trung thành, là người đã lấy đức tin vâng lời đi đến nơi mà mình sẽ nhận làm cơ nghiệp: Ngài đã ra đi mà chẳng hiểu mình sẽ đi đâu (Dt 11,8).",
        chuong: 13,
        loi_chua: [
            "Pl 1,29: Qu ả thế, nhờ Đ ức Kitô, anh em đã được phúc chẳng những là tin v ào",
            "LM 22c: C ác vị lãnh đạo Dân Chúa phải bước đi trong đức tin, theo g ương của",
        ],
        tham_chieu: [
            "Dt 11,24-26",
            "GH 42b; MK 5; TD 10",
        ],
    },
    {
        stt: 284,
        noi_dung: "Chúa toàn năng và hằng hữu, nếu con tin Chúa, con sẽ làm được những việc lạ lùng như Chúa Giêsu đã làm, và còn làm những việc vĩđại hơn nữa. Chính Ngài đã hứa như vậy! được những việc Thầy làm. Người đó còn làm những việc lớn hơn nữa, bởi vì Thầy đến cùng Chúa Cha.",
        chuong: 13,
        loi_chua: [
            "Ga 14,12: Thật, Thầy bảo thật anh em, ai tin v ào Thầy, thì người đó cũng sẽ làm",
        ],
        tham_chieu: [
            "Ep 1,19; Dt 11,11-12.17-19.32-35",
        ],
    },
    {
        stt: 285,
        noi_dung: "Con đừng giả vờ để thoát khó nguy. Con nhớ gương Êlêadarô: Vào tuổi chúng ta đây, giả đò là điều chẳng xứng, kẻo làm thiếu niên nghĩ rằng, lão Êlêadarô 90 tu ổi đầu đã quy hàng ngoại đạo, và họ bị lầm lạc vì tôi, bởi tôi đã giả tảng giả lờ, bởi tôi tham chút đời tàn vắn vỏi, mà chuốc lấy cho tuổi già vết nhọ, vết hoen.  (2Mcb 6,24-25). sàng tuy ên x ưng Ch úa Kit ô tr ước m ặt m ọi ng ười, v à b ước theo Ng ười tr ên đường thập giá giữa những cuộc bách hại không hề thiếu vắng trong Giáo hội.",
        chuong: 13,
        loi_chua: [
            "GH 42b: Mặc dù chỉ một số ít được phúc tử đạo, nhưng tất cả mọi người phải sẵn",
        ],
        tham_chieu: [
            "GH 50a; MV 21e; TĐ  4f",
        ],
    },
    {
        stt: 286,
        noi_dung: "Không ai bắt con chối Chúa, nhưng có thể bắt con đi ngược lại với đường lối của Chúa, lấy cớ để giữ đức tin. Th ật là mâu thuẫn: Đ ức tin c ủa con s ẽ chết vì con s ợ chết, sợ đau, sợ cực. đức tin mà theo những thần khí lừa dối và những giáo huấn của ma quỷ; đó là vì trò giả hình của những tên nói dối mà lương tâm như bị thích dấu sắt nung.",
        chuong: 13,
        loi_chua: [
            "1Tm 4,1-2: Thần khí phán rõ ràng: vào những thời cuối cùng, một số người sẽ bỏ",
        ],
        tham_chieu: [
            "2Tm 3,1tt; 2Pr 3,3tt",
        ],
    },
    {
        stt: 287,
        noi_dung: "Con phải can đảm sống đức tin hằng ngày, như các thánh Tử đạo can đảm giữ đức tin. nam nhi và ăn ở kiên cường.",
        chuong: 13,
        loi_chua: [
            "1Cr 16,13: H ãy tỉnh thức, hãy đứng vững trong đức tin, h ãy sống cho đáng bậc",
        ],
        tham_chieu: [
            "1Tm 6,11-12; Dt 11,35-40",
        ],
    },
    {
        stt: 288,
        noi_dung: "Đ ối với người Kitô hữu, tin tr ước hết là chấp nhận được rỗi, được tha th ứ, được yêu thương vô c ùng, Ch úa kh ông phải l à Đ ấng bắt con ph ải kính m ến, nh ưng đúng h ơn, Chúa là Đ ấng con phải để cho Ngài yêu thương con vô hạn. luôn tạ ơn Thiên Chúa về anh em, vì Thi ên Chúa đã chọn anh em ngay t ừ lúc khởi đầu, để cứu độ anh em nhờ Thần Khí thánh hoá và nhờ lòng tin vào chân lý. Chính vì th ế mà Người đã dùng Tin M ừng chúng tôi loan b áo mà kêu gọi anh em, để anh em được hưởng vinh quang c ủa Chúa chúng ta l à Đ ức Giêsu Kitô.",
        chuong: 13,
        loi_chua: [
            "2Tx 2,13-14: Hỡi anh em l à những kẻ được Chúa yêu mến, chúng tôi phải luôn",
        ],
        tham_chieu: [
            "Ep 2,4-6",
        ],
    },
    {
        stt: 289,
        noi_dung: "Chúa của người công giáo cao cả không phải chỉ vì Ngài toàn năng, nhưng nhất là vì Ngài toàn ái. Ngài siêu việt vì Ngài là Tình yêu tuyệt đối.",
        chuong: 13,
    },
    {
        stt: 290,
        noi_dung: "Công cuộc c ứu rỗi nhân loại không phải là một tổ ch ức, mà là một mầu nhiệm, mầu nhiệm Chúa Giêsu chịu chết và sống lại. cũng s ẽ ph ải được gi ương cao nh ư v ậy, để ai tin v ào Ng ười thì được s ống muôn đời. Tông đồ là người diễn lại cuộc đời Chúa Giêsu",
        chuong: 13,
        loi_chua: [
            "Ga 3,14 -15: Nh ư ông M ô-sê đã gi ương cao con r ắn trong sa m ạc, Con Ng ười",
            " ",
        ],
        tham_chieu: [
            "Ep 1,7-10",
        ],
    },
    {
        stt: 291,
        noi_dung: "Làm tông đồ là làm như các thánh Tông đồ. Nếu không nghiền ngẫm và thuộc lòng Tông đồ Công vụ, thì con không làm tông đồ đắc lực được. Đ ức Kit ô; ch úng t ôi y ếu đuối, c òn anh em thì m ạnh m ẽ; anh em được kính trọng, còn chúng tôi thì bị khinh khi. Cho đến giờ này, chúng tôi vẫn chịu đói khát, trần truồng, bị hành hạ và lang thang phiêu bạt; chúng tôi phải vất vả tự tay l àm l ụng. B ị nguy ền rủa, ch úng t ôi ch úc l ành; bị b ắt b ớ, ch úng t ôi cam chịu; bị vu khống, chúng tôi đem lời an ủi. Cho đến bây giờ, chúng tôi đã nên như rác rưởi của thế gian, như phế vật đối với mọi người.",
        chuong: 14,
        loi_chua: [
            "1Cr 4,10-13: Chúng tôi điên dại vì Đ ức Kitô, còn anh em thì kh ôn ngoan trong",
        ],
        tham_chieu: [
            "1Cr 11,1; 2Cr 6,3-10; Gl 4,12-14",
        ],
    },
    {
        stt: 292,
        noi_dung: "Giáo dân thời sơ khai diễn tả cách nôm na: Tông đồ là người có Chúa Kitô trong lòng, Chúa Kitô trên mắt, Chúa Kitô trong mi ệng, Chúa Kitô trên tay, Ch úa Kitô trong óc, Chúa Kitô trên vai… T óm lại, là một người đầy tràn Chúa Kitô và trao ban Ch úa Kitô cho kẻ khác. tôi đã thấy tận mắt, điều chúng tôi đã chiêm ngưỡng, và tay chúng tôi đã chạm đến, đó là Lời sự sống. Đ iều chúng tôi đã thấy và đã nghe, chúng tôi loan báo cho cả anh em n ữa, để chính anh em c ũng được hiệp thông với chúng tôi, mà chúng tôi thì hiệp thông với Chúa Cha và với Đ ức Giêsu Kitô, Con của Người. của Chúa Kitô Linh m ục, lại nữa bởi cùng chia s ẻ một cuộc sống của Người, nên h ọ ph ải quen s ống k ết hiệp v ới Ng ười nh ư b ạn h ữu. H ọ ph ải s ống m ầu nhiệm Phục sinh của Người thế nào để biết khai sáng Mầu nhiệm ấy cho đoàn chiên sẽ được giao ph ó. Phải dạy họ biết tìm g ặp Chúa Kitô trong vi ệc trung thành suy g ẫm Lời Ch úa, trong vi ệc th ông hiệp tích c ực c ác m ầu nhiệm chí thánh của Giáo hội, nhất là Bí Tích Thánh Thể và kinh nguyện thần vụ.",
        chuong: 14,
        loi_chua: [
            "1Ga 1,1.3: Đ iều vẫn có ngay từ lúc khởi đầu, điều chúng tôi đã nghe, điều chúng",
            "Đ T 8a: Vì do ph ép Truyền Chức Thánh mà họ (các chủng sinh) phải là hiện thân",
        ],
        tham_chieu: [
            "Rm 15,29; 2Cr 2,14-15",
            "TĐ  4a, 13, 16a, 18; Dt 1c",
        ],
    },
    {
        stt: 293,
        noi_dung: "Tông đồ là thánh hoá môi trường bằng môi trường: lao động là tông đồ của lao động, học sinh là tông đồ của học sinh. ban cho mỗi người. Đư ợc ơn làm ngôn sứ, thì ph ải nói sao cho ph ù hợp với đức tin. Đư ợc ơn ph ục v ụ, thì ph ải ph ục v ụ. Ai d ạy b ảo, thì c ứ d ạy b ảo. Ai khuyên răn, thì c ứ khuyên răn. Ai ph ân phát, thì ph ải chân thành. Ai ch ủ toạ, thì phải có nhiệt tâm. Ai làm việc bác ái thì vui vẻ mà làm.",
        chuong: 14,
        loi_chua: [
            "Rm 12,6-8: Chúng ta có những đặc sủng khác nhau, tuỳ theo ân sủng Thiên Chúa",
        ],
        tham_chieu: [
            "1Cr 7,17tt",
        ],
    },
    {
        stt: 294,
        noi_dung: "Ai bền đỗ đến cùng, người ấy sẽ được cứu (Mt 10,22). Một tông đồ sa đọa làm cả hỏa ngục vui mừng. Hãy cầu nguyện và nâng đỡ nhau. như người ta s àng gạo. Nhưng Thầy đã cầu nguyện cho anh để anh kh ỏi mất lòng tin. Phần anh, m ột khi đã trở lại, hãy làm cho anh em c ủa anh nên vững mạnh.",
        chuong: 14,
        loi_chua: [
            "Lc 22,31-32: Chúa nói: Si-môn, Si-môn ơi, kìa Xa-tan đã xin được sàng anh em",
        ],
    },
    {
        stt: 295,
        noi_dung: "Làm việc thiện chưa phải là tông đồ, làm vì xem đó là sứ mệnh Chúa Kitô mới là tông đồ. các người trong d ân thánh, mà hơn thế nữa, c òn là nguồn phát sinh bao l ời cảm tạ dâng lên Thiên Chúa.",
        chuong: 14,
        loi_chua: [
            "2Cr 9,12: Việc phục vụ cho công ích này không những đáp ứng nhu cầu của của",
        ],
    },
    {
        stt: 296,
        noi_dung: "Thời đại mới, nhu c ầu mới, phương pháp mới. Ta s ẽ ở lại với các con m ọi ngày cho đến tận thế (Mt 28,20): Chúa Kitô vẫn ở với Hội thánh và tiếp tục ban cho Hội thánh lễ Hiện xuống mới. bầu, sẽ chảy ra và bầu cũng hư. Nhưng rượu mới thì phải đổ vào bầu mới. những nhu c ầu hi ện đại, quan t âm t ới c ác ho àn c ảnh c ủa con ng ười, kh ông những về điều kiện thiêng liêng và luân lý, mà cả hoàn cảnh xã hội, dân số và kinh tế nữa.",
        chuong: 14,
        loi_chua: [
            "Lc 5,37-38: Không ai đổ rượu mới vào bầu da cũ, vì như vậy, rượu mới sẽ làm nứt",
            "GM 17c: C ác hình th ức ho ạt động t ông đồ c ần ph ải thích nghi đúng m ức v ới",
        ],
        tham_chieu: [
            "LM 19c; TĐ  1b, 19c, 29f, 32a, 33; TG 4",
        ],
    },
    {
        stt: 297,
        noi_dung: "Hăng say h ết mình, nh ưng biết chia s ẻ với mọi người, biết cộng tác với kẻ thua mình. Đ ừng làm đại lý tất cả, như thể từ lúc con khởi sự hoạt động mới có trời đất muôn vật. thể Gi áo h ội. C ác ng ài bi ết r ằng Ch úa Kit ô kh ông đặt c ác ng ài l ên để m ột mình lãnh lấy tất cả sứ vụ cứu độ của Giáo hội đối với thế giới; nhưng nhiệm vụ cao c ả của các ngài là chăn dắt tín h ữu và nhận biết các phận sự và đoàn sủng nơi họ, để mọi người cùng góp phần vào công cuộc chung, tùy theo cách thức của mình.",
        chuong: 14,
        loi_chua: [
            "GH 30: Các chủ chăn của Dân thánh biết rõ giáo dân giúp ích rất nhiều cho toàn",
        ],
        tham_chieu: [
            "GH 37ac; LM 9b; TĐ  27; NK 2c",
        ],
    },
    {
        stt: 298,
        noi_dung: "Có những điều con ao ước mà không thực hiện được, lắm lúc lại đẹp lòng Chúa và công nghiệp hơn tất cả kết qủa mà con đắc chỉ.",
        chuong: 14,
    },
    {
        stt: 299,
        noi_dung: "Đ ừng thấy khó mà nản lòng. Hãy tự hỏi mình: Việc của Chúa hay việc của tôi? Chúa làm hay tôi làm?. để chứng tỏ quyền năng phi th ường phát xuất từ Thiên Chúa, chứ không phải từ chúng tôi. Chúng tôi bị dồn ép tư bề, nhưng không bịđè bẹp; hoang mang, nhưng kh ông tuy ệt v ọng; bị ng ược đãi, nh ưng kh ông bị bỏ r ơi; bị quật ng ã, nhưng không bị tiêu diệt.",
        chuong: 14,
        loi_chua: [
            "2Cr 4,7-9: …Nh ưng kho tàng ấy, chúng tôi lại chứa đựng trong những bình sành,",
        ],
    },
    {
        stt: 300,
        noi_dung: "Trước khi ph àn n àn ng ười n ọ ng ười kia, h ãy t ự h ỏi mình: Mu ối c ủa t ôi c òn m ặn không? Đèn của tôi còn sáng không?. xử. Kìa Vị Thẩm Phán đang đứng ngoài cửa.",
        chuong: 14,
        loi_chua: [
            "Gc 5,9: Th ưa anh em, anh em đừng phàn nàn kêu trách lẫn nhau, để khỏi bị xét",
        ],
        tham_chieu: [
            "Mt 5,13tt",
        ],
    },
    {
        stt: 301,
        noi_dung: "Cần chọn lọc nhưng đừng chỉ trích, bất tín nhiệm, khinh rẻ. Những tông đồ Chúa Giêsu chọn để xây dựng Hội thánh cũng đầy khuyết điểm. Ngài chỉ cần họ đơn sơ, chân thành theo Ngài. người anh là ông An-rê, đang quăng lưới xuống biển, vì họ làm nghề đánh cá. Người bảo họ: Các anh h ãy theo t ôi, tôi sẽ làm cho c ác anh th ành những kẻ lưới người như lưới cá. Lập tức hai ông bỏ chài lưới mà đi theo Người.",
        chuong: 14,
        loi_chua: [
            "Mc 1,16 -18: Ng ười đang đi d ọc theo bi ển h ồ Ga -li-lê, thì th ấy ông Si -môn v ới",
        ],
        tham_chieu: [
            "1Cr 15,9-10; 1Tm 1,12-13",
        ],
    },
    {
        stt: 302,
        noi_dung: "Cái tôi của con càng bành trướng, việc tông đồ càng thất bại, cái tôi của con càng tan biến, việc tông đồ càng kết qủa.",
        chuong: 14,
        loi_chua: [
            "Ga 3,30: Người phải nổi bật lên, còn thầy phải lu mờ đi.",
        ],
        tham_chieu: [
            "Ga 7,18",
        ],
    },
    {
        stt: 303,
        noi_dung: "Sẵn sàng hy sinh những tiện nghi con thấy không hợp cho một tông đồ đích thực. Đ ừng tạo thêm những nhu cầu không cần thiết. đừng mặc hai áo, đừng đi dép hay cầm gậy. Vì thợ thì đáng được nuôi ăn.",
        chuong: 14,
        loi_chua: [
            "Mt 10,9-10: Đ ừng kiếm vàng bạc hay tiền giắt lưng. Đ i đường, đừng mang bao bị,",
        ],
        tham_chieu: [
            "Pl 4,12",
        ],
    },
    {
        stt: 304,
        noi_dung: "Đ ừng n ói nhi ều, l àm ít, ho ạt động d ài, c ầu nguy ện v ắn, nh ận r ộng r ãi, cho h ẹp h òi, khoan dung với mình, khắt khe với người.",
        chuong: 14,
    },
    {
        stt: 305,
        noi_dung: "Ánh sáng tông đồ của con ph ải truyền sang nh ững lớp tông đồ khác, cho đến lúc thế gian từ u tối tràn ngập hào quang. Làm tông đồ cho tông đồ. lại cho những người tin cẩn, những người sẽ có khả năng dạy cho người khác.",
        chuong: 14,
        loi_chua: [
            "2Tm 2,2: Những gì anh đã nghe tôi nói trước mặt nhiều nhân chứng, thì hãy trao",
        ],
        tham_chieu: [
            "Mt 5,16",
        ],
    },
    {
        stt: 306,
        noi_dung: "Việc Chúa, không ai được giữ độc quyền đại lý. Các tông đồ thưa Chúa: Thưa Thầy, chúng tôi đã thấy người kia lấy Danh Thầy trừ quỷ, nhưng hắn lại không theo chúng ta (Mc 9,38). Chúa bảo: Ai không chống lại chúng ta là ủng hộ chúng ta (Mc 9,40).",
        chuong: 14,
    },
    {
        stt: 307,
        noi_dung: "Con ngạc nhiên hay b ực tức vì c ác tông đồ khác không theo khu ôn khổ như con. Ph ải hiệp nhất mà đa diện; thánh Phaolô đã nói: Kẻ thì vì ghen tương và kình địch; kẻ thì vì thiện cảm mà rao giảng Đ ức Kitô… Can chi! …, mi ễn là Đ ức Kitô được rao truyền (Pl 1,15.18). hoà thuận với nhau bằng sự chấp nhận mọi dị biệt chính đáng để luôn luôn có thể đối thoại hữu hiệu giữa những phần tử của một Dân Chúa duy nhất, dù là chủ chăn hay các Kitô hữu khác. Thật vậy, những gì li ên kết giữa các tín hữu còn m ạnh h ơn nh ững gì chia r ẽ: hi ệp nh ất trong nh ững gì chính y ếu, t ự do trong những gì nghi ngờ, bác ái trong hết mọi sự.",
        chuong: 14,
        loi_chua: [
            "MV 92b: Chúng ta cần cổ võ ngay trong l òng Giáo hội sự quý mến, tôn trọng và",
        ],
        tham_chieu: [
            "TĐ  23b; TG 28a; HN 3d, 4I, 18; Đ P 2",
        ],
    },
    {
        stt: 308,
        noi_dung: "Các thánh không ai gi ống ai, tinh t ú trên trời không cái nào giống cái nào. Nhưng các thánh đều giống nhau một điểm: các Ngài diễn tả lại cuộc đời Chúa Giêsu. sự sống của Đ ức Giêsu cũng được biểu lộ nơi thân mình chúng tôi.",
        chuong: 14,
        loi_chua: [
            "2Cr 4,10: Chúng tôi luôn mang nơi thân mình cuộc thương khó của Đ ức Giêsu, để",
        ],
        tham_chieu: [
            "Cl 1,24tt; Pl 3,12",
        ],
    },
    {
        stt: 309,
        noi_dung: "Trong việc tông đồ, huấn luyện và lựa chọn chiến sĩ tâm huyết tối quan trọng. Một lãnh tụ lỗi lạc đã nói: Nếu có ba tr ăm chiến sĩ, tôi sẽ cai tr ị đến chết. Chúa Giêsu chọn mười hai người để tồn tại đến tận thế. chuyên biệt. Sở dĩđòi hỏi phải được huấn luyện chu đáo như thế không những vì người giáo dân phải tiến bộ liên tục về đời sống thiêng liêng và về giáo lý, mà họ còn phải thích nghi trong khi ho ạt động với những hoàn cảnh khác biệt tùy theo thực tại, nhân sự cũng như tùy theo nhiệm vụ.",
        chuong: 14,
        loi_chua: [
            "TĐ  28: Vi ệc tông đồ chỉđạt tới kết qủa mỹ mãn nhờ việc huấn luyện đầy đủ và",
        ],
        tham_chieu: [
            "MV 75f; GM 16a; TĐ  18d, 30, 31; DT 18; TG 17bc, 21a, 41g",
        ],
    },
    {
        stt: 310,
        noi_dung: "Không cần địa vị nào mới làm tông đồ được. Đ ừng thắc mắc địa vị con hay địa vị người khác; làm vì Ch úa hay vì địa vị?Chén của Ta, c ác ngươi sẽ uống; còn việc ngồi bên hữu hay bên tả Ta, Ta không có quyền ban, nhưng là dành cho những ai đã được Cha Ta dọn cho (Mt 20,23).",
        chuong: 14,
    },
    {
        stt: 311,
        noi_dung: "Nay địa vị này, mai địa vị kia, ng ười tông đồ không cảm thấy mất mát gì c ả, chỉ biết một tiếng gọi: … Đ ến không để được hầu hạ, nhưng là để hầu hạ và thí m ạng sống mình… (Mt 20,28) . Ở đâu cũng có thể nên thánh. phục vụ kẻ khác. Như vậy, anh em m ới là những người khéo quản lý ân huệ thiên hình vạn trạng của Thiên Chúa. Ai có nói, thì nói lời Thiên Chúa; ai phục vụ, thì phục vụ bằng sức mạnh hiên Chúa ban. Như thế, trong mọi việc, chúng ta tôn vinh Thi ên Chúa nhờ Đ ức Giêsu Kitô. Kính d âng Người vinh quang v à uy quyền đến muôn thuở muôn đời. A-men.",
        chuong: 14,
        loi_chua: [
            "1Pr 4,10-11: Ơ n riêng Thiên Chúa đã ban, mỗi người trong anh em phải dùng mà",
        ],
    },
    {
        stt: 312,
        noi_dung: "Con buồn vì mất địa vị, vì không được đặt đúng chỗ. Con đi buôn sao mà buồn vì lỗ lã?",
        chuong: 14,
    },
    {
        stt: 313,
        noi_dung: "Lãnh nhận một trách nhiệm tông đồ là sẵn sàng chấp nhận chịu tử đạo bởi mọi người, ở mọi nơi, bằng mọi cách, với tất cả yêu thương và bền chí như Phêrô và Gioan: Các Ngài bước ra khỏi công nghị hân hoan vì đã thấy mình xứng đáng được chịu sỉ nhục vì Danh Chúa (Cv 5,41). chặng đường, chu to àn chức vụ tôi đã nhận từ Chúa Giêsu, là long trọng làm chứng cho Tin Mừng về ân sủng của Thiên Chúa. mạnh dạn và tin t ưởng làm cho ng ười ta nh ận biết mầu nhiệm Chúa Kitô mà họ là sứ giả, đến nỗi trong Người, họ dám nói như phải nói, và không xấu hổ về ô nh ục c ủa th ập gi á. Theo g ương Th ầy mình, Đ ấng hi ền l ành v à khi êm nhượng trong lòng, họ phải tỏ ra ách Người êm ái và gánh Người nhẹ nhàng. Họ phải làm chứng về Chúa của họ bằng đời sống Phúc âm đích thực, đầy kiên nhẫn, đại lượng, nhân hậu, yêu mến chân thành và nếu cần, họ sẽ đổ máu ra.",
        chuong: 14,
        loi_chua: [
            "Cv 20,24: M ạng sống tôi, tôi coi th ật chẳng đáng giá gì, mi ễn sao t ôi chạy hết",
            "TG 24b: Trong khi rao gi ảng Ph úc âm gi ữa mu ôn d ân, nh à truy ền gi áo ph ải",
        ],
        tham_chieu: [
            "Mt 10,18; Cv 23,11",
            "GH 42b, 50b; TD 11b",
        ],
    },
    {
        stt: 314,
        noi_dung: "Kẻ thù nguy hiểm nhất của công việc tông đồ là kẻ nội thù, Giuđa nộp Chúa. Thầy đã chọn, nhưng phải ứng nghiệm lời Kinh Th ánh sau đây: Kẻ đã cùng con chia cơm sẻ bánh lại giơ gót đạp con.",
        chuong: 14,
        loi_chua: [
            "Ga 13,18: Th ầy không nói về tất cả anh em đâu. Chính Th ầy biết những người",
        ],
    },
    {
        stt: 315,
        noi_dung: "Kẻ thù khốc hại nhất của đời tông đồ con không phải là kẻ ngoại thù, đối lập con, nhưng là kẻ nội thù: chính b ản thân con c ó thể thành tên gián điệp làm việc cho c ả hai b ên: Thiên Chúa và ma quỷ. huệ bởi trời, đã được thông chia Thánh Thần, đã được thưởng thức Lời tốt đẹp của Thiên Chúa và được cảm nghiệm những sức mạnh của thế giới tương lai, những kẻ ấy mà sa ngã, thì không thể được đổi mới một lần nữa để sám hối ăn năn, vì họ đã tự tay đóng đinh Con Thiên Chúa vào thập giá một lần nữa và đã công khai sỉ nhục Người.",
        chuong: 14,
        loi_chua: [
            "Dt 6,4-6: Quả thật, những kẻ đã một lần được chiếu sáng, đã được nếm thử ân",
        ],
        tham_chieu: [
            "Gc 1,6-8; 1Ga 2,15-16",
        ],
    },
    {
        stt: 316,
        noi_dung: "Tâm hồn tông đồ kính trọng thượng cấp, kể cả khi trình bày ngược lại chỉ thị, và không bao giờ vô lễ với thượng cấp trước mặt kẻ khác. Không thể tha thứ thái độ bất tuân, hai lòng.",
        chuong: 14,
    },
    {
        stt: 317,
        noi_dung: "Giọng tự mãn khiến mọi người lánh xa, kh ông ai tin con l àm tất cả thay Ch úa Thánh Thần. làm được gì, nh ưng khả năng của chúng tôi là do ơn Thiên Chúa, Đ ấng ban cho chúng tôi khả năng phục vụ Giao Ư ớc Mới, không phải Giao Ư ớc căn cứ trên chữ viết, nhưng dựa vào Thần Khí. Vì chữ viết thì giết chết, còn Thần Khí mới ban sự sống.",
        chuong: 14,
        loi_chua: [
            "2Cr 3,5-6: Không phải vì tự chúng tôi, chúng tôi có khả năng để nghĩ rằng mình",
        ],
        tham_chieu: [
            "Ga 3,27; 15,5",
        ],
    },
    {
        stt: 318,
        noi_dung: "Vẫy vùng ngược xuôi, nhưng không có đức Ái, cũng vô ích, khác nào mua đèn ngũ sắc giăng cùng làng khắp xóm nhưng không có máy điện. Đêm đến tối om, cả làng mới vỡ lẽ đèn của con để trang trí chứ không soi sáng được. thần đi nữa, mà không có đức mến, thì tôi cũng chẳng khác gì thanh la ph èng phèng, chũm choẹ xoang xoảng.",
        chuong: 14,
        loi_chua: [
            "1Cr 13,1: Gi ả như tôi có nói được các thứ tiếng của loài người và của các thiên",
        ],
        tham_chieu: [
            "1Tm 1,5-7",
        ],
    },
    {
        stt: 319,
        noi_dung: "Bị nhục mạ, bắt bớ, đuổi từ thành này sang thành khác, là dấu Chúa thương con, Chúa chọn con l àm tông đồ thật. Ta đã chọn các con t ừ giữa thế gian, b ởi vậy mà thế gian ghét các con. Hãy nhớ lời Ta đã nói với các con: t ôi tớ không lớn hơn chủ. Nếu họ đã bắt bớ Ta, họ cũng sẽ bắt bớ các con; nếu họ đã giữ lời Ta, họ cũng sẽ giữ lời các con (Ga 15,19-20). ô-khi-a, I-cô-ni-ô, Lýt-ra, đã biết tôi chịu bắt bớ như thế nào. Nhưng Chúa đã giải thoát tôi khỏi tất cả. Vả lại, những ai muốn sống đạo đức trong Đ ức Kitô Giêsu, đều sẽ bị bắt bớ.",
        chuong: 14,
        loi_chua: [
            "2Tm 3,11-12: Anh đã biết những cơn bắt bớ, những sự đau khổ tôi đã gặp ở An-ti-",
        ],
        tham_chieu: [
            "Dt 12,1b-3",
        ],
    },
    {
        stt: 320,
        noi_dung: "Việc t ông đồ nhằm đưa người ta v ào Hội thánh, không phải để lập những Hội thánh riêng của nhóm này, nhóm nọ, dòng này, dòng kia. Ch ưa rối đạo, nhưng rối việc đạo lắm! về ông Phao-lô, tôi thuộc về ông A-pô-lô, tôi thuộc về ông Kê-pha, tôi thuộc về Đ ức Kitô. Thế ra Đ ức Kitô đã bị chia năm xẻ bảy rồi ư? Có phải Phao-lô đã chịu đóng đinh vào khổ giá vì anh em ch ăng? Hay anh em đã chịu phép rửa nhân danh Phao-lô sao?",
        chuong: 14,
        loi_chua: [
            "1Cr 1,12-13: Tôi muốn nói là trong anh em c ó những luận điệu như: Tôi thuộc",
        ],
        tham_chieu: [
            "1Cr 3,4",
        ],
    },
    {
        stt: 321,
        noi_dung: "Tông đồ bằng đau kh ổ, không giảng giải, không hoạt động, nhưng thinh l ặng tế lễ cứu bao linh h ồn. Chúa Giêsu hấp hối trên thánh giá, Đ ức Mẹ hấp hối trong t âm hồn dưới chân thánh giá.",
        chuong: 14,
    },
    {
        stt: 322,
        noi_dung: "a. Tông đồ bằng hy sinh và thinh lặng, như hạt lúa chôn vùi, mục nát đi để sinh muôn vàn hạt khác nuôi nhân loại. b. Tông đồ bằng chứng tích. Lời quả quyết suông không đáng người ta tin t ưởng mấy, dù ngọt ngào trau chuốt đến đâu. Tang vật đáng tin hơn. Hình ảnh chụp được, tiếng nói ghi âm được càng dễ đánh động người ta h ơn. Nhưng nếu chính con người sống động bằng xương bằng thịt, nếu cả cuộc sinh hoạt, nếu cả một lớp người, một lớp gia đình cùng sống một lý tưởng, thì chứng tích ấy có một sức mạnh thuyết phục lớn lao biết chừng nào! động nơi anh em. giảng: đừng trộm cắp, mà bạn lại trộm cắp! Bạn nói: chớ ngoại tình, m à bạn lại ngoại tình! Bạn gớm ghét ngẫu tượng, mà bạn lại cướp bóc đền miếu! việc truy ền b á đức tin l à s ống s âu xa đời s ống Kit ô h ữu. Vì chính khi nhi ệt thành phụng sự Thiên Chúa và bác ái đối với tha nhân, họ mang lại cho to àn thể Giáo hội một cảm hứng tinh thần mới và làm cho Giáo hội xuất hiện như là một dấu chỉ nổi lên giữa các dân, là ánh sáng thế gian (Mt 5,14) và là muối đất (Mt 5,13).",
        chuong: 14,
        loi_chua: [
            "a. 2Cr 4,12: Nh ư thế, sự chết hoạt động nơi chúng tôi, còn sự sống thì l ại hoạt",
            "b. Rm 2,21 -23: B ạn bi ết d ạy ng ười kh ác, m à l ại kh ông d ạy chính mình! B ạn",
            "TG 36b: Mọi người phải biết rằng bổn phận đầu tiên và quan trọng nhất đối với",
        ],
        tham_chieu: [
            "Ga 12,24",
            "1Pr 2,12",
            "GH 12a; DT 1c; TĐ  6b, 16c, 31c; TG 21c",
        ],
    },
    {
        stt: 323,
        noi_dung: "Tông đồ bằng tiếp xúc: Lòng chúng ta l ại đã không cháy bừng bừng, lúc dọc đàng Ngài ngỏ lời với Ta, và giải thích Kinh Th ánh cho Ta đó sao? (Lc 24,32). Con kh ông nghĩ rằng: mỗi cuộc tiếp xúc là một công tác tông đồ sao?",
        chuong: 14,
    },
    {
        stt: 324,
        noi_dung: "Tông đồ bằng tư tưởng: nâng đỡ một người bạn đang gặp khủng hoảng, mở chân trời cho bạn thấy khả năng và ơn gọi cách sáng tỏ, đem hy v ọng cho m ột cuộc đời sắp tan vỡ. Báo chí sẽ bớt đăng những tin uống thuốc ngủ, độc dược… n ếu có những người như con. buổi họp, chuyên cần khuyên nhủ và dạy dỗ… Anh h ãy thận trọng trong c ách ăn nết ở và trong lời giảng dạy. Hãy kiên trì trong việc đó. Vì làm như vậy, anh sẽ cứu được chính mình, lại còn cứu được những người nghe anh giảng dạy.",
        chuong: 14,
        loi_chua: [
            "1Tm 4,13.16: Trong khi ch ờ tôi đến, hãy chuyên cần đọc Sách Thánh trong c ác",
        ],
        tham_chieu: [
            "2Tm 4,14-17",
        ],
    },
    {
        stt: 325,
        noi_dung: "Tông đồ b ằng b ữa ăn. B ữa ăn l à chuy ện th ường tình, nh ưng b ữa Ch úa ăn ở nh à Mađalêna, ở nhà Simon, Giakêu khác xa chúng ta: Hôm nay ơn cưú rỗi đã đến cho nhà này! (Lc 19,9).",
        chuong: 14,
    },
    {
        stt: 326,
        noi_dung: "Con nghĩ thư từ không phải là việc tông đồ sao? Phaol ô ngồi trong t ù ngục, không máy in, vẫn viết thư cho một giáo đoàn, giáo đoàn ấy chép lại rồi chuyền sang cho một giáo đoàn khác. Cứ thế, Phaolô đã giữ vững và phát triển đức tin của Hội thánh sơ khai. Con hãy để tất cả lòng yêu thương con vào phong bì rồi dán lại, gửi đi. được đọc nữa. Xin anh em c ũng đọc thư của tôi gửi cho Hội Thánh Lao-đi-ki- a.",
        chuong: 14,
        loi_chua: [
            "Cl 4,16: Sau khi anh em đọc thư này, xin liệu sao cho Hội Thánh Lao-đi-ki-a cũng",
        ],
    },
    {
        stt: 327,
        noi_dung: "Phụ n ữ làm t ông đồ r ất đắc l ực, nh ư b à Maria, b à Salom ê theo gi úp Ch úa Gi êsu. Thánh Phaol ô c ũng nh ắc đến nhi ều ph ụ n ữ t ông đồ: Xin g ởi l ời ch ào Tryph êna v à Tryphôsa, các bà đã nhiều công lao nhọc trong Chúa (Rm 16,12).",
        chuong: 14,
    },
    {
        stt: 328,
        noi_dung: "Từ xưa, thiếu nhi đã là tông đồ đầy dũng cảm: Tarcisiô đã mang Ch úa đến cho bao nhiêu người. Hãy nhớ lời Chúa: Đ ừng khinh dễ trẻ con. có thật sự là những chứng nhân sống động của Chúa Kitô giữa các bạn hữu.",
        chuong: 14,
        loi_chua: [
            "Mt 18,10a: Anh em hãy coi chừng, chớ khinh một ai trong những kẻ bé mọn.",
            "TĐ  12d: Trẻ em cũng có hoạt động tông đồ riêng của chúng. Tuỳ khả năng chúng",
        ],
        tham_chieu: [
            "Mc 10,14-15",
            "GM 14a; Đ T 2a; TĐ  30abc; GD 7a",
        ],
    },
    {
        stt: 329,
        noi_dung: "Đâ u ph ải đợi đến ngày nay c ó vài b à tran h đấu, ph ụ n ữ m ới c ó ch ỗ đứng trong H ội thánh. Các thánh Tông đồ đã tin d ùng, sao ng ày nay l ại không tiếp tục? Thánh Phaolô viết: Tôi xin g ởi gắm với anh em, ch ị Phêbê của chúng tôi, nữ tá viên của Hội thánh Kenkrê, mong anh em ti ếp đón ch ị trong Ch úa… Xi n gởi l ời ch ào Prisca v à Aquila, những người cộng sự của tôi trong Đ ức Giêsu Kitô. Họ đã liều mất đầu để cứu mạng tôi (Rm 16,1-4).",
        chuong: 14,
    },
    {
        stt: 330,
        noi_dung: "Con đừng do d ự về con v à về người khác: chài lưới như Phêrô, thu thu ế như Matthêu đều làm tông đồ được. Hãy theo Ta, v à Ta sẽ cho c ác ngươi nên ngư phủ chài lưới người (Mt 4,19). Con làm không được nhưng Chúa làm được.",
        chuong: 14,
    },
    {
        stt: 331,
        noi_dung: "Quả tim con ph ải rộng đủ để chứa đựng và rung nh ịp với tất cả chương trình Phúc âm hoá của Hội thánh. Đ ấng h ọ kh ông được nghe? L àm sao m à nghe, n ếu kh ông c ó ai rao gi ảng? Làm sao m à rao gi ảng, n ếu kh ông được sai đi? Nh ư c ó l ời ch ép: Đ ẹp thay bước chân những sứ giả loan báo tin mừng! cho thế giới, cả lúc họ bận tâm lo lắng những việc trần thế.",
        chuong: 14,
        loi_chua: [
            "Rm 10,14-15: Thế nhưng làm sao họ kêu cầu Đ ấng họ không tin  L àm sao họ tin",
            "GH 35d: Giáo dân có thể và phải có một hoạt động cao qúy là truyền bá Phúc âm",
        ],
        tham_chieu: [
            "GH 17a, 33d, 44b; DT 6c; TĐ  5a; TG 3c",
        ],
    },
    {
        stt: 332,
        noi_dung: "Xưa ở đâu có tiêu sọ, có mỏ vàng, thiên hạ liều sống liều chết đến đó. Ngày nay ở đâu có dầu hoả, có sắt, đồng, phốt phát, uranium… c ác nước giết nhau m à đến. Còn ở đâu chỉ có linh hồn người ta, không ai thèm đến. con người của tôi vì linh hồn anh em. Phải chăng vì yêu mến anh em nhiều hơn mà tôi được yêu mến ít hơn?",
        chuong: 14,
        loi_chua: [
            "2Cr 12,15: Ph ần tôi, tôi rất vui l òng tiêu phí ti ền của, và tiêu phí c ả sức lực lẫn",
        ],
        tham_chieu: [
            "Pl 2,17",
        ],
    },
    {
        stt: 333,
        noi_dung: "Nếu con b ảo giáo dân có ơn đặc sủng của Chúa Thánh Thần, có người sẽ cho r ằng con nhạo báng họ! Nếu con bảo giáo dân là tư tế, tiên tri, vương đế, có người sẽ cho con là thệ phản! Có mấy giáo dân ý thức được Chúa gọi, Chúa cần họ? Hãnh diện và tri ân vì được làm con Chúa nhờ phép Thánh tẩy? Làm chiến sĩ, chứng nhân nhờ phép Thêm sức? vương giả, là dân thánh, dân riêng của Thiên Chúa, để loan truy ền những kỳ công của Người, Đ ấng đã gọi anh em ra khỏi miền u tối, vào nơi đầy ánh sáng diệu huy ền. X ưa anh em ch ưa ph ải l à m ột d ân, nay anh em đã l à D ân c ủa Thiên Chúa; xưa anh em ch ưa được h ưởng lòng thương x ót, nay anh em đã được xót thương được đề cử thi h ành việc phụng tự Kitô giáo và được tái sinh l àm con Thi ên Chúa, h ọ có bổn phận tuyên xưng trước mặt mọi người đức tin m à họ nh ận lãnh t ừ Thi ên Chúa qua Gi áo h ội. Nh ờ ơn bí tích Th êm s ức, h ọ g ắn b ó v ới Giáo h ội c ách ho àn h ảo h ơn v à được d ư đầy s ức m ạnh đặc bi ệt c ủa Ch úa Thánh Thần, do đó họ càng có bổn phận khẩn thiết hơn phải loan truy ền và bảo vệ đức tin b ằng lời nói và việc làm như những chứng nhân đích thực của Chúa Kitô.",
        chuong: 14,
        loi_chua: [
            "1Pr 2,9 -10: C òn anh em, anh em l à gi ống n òi được tuy ển ch ọn, l à h àng t ư t ế",
            "GH 11a: C ác tín h ữu tháp nhập vào Giáo hội bởi phép Rửa, và nhờ ân tích, h ọ",
        ],
        tham_chieu: [
            "GH 10b, 34b, 35a, 36b; PV 6; LM 2a; TG 11a, 15ab",
        ],
    },
    {
        stt: 334,
        noi_dung: "Thời đại giáo dân – Bao l âu chưa động viên được toàn lực dân Chúa ý thức và hành động, các tầng lớp xã hội này chưa thể thấm nhuần Phúc âm được. dấu chỉ tuyệt hảo của Chúa Kitô giữa loài người, nếu chưa có hàng giáo dân đích thực và nếu hàng giáo dân này chưa cùng làm việc với hàng giáo phẩm. Thật vậy, Phúc âm không thể đi sâu vào tinh th ần, đời sống và sinh ho ạt của một dân tộc nếu không có sự hiện diện linh hoạt của giáo dân. Do đó, ngay khi thiết lập Giáo hội, phải hết sức chủ tâm đến việc đào tạo một hàng giáo dân Kitô giáo trưởng thành.",
        chuong: 14,
        loi_chua: [
            "TG 21a: Gi áo hội chưa được thiết lập thực sự, chưa sống đầy đủ, cũng chưa là",
        ],
        tham_chieu: [
            "GH 3b; MV 43b; LM 9b; GM 6b; TĐ  1c",
        ],
    },
    {
        stt: 335,
        noi_dung: "Bí quyết của công cuộc tông đồ trong thời đại ta: Tông đồ giáo dân! nhờ được tham dự vào chức vụ của Chúa Kitô là tư tế, tiên tri và là vua. Trong những cộng đoàn của Giáo hội, hoạt động của họ cần thiết đến nỗi nếu không có hoạt động đó, chính ho ạt động tông đồ của các vị chủ chăn thường không thể đạt được đầy đủ kết qủa.",
        chuong: 14,
        loi_chua: [
            "TĐ  10a: Gi áo dân góp phần tích c ực vào đời sống và hoạt động của Giáo hội,",
        ],
        tham_chieu: [
            "GH 33bcd; TĐ  1, 2, 6a, 13a, 14a, 23a; Đ T 20; TG 19b, 21a",
        ],
    },
    {
        stt: 336,
        noi_dung: "Không có linh mục nào không xuất thân từ chủng viện, không có tông đồ giáo dân nào không xuất thân từ các khoá huấn luyện, con hãy xác tín điều đó. những khoá học tập, những kỳ đại hội, những cuộc tĩnh tâm, linh thao, nh ững buổi h ọp m ặt th ường xuy ên, nh ững bu ổi thuy ết trình c ũng nh ư s ách b áo v à những sách giải thích: t ất cả đều là những phương thế giúp họ trau d ồi thêm kiến thức về Thánh kinh c ũng như về giáo lý công  gi áo, giúp họ nuôi dưỡng đời sống thiêng liêng cũng như giúp họ hiểu biết những hoàn cảnh sống của thế giới để khám phá và sử dụng những phương pháp thích ứng nhất.",
        chuong: 14,
        loi_chua: [
            "TĐ  32a: Ng ười t ông đồ gi áo d ân hi ện nay c ó nhi ều ph ương th ế, ch ẳng h ạn:",
        ],
        tham_chieu: [
            "Đ T 3a, 4a, 10a; TĐ  28; TG 16d, 17bc",
        ],
    },
    {
        stt: 337,
        noi_dung: "Nếu mỗi giáo xứ, con hu ấn luyện được năm chiến sĩđích thực thôi, những người đến sau con, sẽ sử dụng, hợp tác với họ, quyết sinh quyết tử suốt ba bốn chục năm. Bao nhiêu tiềm lực chúng ta quên khám phá, khai thác trong Nước Chúa!",
        chuong: 14,
    },
    {
        stt: 338,
        noi_dung: "Đ ừng ham đại chúng, đừng vụ số đông, hãy xác tín vấn đề cán bộ: quần chúng lộn xộn rời rạc, chỉ cần một cán bộ đủ khuấy động, đủ khơi dậy cả quần chúng. Cán bộ là hồn, là bộ óc, là xương sống của quần chúng. đó có ghi tạc lời này: Chúa biết những kẻ thuộc về Người, và Phàm ai kêu cầu danh Chúa phải tránh xa điều bất chính. Trong m ột ngôi nhà lớn, không phải chỉ có những đồ vật bằng vàng bằng bạc, nhưng cũng có những đồ vật bằng gỗ bằng sành; thứ thì dùng vào việc cao quý, thứ thì dùng vào việc thấp hèn. Vậy ai thanh tẩy mình cho sạch những điều xấu nói trên, người đó sẽ là một đồ vật dùng vào việc cao qu ý, một đồ vật được thánh hiến, có ích cho ch ủ, sẵn sàng làm mọi việc lành.",
        chuong: 14,
        loi_chua: [
            "2Tm 2,19-21: Tuy nhiên, nền móng vững chắc Thiên Chúa đã đặt thì tồn tại; trên",
        ],
        tham_chieu: [
            "Lc 22,31-32",
        ],
    },
    {
        stt: 339,
        noi_dung: "Hãy nghiên cứu các tu hội đời: thời đại mới, giải pháp mới. Đó  là đặc sủng của thời đại ta, sẽ làm thăng tiến đời sống thiêng liêng của bao nhiêu giáo dân. Các Đ ức Giáo Hoàng đã nhận thấy dấu hiệu của thời đại trước chúng ta những mấy chục năm. thực sự và trọn vẹn được Giáo hội công nhận để giữ các lời khuyên Phúc âm ở giữa đời. Lời khấn ấy tận Hiến các hội viên nam cũng như nữ, giáo dân cũng như giáo sĩ hiện đang sống giữa đời. Bởi đó, chính họ phải trước hết quyết tâm tận hiến toàn thân cho Thi ên Chúa trong đức mến trọn hảo; còn tu h ội, phải giữ tính chất đặc thù của mình, là sống giữa đời, để dù ở đâu, họ cũng có thể chu toàn hữu hiệu việc tông đồ ở giữa đời và như phát sinh t ừ lòng đời theo như tu hội đã chủ trương không thành lập.",
        chuong: 14,
        loi_chua: [
            "DT 11a: Nh ững tu h ội triều, tuy kh ông phải là dòng tu, nh ưng cũng có lời khấn",
        ],
        tham_chieu: [
            "DT 8a, 10a; TĐ  4h; TG 27a, 40d",
        ],
    },
    {
        stt: 340,
        noi_dung: "Đư ờng lối tông đồ của thời đại ta: - Ở  giữa trần gian, - Không do trần gian, - Nhưng cho trần gian, - Với phương tiện của trần gian. khỏi ác thần. Họ không thuộc về thế gian cũng như con đây không thuộc về thế gian. ơn gọi riêng, giáo dân có bổn phận tìm kiếm Nước Thiên Chúa bằng cách làm các việc trần thế và xếp đặt chúng theo ý Thiên Chúa. Họ sống giữa trần gian, nghĩa là giữa tất cả cũng như từng công việc và bổn phận trần thế, giữa những cảnh sống thường ngày trong gia đình và ngoài xã hội; tất cả những điều đó như d ệt th ành cu ộc s ống c ủa h ọ. Đó  l à n ơi Thi ên Ch úa g ọi h ọ, để d ưới s ự hướng dẫn của tinh thần Phúc âm, như men từ bên trong, họ thánh hoá thế giới bằng việc thi hành những nhiệm vụ của mình.",
        chuong: 14,
        loi_chua: [
            "Ga 17,15-16: Con không xin Cha c ất họ khỏi thế gian, nhưng xin Cha gìn gi ữ họ",
            "GH 31b: Tính c ách trần thế là tính cách riêng biệt và đặc thù của giáo dân… Vì",
        ],
        tham_chieu: [
            "GM 13c; DT 11a; TG 12c",
        ],
    },
    {
        stt: 341,
        noi_dung: "Là chi thể của Nhiệm thể, chúng ta là óc để suy tư, là mắt để nhìn thực tại trần thế, là tai để nghe tiếng rên rỉ, đòi hỏi, là vai để gánh vác, là tay để cứu vớt, là chân để đến với người khổ đau, là quả tim để khắc khoải yêu thương, là miệng để nói những lời bác ái ủi an. Nhờ tông đồ mà Hội thánh hiện diện giữa thế giới ngày nay. yếu. Tôi đã trở nên tất cả cho m ọi người, để bằng mọi cách cứu được một số người. Vì Tin M ừng, tôi làm tất cả những điều đó, để cùng được thông chia phần phúc của Tin Mừng. gian: trước tiên bằng đời sống hoà hợp với đức tin, để nhờ đó họ trở thành ánh sáng thế gian; bằng đời sống lương thiện trong bất cứ công ăn việc làm nào để làm cho m ọi người y êu mến sự thật, s ự thiện và cu ối c ùng đưa họ tới Chúa Kitô và Giáo hội; bằng đời sống bác ái huynh đệ qua vi ệc họ thực sự chia s ẻ với anh em trong ho àn c ảnh s ống, trong đau kh ổ c ũng nh ư trong m ọi ước vọng, và như thế họ âm thầm chuẩn bị cho ơn cứu rỗi hoạt động trong tâm hồn mọi người; bằng cuộc sống ý thức đầy đủ về vai tr ò của mình trong vi ệc xây dựng xã hội, họ cố gắng chu toàn hoạt động nơi gia đình, ngoài xã hội, trong nghề nghiệp với lòng quảng đại của Kitô giáo; như thế phương thức hành động của họ dần dần thấm nhập vào môi trường sống và cả môi trường làm việc.",
        chuong: 14,
        loi_chua: [
            "1Cr 9,22-23: Tôi đã trở nên yếu với những người yếu, để chinh phục những người",
            "TĐ  13b: Ng ười giáo dân chu to àn sứ mệnh (tông đồ) này của Giáo hội nơi trần",
        ],
        tham_chieu: [
            "Rm 15,1-2",
            "MV 1,89a; TĐ  29g; TG 6f, 36b",
        ],
    },
    {
        stt: 342,
        noi_dung: "Người ta kh ông để ý đến sự hiện diện khiêm tốn và hoạt động thầm lặng của tông đồ. Nhưng sự vắng mặt của tông đồ làm cho người ta th ấy ngay môi trường trống rỗng và chết l ạnh. Kh ông ai ch ú ý v à qu ý tr ọng mu ối bi ển, ánh s áng, khí tr ời, nh ưng thi ếu chúng, vũ trụ chết ngay. Không ai để ý quả đất đang hoạt động, xoay vần, nhưng nếu nó dừng lại chúng ta cũng bị tiêu diệt. Phải có đời đời để dọn mình, phải có đời đời để tạ ơn vì dâng một Thánh lễ",
        chuong: 14,
        loi_chua: [
            " ",
        ],
    },
    {
        stt: 343,
        noi_dung: "Thánh lễ làm nên Kitô hữu, Kitô hữu làm nên thánh lễ. Thánh Thể làm nên Hội thánh, Hội thánh làm nên Thánh Thể.",
        chuong: 15,
    },
    {
        stt: 344,
        noi_dung: "Người ngoài lấy làm lạ: Ngày nào ông linh mục cũng làm một chuyện, sao người công giáo kéo nhau đi mãi? Họ nói có phần đúng; ở đâu, ai làm, cũng vẫn là một lễ hy sinh trên núi Calvariô tiếp tục, nhưng có một sức lạ lôi cuốn họ, không phải linh m ục mà chính Chúa Giêsu tế lễ. Thánh lễ hoặc cộng đồng tạ ơn, trong đó, các ngài thay thế Chúa Kitô công bố mầu nhiệm của Chúa, kết hợp những ước nguyện của tín hữu vào hy tế của Thủ lãnh họ và trong hy t ế Thánh lễ, hiện tại hoá và áp dụng hy t ế duy nh ất của Tân Ư ớc, l à hy v ật tinh tuy ền đã một lần tự hiến dâng lên Chúa Cha (x. Dt 9,11-28) cho tới khi Chúa lại đến (x. 1Cr 11,26).",
        chuong: 15,
        loi_chua: [
            "GH 28a: Các ngài (linh mục) thực thi thánh vụ mình cách tuyệt hảo nhất là trong",
        ],
        tham_chieu: [
            "GH 3,10b; PV 7a,47; LM 2d, 13c",
        ],
    },
    {
        stt: 345,
        noi_dung: "Có người chủ trương khi n ào sốt sắng mới dự lễ, như vậy mới chân thành với Chúa. Không, đó là dự lễ tùy hứng, vì sảng khoái của con.",
        chuong: 15,
    },
    {
        stt: 346,
        noi_dung: "Biết giá trị của Thánh lễ, dù xa d ù khó con c ũng cố gắng tham d ự. Càng hy sinh, con càng thấy mến Chúa hơn. nên mọi việc cử hành phụng vụ đều là hành vi chí thánh và không một hành vi nào khác của Giáo hội có hiệu lực bằng, xét cả về danh hiệu lẫn đẳng cấp.",
        chuong: 15,
        loi_chua: [
            "PV 7d: Vì l à công việc của Chúa Kitô Tư tế và Thân thể của Người là Giáo hội,",
        ],
        tham_chieu: [
            "GH 3,11a; PV 106; GM 30b",
        ],
    },
    {
        stt: 347,
        noi_dung: "Xưa nay có ai thấy người nào dự lễ mà lại nghèo cực hơn kẻ khác vì mất giờ không? đông, vì họ ở luôn với Thầy đã ba ngày rồi và họ không có gì ăn. Thầy không muốn giải tán họ, để họ nhịn đói mà về, sợ rằng họ bị xỉu dọc đường.",
        chuong: 15,
        loi_chua: [
            "Mt 15,32: Đ ức Giêsu gọi các môn đệ lại mà nói: Thầy chạnh lòng thương đám",
        ],
    },
    {
        stt: 348,
        noi_dung: "Cùng dự Thánh lễ, nhưng tâm tình khác xa nhau. Con h ãy phân tích những hạng người quanh chân Thánh giá.",
        chuong: 15,
    },
    {
        stt: 349,
        noi_dung: "Con muốn hỏi: Cách gì đẹp lòng Chúa hơn cả? Hãy tham dự Thánh lễ, vì không kinh nào, không tổ chức, nghi thức nào sánh bằng lời nguyện và hy lễ Chúa Giêsu trên Thánh giá.",
        chuong: 15,
    },
    {
        stt: 350,
        noi_dung: "Người thánh là người tiếp tục sống Thánh lễ suốt ngày.",
        chuong: 15,
    },
    {
        stt: 351,
        noi_dung: "Tán dóc mấy giờ cũng được, ăn nhậu càng lâu càng khoái, cờ bạc thâu đêm không chán, tại sao vội vã lúc dự lễ?",
        chuong: 15,
    },
    {
        stt: 352,
        noi_dung: "Nhà tạm tốt đẹp nhất, hào quang sáng chói nhất, chân đèn rực rỡ nhất, thánh đường uy nghi nhất, là LINH MỤ C. Đ ặt một linh m ục nguội lạnh ở vương cung th ánh đường, không ai th èm gặp. Đ ặt một linh mục thánh thiện trong m ột nguyện đường nghèo nàn, hẻo lánh, ai c ũng tìm đến (Cha Chevrier). lãnh nhận chức Thánh là các ngài được thánh hiến cho Thi ên Chúa theo m ột cách thức mới: Các ngài trở nên những khí cụ sống động của Chúa Kitô Tư tế vĩnh cửu, để qua c ác thời đại, các ngài có thể tiếp tục công việc kỳ diệu của Đ ấng đã lấy quyền năng cao cả mà tái lập toàn thể xã hội con người… … Chính s ự thánh thiện của linh mục giúp các ngài rất nhiều trong việc chu toàn thừa tác vụ của mình một cách hữu hiệu: thật vậy, dù ơn Chúa có thể hoàn tất công trình cứu rỗi qua những thừa tác viên bất xứng, nhưng sự thường để biểu lộ những việc lạ lùng của mình, Thiên Chúa thích dùng những người sẵn sàng nghe theo s ự thúc dục và hướng dẫn của Chúa Thánh Thần cũng như những người kết hiệp mật thiết với Chúa Kitô và sống thánh thiện, để có thể nói như thánh Tông đồ rằng: Dù tôi sống, nhưng không phải là tôi sống, mà thực ra Chúa Kitô sống trong tôi (Gl 2,20).",
        chuong: 15,
        loi_chua: [
            "LM 12ac: C ác linh m ục còn có lý do đặc biệt phải đạt tới sự hoàn thiện, vì khi",
        ],
        tham_chieu: [
            "GH 17, 21a, 28a; LM 1; TG 16a",
        ],
    },
    {
        stt: 353,
        noi_dung: "Gia đình thánh thiện là gia đình yêu quý Thánh lễ.",
        chuong: 15,
    },
    {
        stt: 354,
        noi_dung: "Phải có đời đời để dọn mình, phải có đời đời để tạ ơn, vì dâng một Thánh lễ (Thánh Vianney).",
        chuong: 15,
    },
    {
        stt: 355,
        noi_dung: "Linh mục cùng tế lễ với Chúa Giêsu, cùng trao mình v ới Chúa Giêsu, làm của ăn cho mọi người, bất cứ lúc nào, trao tất cả! mục đặc biệt là hiện thân của Đ ức Kitô, Đ ấng đã tự hiến chính mình l àm hy vật thánh hoá nhân loại; và như thế các ngài được mời gọi bắt chước điều các ngài đang thi hành, vì khi cử hành mầu nhệm Chúa chịu chết, các ngài phải lo khắc chế chi thể mình khỏi tật xấu và dục vọng.",
        chuong: 15,
        loi_chua: [
            "LM 13c: Là thừa tác viên lo việc phụng tự, nhất là trong Hy tế Thánh lễ, các linh",
        ],
        tham_chieu: [
            "GH 11a; LM 12b; Đ T 10a; DT 5a",
        ],
    },
    {
        stt: 356,
        noi_dung: "Cả cuộc đời Chúa Giêsu hướng về núi Calvariô, cả cuộc đời con hướng về Thánh lễ. em hãy hiến dâng thân mình l àm của lễ sống động, th ánh thiện và đẹp lòng Thiên Chúa. Đó  là cách thức xứng hợp để anh em thờ phượng Người. hoạt động tông đồ đều gắn liền với bí tích Thánh Thể và qui hướng về đó.",
        chuong: 15,
        loi_chua: [
            "Rm 12,1: Th ưa anh em, vì Thi ên Chúa thương xót chúng ta, t ôi khuyên nhủ anh",
            "LM 5b: C ả những bí tích kh ác cũng như các thừa tác vụ trong Gi áo hội và các",
        ],
        tham_chieu: [
            "Rm 6,11.13; Dt 13,15-16; 1Pr 2,5",
            "GH 11a; PV 10a; GM 30b; LM 2d, 5b, 14b",
        ],
    },
    {
        stt: 357,
        noi_dung: "Mỗi lần dâng Thánh lễ là mỗi lần con giang tay ch ịu đóng đinh lại trên Thánh giá, và cùng uống cạn chén đắng với Chúa. Đâ y không có chỗ cho khán giả. không men. Qu ả v ậy, Đ ức Kit ô đã ch ịu hi ến t ế l àm chi ên l ễ V ượt Qua c ủa chúng ta. Vì th ế, chúng ta đừng lấy men c ũ, là lòng gian t à và độc ác, nhưng hãy lấy bánh không men, là lòng tinh tuyền và chân thật, mà ăn mừng đại lễ. đức tin như những khách bàng quan, câm lặng, nhưng thấu đáo mầu nhiệm đó qua các nghi l ễ và kinh nguy ện, cho h ọ tham d ự hoạt động thánh một cách ý thức, thành kính v à linh động, cho h ọ được đào luyện bởi Lời Chúa, được bổ sức n ơi b àn ti ệc Mình Ch úa, t ạ ơn Ch úa. Trong khi d âng l ễ v ật tinh tuy ền, không chỉ nhờ tay linh m ục mà còn liên kết với ngài, họ tập dâng chính mình; và ngày qua ng ày, nhờ Chúa Kitô Đ ấng Trung Gian, h ọ được tiêu hao trong tình kết liên với Thiên Chúa và với nhau, để cuối cùng Thiên Chúa trở nên mọi sự trong mọi người.",
        chuong: 15,
        loi_chua: [
            "1Cr 5,7-8: Anh em h ãy loại bỏ men c ũ để trở thành bột mới, vì anh em l à bánh",
            "PV 48: Giáo hội hằng bận tâm lo cho các Kitô hữu đừng tham dự vào mầu nhiệm",
        ],
        tham_chieu: [
            "GH 11a; PV 11, 14a, 56; LM 2d, 5c, 13c",
        ],
    },
    {
        stt: 358,
        noi_dung: "Tôi thích danh từ nôm na: Làm Lễ, tất cả hiệp nhất trong Chúa Kitô Làm Lễ liên lỉ.",
        chuong: 15,
    },
    {
        stt: 359,
        noi_dung: "Con muốn tôn vinh Chúa? Con muốn cảm tạ Chúa? Con muốn cầu xin Chúa? Con muốn yêu mến Chúa? Con muốn cứu nhân loại? HÃY DÂNG THÁNH LỄ! Chúa Giêsu đã làm như vậy! Phục sinh: g ồm vi ệc đọc những l ời ch ỉ v ề Ng ười trong Th ánh kinh  (Lc 24,27), và việc cử hành lễ Tạ ơn trong đó hiện tại hoá sự vinh th ắng và khải hoàn nhờ cái chết của Người, đồng thời cảm tạ Thiên Chúa về ân huệ khôn tả của Ngài (2Cr 9,15) trong Ch úa Giêsu Kitô, để ca t ụng vinh quang Ng ài (Ep 1,12) nhờ quyền năng Chúa Thánh Thần.",
        chuong: 15,
        loi_chua: [
            "PV 6: Gi áo hội không bao gi ờ bỏ việc cùng nhau quy t ụ để cử hành mầu nhiệm",
        ],
        tham_chieu: [
            "GH 28a, 34b; PV 10b; LM 5b",
        ],
    },
    {
        stt: 360,
        noi_dung: "Đèn không sáng, nếu hết dầu; xe không chạy, nếu cạn xăng; hồn tông đồ sẽ suy mạt nếu không đến với Thánh Thể: Nếu các ngươi không ăn thịt Con Người và uống máu Ngài, các ngươi không có sự sống nơi mình các ngươi (Ga 6,53). Thể là trung tâm và là cội rễ của toàn thể đời sống linh mục, cho nên linh mục phải cố gắng sống thực trong tâm hồn điều mình đã làm trên bàn tế lễ.",
        chuong: 15,
        loi_chua: [
            "LM 14t: Bác ái mục vụ trước hết phát xuất từ Hy tế Thánh Thể, do đó Hy tế Thánh",
        ],
        tham_chieu: [
            "PV 16b; LM 5b",
        ],
    },
    {
        stt: 361,
        noi_dung: "Mặt trời sáng và tung to ả ánh sáng. Thánh Thể là sự sống và nguồn phát xuất sự sống thần linh cho nhân loại, sự hoà hợp cho các dân tộc: Bánh Ta sẽ ban ấy là thịt mình Ta vì sự sống thế gian (Ga 6,51).",
        chuong: 15,
    },
    {
        stt: 362,
        noi_dung: "Thánh Thể làm cho Ta hi ệp nhất trong Nhi ệm Thể. Dâng Lễ mà không yêu thương là mâu thuẫn, quái gở. là dự phần v ào Máu Đ ức Kit ô ư? Và khi ta c ùng bẻ Bánh Thánh, đó ch ẳng phải là dự phần vào Thân Thể Người sao? Bởi vì chỉ có một tấm Bánh, và tất cả chúng ta chia sẻ cùng một Bánh ấy, nên tuy nhiều người, chúng ta cũng chỉ là một thân thể. chúng ta được nâng lên để hiệp thông với Người và với nhau. Chúng ta tuy nhiều, nhưng là một tấm bánh, một thân thể, vì h ết thảy chúng ta đồng thông hưởng cùng một tấm bánh (1Cr 10,17). Thế nên tất cả chúng ta trở thành chi thể c ủa Thân thể ấy (x. 1Cr 12,27) vì m ỗi người là chi th ể c ủa nhau  (Rm 12,5).",
        chuong: 15,
        loi_chua: [
            "1Cr 10,16-17: Khi ta nâng chén chúc tụng mà cảm tạ Thiên Chúa, há chẳng phải",
            "GH 7b: Khi bẻ bánh tạ ơn, chúng ta thực sự thông dự vào Thân Thể của Chúa nên",
        ],
        tham_chieu: [
            "Mt 5,23-24",
            "GH 3; PV 47; GM 15b; LM 6e; DT 15a; HN 2a",
        ],
    },
    {
        stt: 363,
        noi_dung: "Dù thiếu tất cả, dù mất tất cả, nhưng còn Thánh Thể là còn tất cả vì con c ó Chúa thiên đàng dưới đất.",
        chuong: 15,
    },
    {
        stt: 364,
        noi_dung: "Dù cô đơn nơi đèo heo hút gió, dù tăm tối trong ngục tù, con hãy hướng về các bàn thờ trên thế giới, nơi Chúa Giêsu đang tế lễ, con dâng Lễ và rước Lễ thiêng liêng. An ủi và can đảm sẽ tràn ngập lòng con.",
        chuong: 15,
    },
    {
        stt: 365,
        noi_dung: "Đư ợc dâng Thánh lễ, được rước Thánh Thể là một đề tài bất tận để suy ngắm, sao con kêu nguội lạnh?",
        chuong: 15,
    },
    {
        stt: 366,
        noi_dung: "Người công giáo Chúa nhật không đủ sức để cải tạo thế giới vật chất ngày nay. Sống Thánh lễ là bí quyết để đem Chúa cho thế giới và đưa thế giới đến với Chúa. và tr ọng t âm vào vi ệc c ử h ành ph ép Thánh Thể Chí th ánh… Nh ưng vi ệc c ử hành này muốn được chân thành và đầy đủ, vừa phải đưa đến những việc bác ái và tương trợ lẫn nhau, v ừa phải dẫn tới các hoạt động truyền giáo, và cả những hình thức minh chứng Kitô giáo nữa.",
        chuong: 15,
        loi_chua: [
            "LM 6e: Không một cộng đoàn Kitô hữu nào được thiết lập mà không đặt nền tảng",
        ],
        tham_chieu: [
            "GH 33b; PV 2, 10b; GM 15b; LM 5b; TG 36a, 39a",
        ],
    },
    {
        stt: 367,
        noi_dung: "Chúa Giêsu đã làm cách mạng trên Thánh giá. Cuộc cách mạng của con phải bắt nguồn từ bàn thánh. Tiếp tục cuộc cách mạng của Chúa, con sẽ làm nên một nhân loại mới.",
        chuong: 15,
    },
    {
        stt: 368,
        noi_dung: "Giọt nước hoà vào rượu thế nào, đời con tan biến trong Chúa Giêsu như vậy. ở trong chúng ta. Như vậy, thế gian sẽ tin rằng Cha đã sai con.",
        chuong: 15,
        loi_chua: [
            "Ga 17,21: Đ ể tất cả nên một, như Cha ở trong con và con ở trong Cha để họ cũng",
        ],
    },
    {
        stt: 369,
        noi_dung: "Cả cuộc sống con ph ải loan truy ền việc Chúa chịu chết và tuyên xưng việc Chúa sống lại. loan truyền Chúa đã chịu chết.",
        chuong: 15,
        loi_chua: [
            "1Cr 11,26: Cho tới ngày Chúa đến, mỗi lần ăn Bánh và uống Chén này, là anh em",
        ],
        tham_chieu: [
            "2Cr 4,11",
        ],
    },
    {
        stt: 370,
        noi_dung: "Chúa Giêsu là đầu, Ngài chỉ tế lễ với Nhiệm thể là Hội thánh của Ngài: Cùng với Đ ức Giáo Hoàng… v à Đ ức Giám mục… Thi ếu sự thông hiệp ấy, dâng lễ không có ý nghĩa, nghịch lương tâm. chức Tư tế và thừa tác vụ duy nhất của Chúa Kitô; cho n ên, chính tính c ách duy nhất của việc thánh hiến và sứ mệnh đòi phải có sự hiệp thông phẩm trật giữa các ngài và hàng Giám mục; đôi khi m ối hiệp thông đó được biểu hiện một c ách r ất cao đẹp trong vi ệc c ùng c ử h ành ph ụng v ụ, v à m ột c ách minh nhiên trong khi cử hành phép Thánh Thể.",
        chuong: 15,
        loi_chua: [
            "LM 7a: Tất cả các linh mục, hiệp nhất với các Giám mục đều tham dự cùng một",
        ],
        tham_chieu: [
            "GH 23a; PV 26; MV 43e",
        ],
    },
    {
        stt: 371,
        noi_dung: "Thánh lễ cho con nhìn th ấy và sống với Hội thánh: con nghe l ời Chúa Cứu Thế, các Tiên Tri và Tông đồ, con hiệp với Đ ức Giáo Hoàng, Đ ức Giám mục, hàng Giáo phẩm, giáo sĩ, tu s ĩ, toàn thể dân Chúa, các thánh, các linh h ồn, quanh Đ ức Maria, nh ờ Chúa Giêsu, dâng mọi chúc tụng và vinh quang lên Chúa Ba Ngôi, đợi ngày hồng phúc Chúa trở lại. Hạnh phúc, tin tưởng biết chừng nào? sức cao cả, đặc biệt trong Phụng vụ; ở đó quyền năng Thánh Thần hoạt động trên chúng ta qua c ác dấu chỉ bí tích, ở đó chúng ta cùng lớn tiếng ngợi khen Thiên Chúa uy linh, v à tất cả mọi người thuộc mọi chi tộc, ngôn ngữ, dân tộc, và quốc gia được cứu chuộc trong máu Chúa Kitô (x. Kh 5,9), h ợp nhau trong một Giáo hội duy nh ất, đồng thanh ch úc tụng một Thiên Chúa Ba Ng ôi. Bởi vậy, khi cử hành lễ Hy tế Tạ ơn, chúng ta kết hiệp rất mật thiết với việc phượng thờ của Giáo hội trên trời, vì hiệp cùng Giáo hội, chúng ta kính nh ớ trước hết Đ ức Maria vinh hiển, trọn đời đồng trinh, sau là Thánh Giuse, các thánh Tông đồ và Tử đạo cùng toàn thể các thánh.",
        chuong: 15,
        loi_chua: [
            "GH 50d: Sự hiệp nhất của chúng ta với Giáo hội trên trời được thực hiện cách hết",
        ],
        tham_chieu: [
            "GH 7b, 26a; PV 8",
        ],
    },
    {
        stt: 372,
        noi_dung: "Đ ời con là một Thánh lễ: Lúc sám hối đọc kinh Thú tội, khi hân hoan hát kinh Vinh danh, hồi vui mừng hát Alleluia, nhưng con không ngừng Dâng lên Chúa. Anh chị em hãy cầu nguyện Tin kính một Thiên Chúa là Cha Hiệp nhất cùng nhau nhờ Chúa Thánh Thần Thông hiệp cùng Hội thánh Chúa lan rộng khắp hoàn cầu.",
        chuong: 15,
    },
    {
        stt: 373,
        noi_dung: "Muốn tin, ph ải nuôi mình b ằng Thánh Thể, vì Th ánh Thể chứa đựng Mầu nhiệm đức tin, và ban sức mạnh đức tin cho con. hề phải đói; ai tin vào tôi, chẳng khát bao giờ! lương thực đi đường trong bí tích đức tin; trong bí tích ấy, những yếu tố thế trần, kết qủa của lao công con người, được biến thành Mình và Máu vinh hiển, nên bữa ăn hiệp thông huynh đệ và nếm hưởng trước bữa ăn trên trời.",
        chuong: 15,
        loi_chua: [
            "Ga 6,35: Đ ức Giêsu bảo họ: Chính tôi là bánh trường sinh. Ai đến với tôi, không",
            "MV 38b: Ch úa đã để lại cho nh ững kẻ thuộc về Người bảo chứng cậy trông và",
        ],
        tham_chieu: [
            "PV 59; HN 22b",
        ],
    },
    {
        stt: 374,
        noi_dung: "Chủng sinh phải được chăm sóc để lớn lên như hạt lúa chín vàng, sẵn sàng chịu nghiền tán thành bột, hầu trở nên chiếc bánh thơm làm của ăn nuôi dân Chúa.",
        chuong: 15,
    },
    {
        stt: 375,
        noi_dung: "Ngày nào cũng lễ trọng, ngày nào cũng lễ hát, mỗi lễ mỗi trọng hơn, sốt mến hơn, cho đến lễ cuối cùng. Đâ y là mình Thầy, hiến tế vì anh em. Anh em hãy làm việc này, mà tưởng nhớ đến Thầy.",
        chuong: 15,
        loi_chua: [
            "Lc 22,19: Ng ười cầm lấy bánh, dâng lời tạ ơn, bẻ ra, trao cho c ác ông và nói:",
        ],
    },
    {
        stt: 376,
        noi_dung: "Mỗi khi trao Chúa Giêsu Thánh Thể cho giáo dân, con hãy ý thức trao cả đời con, thời giờ, sức khoẻ, tài năng, tiền của, nghĩa là máu thịt con cùng với Mình Máu thánh Chúa làm của nuôi mọi người và mỗi người không phân biệt ai.",
        chuong: 15,
    },
    {
        stt: 377,
        noi_dung: "Hằng ngày cùng với Chúa Giêsu, con dâng hiến mình, sẵn sàng từng giây phút, để bị nộp vì anh em con, để đổ máu ra vì nhiều người để nên ơn tha tội (Mt 26,28).",
        chuong: 15,
    },
    {
        stt: 378,
        noi_dung: "Lúc đọc, hay nghe đọc lời truyền phép mỗi ngày, với tất cả tâm hồn, con làm lại: Một giao ước mới, Một giao ước vĩnh cửu, Giữa Chúa Giêsu với con, Bằng máu con hoà trong Máu Chúa. anh em: trong đêm bị nộp, Chúa Giêsu cầm lấy bánh, dâng lời chúc tụng tạ ơn, rồi bẻ ra và nói: Anh em cầm lấy mà ăn, đây là Mình Thầy, hiến tế vì anh em; anh em h ãy làm như Thầy vừa làm để tưởng nhớ đến Thầy. Cũng thế, cuối bữa ăn, Người nâng chén và nói: Đâ y là chén Máu Thầy, Máu đổ ra để lập Giao Ư ớc Mới; mỗi khi uống, anh em hãy làm như Thầy vừa làm để tưởng nhớ đến Thầy.",
        chuong: 15,
        loi_chua: [
            "1Cr 11,23-25: Thật vậy, điều tôi đã lãnh nhận từ nơi Chúa, tôi xin truyền lại cho",
        ],
    },
    {
        stt: 379,
        noi_dung: "Thánh Thể mạc khải Mầu nhiệm Nước Trời sẽ đến sau n ày và sát nhập dân Chúa vào Mầu nhiệm ấy. Thời đại ta, đức tin dựa vào Mầu nhiệm Nước Trời. Đ ức tin không thể tồn tại nơi người Công giáo sống ngoài Thánh Thể. bánh h ằng s ống t ừ tr ời xu ống. Ai ăn b ánh n ày, s ẽ được s ống mu ôn đời. V à bánh tôi sẽ ban tặng, chính là thịt tôi đây, để cho thế gian được sống.",
        chuong: 15,
        loi_chua: [
            "Ga 6,51: C òn bánh này là bánh từ trời xuống, để ai ăn thì khỏi phải chết. Tôi là",
        ],
        tham_chieu: [
            "Pl 3,20-21",
        ],
    },
    {
        stt: 380,
        noi_dung: "Như Chúa Giêsu suốt đời rất ước mong ăn Lễ Vượt qua (Lc 22,15), đời con ch ỉ có một mong ước: Thánh lễ, trọng tâm thu h út và điều khiển tất cả tâm trí v à hành động của con.",
        chuong: 15,
    },
    {
        stt: 381,
        noi_dung: "Trắng, vàng, xanh, đỏ, tím, đen; sắc phục tuy thay đổi nhưng Thánh lễ vẫn là một. Con sống nhiều biến cố: hân hoan, hy vọng, tử đạo, tang sầu, nhưng bất cứ ở đâu, bất cứ lúc nào, con cũng hiến dâng nhờ Người, với Người và trong Người.",
        chuong: 15,
    },
    {
        stt: 382,
        noi_dung: "Thường ngày với bộ tu ph ục, hình ảnh thiên thần bác ái nơi con, n ói lên sự hiện diện của Chúa. Nhưng khi con đi qua, c ũng như bao ng ười khác, với bộ áo như mọi người, không đồng phục, không huy hi ệu làm sao con rao gi ảng, con l àm chứng Chúa? Con đừng lo, dù có cải trang cách mấy, người ta sẽ nhận ra con là môn đệ Chúa, nếu con yêu thương anh em. Ngược lại, nếu con kh ông yêu thương thực sự, nếu con c ó hậu ý đen tối, dù có khoác mấy lớp tu phục, dù có phân trần khéo léo, họ vẫn hoài nghi. em có lòng yêu thương nhau.",
        chuong: 15,
        loi_chua: [
            "Ga 13,35: Mọi người sẽ nhận biết anh em là môn đệ của Thầy ở điểm này: là anh",
        ],
    },
    {
        stt: 383,
        noi_dung: "Chúa nói: Đâ u có hai, ba người họp lại nhân danh Ta, thì có Ta ở giữa họ (Mt 18,20), Ta sẽ ở với các con mọi ngày cho đến tận thế (Mt 28,20), Hãy làm việc này mà nhớ đến Ta (1Cr 11,24). Con hãy sung sướng: Chúa không đặt điều kiện vật chất nào cả, chỉ có đầu óc loài người chật hẹp. Tránh hai cực đoan: lo kh ông có nơi cho Chúa ở, công kích việc xây cất nhà thờ.",
        chuong: 15,
    },
    {
        stt: 384,
        noi_dung: "Lúc người ta không còn kính trọng giáo sĩ, tu sĩ, khi vì ơn gọi dâng hiến mà đời con vất vả hơn, thiếu thốn hơn, hãy vui mừng vì chưa bao giờ con thấy ơn thiên triệu, sứ mạng của con cao cả, tốt đẹp và trong sáng như vậy, chưa bao giờ hình ảnh Chúa nơi con sáng tỏ như vậy. Hãy tin tưởng vì khi nào con bị treo lên thánh giá với Chúa, con sẽ kéo mọi sự lên theo. người lên với tôi.",
        chuong: 15,
        loi_chua: [
            "Ga 12,32: Ph ần t ôi, m ột khi được gi ương cao l ên kh ỏi m ặt đất, t ôi s ẽ k éo m ọi",
        ],
    },
    {
        stt: 385,
        noi_dung: "Đ ừng nghĩ rằng đời dâng hiến của con kh ông còn ý nghĩa, vì kh ông sống cộng đoàn, không làm việc bác ái, giáo dục, từ thiện được nữa. Sao lại không ý nghĩa? Trên thánh giá, Chúa đã làm gì? Trong Nh à tạm Chúa đang làm gì? – Hiện diện, cầu nguyện, hy sinh. Chính lúc ấy, Chúa cứu chuộc nhân loại. chúng tôi nói, mà còn có quyền năng, có Thánh Thần, và một niềm xác tín sâu xa. Anh em bi ết, khi ở với anh em, c húng tôi đã sống thế nào để mưu ích cho anh em. mọi người và vô dụng đối với xã hội trần thế. Vì dù đôi khi không trực tiếp phụ giúp người đồng thời với mình nh ưng tu s ĩ lại hiện diện cùng họ cách sâu xa hơn trong lòng Chúa Kitô và cộng tác một cách thiêng liêng với họ, để việc xây dựng xã hội trần thế luôn đặt nền móng nơi Chúa và luôn hướng về Người hầu những người xây dựng xã hội trần thế sẽ không luống công.",
        chuong: 15,
        loi_chua: [
            "1Tx 1,5: Khi ch úng tôi loan báo Tin Mừng cho anh em, thì kh ông phải chỉ có lời",
            "GH 46b: Không ai được nghĩ rằng vì tận hiến như thế, các tu sĩ trở nên xa lạ với",
        ],
        tham_chieu: [
            "Cl 1,21-22",
            "PV 6; DT 1a; HN 2a; NK 4h",
        ],
    },
    {
        stt: 386,
        noi_dung: "Nếu con không được sử dụng các phương tiện để trao Chúa cho trần gian như báo chí, học đường, phát thanh, truyền hình, diễn đàn, nhà thờ khang trang, con đừng phàn nàn. Khi Chúa cất tất cả, thì con cứ tin rằng không có gì cần thiết cả. Bất cứ đâu, con có thể noi gương Đ ức Mẹ làm cho Chúa hiện diện được. Hãy nhớ Mẹ Maria!",
        chuong: 15,
    },
    {
        stt: 387,
        noi_dung: "Hội thánh dạy cử hành nghi th ức khấn dòng trong Th ánh lễ để con ý thức và thực sự hiến dâng đời con làm hy lễ toàn thiêu với Chúa Giêsu trên bàn thánh. Trong mỗi Th ánh l ễ, con h ãy tuyên th ệ lại lời khấn, với t ất c ả tâm hồn, với t ất c ả ý nghĩa của một tân ước vĩnh cưủ.",
        chuong: 15,
    },
    {
        stt: 388,
        noi_dung: "Có thể triệt hạ tất cả thánh đường trên mặt đất, nhưng bất cứ ở đâu còn linh mục thì còn Thánh lễ, còn Thánh Thể. Có thể tiêu diệt tất cả các linh m ục, nhưng đâu có hai hay ba ng ười hiệp nhau vì danh Chúa, thì vẫn có Chúa ở giữa họ. Thầy ở cùng anh em mọi ngày cho đến tận thế. Nói vâng cách vui vẻ là dấu chỉ một tâm hồn thánh thiện",
        chuong: 15,
        loi_chua: [
            "Mt 28,20: D ạy b ảo h ọ tu ân gi ữ m ọi điều Th ầy đã truy ền cho anh em. V à đây,",
            " ",
        ],
        tham_chieu: [
            "Lc 17,21",
        ],
    },
    {
        stt: 389,
        noi_dung: "Con khấn vâng phục thượng cấp hay khấn thượng cấp vâng phục con? họ, vì h ọ chăm sóc linh hồn anh em nh ư những người sẽ phải trả lẽ với Thiên Chúa. Như thế, họ sẽ vui vẻ thi hành phận sự của mình mà không than thở, bởi vì điều đó chẳng ích gì cho anh em.",
        chuong: 16,
        loi_chua: [
            "Dt 13,17: Anh em h ãy vâng lời những người lãnh đạo anh em v à hãy phục tùng",
        ],
        tham_chieu: [
            "1Cr 16,16; 1Tx 5,12-13",
        ],
    },
    {
        stt: 390,
        noi_dung: "Người nhu nhược để ý chí lăng loàn như anh nài không chế ngự được voi. Người vâng lời khắc phục được ý chí như người làm xiếc điều khiển mãnh hổ. nhưng còn giúp nhân vị trưởng thành nhờ phát triển tự do c ủa con c ái Thiên Chúa.",
        chuong: 16,
        loi_chua: [
            "DT 14b: Đ ức vâng lời trong đời tu trì chẳng những đã không giảm bớt phẩm giá,",
        ],
        tham_chieu: [
            "LM 15b",
        ],
    },
    {
        stt: 391,
        noi_dung: "Một đạo binh k ỷ luật là một đạo binh h ùng mạnh. Một tông đồ vâng phục là một tông đồ anh dũng. Thiên Chúa, xin hỏi: trước mặt Thiên Chúa, điều ấy có phải lẽ không? Các ông thử xét xem!",
        chuong: 16,
        loi_chua: [
            "Cv 4,19: Hai ông Phê-rô và Gio-an đáp lại: Nghe lời các ông hơn là nghe l ời",
        ],
        tham_chieu: [
            "Cv 5,29",
        ],
    },
    {
        stt: 392,
        noi_dung: "Xem một tâm hồn vui vẻ và nhanh chóng vâng phục chừng nào, con đoán được tâm hồn đó thánh thiện chừng ấy. anh em. Trước đây, anh em đã dùng chi thể của mình mà làm những điều ô uế và sự vô luân, để trở thành vô luân, thì nay anh em c ũng hãy dùng chi thể làm nô lệ sự công chính để trở nên thánh thiện. và tinh thần xả kỷ sao cho họ quen mau mắn từ bỏ ngay cả những gì được phép nhưng không thích đáng và trở nên giống Chúa Kitô chịu đóng đinh.",
        chuong: 16,
        loi_chua: [
            "Rm 6,19: Ấy là tôi nói theo ki ểu người phàm, hợp với tầm hiểu biết yếu kém của",
            "Đ T 9a: Phải đặc biệt lo lắng tập sống đức vâng lời linh mục, đời sống khó nghèo",
        ],
        tham_chieu: [
            "GH 37b, 42d, 43a; LM 15bc; TĐ  12c",
        ],
    },
    {
        stt: 393,
        noi_dung: "Thế gian bảo con vâng phục như vậy là điên khùng, Chúa nói con vâng phục vì Chúa là anh hùng. thân phục vụ Phúc âm không nghe theo x ác thịt và máu mủ. Nhưng sự đáp lại này không thể thực hiện nếu không được Chúa Thánh Thần thúc đẩy và củng cố. Thật vậy, kẻ được sai đi phải thấm nhuần đời sống và sứ mệnh của Đ ấng đã tự hủy mình m à nhận lấy thân phận tôi tớ (Pl 2,7). Do đó, họ phải sẵn sàng để suốt đời đứng vững trong ơn gọi của mình, phải tự bỏ mình và những gì mình có từ trước đến nay và trở nên mọi sự cho mọi người.",
        chuong: 16,
        loi_chua: [
            "TG 24a: Con ng ười phải đáp lại lời kêu gọi của Thiên Chúa mà hoàn toàn dấn",
        ],
        tham_chieu: [
            "GH 42d, 56, 61; LM 15c; DT 14a; TD 8ab",
        ],
    },
    {
        stt: 394,
        noi_dung: "Luxiphe đã nổi loạn và liên lỉ xúi giục khởi nghĩa đó đây trong H ội thánh. Khẩu hiệu của nó là: Bất tuân phục.",
        chuong: 16,
    },
    {
        stt: 395,
        noi_dung: "Chúa Cứu Thế đã làm cách mạng, muôn triệu người hưởng ứng, khẩu hiệu của Ngài: Vâng lời đến chết (Pl 2,8). được thế nào là vâng phục trần gian, m ạc khải cho ch úng ta m ầu nhiệm của Ngài, và thực hiện việc cứu thế bằng sự vâng phục Chúa Cha.",
        chuong: 16,
        loi_chua: [
            "Dt 5,8: D ầu là Con Thi ên Chúa, Người đã phải trải qua nhi ều đau khổ mới học",
            "GH 3a: Đ ể chu toàn thánh ý Chúa Cha, Chúa Kitô đã khai nguyên Nước Trời nơi",
        ],
        tham_chieu: [
            "Mt 26,39; Ga 6,38; Dt 10,5-7",
            "GH 37b; Đ T 9a; DT 5c; TG 5b, 24b",
        ],
    },
    {
        stt: 396,
        noi_dung: "Sáng kiến, tìm hiểu, trình bày, lắng nghe, nhận chỉ thị, thi hành sáng suốt. luật và hiến chương, trong tinh thần tin kính và yêu mến đối với thánh ý Chúa, dùng tất cả năng lực trí tuệ, ý muốn cũng như năng khiếu và ơn Chúa ban để thi hành các giới lệnh và chu toàn những phận vụ đã được ủy thác cho mình, vì biết mình đang góp công xây dựng Thân thể Chúa Kitô theo như ý định Thiên Chúa.",
        chuong: 16,
        loi_chua: [
            "DT 14b: Các tu sĩ hãy khiêm tốn vâng phục Bề trên của mình theo tiêu chuẩn quy",
        ],
        tham_chieu: [
            "LM 7b, 15b; TĐ  24ef",
        ],
    },
    {
        stt: 397,
        noi_dung: "Có người phục mà không vâng, có người vâng mà không phục, có người vâng và phục vì thượng cấp đúng điệu với mình, có người vâng và phục vì Chúa. Đ ừng chỉ vâng lời trước mặt, như muốn làm đẹp lòng người ta, nhưng với lòng đơn sơ, vì kính s ợ Chúa. Bất cứ làm việc gì, hãy làm tận tâm như thể làm cho Chúa, chứ không phải cho người đời. cái nam nữ muốn theo sát gương Đ ấng Cứu Thế và tỏ lộ rõ ràng hơn sự tự diệt của Người. Họ chấp nhận nghèo khó trong tự do của con cái Thiên Chúa và từ bỏ ý riêng: hơn cả mức đòi buộc của giới luật, họ tự nguyện tùng phục một con người, t ùng ph ục vì Ch úa, trong nh ững gì li ên h ệ t ới s ự tr ọn l ành, h ầu n ên giống Chúa Kitô vâng lời cách hoàn toàn hơn.",
        chuong: 16,
        loi_chua: [
            "Cl 3,22-23: Kẻ làm nô lệ hãy vâng lời những người chủ ở đời này trong m ọi sự.",
            "GH 42d: Giáo hội là Mẹ chúng ta vui mừng khi thấy trong lòng mình có nhiều con",
        ],
        tham_chieu: [
            "1Pr 2,13-14",
            "GH 25b; LM 15b; Đ T 9a; DT 5cd; 14a; TG 25b",
        ],
    },
    {
        stt: 398,
        noi_dung: "Thượng cấp bảo con l àm một việc khó, con c ứ cố gắng và tin t ưởng. Có việc gì kh ó bằng chinh ph ục thế giới với hai b àn tay tr ắng? Các tông đồ đã vâng lời và đã thành công. Hãy xem phép lạ ấy đang tiếp tục mỗi ngày mà vững tin. bắt được gì cả. Nhưng vâng lời Thầy, tôi sẽ thả lưới. Họ đã làm như vậy, và bắt được rất nhiều cá, đến nỗi hầu như rách cả lưới.",
        chuong: 16,
        loi_chua: [
            "Lc 5,5-6: Ông Si-môn đáp: Thưa Thầy, chúng tôi đã vất vả suốt đêm mà không",
        ],
    },
    {
        stt: 399,
        noi_dung: "Đ ừng đòi buộc thượng cấp gương mẫu cũng như đừng đòi buộc Bác sĩ phải mạnh khỏe, đó là thiện cảm cá nhân, không phải nhân đức vâng phục. Anh em biết đấy: ai làm việc tốt, sẽ được Chúa trả công, bất luận nô lệ hay tự do. Người làm chủ cũng hãy đối xử như thế với nô lệ. Đ ừng doạ nạt nữa: anh em biết rằng Chúa của họ cũng là Chúa của anh em, Ng ười ngự trên trời và không thiên vị ai.",
        chuong: 16,
        loi_chua: [
            "Ep 6,7-9: Hãy vui lòng phục vụ, như thể phục vụ Chúa, chứ không phải người ta.",
        ],
        tham_chieu: [
            "Rm 13,1; 1Pr 2,18",
        ],
    },
    {
        stt: 400,
        noi_dung: "Không vâng lời, dù có thực hiện những công trình v ĩ đại cũng không đẹp lòng Chúa. Chúa chỉ quý lòng con, Ch úa không cần công trình c ủa con. Ch úa tạo dựng cả vũ trụ không cần con. lương tâm.",
        chuong: 16,
        loi_chua: [
            "Rm 13,5: Vì lẽ đó, cần thiết phải phục tùng, không những vì sợ bị phạt, mà còn vì",
        ],
    },
    {
        stt: 401,
        noi_dung: "Hội thánh ở giữa xã hội trần gian cũng cần có hệ thống tổ chức nhân loại. Một hành vi bất tuân cũng tổn thương đến sinh hoạt chung, như trong thể xác, một tế bào, một huyết quản trục trặc cũng làm cho cả cơ thể đau đớn. Đ ấng đã sai Thầy. dân cũng hãy mau m ắn chấp nhận những điều mà các chủ chăn có nhiệm vụ thánh đại diện Chúa Kitô, đã quyết định với tư cách những thầy dạy và những nhà lãnh đạo trong Giáo hội; làm như thế, họ đã theo gương Chúa Kitô, Đ ấng đã vâng lời cho đến chết, để mở đường hạnh phúc của sự tự do con c ái Thiên Chúa cho tất cả mọi người. Giáo dân đừng quên dùng lời cầu nguyện phó dâng cho Thiên Chúa các vị lãnh đạo của mình, để các ngài hoan hỷ mà không than vãn thi h ành nhiệm vụ chăm sóc linh h ồn chúng ta, nhi ệm vụ mà các ngài sẽ phải trả lẽ (x. Dt 13,17).",
        chuong: 16,
        loi_chua: [
            "Mt 10,40: Ai đón tiếp anh em l à đón tiếp Thầy, và ai đón tiếp Thầy là đón tiếp",
            "GH 37b: Nh ư mọi tín h ữu khác, với tinh th ần vâng lời của người Kitô hữu, giáo",
        ],
        tham_chieu: [
            "GH 25a; LM 15b; DT 14b; TĐ  24ef",
        ],
    },
    {
        stt: 402,
        noi_dung: "Trinh khiết là chết cho nhục dục; vâng phục là chết cho ý riêng. * Mt 26,39: Ng ười đi xa h ơn một chút, sấp mặt xuống, cầu nguyện rằng: Lạy Cha, nếu có thể được, xin cho con kh ỏi phải uống chén này. Tuy vậy, xin đừng theo ý con, mà xin theo ý Cha.",
        chuong: 16,
    },
    {
        stt: 403,
        noi_dung: "Thi hành chỉ thị mà vùng vẫy là kiêu ngạo, không phải vâng phục.",
        chuong: 16,
    },
    {
        stt: 404,
        noi_dung: "Hãy biết hoài nghi chính mình con, bi ết bàn hỏi với người có kinh nghiệm, biết tin tay Chúa sắp đặt qua nhiều người, nhiều hoàn cảnh.",
        chuong: 16,
    },
    {
        stt: 405,
        noi_dung: "Vâng phục trong thinh l ặng, sự thật sẽ giải thoát con. Thinh l ặng năm năm, mười năm, cả đời con, thinh l ặng trong s ự chết… Ch úa biết con đủ rồi, và ngày tận thế nhân loại cũng sẽ biết. ở lại trong lời của Ta, thì các ông thật là môn đệ Ta; các ông sẽ biết sự thật, và sự thật sẽ giải phóng các ông.",
        chuong: 16,
        loi_chua: [
            "Ga 8,31-32: Đ ức Giêsu nói với những người Do-thái đã tin Người: Nếu các ông",
        ],
    },
    {
        stt: 406,
        noi_dung: "Vâng lời trọng hơn của lễ vì của lễ là hoa quả, hương trầm, súc vật, tiền bạc… t ượng trưng cho con, nhưng chưa động đến con. Khi vâng lời con lấy chính mình con làm của lễ, giết chết ý riêng con, tự ái của con làm của lễ toàn thiêu. nhưng đã tạo cho con m ột thân thể. Chúa cũng chẳng thích lễ toàn thiêu và lễ xá tội. Bấy giờ con m ới thưa: Lạy Thiên Chúa, này con đây, con đến để thực thi ý Ngài, như Sách Thánh đã chép về con. bản thân dâng lên Thiên Chúa, nhờ đó, được kết hợp với ý muốn cứu rỗi của Ngài cách kiên trì và chắc chắn hơn. Vậy, theo gương Chúa Kitô, Đ ấng đã đến để làm theo ý Chúa Cha (x. Ga 4,34; 5,30; Dt 10,7; Tv 39,9) tự nhận thân phận tôi tớ (Pl 2,7) và đã học tập đức vâng lời với những điều phải chịu đựng (x. Dt 5,8), c ác tu s ĩ, được Chúa Thánh Thần thúc đẩy, lấy đức tin t ùng phục các vị Bề trên, đại diện Thiên Chúa, và nhờ các ngài hướng dẫn, phục vụ mọi anh em trong Ch úa Kitô, như chính Ch úa Kitô, vì tu ân phục Chúa Cha v à đã phục vụ anh em v à hiến mạng sống để cứu chuộc mọi người (x. Mt 20,28; Ga 10,14-18). Chúa là gia nghiệp chưa đủ cho con sao?",
        chuong: 16,
        loi_chua: [
            "Dt 10,5-7: Khi v ào trần gian, Đ ức Kitô nói: Chúa đã không ưa hy l ễ và hiến tế,",
            "DT 14a: Nh ờ khấn giữ đức vâng lời, các tu s ĩ tận hiến ý muốn mình nh ư của lễ",
            " ",
        ],
        tham_chieu: [
            "GH 56,61; TG 5b, 25b",
        ],
    },
    {
        stt: 407,
        noi_dung: "Của cải chôn vùi con, n ếu con đội nó lên đầu; của cải làm bệ chân con, n ếu con đứng trên nó. và nhiều ước muốn ngu xuẩn độc hại; đó là những thứ làm cho con người chìm đắm trong cảnh hủy diệt tiêu vong. Thật thế, cội rễ sinh ra mọi điều ác là lòng ham muốn tiền bạc, vì bu ông theo l òng ham mu ốn đó, nhiều người đã lạc xa đức tin và chuốc lấy bao nỗi đớn đau xâu xé.",
        chuong: 17,
        loi_chua: [
            "1Tm 6,9-10: Còn những kẻ muốn làm giàu, thì sa ch ước cám dỗ, sa vào cạm bẫy",
        ],
        tham_chieu: [
            "Mt 19,23-24; Gc 1,9-11",
        ],
    },
    {
        stt: 408,
        noi_dung: "Nghèo trong n ơi con ở, nghèo trong áo con m ặc, nghèo trong đồ con ăn, nghèo trong đồ con dùng, nghèo trong việc con làm (Cha Chevrier). Ngài l à Đ ấng đã x ức d ầu cho Ch úa C ứu Th ế v à sai đi gi ảng Ph úc âm cho người nghèo khó, phải tránh tất cả những gì bằng cách này hay c ách khác có thể l àm mình xa c ách ng ười ngh èo kh ó, v à h ơn c ác m ôn đệ kh ác c ủa Ch úa Kitô, các ngài phải loại bỏ mọi thứ khoe khoang trong c ác đồ dùng của mình. Các ngài phải xếp đặt chỗ ở thế nào để không ai coi đó là nơi bất khả xâm phạm, và để không ai dù nghèo hèn đến đâu phải sợ hãi không bao giờ dám lui tới.",
        chuong: 17,
        loi_chua: [
            "LM 17e: C ác linh m ục cũng như Giám mục được Chúa Thánh Thần hướng dẫn,",
        ],
        tham_chieu: [
            "LM 17c; DT 13ab",
        ],
    },
    {
        stt: 409,
        noi_dung: "Người ít đòi hỏi là người sung sướng, vì thấy mình đầy đủ; người nhiều đòi hỏi là người khổ cực, vì cứ thấy mình thiếu thốn mãi. đang có là đủ, vì Thiên Chúa đã phán : Ta sẽ không bỏ rơi ngươi, Ta sẽ không ruồng bỏ ngươi !",
        chuong: 17,
        loi_chua: [
            "Dt 13,5: Trong c ách ăn nết ở, anh em đừng có ham ti ền, hãy coi nh ững gì mình",
        ],
        tham_chieu: [
            "1Tm 6,8",
        ],
    },
    {
        stt: 410,
        noi_dung: "Nhìn vào con, con thấy thiếu, con cực số một. Nhìn vào anh em con, con thấy bao nhiêu người khốn cực hơn con.",
        chuong: 17,
    },
    {
        stt: 411,
        noi_dung: "Không có của mà tham vẫn chưa phải là thanh bần, có của mà không dính bén cũng có thể có lòng khó khăn thực sự. lành theo b ậc sống mình. B ởi vậy, tất cả hãy lưu ý điều khiển tâm tình mình cho đúng đắn, để việc sử dụng của cải trần gian v à lòng quyến luyến sự giàu sang nghịch với tinh thần khó nghèo của Phúc âm, không cản trở họ theo đuổi đức ái trọn hảo, như lời Thánh Tông đồ cảnh giác: ai sử dụng thế gian này, xin chớ dừng lại đó, vì cuộc diện đời này sẽ qua đi (x. 1Cr 7,31, bản Hy lạp).",
        chuong: 17,
        loi_chua: [
            "Mt 5,3: Phúc thay ai có tâm hồn nghèo khó, vì Nước Trời là của họ.",
            "GH 42e: M ọi Kitô hữu đều được kêu mời và có bổn phận nên thánh và nên trọn",
        ],
        tham_chieu: [
            "Mt 10,8-9",
            "MV 37d; DT 13b; TĐ  4f",
        ],
    },
    {
        stt: 412,
        noi_dung: "Đ ừng r ộng r ãi v ới c ủa ng ười, đừng keo ki ệt v ới c ủa mình, đừng phung phí v ới c ủa chung. khó nghèo cùng cực, họ lại trở nên những người giàu lòng quảng đại.",
        chuong: 17,
        loi_chua: [
            "2Cr 8,2: Trải qua bao nỗi gian truân, họ vẫn được chan chứa niềm vui; giữa cảnh",
        ],
    },
    {
        stt: 413,
        noi_dung: "Nghèo hèn, nghèo khó, nghèo khổ, nghèo cực, đó là những hậu quả của nghèo nàn giữa xã hội. Trong khi n ỗ lực th ăng tiến con ng ười và xã hội, con c ó sẵn sàng chấp nhận những hậu quả ấy xảy đến nơi con vì lòng mến Chúa và anh em không?",
        chuong: 17,
    },
    {
        stt: 414,
        noi_dung: "Dùng của cải cách quảng đại, trọng của cải cách tế nhị, xa của cải cách anh hùng. Vì không phải của con, chính là của Chúa trao cho con sử dụng. định trái đất và mọi vật trên trái đất thuộc quyền sử dụng của mọi người và mọi dân tộc. Chính vì th ế, của cải được tạo dựng phải được phân phối cho tất cả mọi người một cách hợp lý theo luật công bằng là luật đi liền với bác ái. Dù chấp nhận bất cứ hình thức tư hữu nào đã được nhìn nhận bằng các định chế hợp pháp của các dân tộc, tuy nhiên tuỳ theo hoàn cảnh khác biệt và thay đổi, phải luôn luôn lưu ý đến mục đích chung h ưởng của cải. Vì th ế, khi s ử dụng của cải, con người phải coi của cải vật chất mà mình làm chủ một cách chính đáng không chỉ như của riêng mình, nh ưng còn là của chung n ữa: nghĩa là, của cải đó có thể sinh ích kh ông những cho ri êng mình m à còn cho cả người khác. Vả lại, mọi người đều có quyền có một phần của cải đầy đủ cho mình và cho gia đình mình.",
        chuong: 17,
        loi_chua: [
            "Cv 2,44: Tất cả các tín hữu hợp nhất với nhau, và để mọi sự làm của chung.",
            "MV 69a: Của cải trần gian là để cho mọi người hưởng dụng. Thiên Chúa đã đặt",
        ],
        tham_chieu: [
            "Cv 4,32. 34-35",
            "MV 21e, 29c, 71e",
        ],
    },
    {
        stt: 415,
        noi_dung: "Thinh l ặng nh ường ch ỗ ti ện nghi h ơn, c ông việc l ợi l ộc h ơn cho k ẻ kh ác, đó l à d ấu thanh bần chân thành.",
        chuong: 17,
    },
    {
        stt: 416,
        noi_dung: "Con là quản lý của Chúa; Ngài giao nhi ều, con gi ữ nhiều, giao ít, con gi ữ ít, Ng ài thu lại, con bằng lòng, nhưng con chịu trách nhiệm trước mặt Chúa về của cải Ngài giao. mình cho h ọ. Ông cho người này năm yến, người kia hai y ến, người khác nữa một yến, tuỳ khả năng riêng mỗi người. Rồi ông ra đi… Sau m ột thời gian lâu dài, ông chủ đến tính sổ với các đầy tớ và thanh toán sổ sách với họ.",
        chuong: 17,
        loi_chua: [
            "Mt 25,14 -15.19: Ng ười kia s ắp đi xa, li ền gọi đầy t ớ đến mà giao ph ó c ủa c ải",
        ],
        tham_chieu: [
            "Lc 16,2tt",
        ],
    },
    {
        stt: 417,
        noi_dung: "Thanh bần ghen gh ét, thanh b ần chỉtrích, thanh b ần uất hận, không phải là thanh b ần Phúc âm. mừng để cho người ta tước đoạt của cải, bởi biết rằng mình có những của vừa quý giá hơn lại vừa bền vững.",
        chuong: 17,
        loi_chua: [
            "Dt 10,34: Anh em đã thông phần đau kh ổ v ới những người bị tù tội, v à đã vui",
        ],
    },
    {
        stt: 418,
        noi_dung: "Thế gian không thấy con vâng phục, thế gian không biết con trinh khiết, nhưng thế gian dễ nhận ra con là chứng nhân thanh bần. phiền luỵ anh em đâu, bởi vì điều tôi tìm ki ếm không phải là của cải của anh em, mà là chính anh em. Thật vậy, không phải con cái có nhiệm vụ thu tích của cải cho cha mẹ, mà là cha mẹ phải thu tích của cải cho con cái.",
        chuong: 17,
        loi_chua: [
            "2Cr 12,14: Đâ y, t ôi s ẵn s àng đến th ăm anh em l ần th ứ ba. T ôi c ũng sẽ kh ông",
        ],
        tham_chieu: [
            "2Cr 11,7-9",
        ],
    },
    {
        stt: 419,
        noi_dung: "Xin Chúa cho con được khó nghèo như Chúa, thường con hay cầu xin ngược lại! thế nào: Người vốn giàu sang phú quý, nhưng đã tự ý trở nên nghèo khó vì anh em, để lấy cái nghèo của mình mà làm cho anh em trở nên giàu có. theo Ch úa Kitô rất được tr ọng vọng, nhất là ngày nay. Vì th ế, c ác tu s ĩ hãy miệt mài trau d ồi và nếu cần, hãy biểu lộ sự khó nghèo ấy bằng những hình thức m ới. Nh ờ nh ân đức n ày, h ọ được san s ẻ s ự ngh èo kh ó c ủa Ch úa Kit ô, Đ ấng tuy giàu có đã trở nên thiếu thốn vì chúng ta để chúng ta được giàu sang nhờ sự cùng cực của Người (x. 2Cr 8,9; Mt 8,20).",
        chuong: 17,
        loi_chua: [
            "2Cr 8,9: Anh em bi ết Đ ức Giêsu Kitô, Chúa chúng ta, đã có lòng quảng đại như",
            "DT 13a: T ự nguy ện sống kh ó nghèo, để theo Ch úa Kit ô là dấu ch ứng cho vi ệc",
        ],
        tham_chieu: [
            "GH 8c, 9a, 43a, 46b; LM 17d",
        ],
    },
    {
        stt: 420,
        noi_dung: "Hội thánh của người nghèo, không phải để làm cho d ân chúng nghèo mãi nhưng nỗ lực thăng tiến cuộc đời của dân chúng về mọi phương diện. có khả năng xây dựng đứng đắn toàn thể trật tự sự vật trần thế và qui h ướng chúng về Thiên Chúa nhờ Chúa Kitô. Các vịchủ chăn có nhiệm vụ trình bày rõ ràng các nguyên tắc về mục đích việc tạo dựng và việc sử dụng sự vật trần thế, phải hỗ trợ về mặt luân lý và thiêng liêng để trật tự sự vật trần thế được canh tân trong Chúa Kitô. … Trong nh ững công cuộc của việc tông đồ này nổi bật hơn cả là hoạt động xã hội của người Kitô hữu. Thánh công đồng ước ao ho ạt động đó lan đến mọi lãnh vực trần thế kể cả lãnh vực văn hoá.",
        chuong: 17,
        loi_chua: [
            "TĐ  7de: C ông cuộc hoạt động của toàn thể Giáo hội là phải làm cho con ng ười",
        ],
        tham_chieu: [
            "MV 60a, 69a, 72, 88a",
        ],
    },
    {
        stt: 421,
        noi_dung: "Có như không có, bán như không bán, mua nh ư không mua, nh ư không có gì c ả, mà làm chủ tất cả, không đòi hỏi gì cả, sẵn sàng cho tất cả. Đó  là tinh thần thanh bần. không h ề c ũ r ách, m ột kho t àng kh ông th ể hao h ụt ở tr ên tr ời, n ơi k ẻ tr ộm không bén mảng, mối mọt không đục phá. mình không thuộc về thế gian, như lời Chúa là Thầy chúng ta đã phán dạy. Vậy sử dụng trần gian như không sử dụng, các ngài được tự do, sự tự do giải thoát các ng ài kh ỏi m ọi lo l ắng h ỗn lo ạn v à làm cho c ác ng ài ngoan ngo ãn nghe theo tiếng Chúa trong đời sống hằng ngày. Từ sự tự do và ngoan ngoãn đó sẽ nảy sinh khả năng phân biệt thiêng liêng để nhờ đó tìm ra thái độ đứng đắn đối với thế gian và của cải trần thế.",
        chuong: 17,
        loi_chua: [
            "Lc 12,33: H ãy b án t ài s ản c ủa mình đi m à b ố thí. H ãy s ắm l ấy nh ững t úi ti ền",
            "LM 17a: Tuy s ống giữa thế gian nh ưng các ngài (linh m ục) phải luôn biết rằng",
        ],
        tham_chieu: [
            "GH 39b, 42d; MV 37d; DT 13b; TĐ  4b",
        ],
    },
    {
        stt: 422,
        noi_dung: "Khó nghèo không phải là không có của: Đó  là thiếu thốn bần cùng. Khó nghèo trước tiên là tập dùng của cho đúng. Một cốc cà phê, một cốc bia, nh ưng cũng là một cốc mồ hôi, một cốc nước mắt, một cốc máu đổi lấy nó. Một khói thuốc, nhưng cũng là một hơi thở hổn hển của người lao động vô danh.",
        chuong: 17,
    },
    {
        stt: 423,
        noi_dung: "Sự thanh bần thứ nhất là gì? – Là làm việc! Đâ y là niềm an ủi của con khi hiểu ý nghĩa của nh ọc m ệt lao t ác h ằng ngày. H ạnh ph úc c ủa con được Ch úa n ói trong Ph úc âm: Phúc cho tôi tớ đó; chủ đến mà gặp nó đang làm như thế! (Lc 12,43). nhưng để c ó l ương th ực th ường t ồn đem l ại ph úc tr ường sinh, l à th ứ l ương thực Con Ng ười sẽ ban cho c ác ông, bởi vì chính Con Ng ười là Đ ấng Thiên Chúa Cha đã ghi dấu xác nhận. giúp đồng loại, thăng tiến toàn thể xã hội và tạo vật; và sau c ùng, hân hoan trong niềm hy vọng và kiên nhẫn chịu đựng lẫn nhau, với đức ái sống động, họ phải noi g ương Chúa Kitô, Đ ấng đã làm việc tay ch ân và không ngừng cùng với Chúa Cha đem ơn cứu độ cho mọi người; và nhờ công ăn việc làm, họ phải tiến xa h ơn trên đường thánh thiện, một sự thánh thiện còn có tính c ách tông đồ.",
        chuong: 17,
        loi_chua: [
            "Ga 6,27: C ác ông hãy ra c ông làm việc kh ông phải vì l ương thực mau h ư nát,",
            "GH 41e: Công việc của con người phải là phương thế để đào tạo chính mình, trợ",
        ],
        tham_chieu: [
            "1Tx 4,11-12; 2Tx 3,7-9",
            "MV 33, 34b, 35a, 57b, 67b",
        ],
    },
    {
        stt: 424,
        noi_dung: "Lúc 15 tu ổi, thi ếu n ữ Clara đến tu vi ện, th ánh Phanxic ô h ỏi ch ị: Con đến tìm gì ở đây? – Clara đáp: Con tìm Thi ên Chúa. Câu trả lời gọn ghẽ và rõ rệt. Đó  là tất cả kho tàng của chị. Clara đã nên thánh. Mấy ai biết chọn như chị? hành và quyết tâm khấn giữ trung thành các lời khuyên Phúc âm, đều hiến thân cho Chúa cách đặc biệt, noi theo Chúa Kitô, Đ ấng khiết trinh và khó nghèo (x. Mt 8,20; Lc 9,58), b ởi vâng l ời Ch úa Cha cho đến ch ết tr ên thập gi á (x. Pl 2,8), để cứu chuộc và thánh hoá nhân loại. Đư ợc thúc đẩy như thế bởi đức mến mà Chúa Thánh Thần đổ tràn trong lòng (x. Rm 5,5), h ọ càng ngày càng sống cho Chúa Kitô và Thân thể Người là Giáo hội (x. Cl 1,24). Khoác lên lòng trong trắng chiếc áo giáp cầu nguyện và hy sinh",
        chuong: 17,
        loi_chua: [
            "DT 1c: Chính gi ữa biết bao ân huệ khác nhau ấy, kẻ được Thiên Chúa gọi thực",
            " ",
        ],
        tham_chieu: [
            "GH 44a; LM 17b; DT 5d, 6a, 12a",
        ],
    },
    {
        stt: 425,
        noi_dung: "Phúc cho nh ững kẻ tinh s ạch trong l òng, vì h ọ sẽ thấy Thiên Chúa (Mt 5,8). Kh ông phải chỉ có tu sĩ, mà cả người đời cũng phải trong trắng theo đấng bậc mình. Sống trong trắng không những không bị ràng buộc, mà còn được tự do hơn. khiết tịnh của họ, nhất là trong x ã hội hiện thời; với những trợ lực thích ứng của Thiên Chúa và loài người, họ phải biết dung nạp sự từ khước đời sống hôn nhân sao cho cuộc đời và công việc của họ không những không bị thiệt thòi gì do bậc độc thân gây ra, nh ưng hơn thế nữa, họ làm chủ được hồn xác, phát triển được sự trưởng thành, và đạt được hạnh phúc Phúc âm cách hoàn hảo hơn.",
        chuong: 18,
        loi_chua: [
            "Ga 8,34: Thật, tôi bảo thật các ông: hễ ai phạm tội thì làm nô lệ cho tội.",
            "Đ T 10c: Ph ải cho h ọ (các ch ủng sinh) bi ết nh ững hi ểm nguy đang đe d ọa đức",
        ],
        tham_chieu: [
            "Tt 1,15",
            "GH 46b; MV 49c, 51c; DT 12a",
        ],
    },
    {
        stt: 426,
        noi_dung: "Có nhiều thiên thần trong tr ắng mà lại là ma qu ỷ của ghen gh ét. Vô phúc cho c ộng đoàn nào gặp loại thiên thần ấy.",
        chuong: 18,
    },
    {
        stt: 427,
        noi_dung: "Chúa chỉ ban sự trong trắng cho linh hồn khiêm nhượng. Con hãy cầu xin hằng ngày với tâm hồn đơn sơ chân thành, thực sự nhìn nhận sự yếu đuối của con. nói: Thiên Chúa chống lại kẻ kiêu ngạo, nhưng ban ơn cho k ẻ khiêm nhường. Anh em h ãy phục tùng Thiên Chúa. Hãy chống lại ma qu ỷ; chúng sẽ chạy xa anh em. Hãy đến gần Thiên Chúa, Người sẽ đến gần anh em. Hỡi tội nhân, hãy rửa tay cho sạch; hỡi kẻ hai lòng, hãy tẩy luyện tâm can.",
        chuong: 18,
        loi_chua: [
            "Gc 4,6 -8: Nhưng ân sủng Ng ười ban c òn mạnh h ơn; vì th ế, c ó lời Kinh Th ánh",
        ],
    },
    {
        stt: 428,
        noi_dung: "Người kiêu ngạo trước sau cũng sa ngã nặng, vì họ cậy vào sức riêng mình. Không dựa vào Chúa, Chúa bỏ họ. khiến thân thể họ ra hư hèn.",
        chuong: 18,
        loi_chua: [
            "Rm 1,24: Thiên Chúa đã để mặc họ buông theo dục vọng mà làm những điều ô uế,",
        ],
        tham_chieu: [
            "2Pr 2,9-13",
        ],
    },
    {
        stt: 429,
        noi_dung: "Báo chí h ô hào bảo vệ, tranh đấu cho nh ân quyền, dân quyền, nhưng đồng thời nhiều người lạm dụng các phương tiện truyền thông xã hội trên thế giới để khêu gợi thú tính đầu độc con người bằng những món ăn dơ bẩn, coi con người như súc vật. Những người tranh đấu ở đâu? Các hội bảo vệ này nọ ở đâu? Họ đầu tư vào sách báo ấy, họ là độc giả chuyên cần! nơi d ành cho h ọ. Mi ệng n ói nh ững l ời huy ênh hoang r ỗng tu ếch, h ọ d ùng những ham mu ốn x ác th ịt d âm ô m à nh ử nh ững ng ười v ừa tho át tay c ác k ẻ sống trong l ầm lạc. Họ hứa cho nh ững kẻ đó được tự do, nh ưng chính h ọ lại làm nô lệ cho lối sống dẫn đến hư vong, vì đã thua ai thì ph ải làm nô lệ người ấy.",
        chuong: 18,
        loi_chua: [
            "2Pr 2,17-19: Họ là suối không có nước, là mây bị bão cuốn đi; u ám tối tăm là",
        ],
    },
    {
        stt: 430,
        noi_dung: "Ma quỷ có thể đuổi được, thế gian có thể tránh xa được, còn xác thịt con mang theo mãi đến chết. hãy tránh xa những đam mê xác thịt, vốn gây chiến với linh hồn.",
        chuong: 18,
        loi_chua: [
            "1Pr 2,11: Anh em th ân mến, anh em l à khách lạ và lữ hành, tôi khuyên anh em",
        ],
    },
    {
        stt: 431,
        noi_dung: "Muốn trong tr ắng con ph ải hy sinh. C ành huệ trắng tinh, c ành mai th ơm tho, c ành đào xinh đẹp, vì n ó đâm rễ sâu vào lòng đất, vì n ó cầm cự với mưa bão, vì n ó chịu những bàn tay cắt tỉa.",
        chuong: 18,
    },
    {
        stt: 432,
        noi_dung: "Không có đức ái, sự trong tr ắng không ý nghĩa. Tại sao con gi ữ mình trong tr ắng? Vì con ích k ỷ, không chịu được ai? Vì kh ông ai y êu con n ổi? Hay vì con mu ốn giữ lòng con để yêu Chúa và yêu tha nh ân trọn vẹn hơn? – Chỉ lý do cu ối cùng này mới chính đáng. không c ó v ợ thì chuy ên lo vi ệc Ch úa h ọ tìm c ách l àm đẹp l òng Ng ười. C òn người có vợ thì lo lắng việc đời: họ tìm cách làm đẹp lòng vợ, thế là họ bị chia đôi. C ũng v ậy, đàn bà không c ó ch ồng v à ng ười trinh n ữ thì chuy ên lo vi ệc Chúa, để thuộc trọn về Người cả hồn lẫn xác. Còn người có chồng thì lo l ắng việc đời: họ tìm cách làm đẹp lòng chồng. được chú trọng như một ân huệ cao cả của ơn thánh. Thật vậy, ơn ấy giải thoát lòng con ng ười cách đặc biệt (x. 1Cr 7,32 -35), để nồng nàn mến Chúa và yêu mọi người hơn; vì thế đức khiết tịnh là dấu chỉđặc biệt của kho tàng trên trời và cũng là phương tiện thích hợp nhất cho các tu sĩ hân hoan hiến mình phụng sự Thiên Chúa và làm việc tông đồ. Do đó, họ gợi ra tr ước mặt mọi Kitô hữu sự kết hợp lạ lùng do Thi ên Chúa thiết lập, và sẽ tỏ hiện đầy đủ ở đời sau, l à Giáo hội được nhận Chúa Kitô làm lang quân độc nhất của mình.",
        chuong: 18,
        loi_chua: [
            "1Cr 7,32-34: Tôi muốn anh ch ị em không phải bận tâm lo lắng điều gì. Đà n ông",
            "DT 12a: Đ ức khiết tịnh vì nước Trời (Mt 19,12), m à các tu s ĩ khấn giữ, phải",
        ],
        tham_chieu: [
            "2Cr 11,2",
            "GH 44a; Đ T 10a; Đ T 6a",
        ],
    },
    {
        stt: 433,
        noi_dung: "Bao nhiêu tâm hồn giáo dân trong tr ắng gương mẫu giữa trần gian. T âm hồn tận hiến của con phải cảm phục, phấn khởi và vươn cao hơn nữa. ban cho đặc sủng riêng, kẻ thế này, người thế khác.",
        chuong: 18,
        loi_chua: [
            "1Cr 7,7: Tôi ước muốn mọi người đều như tôi; nhưng mỗi người được Thiên Chúa",
        ],
    },
    {
        stt: 434,
        noi_dung: "Nhiều thanh niên cười ngạo nghễ mỉa mai, cho là chuyện hoang đường của thời thượng cổ, nếu ai đề cập đến vấn đề sống trong tr ắng. Nhưng chính h ọ, họ lại chọn lựa người bạn trong trắng, họ đánh ghen, họ tự vẫn khi gặp người bạn đồi trụy.",
        chuong: 18,
    },
    {
        stt: 435,
        noi_dung: "Cha đã gặp nhiều người, thuộc nhiều giới, ở nhiều nước khác nhau, sống độc thân hạnh phúc giữa đời. Bí quyết của họ: Sống cầu nguyện.",
        chuong: 18,
    },
    {
        stt: 436,
        noi_dung: "Tu sĩ viện nhiều lý do để bào chữa cho s ự ra đi của mình, nh ưng phần lớn bỏ cuộc vì khởi sự bằng thế kẹt tình cảm và chấm dứt cầu nguyện từ lâu!",
        chuong: 18,
    },
    {
        stt: 437,
        noi_dung: "Mađalêna đã chỗi dậy và nên thánh, chừng nào con mới quyết định? nhiều. Còn ai được tha ít thì yêu mến ít.",
        chuong: 18,
        loi_chua: [
            "Lc 7,47: T ội của chị rất nhiều, nhưng đã được tha, b ằng cớ là chị đã yêu mến",
        ],
    },
    {
        stt: 438,
        noi_dung: "Con đừng bảo: Nước không dập tắt được lửa! – Chỉ vì nước ít lửa nhiều thôi.",
        chuong: 18,
    },
    {
        stt: 439,
        noi_dung: "Xác thịt là đặc công nằm sẵn trong con, s ách báo phim ảnh, bè bạn xấu là những khí giới ngày càng tối tân hơn. Nếu không hiện đại hoá khí gi ới của con: C ầu nguyện, bí tích, hy sinh…, n ếu không tỉnh thức canh ph òng, không dẹp ngay m ọi mầm mống nổi loạn, nếu nuôi dưỡng đặc công, bỏ các đồng minh là các thánh, là bạn tốt, con sẽ bị tấn công vũ bão và thảm bại. dục hoàn toàn không thể có được, thì các Linh mục càng phải hiệp cùng Giáo hội mà khiêm nhượng và kiên nhẫn hơn nữa để cầu xin ơn trung thành, vì Chúa không bao gi ờ từ chối những người kêu xin. Đ ồng thời các ngài lại phải luôn dùng mọi phương thế siêu nhiên và tự nhiên mà mọi người sẵn có, nhất là các ngài hãy tuân giữ những luật lệ khổ hạnh đã được kinh nghi ệm của Giáo hội chuẩn nhận và không kém cần thiết trong thế giới ngày nay.",
        chuong: 18,
        loi_chua: [
            "Mt 26,41a: Anh em hãy canh thức và cầu nguyện, để khỏi lâm vào cơn cám dỗ.",
            "LM 16c: Nếu càng có nhiều người trong thế giới ngày nay nghĩ rằng sự chết chế",
        ],
        tham_chieu: [
            "Mt 12,43-45; 2Cr 10,3-4; 1Tx 4,3-8",
            "GH 42c; Đ T 10c; Đ T 12b",
        ],
    },
    {
        stt: 440,
        noi_dung: "Ă n uống nhậu nhẹt vô độ là mở cửa cho quỷ dâm dục. nhuần Thần Khí.",
        chuong: 18,
        loi_chua: [
            "Ep 5,18: Ch ớ say s ưa rượu ch è, vì r ượu ch è đưa t ới tr ụy l ạc, nh ưng h ãy th ấm",
        ],
        tham_chieu: [
            "Gl 5,19-21; 1Pr 4,3-4; 2Pr 2,13-14",
        ],
    },
    {
        stt: 441,
        noi_dung: "Bác sĩ làm sao ch ữa lành được, khi b ệnh nhân cương quyết nói mình kh ông có bệnh, không chịu cho khám, không chịu uống thuốc.",
        chuong: 18,
    },
    {
        stt: 442,
        noi_dung: "Không trong trắng, việc tông đồ không bảo đảm: Kho tàng ngươi ở đâu thì lòng ngươi cũng ở đó (Mt 6,21). khuyến khích, mà qua các thời đại và ngay cả ngày nay vẫn được một số đông Kitô hữu sẵn lòng chấp nhận và tuân giữ một cách đáng khâm phục, thì hi ện thời vẫn luôn được Giáo hội hết sức quý trọng trong đời sống linh mục. Thực vậy, nó vừa là dấu chứng, vừa là niềm khích lệ đức bác ái mục vụ và là nguồn mạch đặc biệt làm phát sinh đời sống thiêng liêng phong phú trên thế giới.",
        chuong: 18,
        loi_chua: [
            "LM 16a: S ự ch ế d ục ho àn to àn v à v ĩnh vi ễn vì N ước Tr ời đã được Ch úa Kit ô",
        ],
        tham_chieu: [
            "GH 42c; LM 16b; DT 1c, 12a",
        ],
    },
    {
        stt: 443,
        noi_dung: "Đ ừng nói: Tôi thương họ, vì họ thương tôi quá! Con phải thương con trước, lấy gì đổi được linh hồn con?",
        chuong: 18,
        loi_chua: [
            "Mc 8,37: Quả thật, người ta lấy gì mà đổi lại mạng sống mình?",
        ],
    },
    {
        stt: 444,
        noi_dung: "Không thỏa hiệp với tính d âm ô, cũng như không thỏa hiệp với bệnh tật được vì đó là vấn đề sống chết.",
        chuong: 18,
    },
    {
        stt: 445,
        noi_dung: "Quả tim c ủa con kh ông phải bằng đá. Quả tim c ủa con qu ý báu vì n ó bằng thịt, vì n ó biết yêu thương. Hãy can đảm cầm thánh giá cả hai tay và cắm vào đó. giá cùng với các dục vọng và đam mê.",
        chuong: 18,
        loi_chua: [
            "Gl 5,24: Những ai thuộc về Đ ức Kitô Giêsu thì đã đóng đinh tính xác thịt vào thập",
        ],
    },
    {
        stt: 446,
        noi_dung: "Nói những chuyện dâm ô, dù để giải buồn cũng không có lợi; đừng nói bao gi ờ. Kinh nghiệm cho thấy, những người hay nói, sẽ làm: đây là tâm lý chiến. trái lại, phải tạ ơn Thiên Chúa thì h ơn. Anh em ph ải biết rõ điều này: không một k ẻ gian d âm, ô u ế hay tham lam n ào - m à tham lam c ũng l à th ờ ng ẫu tượng - được th ừa hưởng c ơ nghiệp trong N ước c ủa Đ ức Kit ô và c ủa Thiên Chúa.",
        chuong: 18,
        loi_chua: [
            "Ep 5,4-5: Đ ừng nói lời thô tục, nhảm nhí, c ợt nhả: đó là những điều không nên;",
        ],
    },
    {
        stt: 447,
        noi_dung: "Không nhận đối thoại với quỷ dâm ô, cũng như không đứng xem th ử bom nguy ên tử. Đà o vi thượng sách!",
        chuong: 18,
    },
    {
        stt: 448,
        noi_dung: "Các th ánh c ũng yếu đuối nh ư con, c ó v ị y ếu đuối h ơn con n ữa, c ó th ế m ới c ó c ông nghiệp, mới làm thánh. Họ chỉ khác con là họ quyết tâm. đấu theo tính x ác thịt. Thật vậy, khí gi ới chúng tôi dùng để chiến đấu không phải là thứ khí gi ới thuộc xác thịt, nhưng là những khí gi ới, nhờ Thiên Chúa, có sức đánh đổ các đồn lũy. đến thái độ này, là bao gi ờ cũng sẵn sàng tìm ý muốn Đ ấng đã sai mình ch ứ không phải tìm ý riêng. Thực ra, c ông việc của Thiên Chúa mà Chúa Thánh Thần tuyển chọn các Ngài để hoàn thành, vượt quá mọi năng lực và tầm mức khôn ngoan của nhân loại; vì Thiên Chúa đã lựa chọn những gì yếu hèn trong thế gian để bêu xấu những gì mạnh mẽ (1Cr 1,27). V ậy ý thức những sự yếu hèn của mình, thừa tác viên đích thực của Chúa Kitô khiêm tốn làm việc trong khi tìm xem điều gì đẹp lòng Thiên Chúa và như bị ràng buộc bởi Thánh Thần, trong mọi sự ngài đều tuân theo ý của Đ ấng muốn cho mọi người được cứu rỗi. Ngài có thể khám phá và tuân theo ý muốn này trong những sự kiện hằng ngày bằng cách khiêm tốn phục vụ mọi người được Thiên Chúa ủy thác cho mình qua các nhiệm vụ riêng của mình cũng như qua những biến cố của đời sống. (* xt. GH 50b; LM 12d, 13a).",
        chuong: 18,
        loi_chua: [
            "2Cr 10,3 -4: Quả thế, ch úng tôi đang sống trong x ác ph àm, nhưng kh ông chi ến",
            "LM 15a: Trong nh ững đức tính c ần thiết hơn cả cho ch ức vụ linh m ục, phải kể",
        ],
    },
    {
        stt: 449,
        noi_dung: "Xác thịt luôn luôn mỏng dòn, dù mặc áo gì, dưới lớp áo vẫn là xác thịt.",
        chuong: 18,
    },
    {
        stt: 450,
        noi_dung: "Giá trị của thân xác con: - Đư ợc cứu chuộc bằng Máu Thánh Chúa, - Làm đền thờ Chúa Ba Ngôi, - Sẽ vinh hiển muôn đời. Đ ừng đem bán xôn! Thần sao? Mà Thánh Thần đang ngự trong anh em là Thánh Thần chính Thiên Chúa đã ban cho anh em. Nh ư t hế, anh em đâu c òn thu ộc v ề mình n ữa, vì Thiên Ch úa đã tr ả gi á đắt m à chu ộc l ấy anh em. V ậy anh em h ãy t ôn vinh Thiên Chúa nơi thân xác anh em. hợp những yếu tố thuộc thế giới vật chất. Vì thế, nhờ con người mà những yếu tố ấy đạt tới tuyệt đỉnh của chúng và tự do d âng lời ca t ụng Đ ấng Tạo Hoá. Vậy con ng ười kh ông được khinh mi ệt đời s ống th ể x ác. Nh ưng tr ái l ại con người phải coi lại thân xác mình là tốt đẹp và đáng tôn trọng vì thân xác ấy do Chúa tạo dựng v à phải được sống lại ngày sau h ết. Tuy nhi ên mang th ương tích do tội lỗi gây nên, con người cảm nghiệm nơi chính mình nh ững nổi loạn của thân xác. Vậy chính phẩm giá con người đòi hỏi con ng ười ca tụng Thiên Chúa n ơi th ân x ác c ủa mình ch ứ đừng để th ân x ác ấy n ô l ệ cho nh ững xu hướng xấu xa của lòng mình.",
        chuong: 18,
        loi_chua: [
            "1Cr 6,19 -20: Anh em ch ẳng bi ết r ằng thân x ác anh em l à Đ ền Thờ c ủa Thánh",
            "MV 14a: Con ng ười duy nhất với xác và hồn. Xét thể xác, con người là một tổng",
        ],
        tham_chieu: [
            "1Cr 3,16-17; 6,15-17; 1Pr 1,18-20",
            "MV 22bd, 41b; DT 12b",
        ],
    },
    {
        stt: 451,
        noi_dung: "Ban th ông tin c ủa qu ỷ d âm ô h ấp dẫn lắm, luật sư c ủa x ác th ịt biện h ộ ráo ri ết lắm. Đ ừng đối thoại với nó, hãy biết sau chốc lát hưởng lạc, con sẽ cảm thấy chán ngấy, cắn rứt và cô đơn: con đổi thiên đàng lấy hoả ngục sao? em sẽ không còn thoả mãn đam mê của tính xác thịt nữa. Vì tính x ác thịt thì ước muốn những điều trái ngược v ới Thần Khí, c òn Thần Khí l ại ước muốn những điều trái ngược với tính x ác thịt, đôi bên kình địch nhau, khiến anh em không l àm được điều anh em mu ốn.. T ôi b ảo tr ước cho m à bi ết, nh ư t ôi đã từng bảo: những kẻ làm các điều đó sẽ không được thừa hưởng Nước Thiên Chúa.",
        chuong: 18,
        loi_chua: [
            "Gl 5,16-17.21: Tôi xin nói với anh em là hãy sống theo Thần Khí, và như vậy, anh",
        ],
        tham_chieu: [
            "Mt 4,10; Cl 3,5-7",
        ],
    },
    {
        stt: 452,
        noi_dung: "Thần ô uế chỉ sợ ăn chay và cầu nguyện, con đã làm chưa?",
        chuong: 18,
        loi_chua: [
            "Mt 17,21: Giống quỷ này không chịu ra, nếu người ta không ăn chay cầu nguyện.",
        ],
    },
    {
        stt: 453,
        noi_dung: "Khốn nạn nhất là khi không chấp nhận lời khuyên bảo của kẻ khác, mà còn tự cấp cho mình giấy hạnh kiểm trong trắng hạng A.",
        chuong: 18,
    },
    {
        stt: 454,
        noi_dung: "Đ ừng bao gi ờ khinh anh em, n ếu con đứng v ững đến h ôm nay l à nh ờ ơn Ch úa, coi chừng kẻo ngày mai con ngã nặng hơn! nhường mà đối xử với nhau, vì Thiên Chúa chống lại kẻ kiêu ngạo, nhưng ban ơn cho kẻ khiêm nhường.",
        chuong: 18,
        loi_chua: [
            "1Pr 5,5: Nh ững người trẻ hãy vâng phục các kỳ mục: anh em h ãy lấy đức khiêm",
        ],
        tham_chieu: [
            "1Cr 10,12",
        ],
    },
    {
        stt: 455,
        noi_dung: "Xem th ường kh ông gi ữ ng ũ quan l à m ở c ửa cho địch v ào th ành. Đ avít th ắng G ôliát khổng lồ nhưng không thắng được mắt mình. anh sẽ sáng. Còn nếu mắt anh xấu, thì toàn thân anh sẽ tối. Vậy nếu ánh sáng nơi anh lại thành bóng tối, thì tối biết chừng nào!",
        chuong: 18,
        loi_chua: [
            "Mt 6,22-23: Đè n của thân thể là con m ắt. Vậy nếu mắt anh s áng, thì to àn thân",
        ],
    },
    {
        stt: 456,
        noi_dung: "Một khi đã chỗi dậy, hãy cầm khí gi ới và quyết liệt tác chiến, ban chi êu hồi của quỷ dâm ô khéo lắm! cháy, tìm ch ốn nghỉ ngơi mà tìm kh ông ra. B ấy giờ nó nói: Ta sẽ trở về nhà ta, nơi ta đã bỏ ra đi. Khi đến nơi, nó thấy nhà để trống, lại được quét tước, trang hoàng hẳn hoi. N ó liền đi kéo thêm bảy thần khác dữ hơn nó, và chúng vào ở đó. Rốt cuộc, tình trạng của người ấy lại còn tệ hơn trước. Thế hệ gian ác này rồi cũng sẽ bị như vậy.",
        chuong: 18,
        loi_chua: [
            "Mt 12,43-45: Khi thần ô uế xuất khỏi một người, thì nó đi rảo qua những nơi khô",
        ],
    },
    {
        stt: 457,
        noi_dung: "Bại một trận không phải là thua cả cuộc chiến. Chúa dùng mọi sự để làm nên sự lành, kể cả tội lỗi. những ai yêu mến Người, tức là cho những kẻ được Người kêu gọi theo như ý Người định.",
        chuong: 18,
        loi_chua: [
            "Rm 8,28: Ch úng ta bi ết rằng: Thiên Chúa làm cho m ọi sự đều sinh l ợi ích cho",
        ],
    },
    {
        stt: 458,
        noi_dung: "Tôi không muốn biết, muốn nhớ quá khứ của anh em. T ôi chỉ muốn biết hiện tại của anh em để thương nhau, nâng đỡ nhau, và tương lai để tin nhau, để khuyến khích nhau.",
        chuong: 18,
    },
    {
        stt: 459,
        noi_dung: "Càng sống trong trắng chí khí càng vững, vì đã được rèn luyện qua nhiều trận anh dũng. được tôi luyện, họ sẽ lãnh phần thưởng là sự sống Chúa đã hứa ban cho những ai yêu mến Người.",
        chuong: 18,
        loi_chua: [
            "Gc 1,12: Ph úc thay ng ười bi ết ki ên trì ch ịu đựng c ơn th ử th ách, vì m ột khi đã",
        ],
    },
    {
        stt: 460,
        noi_dung: "Tôi hoàn toàn tin t ưởng ở Chúa Giêsu, khi th ấy Ngài tha th ứ và bênh vực kẻ tội lỗi: Trong các ông, ai vô tội thì hãy ném đá trước hết người này đi! … Ta c ũng không xử tội bà đâu! Đ i đi! Và từ nay đừng phạm tội nữa (Ga 8,7.11) – Các tội của bà, các tội lỗi nhiều đó, quả đã được tha rồi vì bà đã cảm mến nhiều (Lc 7,47).",
        chuong: 18,
    },
    {
        stt: 461,
        noi_dung: "Người ta kh ông hiểu được sự trinh khi ết: có người cho l à dại, có người cho l à khó, có người cho là uổng. Nhưng dưới mắt Thiên Chúa là một kỳ công. Đ ời trinh khi ết chỉ có thể thực hiện nhờ Thiên Chúa và chỉ có Thiên Chúa mới giải thích được sự trinh khiết. nhưng chỉ những ai được Thiên Chúa cho hi ểu mới hiểu. Quả vậy, có những người không kết hôn vì từ khi lọt lòng mẹ, họ đã không có khả năng; có những người không thể kết hôn vì bị người ta hoạn; lại có những người tự ý không kết hôn vì Nước Trời. Ai hiểu được thì hiểu. thánh hiến cho Chúa Kitô với một lý do mới mẻ và tuyệt hảo, được dễ dàng kết hợp hơn với Người bằng một trái tim kh ông chia s ẻ, tận hiến cách tự do h ơn trong Người và nhờ Người để phục vụ Thiên Chúa và loài người, sẵn sàng hơn trong việc phục vụ Nước Chúa và việc tái sinh siêu nhiên; như thế các ngài có khả năng hơn để sinh nhi ều con cái trong Đ ức Kitô. Chính nh ờ đó, các ngài tuyên bố trước mặt mọi người rằng mình muốn tận hiến trọn vẹn cho công việc đã được trao phó, nghĩa là muốn đính ước các tín hữu với một người bạn độc nhất và hiến dâng họ cho Chúa Kitô như một trinh nữ thanh sạch; như thế các ngài nhắc lại cuộc hôn nhân mầu nhiệm đã được Thiên Chúa thiết lập và sẽ tỏ lộ đầy đủ ở đời sau. Cuộc hôn nhân trong đó Giáo hội chỉ có một vị Hôn phu duy nhất là Chúa Kitô. Ngoài ra, c ác ngài còn trở nên dấu chỉ sống động về thế giới mai sau, mà ngày nay đã hiện diện qua đức tin và đức ái, trong đó các con cái của sự sống không còn dựng vợ gả chồng nữa. Gia đình, tế bào của Hội thánh",
        chuong: 18,
        loi_chua: [
            "Mt 19,11-12: Người nói với các ông: Không phải ai cũng hiểu được câu nói ấy,",
            "LM 16b: Nhờ đức tinh khiết hay là bậc độc thân vì Nước Trời, các Linh mục được",
            " ",
        ],
        tham_chieu: [
            "GH 42c; LM 12b; DT 10a",
        ],
    },
    {
        stt: 462,
        noi_dung: "Hạnh phúc của một người không căn cứ ở của cải, chức vụ, nhưng ở tình yêu mà người ấy tập yêu suốt đời.",
        chuong: 19,
    },
    {
        stt: 463,
        noi_dung: "Chuẩn bị làm Linh mục có chủng viện, chuẩn bị làm tu sĩ có đệ tử viện, tập viện, chuẩn bị làm giáo sư có trường sư phạm, chuẩn bị làm cha mẹ có gì? – Chẳng có gì cả! Thật là một thiếu sót lớn lao trên thế giới. Lúc sau này tạm có lớp dự bị hôn nhân nhưng chưa đi đến đâu. Bao nhiêu người sẽ là nạn nhân do cuộc phiêu lưu của các con? gắng bằng lý thuyết và hoạt động nâng đỡ các thanh thi ếu niên và chính c ác đôi vợ chồng, nhất là những đôi mới kết hôn, đồng thời huấn luyện cho h ọ về đời sống gia đình, xã hội và việc tông đồ.",
        chuong: 19,
        loi_chua: [
            "MV 52b: Các tổ chức hoạt động tông đồ, nhất là những hiệp hội gia đình, phải cố",
        ],
        tham_chieu: [
            "MV 49c, 52ade",
        ],
    },
    {
        stt: 464,
        noi_dung: "Con hãy suy niệm tiệc cưới Cana (Ga 2,1-10). Lúc đầu người ta lo ăn uống, vui ch ơi, hưởng thụ: nhưng giữa tiệc hết rượu, ch ỉ còn nước lã. Sau đó, người ta cầu xin Chúa: Ngài đã biến nước thành rượu và rượu sau ngon hơn rượu trước. Con hãy ý thức rằng tự sức riêng mình ph ương tiện con c ó giới hạn, tình y êu con kh ó bền bỉ và gia đình con thiếu an vui. Nhưng có ơn Chúa phù giúp, phương tiện con thêm phong phú, tình yêu con thêm nồng nàn, gia đình con sẽ được hạnh phúc. Con hãy luôn nhớ sử dụng đến kho tàng đạo đức ấy giữa gia đình con.",
        chuong: 19,
    },
    {
        stt: 465,
        noi_dung: "Khi con c òn trẻ, con đi nơi con mu ốn nhưng khi tr ưởng thành, người khác sẽ cầm tay con, nhiều người khác, nhiều bàn tay nh ỏ sẽ níu l ấy tay con, l ôi kéo con đến nơi con không muốn, nơi mà không bao gi ờ con d ám đến, không bao gi ờ con tin r ằng con c ó sức đến… Nh ưng tình yêu có thể giúp con làm tất cả!",
        chuong: 19,
    },
    {
        stt: 466,
        noi_dung: "Đ ối với nhau, cũng như đối với con cái, đôi bạn sống tất cả tình yêu của Chúa Giêsu đối với mỗi người. Nhờ đó, đôi bạn tham dự và sống mầu nhiệm cứu chuộc. Đô i bạn tập yêu thương cách phong phú, vô bờ bến, như Chúa Giêsu yêu họ và yêu mọi người. Hội Thánh và hiến mình vì Hội Thánh việc sinh s ản và giáo dục con c ái như chóp đỉnh hoàn thành hôn nhân, người nam và người nữ không còn là hai, nhưng là một xương thịt (Mt 19,6), phục vụ và giúp đỡ lẫn nhau bằng  k ết hợp mật thiết trong con ng ười và hoạt động của họ, cảm nghiệm và hiểu được sự hiệp nhất với nhau mỗi ngày mỗi đầy đủ hơn. Sự liên kết mật thiết vẫn là sự tự hiến của hai ng ười cho nhau c ũng như lợi ích c ủa con c ái buộc hai v ợ chồng phải hoàn toàn trung tín v à đòi hỏi kết hợp với nhau bất khả phân ly.",
        chuong: 19,
        loi_chua: [
            "Ep 5,25: Ng ười làm chồng, hãy yêu thương vợ, như chính Đ ức Kitô yêu thương",
            "MV 48a: T ự bản chất, chính định chế hôn hân và tình y êu lứa đôi quy h ướng về",
        ],
        tham_chieu: [
            "GH 11b, 35c, 41e; MV 48d, 49",
        ],
    },
    {
        stt: 467,
        noi_dung: "Tình yêu hôn nhân có sức rút từ quả tim con người tất cả can đảm, tin tưởng và quảng đại. Chúa Kitô, tình yêu ấy trung thành bất khả phân ly giữa cảnh đời thăng trầm, và do đó loại hẳn mọi hình thức ngoại tình và ly dị. Phải nhìn nhận phẩm giá cá nhân bình đẳng giữa vợ chồng trong tình tương ái trọn vẹn để nhờ đó, biểu hiện rõ ràng tính cách duy nhất của hôn nhân đã được Chúa Kitô xác nhận. Đ ể kiên trì g ánh vác những bổn phận của ơn gọi Kitô giáo này, cần phải có một nhân đức phi thường: vì thế, vợ chồng đã được ơn sủng củng cố để sống thánh thiện sẽ ân cần nuôi dưỡng và cầu xin cho được một tình y êu vững bền, một tâm hồn đại lượng và một tinh thần hy sinh.",
        chuong: 19,
        loi_chua: [
            "MV 49b: Đư ợc đảm bảo vì tín c ẩn nhau v à nhất là được chuẩn y b ởi bí tích c ủa",
        ],
        tham_chieu: [
            "MV 48b, 50c, 51a; TĐ  11c",
        ],
    },
    {
        stt: 468,
        noi_dung: "Đ òi hỏi biến đổi mà không yêu thương làm cho bạn mình bất mãn. Yêu thương mà không đòi hỏi biến đổi là hạ giá bạn mình.",
        chuong: 19,
    },
    {
        stt: 469,
        noi_dung: "Yêu thương để giúp bạn biến đổi, là cho bạn phương tiện. Bắt bạn biến đổi mới yêu thương là cất hết phương tiện.",
        chuong: 19,
    },
    {
        stt: 470,
        noi_dung: "Phương tiện độc nhất để biến đổi tâm hồn bạn mình là chấp nhận bạn như thuở ban đầu, vì được yêu là điều kiện cần thiết để biến đổi.",
        chuong: 19,
    },
    {
        stt: 471,
        noi_dung: "Tình yêu luôn luôn thao thức; không phải vì hoài nghi tình yêu của bạn mình, nhưng vì thấy mình có trách nhiệm tạo cho nhau những gì là mới mẻ, là cảm hứng, là biến đổi, có khi chính bạn cũng không hay biết. Chính nỗi thao thức ấy là một niềm vui.",
        chuong: 19,
    },
    {
        stt: 472,
        noi_dung: "Có một sự sáng suốt đáng buồn: xét mọi người theo quá khứ của họ. Có một sự sáng suốt đầy yêu thương: đoán trước người ta có thể biến đổi tốt đẹp chừng nào!",
        chuong: 19,
    },
    {
        stt: 473,
        noi_dung: "Tình yêu không mù quáng: thấy yếu đuối của người yêu và cố gắng gánh vác. Thấy khả năng của người yêu và tế nhị khơi dậy. rằng đàn bà thuộc phái yếu; hãy tỏ lòng quý trọng vì h ọ cũng được hưởng sự sống là hồng ân Chúa ban. Như thế, việc cầu nguyện của anh chị em sẽ không bị ngăn trở.",
        chuong: 19,
        loi_chua: [
            "1Pr 3,7: Anh em l à những người chồng, trong cuộc sống chung, anh em n ên hiểu",
        ],
    },
    {
        stt: 474,
        noi_dung: "Người không biết yêu xương của x ương mình, th ịt của thịt mình, ng ười không thể làm cho cái xã hội thứ nhất, nền tảng mọi xã hội khác được hạnh phúc? Làm sao cả gan canh tân cả thế giới được? mình. Quả vậy, có ai ghét thân xác mình bao gi ờ; trái lại, người ta nuôi nấng và chăm sóc thân xác mình, c ũng như Đ ức Kitô nuôi nấng và chăm sóc Hội Thánh.",
        chuong: 19,
        loi_chua: [
            "Ep 5,28-29: Chồng phải yêu vợ như yêu chính thân thể mình. Yêu vợ là yêu chính",
        ],
        tham_chieu: [
            "1Cr 11,11-12",
        ],
    },
    {
        stt: 475,
        noi_dung: "Thời đại ta, Hội thánh đã vạch ra một linh đạo về hôn nhân, cho chúng ta thấy hôn nhân là một phương thế để con người triển nở và là một ơn gọi đến sự thánh thiện. ban cho đặc sủng riêng, kẻ thế này, người thế khác. tích riêng để được lãnh nhận các bổn phận và phẩm giá của bậc sống họ; nhờ sức mạnh của bí tích n ày, họ được thấm nhuần tinh th ần Chúa Kitô mà chu toàn bổn phận hôn nhân v à gia đình của họ, nhờ đó tất c ả đời sống của họ được thấm nhuần đức tin, cậy, mến, và càng ngày họ càng tiến gần hơn tới sự trọn lành riêng biệt của họ và sự thánh hoá lẫn nhau; v à bởi đấy cùng nhau tôn vinh Thiên Chúa.",
        chuong: 19,
        loi_chua: [
            "1Cr 7,7: Tôi ước muốn mọi người đều như tôi; nhưng mỗi người được Thiên Chúa",
            "MV 48b: V ợ chồng Kitô hữu được củng cố và như được thánh hiến bằng một bí",
        ],
        tham_chieu: [
            "GH 11b, 35c; MV 50c, 51b, 52cg",
        ],
    },
    {
        stt: 476,
        noi_dung: "Các con ngạc nhiên khi nghe nói đến ơn gọi làm cha mẹ gia đình? – Người ta lầm lạc khi dành ơn thiên triệu, bậc trọn lành cho tu sĩ thôi. Hai người thề hứa yêu nhau suốt đời trong Chúa Kitô, nhờ bí tích hôn nhân, không phải là một cách tuyên xưng đức tin, một cách khấn hứa sao? Chúa: vợ không được bỏ chồng, mà nếu đã bỏ chồng, thì phải ở độc thân hoặc phải làm hoà với chồng; và chồng cũng không được rẫy vợ. bí tích đặc biệt thánh hoá, đó là đời sống hôn nhân và gia đình… N ơi gia đình, vợ chồng tìm thấy ơn gọi riêng của mình là làm chứng cho nhau và cho con cái lòng tin và tình yêu Chúa Kitô.",
        chuong: 19,
        loi_chua: [
            "1Cr 7,10-11: Với những người đã kết hôn, tôi ra lệnh này, không phải tôi, mà là",
            "GH 35c: Có một bậc sống rất giá trịđể thể hiện nhiệm vụ đó, bậc sống được một",
        ],
        tham_chieu: [
            "MV 48a, 49b, 50, 52g; TĐ 11",
        ],
    },
    {
        stt: 477,
        noi_dung: "Nếu giáo dân đặt nặng nhiệm vụ trần thế của mình, thì nhi ệm vụ trần thế quan tr ọng nhất, quyết định nhất của họ là đời sống gia đình. phải g ọi l à ph ần quan tr ọng nh ất c ủa vi ệc t ông đồ: Đó  l à: ph ải bi ểu l ộ v à chứng minh bằng đời sống tính cách bất khả phân ly và sự thánh thiện của dây hôn phối. Phải mạnh mẽ lên tiếng rằng quyền lợi v à nhiệm vụ đã được trao ban cho b ậc cha m ẹ v à nh ững ng ười b ảo tr ợ l à gi áo d ục con c ái theo Kit ô giáo.",
        chuong: 19,
        loi_chua: [
            "TĐ  11c: Tất cả những việc ngày xưa vốn là bổn phận vợ chồng, thì ngày nay còn",
        ],
        tham_chieu: [
            "GH 35c, 41e; MV 52g; GD 3a",
        ],
    },
    {
        stt: 478,
        noi_dung: "Canh tân gia đình để canh tân Hội thánh. liên kết chặt chẽ với tình trạng tốt đẹp của cộng đoàn hôn nhân và gia đình.",
        chuong: 19,
        loi_chua: [
            "MV 47a: Sự lành mạnh của con người cũng như của xã hội nhân loại và Kitô giáo",
        ],
        tham_chieu: [
            "GH 12b, 39, 41e",
        ],
    },
    {
        stt: 479,
        noi_dung: "Con hãy bỏ thói quen sai l ạc: khi n ói về giáo dân, thì quan ni ệm họ như những người độc thân, sống riêng không có cộng đoàn, hoặc hiểu cách tiêu cực: giáo dân không phải là tu sĩ. Con đừng quên đa số giáo dân là những người sống trong một gia đình và phải hỏi rằng họ hiểu, họ sống bí tích hôn nhân công giáo thế nào?",
        chuong: 19,
    },
    {
        stt: 480,
        noi_dung: "Thật đáng buồn khi thế giới văn minh ngày nay chỉ hiểu giáo lý công giáo về hôn nhân qua những luật cấm!. Thế giới đâu ngờ Chúa Giêsu đã đến cứu chuộc tình yêu nhân loại, đã thăng tiến con người cách lạ lùng qua bí tích h ôn nhân! Con ph ải học và trình bày khiá cạnh tích cực, tốt đẹp của hôn nhân công giáo. biểu hiện bằng nhiều cách theo những tập tục lành mạnh của mỗi thời đại, mỗi dân tộc. Tình yêu ấy có đặc tính nhân linh cao cả và từ một nhân vị hướng đến một nhân vị khác bằng một tình cảm tự ý, do đó bao gồm hạnh phúc toàn diện của con người. Nên tình vợ chồng có thể lồng vào những biểu lộ của thể xác và tâm hồn một phẩm giá đặc biệt, và khiến chúng  nên cao quý như những yếu tố và dấu hiệu đặc thù của tình yêu đôi bạn. Bởi một ân huệ đặc biệt của ơn sủng và của tình th ương, Chúa đã đoái thương chữa trị, cải thiện và nâng cao tình yêu ấy.",
        chuong: 19,
        loi_chua: [
            "MV 49a: Nhiều người hiện thời vốn coi tr ọng tình y êu đích thực giữa vợ chồng,",
        ],
        tham_chieu: [
            "MV 47c, 48b, 51b, 62g",
        ],
    },
    {
        stt: 481,
        noi_dung: "Phải nỗ lực về phương diện giáo lý cũng như mục vụ để làm cho các gia đình công giáo xác tín về sức mạnh của họ. Họ sẽ khám phá ra họ không phải là thành phần thụ hưởng, chỉ biết lãnh nhận giáo lý, lãnh nhận bí tích, l ãnh nhận ơn Chúa, mà họ cũng là thành phần hoạt động tông đồ. còn được mời gọi góp phần trực tiếp hơn và bằng nhiều cách vào công cuộc tông đồ của hàng giáo phẩm, giống như những tín hữu nam nữ đã chịu vất vả vì Chúa Kitô để giúp đỡ Tông đồ Phaolô rao gi ảng Phúc âm (x. Pl 4,3; Rm 16,3tt). Đà ng khác, họ có những khả năng mà hàng Giáo phẩm có thể dùng vào một số phận vụ của Giáo hội có mục đích thiêng liêng.",
        chuong: 19,
        loi_chua: [
            "GH 33c: M ột việc nằm trong quy ền mọi Kitô hữu không trừ ai, gi áo dân có thể",
        ],
        tham_chieu: [
            "GH 35c; MV 52b; TĐ  11",
        ],
    },
    {
        stt: 482,
        noi_dung: "Ý thức được sứ mệnh của mình, nhiều gia đình công giáo sẽ đặt dưới quyền sử dụng của Hội thánh, những mãnh lực nhân loại và siêu nhiên của tình y êu vợ chồng, của bí tích hôn nhân, với một sự hăng say lạ thường.",
        chuong: 19,
    },
    {
        stt: 483,
        noi_dung: "Yêu bạn mình l à hành động theo th ánh ý Chúa. Lúc ấy các con hi ểu rằng: trong đời sống thường ngày, các con có thể thực hiện ơn thiên triệu của các con, bằng mọi cử chỉ nhỏ nhặt, để đáp lại tiếng gọi của Chúa. Đó  là một khiá cạnh khả dĩ cách mạng cả cuộc đời các con, đó là một mạc khải không thể quên được. thuộc về Chúa. Người làm chồng hãy yêu thương chứ đừng cay nghiệt với vợ.",
        chuong: 19,
        loi_chua: [
            "Cl 3,18-19: Người làm vợ hãy phục tùng chồng, như thế mới xứng đáng là người",
        ],
        tham_chieu: [
            "1Cr 7,3-4",
        ],
    },
    {
        stt: 484,
        noi_dung: "Tình yêu vợ chồng là hình ảnh, là dấu hiệu tình yêu của Chúa Kitô đối với Hội thánh. Trong mầu nhiệm ấy, con tìm thấy cao cả, sức mạnh và hiệp nhất. Phấn khởi và nâng đỡ biết chừng nào! mẹ mà gắn bó với vợ mình, và cả hai sẽ thành một xương một thịt. Mầu nhiệm này thật là cao cả. Tôi muốn nói về Đ ức Kitô và Hội Thánh. phát xuất từ nguồn mạch tình y êu Thiên Chúa và được tác thành theo g ương kết hiệp của Chúa Kitô và Giáo hội. Thực vậy, như xưa kia Thi ên Chúa đến gặp g ỡ d ân Ng ài b ằng m ột giao ước y êu th ương v à trung th ành, ng ày nay Đ ấng Cứu Thế, Bạn trăm năm của Giáo hội, cũng đến với đôi vợ chồng qua bí tích H ôn ph ối. Ng ười c òn ở l ại v ới h ọ để hai v ợ ch ồng c ũng m ãi m ãi trung thành yêu thương nhau như Người đã yêu thương Giáo hội và đã nộp mình vì Giáo h ội. Tình y êu v ợ ch ồng đích th ực được k ết nh ập trong tình y êu Thi ên Chúa, được h ướng d ẫn v à th êm phong ph ú nh ờ quy ền n ăng c ứu chu ộc c ủa Chúa Kitô và hoạt động cứu rỗi của Giáo hội, để hai v ợ chồng được dẫn dắt cách hữu hiệu đến cùng Thiên Chúa, cũng như được nâng đỡ và kiên cường trong nhiệm vụ cao cả làm cha mẹ.",
        chuong: 19,
        loi_chua: [
            "Ep 5,31-32: Sách Thánh có lời chép rằng: Chính vì thế, người đàn ông sẽ lìa cha",
            "MV 48b: Chúa Kitô ban dồi dào ơn phúc cho tình y êu muôn đời ấy, một tình yêu",
        ],
        tham_chieu: [
            "GH 11b, 41e; MV 32b, 49b",
        ],
    },
    {
        stt: 485,
        noi_dung: "Chúa đã trao cho con m ột người bạn thân yêu, những đứa con xinh x ắn, trong sáng, để nâng đỡ nhau nên thánh. Con đã làm gì?",
        chuong: 19,
    },
    {
        stt: 486,
        noi_dung: "Ý thức rằng các con đồng trách nhiệm về sự trưởng thành trong tình yêu Chúa, Ý thức rằng ơn gọi của các con là cùng nhau và nhờ nhau nên thánh, Ý thức rằng ơn bí tích thường xuyên giúp đỡ các con, Các con hãy hăng say sống mầu nhiệm Tử nạn và Phục sinh qua mọi khiá cạnh của đời sống các con.",
        chuong: 19,
    },
    {
        stt: 487,
        noi_dung: "Phải khám phá ra rằng các con có thể và có bổn phận thánh hoá mình trong hôn nhân và nhờ hôn nhân. hoá nhờ người chồng có đạo. Chẳng vậy, con cái anh em s ẽ là ô uế, trong khi thật ra chúng là thánh.",
        chuong: 19,
        loi_chua: [
            "1Cr 7,14: Chồng ngoại đạo được thánh hoá nhờ vợ, và vợ ngoại đạo được thánh",
        ],
        tham_chieu: [
            "Dt 13,4",
        ],
    },
    {
        stt: 488,
        noi_dung: "Tất cả những thực tại của đời sống vợ chồng, cha m ẹ, bao nhi êu trách nhiệm xã hội là bấy nhiêu cơ hội để bỏ mình, để vươn lên, để tiến tới trên đường thánh thiện chân chính.",
        chuong: 19,
    },
    {
        stt: 489,
        noi_dung: "Sự hợp nhất giữa đôi bạn phải rất trọn vẹn: hiệp nhất thể xác, tình y êu, tinh th ần và thiêng liêng, nhờ sự hiện diện của Chúa Kitô. Yêu trong Chúa, đẹp lắm! Yêu thương vì Chúa, càng đẹp hơn! Gia đình lắng nghe tiếng Chúa và cùng tiến lên trong sự thân mật với Chúa. thành m ột x ương m ột th ịt. Nh ư v ậy, h ọ kh ông c òn l à hai, nh ưng ch ỉ l à m ột xương m ột th ịt. V ậy, s ự gì Thi ên Ch úa đã ph ối h ợp, lo ài ng ười kh ông được phân ly. qua những động tác riêng của hôn nhân. Bởi vậy, những hành vi thực hiện sự kết hợp thân mật và thanh khiết của đôi vợ chồng đều cao quý và chính đáng. Đư ợc thi hành cách thực sự nhân linh, những hành vi ấy biểu hiện và khích lệ sự trao hi ến hỗ tương, nhờ đó hai ng ười làm cho nhau th êm phong ph ú trong hoan lạc và biết ơn.",
        chuong: 19,
        loi_chua: [
            "Mt 19,5-6: Vì th ế, người ta s ẽ lìa cha m ẹ mà gắn bó với vợ mình, v à cả hai sẽ",
            "MV 49b: Sự âu yếm (giữa đôi vợ chồng) được biểu lộ và hoàn hảo cách đặc biệt",
        ],
        tham_chieu: [
            "MV 48a, 52g",
        ],
    },
    {
        stt: 490,
        noi_dung: "Những giây phút thinh lặng bên nhau, chìm đắm trong suy niệm, Những giây phút tự phát cầu nguyện cho nhau, cho con cái, Những giây phút trao đổi thân mật về đời sống thiêng liêng, về việc tông đồ, là một mạc khải, một niềm vui sâu xa và thắm thiết. Các con hãy sống kinh nghiệm: Chúa ở giữa các con!",
        chuong: 19,
    },
    {
        stt: 491,
        noi_dung: "Sinh con c ái không chỉđể đáp lại nhu c ầu nối tiếp giống nòi, nhưng còn là ước muốn tăng trưởng Nhiệm thể. Giáo dục con cái là huấn luyện những kẻ thờ phượng Chúa Cha cách trung th ực. Hãy khám phá và khâm phục ý định cao c ả của Chúa về gia đình các con. dục chúng thay mặt Chúa bằng cách khuyên răn và sửa dạy. của vợ chồng. Trong khi thi h ành bổn phận ấy, họ biết rằng mình cộng tác với tình yêu của Thiên Chúa Tạo hoá và như trở thành những kẻ diễn đạt tình yêu của Ng ài. B ởi v ậy, h ọ s ẽ chu to àn b ổn ph ận mình v ới tr ách nhi ệm c ủa con người và của Kitô hữu.",
        chuong: 19,
        loi_chua: [
            "Ep 6,4: Nh ững bậc làm cha m ẹ, đừng làm cho con c ái tức giận, nhưng hãy giáo",
            "MV 50b: B ổn phận truyền sinh v à giáo dục phải được coi l à sứ mệnh riêng biệt",
        ],
        tham_chieu: [
            "Cl 3,21",
            "MV 52a; TĐ  30a; TD 5; GD 2, 3a",
        ],
    },
    {
        stt: 492,
        noi_dung: "Huấn luyện những chi thể hoạt động cho Nhiệm thể Chúa Kitô, làm cho con mình n ên con Chúa. Nhiệm vụ đó đòi buộc cha mẹ phải đi tiên phong v ề mọi phương diện, mọi nhân đức. những người chồng không tin L ời Chúa, thì h ọ cũng sẽ được chinh ph ục nhờ cách ăn nết ở của chị em m à kh ông cần chị em phải nói lời nào, vì h ọ thấy cách ăn nết ở trinh tiết và cung kính của chị em. nhân chứng đức tin đối với nhau, c ũng như đối với con c ái và những phần tử khác trong gia đình của họ. Chính họ là những người đầu tiên phải rao truyền và giáo dục đức tin cho con cái họ. Bằng lời nói và gương sáng, họ huấn luyện con cái sống đời sống Kitô giáo và làm việc tông đồ. Họ thận trọng giúp đỡ con cái trong việc lựa chọn ơn kêu gọi, và nếu thấy chúng có ơn thiên triệu, họ tận tình nuôi dưỡng ơn kêu gọi đó.",
        chuong: 19,
        loi_chua: [
            "1Pr 3,1-2: Chị em là những người vợ, chị em hãy phục tùng chồng, như vậy, dù có",
            "TĐ  11b: Những đôi vợ chồng Kitô giáo là những người cộng tác với ơn thánh và",
        ],
        tham_chieu: [
            "GH 11b, 41e; MV 48c; TĐ  30b; GD 7bc",
        ],
    },
    {
        stt: 493,
        noi_dung: "Gia đình l à t ế b ào c ủa H ội th ánh, n ói c ách kh ác, l à m ột H ội th ánh c ỡ nh ỏ (Ecclesiuncula), ở đó Chúa Giêsu hiện diện, sinh sống, chết, phục sinh cách mầu nhiệm trong các chi thể. Tư tưởng ấy làm sáng tỏ ý nghĩa và có sức biến đổi đời sống của gia đình công giáo.",
        chuong: 19,
    },
    {
        stt: 494,
        noi_dung: "Gia đình là tế bào của Hội thánh. Chân lý này làm thấy rõ sự cao cả và sứ mệnh của gia đình: 1. Nối tiếp Hội thánh Chúa Giêsu đã thiết lập ở trần gian. 2. Làm cho Chúa hiện diện như là Chủ gia đình thật sự. 3. Làm chứng tích sự hiện diện của Hội thánh bằng cuộc sống gia đình hằng ngày. 4. Nỗ lực vươn lên đến Chúa, làm Hội thánh cùng tiến lên. 5. Thắt chặt mối liên hệ giữa Chúa với mỗi chi thể trong gia đình. tiên và sống động của xã hội. Gia đình sẽ chu to àn được sứ mệnh đó nếu gia đình tỏ ra như một đền thờ của Giáo hội trong nhà mình nhờ yêu thương nhau và cùng nhau d âng lời cầu nguyện lên Thiên Chúa, nếu tất cả gia đình cùng tham d ự v ào vi ệc ph ụng v ụ c ủa Gi áo h ội, sau c ùng n ếu gia đình t ỏ ra hi ếu khách và cổ võ đức công bằng cũng như những việc thiện khác giúp các anh em đang túng thiếu.",
        chuong: 19,
        loi_chua: [
            "TĐ  11d: Chính gia đình đã lãnh nhận từ Thiên Chúa sứ mệnh trở nên tế bào đầu",
        ],
        tham_chieu: [
            "GH 35c; MV 48b",
        ],
    },
    {
        stt: 495,
        noi_dung: "Chúa Giêsu đã muốn xây dựng Nhiệm thể Ngài bằng những tế bào gia đình; Hội thánh có thể thay đổi đường lối tông đồ, thay đổi các hội đoàn, nhưng Hội thánh luôn luôn phát triển nhờ các gia đình. Đ ức tin được thông truyền qua các tế bào sống động và lành mạnh ấy.",
        chuong: 19,
    },
    {
        stt: 496,
        noi_dung: "Giáo d ục con c ái là trường vươn l ên cho cha m ẹ. Tr ẻ con c ó cái nhìn ch ỉ trích, chúng là những quan sát viên khắt khe. Chúng bắt buộc các con là bậc cha mẹ xử trí đúng vai trò của mình và nhờ đó giúp các con tiến lên. riêng vào việc thánh hoá cha mẹ. Thực vậy, con cái sẽ đáp lại công ơn cha mẹ với l òng bi ết ơn, t âm tình hi ếu th ảo v à tin c ậy, v à s ẽ theo đạo l àm con m à phụng dưỡng cha mẹ trong nghịch cảnh cũng như trong tuổi già cô quạnh.",
        chuong: 19,
        loi_chua: [
            "MV 48d: Con cái là những phần tử sống động trong gia đình nên cũng góp phần",
        ],
        tham_chieu: [
            "MV 50a",
        ],
    },
    {
        stt: 497,
        noi_dung: "Con hãy tin rằng: đời sống gia đình công giáo là một: lối tu đức riêng biệt.",
        chuong: 19,
    },
    {
        stt: 498,
        noi_dung: "Nếu chúng ta chủ trương rằng phải nhờ giới lao động thánh hoá giới lao động, thì chúng ta cũng phải tin rằng: gia đình công giáo là tông đồ số một của các gia đình khác. tông đồ gi áo d ân. T ừ gia đình, Kit ô gi áo th ấm nh ập v ào t ất c ả c ác t ổ ch ức cuộc sống và dần dần biến đổi các tổ chức ấy.",
        chuong: 19,
        loi_chua: [
            "GH 35c: Gia đình làm môi trường hoạt động và trường học tuyệt diệu cho vi ệc",
        ],
        tham_chieu: [
            "GH 35c, 41e; MV 52a; TĐ  11c; GD 3a",
        ],
    },
    {
        stt: 499,
        noi_dung: "Người ngoài đánh giá hôn nhân công giáo theo m ức độ thánh thiện của gia đình công giáo.",
        chuong: 19,
    },
    {
        stt: 500,
        noi_dung: "Kinh nghi ệm d ạy c ác con r ằng: kinh t ối s áng trong gia đình, n ói đúng h ơn, gi ờ c ầu nguyện của gia đình, thực hiện được ước vọng thành một cộng đoàn Kitô hữu, một tế bào của Hội thánh, như lời Chúa Giêsu: Nếu các con hi ệp nhau c ầu nguyện cùng Đ ức Chúa Cha…",
        chuong: 19,
    },
    {
        stt: 501,
        noi_dung: "Gia đình c ông gi áo l àm t ông đồ b ằng ch ứng tích. Ph ải ch ứng minh r ằng: c ác con được gọi nên thánh và các con c ó thể sống một đời hôn nhân đẹp lòng Chúa. Các con chia sẻ với các gia đình khác: ân sủng, hạnh phúc Chúa đã ban cho gia đình các con. Nhìn vào gia đình các con, thiên hạ phải đặt câu hỏi: Tại sao họ có thể sống hiệp nhất, yêu thương, trung thành với nhau như thế? ảnh và nói lên sự tham s ự giao ước yêu thương giữa Chúa Kitô và Giáo hội, nên sẽ biểu hiện trước mặt mọi người sự hiện diện sống động của Đ ấng Cứu Thế trong thế giới và bản chất đích thực của Giáo hội qua tình y êu, qua niềm quảng đại chấp nhận sinh sản con cái, qua sự hiệp nhất và trung tín của hai vợ chồng cũng như qua sự hợp tác thân ái của mọi thành phần trong gia đình.",
        chuong: 19,
        loi_chua: [
            "MV 48d: Vì gia đình Kitô hữu xuất phát từ  hôn nhân, một hôn nhân như là hình",
        ],
        tham_chieu: [
            "GH 41e; MV 49c, 52c; TĐ  11e",
        ],
    },
    {
        stt: 502,
        noi_dung: "Gia đình là một trung tâm ánh sáng, đem ngọn lửa hồng chiếu soi kẻ khác. Ngày nào mỗi gia đình là một trung tâm ánh sáng, thế giới này sẽ là một đại gia đình đầy ánh sáng, đầy hy vọng.",
        chuong: 19,
    },
    {
        stt: 503,
        noi_dung: "Gia đình công giáo làm tông đồ bằng tiếp đón. Mở rộng nhà các con và đồng thời mở rộng lòng các con. Nhà nào lại không có khách? Tiếp đón là cách thế tiện nhất, tự nhiên nhất, để làm chứng tích v ề tình y êu, về sự hiệp nhất, về niềm vui, về cởi mở… Nghệ thu ật ti ếp đón s ẽ tr ở n ên tông đồ ti ếp đón. C ác con h ãy s ống v à l àm cho những ai đến gia đình các con đều thèm sống như các con. khách, vì nhờ vậy, có những người đã được tiếp đón các thiên thần mà không biết. nhận làm con nh ững đứa trẻ bị bỏ rơi, ân cần tiếp đón những khách lạ, cộng tác với học đường, khuyên bảo và giúp đỡ thanh thiếu niên, giúp những người đã đính hôn chuẩn bị cho việc hôn nhân của họ được tốt đẹp, giúp dạy giáo lý, nâng đỡ những đôi vợ chồng cũng như những gia đình khi họ gặp khó khăn về vật chất hay tinh thần, lo cho những người già cả không những có những điều cần thiết, mà còn cung cấp cho họ những tiện nghi chính đáng của tiến bộ kinh tế.",
        chuong: 19,
        loi_chua: [
            "Dt 13,1 -2: Anh em h ãy giữ mãi tình huynh đệ. Anh em đừng quên tỏ lòng hiếu",
            "TĐ  11d: Trong c ác việc tông đồ của gia đình cần phải kể đến những việc như:",
        ],
        tham_chieu: [
            "GH 41e; TG 11b",
        ],
    },
    {
        stt: 504,
        noi_dung: "Giờ ngồi bên nhau, c ùng nhau ng ồi bên Chúa là giờ của chân lý, là một khám phá kỳ diệu, là một liều thuốc thần tiên. Bầu khí gia đình sẽ thay đổi, nhiều vấn đề gay cấn được thông cảm giải quyết. Trước kia hai vợ chồng chung sống hoà bình cách nông cạn, rời rạc. Giờ đây tất cả là một: một tình yêu, một niềm vui, một lo âu, một lời cầu nguyện. nhuần cả đời sống và hướng dẫn đôi vợ chồng biết tự do trao h iến cho nhau, qua nh ững t âm tình v à c ử ch ỉ trìu m ến. H ơn n ữa, chính nh ờ nh ững h ành vi quảng đại c ủa mình m à tình y êu giữa hai ng ười được tr ọn vẹn và lớn thêm. Tình yêu vợ chồng, do đó vượt xa xu h ướng nhục dục thuần tuý, và xu h ướng này, n ếu được t ôn th ờ m ột c ách ích k ỷ, s ẽ mau ch óng tan bi ến v à k éo theo những hậu quả thảm hại.",
        chuong: 19,
        loi_chua: [
            "MV 49a: M ột tình y êu kết hợp yếu tố nhân loại với yếu tố thần linh ph ải thấm",
        ],
        tham_chieu: [
            "MV 48d, 52a",
        ],
    },
    {
        stt: 505,
        noi_dung: "Chủng viện th ứ nh ất, đệ t ử viện th ứ nh ất, tr ường sư ph ạm th ứ nh ất là gia đình c ông giáo. Không vị giám đốc tài ba, chuyên môn nào có thể thay thế cha mẹ được. Nếu cơ sở bậc nhất ấy bị hỏng, tương lai Hội thánh và xã hội nhân loại cũng rung rinh sụp đổ. Đ ức Gioan XXIII bi ên thư cho cha m ẹ ngày Ngài được ngũ tuần: Thưa thầy mẹ, hôm nay con được năm mươi tuổi, Chúa thương ban cho con nhi ều chức trong Hội thánh, đi nhiều nơi, học nhiều sách, nhưng không trường nào dạy dỗ con, l àm ích cho con hơn hồi con được ngồi bên thầy mẹ. quan trọng là giáo dục chúng và vì thế họ được coi là những nhà giáo dục đầu tiên và chính yếu của chúng. Vai trò giáo dục này quan trọng đến nỗi nếu thiếu sót thì kh ó lòng bổ khuyết được. Thực vậy, chính cha m ẹ có nhiệm vụ tạo cho gia đình m ột b ầu khí th ấm nhu ần tình y êu c ũng nh ư l òng t ôn kính đối v ới chúng ta và tha nhân, để hỗ trợ việc giáo dục toàn diện cho con c ái trong đời sống cá nhân và xã hội. Do đó gia đình là trường học đầu tiên dạy các đức tính xã hội cần thiết cho mọi đoàn thể. Học với Chúa Giêsu một khoa: hiền lành và khiêm nhượng",
        chuong: 19,
        loi_chua: [
            "GD 3a: Vì l à người truyền sự sống cho con c ái, nên cha mẹ có bổn phận hết sức",
            " ",
        ],
        tham_chieu: [
            "Đ T 2a; TĐ  30b; GD 8c",
        ],
    },
    {
        stt: 506,
        noi_dung: "Nếu con hiểu biết hạnh phúc được làm con Chúa thì những điều sỉ nhục không thấm gì với con và những lời hoan hô cũng chẳng thêm gì cho con.",
        chuong: 20,
    },
    {
        stt: 507,
        noi_dung: "Nếu con biết rõ mình, con sẽ tức cười, khi nghe người ta tung h ô con, và con thấy việc họ khinh rẻ con là có lý. Chừng đó con lại ngạc nhiên tại sao người ta mới xử ngang độ ấy thôi. mình. Mỗi người hãy xem xét việc làm của chính mình, và bấy giờ sẽ có lý do để hãnh diện vì chính mình, chứ không phải vì so sánh với người khác.",
        chuong: 20,
        loi_chua: [
            "Gl 6,3-4: Nếu ai tưởng mình là gì mà kỳ thực không là gì hết, thì là lừa gạt chính",
        ],
    },
    {
        stt: 508,
        noi_dung: "Hồn tông đồ khiêm tốn và tạ ơn Chúa như Phaolô: Tôi là người mạt nhất trong c ác tông đồ, và cũng không đáng gọi là tông đồ nữa, bởi tôi đã bắt bớ Hội thánh của Thiên Chúa. Hiện tôi có là gì, là bởi ơn Thiên Chúa (1Cr 15,9-10). của quyền lực Người –  và có khi phải đổ máu mới nói lên được chứng tá ấy – qủa là chính đáng và có giá trị cứu rỗi: vì Thiên Chúa luôn đáng khâm phục và việc Người làm bao giờ cũng kỳ diệu.",
        chuong: 20,
        loi_chua: [
            "HN 4h: Nhìn nhận những kho tàng phong phú của Chúa Kitô và những hoạt động",
        ],
        tham_chieu: [
            "GH 8c, 14b, 36a; GM 15c; LM 15a",
        ],
    },
    {
        stt: 509,
        noi_dung: "Khi con tự hạ mình, chưa hẳn con khiêm nhượng. Khi người ta hạ con, chưa hẳn con khiêm nhượng. Khi người ta hạ con, mà con vui lòng chấp nhận vì Chúa, lúc ấy con mới khiêm nhượng thật. mà coi người khác hơn mình.",
        chuong: 20,
        loi_chua: [
            "Pl 2,3: Đ ừng làm chi vì ganh tị hay vì hư danh, nhưng hãy lấy lòng khiêm nhường",
        ],
    },
    {
        stt: 510,
        noi_dung: "Con chỉ hiểu được đức khiêm nhượng khi suy niệm cả cuộc đời Chúa Giêsu, Con Thiên Chúa hạ mình ch ịu đựng mọi sự ngớ ngẩn dốt nát, hiểu lầm sâu độc của người ta su ốt 33 năm vì yêu chúng ta. Kitô Gi êsu. Đ ức Gi êsu Kit ô v ốn d ĩ l à Thi ên Ch úa m à kh ông ngh ĩ ph ải nh ất quyết duy trì địa vị ngang h àng với Thiên Chúa, nhưng đã hoàn toàn trút bỏ vinh quang mặc lấy thân nô lệ, trở nên giống phàm nhân sống như người trần thế. gọi của Chúa Cha, thờ phượng Ngài trong Thánh Thần và Chân lý, noi gương Chúa Kitô nghèo khó, khiêm nhượng và vác thập giá để xứng đáng dự phần vào vinh quang của Người.",
        chuong: 20,
        loi_chua: [
            "Pl 2,5-7: Giữa anh em v ới nhau, anh em h ãy có những tâm tình nh ư chính Đ ức",
            "GH 41a: Những người được Thánh Thần Thiên Chúa thương dẫn, nghe theo tiếng",
        ],
        tham_chieu: [
            "GH 3c, 42d; TG 24a; HN 4b, 7a; TD 11a",
        ],
    },
    {
        stt: 511,
        noi_dung: "Kiêu ngạo là ăn cướp ơn Chúa, vinh danh Chúa, để làm của riêng con, công nghiệp con.",
        chuong: 20,
    },
    {
        stt: 512,
        noi_dung: "Càng khiêm tốn Đ ức Maria càng trong sáng, vì càng thấy rõ những sự kỳ diệu Chúa làm trong lòng Mẹ. Như ánh sáng qua một bóng đèn thủy tinh không vướng bụi. sẽ khen tôi diễm phúc. Đ ấng Toàn Năng đã làm cho tôi biết bao điều cao cả, danh Người thật chí thánh chí tôn! ngăn trở Ngài, Đ ức Maria đã tận hiến làm tôi tớ Chúa, phục vụ cho Thân thể và sự nghiệp của Con Ng ài… B ởi vậy, các thánh Giáo phụ đã nghĩ rất đúng rằng: Thiên Chúa đã không thu dụng Đ ức Maria một cách thụ động, nhưng đã để Ngài tự do c ộng tác v ào việc c ứu rỗi nhân loại, nh ờ lòng tin v à sự v âng phục của Ngài.",
        chuong: 20,
        loi_chua: [
            "Lc 1,48-49: Phận nữ tỳ hèn mọn, Người đoái thương nhìn tới; từ nay, hết mọi đời",
            "GH 56: H ết lòng đón lấy ý định cứu rỗi của Thiên Chúa, vì kh ông một tội nào",
        ],
        tham_chieu: [
            "GH 61",
        ],
    },
    {
        stt: 513,
        noi_dung: "Người sống trước mặt Chúa không thể kiêu ngạo được – ngạo về điều gì? – Tất cả đều là của Chúa!",
        chuong: 20,
        loi_chua: [
            "Ga 3,27: Chẳng ai có thể nhận được gì mà không do Trời ban.",
        ],
        tham_chieu: [
            "Ga 7,3; Rm 11,17-18; 1Cr 1,30; Kh 3,17-18",
        ],
    },
    {
        stt: 514,
        noi_dung: "Coi chừng khiêm nhượng giả hiệu khi con từ chối mà kỳ thực là thoái thác bổn phận dấn thân của con và sợ chịu sỉ nhục vì Chúa.",
        chuong: 20,
    },
    {
        stt: 515,
        noi_dung: "Đ ừng chối những khả năng của con, những thành công của con, hãy tạ ơn Chúa vì Ngài sử dụng con như họa sĩ dùng ngòi bút ba xu. trong Đ ức Kitô, tạ ơn Người là Đ ấng đã dùng chúng tôi mà làm cho s ự nhận biết Đ ức Kitô, như hương thơm, lan toả khắp nơi. mọi tạo vật suy phục Chúa Cha, để Thiên Chúa nên tất cả trong mọi người (x. 1Cr 15,27 -28). Ng ười c ũng th ông ban cho c ác môn đệ quy ền bính đó để h ọ được hưởng sự tự do vương giả và chiến thắng ách thống trị của tội lỗi nơi họ, bằng một đời sống từ bỏ và thánh thiện (x. Rm 6,12), hơn nữa để khi phụng sự Chúa Kitô nơi tha nhân, họ khiêm nhường và kiên nhẫn dẫn đưa anh em mình đến cùng Đ ức Vua, Đ ấng mà phụng sự Người là thống trị.",
        chuong: 20,
        loi_chua: [
            "2Cr 2,14: T ạ ơn Thiên Chúa, Đ ấng hằng cho ch úng tôi tham d ự cuộc khải hoàn",
            "GH 36a: M ọi vật đều suy ph ục Người (Chúa Kitô), cho đến khi Ng ười cùng với",
        ],
        tham_chieu: [
            "1Cr 15,10; 2Cr 10, 17-18",
            "GH 14b; MK 11ab",
        ],
    },
    {
        stt: 516,
        noi_dung: "Chỉ người khiêm nhượng thật mới được an vui như Chúa Giêsu dạy: Hãy thụ giáo với Ta, vì Ta hiền lành và khiêm nhượng trong lòng, và các ngươi sẽ tìm thấy sự nghỉ ngơi cho tâm hồn (Mt 11,29). bắt bớ, ngặt nghèo vì Đ ức Kitô. Vì khi tôi yếu, chính là lúc tôi mạnh.",
        chuong: 20,
        loi_chua: [
            "2Cr 12,10: T ôi cảm thấy vui s ướng khi mình y ếu đuối, khi b ị sỉ nhục, hoạn nạn,",
        ],
    },
    {
        stt: 517,
        noi_dung: "Người khiêm nhượng như hạ mình sát đất, không còn ngã xuống đâu được nữa. Người kiêu ngạo như leo trên tháp cao, rất dễ nhào và ngã nặng khủng khiếp!",
        chuong: 20,
        loi_chua: [
            "1Cr 10,12: Ai tưởng mình đang đứng vững, thì hãy coi chừng kẻo ngã.",
        ],
        tham_chieu: [
            "Rm 11,10; Gl 6,1",
        ],
    },
    {
        stt: 518,
        noi_dung: "Cương quyết vâng lời Hội thánh là trung th ành. Quyết liệt hy sinh vì nhi ệm vụ là can đảm, không phải kiêu ngạo.",
        chuong: 20,
    },
    {
        stt: 519,
        noi_dung: "Bao lâu con còn tôn thờ cái tôi của con, chẳng khác nào con cầu nguyện: Lạy Chúa, xin Chúa hãy tin con, hãy trông cậy vào con.",
        chuong: 20,
    },
    {
        stt: 520,
        noi_dung: "Thử thách cay đắng nhất là chấp nhận giới hạn của mình. Chịu đóng đinh vào một thánh giá hẹp, con c àng đau đớn hơn. Nếu thánh giá rộng con c òn được thoải mái hơn phần nào! được, th ân x ác t ôi nh ư đã b ị m ột c ái d ằm đâm v ào, m ột th ủ h ạ c ủa Xa -tan được sai đến vả mặt tôi, để tôi khỏi tự cao tự đại. hủy hoại hiệp nhất: Nếu ta nói rằng mình vô tội, ta kể Người là kẻ dối trá và Lời của Người không ở trong ch úng ta (1Ga 1,10). V ậy, chúng ta h ãy khiêm nhường xin lỗi Chúa và xin lỗi những anh em ly khai, cũng như chúng ta tha kẻ có nợ chúng ta.",
        chuong: 20,
        loi_chua: [
            "2Cr 12,7: Đ ể tôi khỏi tự cao tự đại vì nh ững mặc kh ải phi th ường tôi đã nhận",
            "HN 7b: Lời chứng sau đây của Thánh Gioan vốn còn giá trị trước những lỗi lầm",
        ],
        tham_chieu: [
            "2Cr 11,30",
            "LM 7c, 9b, 15b",
        ],
    },
    {
        stt: 521,
        noi_dung: "Trong cuộc đời Chúa Giêsu, Ngài yêu thương cách riêng những kẻ khiêm nhượng, và quên hết tội lỗi của họ, không bao giờ nhắc lại: - Phêrô, - Mađalêna, - Giakêu… Chúa thân hành đến nhà họ, và đành chịu mang tiếng: Bạn bè với quân thu thuế và tội lỗi (x. Lc 7,34). đã hi ện di ện t ại ti ệc c ưới Cana, đã v ào nh à Giak êu, đã ăn u ống v ới nh ững người thu thuế và những người tội lỗi.",
        chuong: 20,
        loi_chua: [
            "MV 32b: Chính Ngôi Lời nhập thể đã muốn chia sẻ tình liên đới nhân loại. Người",
        ],
    },
    {
        stt: 522,
        noi_dung: "Không thể tránh căng thẳng, nhưng có thể giảm bớt căng thẳng được, trước hết Chúa không buộc con l àm tất cả mọi sự. Thứ đến việc gì Ch úa giao con l àm, Chúa ban th ời giờ và phương tiện. Nếu với tất cả cố gắng và thiện chí, con kh ông thực hiện được là Chúa không muốn. Tại sao căng thẳng, ngã lòng? Cứ bình an! Thầy được biểu lộ trọn vẹn trong sự yếu đuối. Thế nên tôi rất vui mừng và tự hào vì những yếu đuối của tôi, để sức mạnh của Đ ức Kitô ở mãi trong tôi. Như hạt giống được chôn vùi trong lòng đất",
        chuong: 20,
        loi_chua: [
            "2Cr 12,9: Người quả quyết với tôi: Ơ n của Thầy đã đủ cho anh, vì sức mạnh của",
            " ",
        ],
    },
    {
        stt: 523,
        noi_dung: "Chúa Giêsu là Ngôi Lời, nhưng để thực hiện việc tông đồ theo ý Đ ức Chúa Cha, trong 33 năm, Ngài thinh lặng 30 năm và nhất là trong giờ tử nạn, Ngài đã thinh lặng. 4,34; 5, 30; Dt 10,7; Tv 39,9) tự nhận thân phận tôi tớ (Pl 2,7) và đã học tập đức vâng lời với những điều phải chịu đựng (x. Dt 5,8), c ác tu s ĩ, được Chúa Thánh Th ần th úc đẩy, l ấy đức tin t ùng ph ục c ác v ị B ề tr ên, đại di ện Thi ên Chúa, và nhờ các ngài hướng dẫn, họ phục vụ mọi anh em trong Ch úa Kitô, như chính Chúa Kitô, vì tuân phục Chúa Cha, đã phục vụ anh em và hiến mạng sống để cứu chuộc mọi người (x. Mt 20,28; Ga 10, 14-18).",
        chuong: 21,
        loi_chua: [
            "DT 14a: Theo g ương Ch úa Kit ô, Đ ấng đã đến để làm theo ý Chúa Cha (x. Ga",
        ],
    },
    {
        stt: 524,
        noi_dung: "Cẩn mật nhiều, con sẽ hối hận ít. vì nó chứa đầy nọc độc giết người.",
        chuong: 21,
        loi_chua: [
            "Gc 3,8: Cái lưỡi thì không ai chế ngự được: nó là một sự dữ không bao giờ ở yên,",
        ],
    },
    {
        stt: 525,
        noi_dung: "Đ ừng mong rằng nói nhiều, thiên hạ sẽ thông cảm với con. Càng nói càng thêm kẽ hở, thiên hạ càng hiểu ngược xuôi, xuyên tạc hơn. Rồi con cứ phải đính chính lời đính chính trước.",
        chuong: 21,
    },
    {
        stt: 526,
        noi_dung: "Chúa làm phép lạ rồi Chúa cấm nói. Chúa vinh hiển trên núi Taborê rồi cũng cấm nói. Lý tưởng tông đồ của con, con c ứ ấp ủ và hành động, Chúa Thánh Thần sẽ giúp con. Thế gian sẵn sàng chê bai, chống đối vì sự bất cần của con. rằng: Đ ừng nói cho ai hay thị kiến ấy, cho đến khi Con Người từ cõi chết trỗi dậy. trước mặt mọi người, và thi đua với những vị linh mục mà qua c ác thế hệ, đã để lại những chứng tá thánh thiện sáng ngời trong những việc phục vụ thường khiêm tốn và kín đáo.",
        chuong: 21,
        loi_chua: [
            "Mt 17,9: Đ ang khi th ầy tr ò t ừ tr ên n úi xu ống, Đ ức Gi êsu truy ền cho c ác ông",
            "GH 41c: C ác linh m ục… ph ải là những chứng nhân sống động của Thiên Chúa",
        ],
    },
    {
        stt: 527,
        noi_dung: "Trong Thánh Kinh, Đ ức Maria c ẩn mật, Bà Giuđích c ẩn mật đã làm những việc anh hùng. Còn lực sĩ vô địch như Samson lại bại trận vì bất cẩn coi thường phụ nữ Đ alila. người hoàn hảo, có khả năng kiềm chế toàn thân.",
        chuong: 21,
        loi_chua: [
            "Gc 3,2: T ất cả chúng ta th ường hay v ấp ngã. Ai kh ông vấp ngã về lời nói, ấy là",
        ],
        tham_chieu: [
            "Lc 2,19.51",
        ],
    },
    {
        stt: 528,
        noi_dung: "Hạt giống rơi xuống lòng đất được chôn vùi kín đáo sẽ sinh hoa k ết quả, hạt giống rơi trên xa lộ bị chim trời tha mất, xe cộ nghiền nát, chẳng lợi lộc gì! (x. Mt 13,4-9).",
        chuong: 21,
    },
    {
        stt: 529,
        noi_dung: "Mỗi khi bi kích thích mu ốn khoe t ài, mỗi khi b ị khiêu khích mu ốn đấu khẩu, mỗi khi bực tức muốn cho nổ tung…: Thinh l ặng, thinh lặng. Dù khôn mấy, con sẽ phát thanh đặc biệt và lời lẽ cũng sẽ chua cay sắc bén đặc biệt hơn con ngờ.",
        chuong: 21,
    },
    {
        stt: 530,
        noi_dung: "Bao nhiêu tác phẩm, bao nhiêu diễn văn, bao nhiêu chương trình, kế hoạch quan trọng của con được thành công rực rỡ đều phát xuất từ tế bào âm thầm của óc não, từ những nhịp đều của quả tim khi ến máu tuần hoàn nuôi sống các bắp thịt con ho ạt động. Nội tâm thâm trầm là căn bản: hy sinh, nhẫn nại, suy tư, yêu mến. nhờ sám hối và tự ý chấp nhận công việc cũng như những khổ cực của cuộc đời làm cho họ nên giống Chúa Kitô đau khổ (x. 2Cr 4,10; Cl 1,24) h ọ mới có thể ảnh hưởng tới mọi người và đem ơn cứu độ cho toàn thế giới.",
        chuong: 21,
        loi_chua: [
            "TĐ  16g: M ỗi người phải nhớ rằng nhờ việc phụng tự công cộng và cầu nguyện,",
        ],
        tham_chieu: [
            "TĐ  4a",
        ],
    },
    {
        stt: 531,
        noi_dung: "Cẩn mật đâu phải là mầu nhiệm, chỉ là sự tế nhị tự nhiên. Chẳng hạn con đâu muốn ai đem cuộc đời cá nhân của con ra phơi bày bàn tán công khai. Khi căn dặn thiên hạ giữ bí m ật con v ừa tiết lộ thì con đã bật mí t ất cả rồi, điều đó chứng minh là chắc chắn chính con cũng không giữ nổi. Trao tặng cho nhau niềm vui",
        chuong: 21,
    },
    {
        stt: 532,
        noi_dung: "Thánh thiện đâu phải là nhăn nhó, khổ sở, đau thương! Thánh thiện là tươi vui liên lỉ vì được Chúa, được đất trên trời là của mình vậy. ơn trong m ọi ho àn c ảnh. Anh em h ãy l àm nh ư v ậy, đó l à điều Thi ên Ch úa muốn trong Đ ức Kitô Giêsu.",
        chuong: 22,
        loi_chua: [
            "1Tx 5,16-18: Anh em hãy vui mừng luôn mãi và cầu nguyện không ngừng. Hãy tạ",
        ],
        tham_chieu: [
            "Mt 5,10-12; Pl 3,1",
        ],
    },
    {
        stt: 533,
        noi_dung: "Đ ừng buồn phiền, hãy có cái nhìn siêu nhiên và con sẽ thấy mọi sự dưới khiá cạnh mới. của Thiên Chúa: gian nan, khốn quẫn, lo âu… Khi vinh c ũng như khi nhục, lúc được tiếng tốt cũng như khi mang ti ếng xấu. Bị coi là bịp bợm, nhưng kỳ thực chúng tôi chân thành;   bị coi là vô danh tiểu tốt, nhưng kỳ thực chúng tôi được mọi người biết đến; bị coi l à sắp chết, nhưng kỳ thực chúng tôi vẫn sống; coi như bị trừng phạt, nhưng kỳ thực không bị giết chết; coi nh ư phải ưu phiền, nhưng kỳ thực chúng tôi luôn vui vẻ; coi như nghèo túng, nhưng kỳ thực chúng tôi làm cho bao ng ười tr ở nên giàu c ó; coi nh ư kh ông c ó gì, nh ưng k ỳ thực chúng tôi có tất cả. sự giảng dạy và qua chính đời sống mình, m ột đời sống bộc lộ rõ ràng tinh thần phục vụ và niềm vui phục sinh đích thực…",
        chuong: 22,
        loi_chua: [
            "2Cr 6,4.8-10: Trong mọi sự, chúng tôi luôn chứng tỏ mình là những thừa tác viên",
            "LM 11a: … C ác linh mục phải hết sức để tâm giải thích cho các tín hữu hiểu biết",
        ],
        tham_chieu: [
            "Pl 1,17-18",
            "MV 4a; TĐ  4c",
        ],
    },
    {
        stt: 534,
        noi_dung: "Tại sao không vui? Chắc là giữa tâm hồn con với Chúa có điều gì không ổn. Xét mình đi, con sẽ thấy ngay. cùng Chúa Cha, bởi vì Chúa Cha cao trọng hơn Thầy.",
        chuong: 22,
        loi_chua: [
            "Ga 14,28b: Nếu anh em yêu mến Thầy, thì hẳn anh em đã vui mừng vì Thầy đi về",
        ],
        tham_chieu: [
            "Gl 6,22",
        ],
    },
    {
        stt: 535,
        noi_dung: "Con phải vui t ươi luôn. Đư ờng Hy v ọng không chấp nhận lữ hành buồn phiền. Đư ờng Hy vọng đem lại vui tươi. chuyên cần cầu nguyện.",
        chuong: 22,
        loi_chua: [
            "Rm 12,12: Hãy vui mừng vì có niềm hy vọng, cứ kiên nhẫn lúc gặp gian truân, và",
        ],
        tham_chieu: [
            "Rm 15,13",
        ],
    },
    {
        stt: 536,
        noi_dung: "Nếu con l àm vì Ch úa, t ại sao con n ản l òng? C àng gian tru ân con c àng vui t ươi nh ư Gioan và Phêrô bịđánh đập ở hội đường bước ra khỏi Công nghịhân hoan vì đã thấy mình xứng đáng được chịu xỉ nhục vì danh Chúa (Cv 5,41), nhưng Phaolô: Tôi được chan chứa an ủi, và tràn ngập vui mừng trong m ọi nỗi gian truân của chúng tôi! (2Cr 7,4).",
        chuong: 22,
    },
    {
        stt: 537,
        noi_dung: "Thành công, con c ám ơn Chúa, thất bại con c ũng cám ơn Chúa. Hãy vui tươi luôn. Vì chính khi thất bại là lúc Chúa muốn thử xem con làm vì Chúa hay vì ý riêng con. Vui vẻ, can đảm lúc thất bại khó khăn hơn hân hoan lúc xuôi may. Hạng anh hùng này con đếm được trên đầu ngón tay. phiền ít lâu giữa trăm chiều thử thách. tràn ơn trợ  lực và an ủi cho bao nhiêu Kitô hữu của bất cứ Giáo hội nào đang phải đau khổ và chịu bách hại mà vẫn can đảm tuyên xưng Danh Chúa Kitô.",
        chuong: 22,
        loi_chua: [
            "1Pr 1,6: Trong thời ấy, anh em sẽ được hân hoan vui mừng, mặc dầu còn phải ưu",
            "Đ P 30b: Xin m ọi người cầu nguyện cùng Chúa Thánh Thần, Đ ấng An Ủ i, tuôn",
        ],
        tham_chieu: [
            "Rm 8,35; Gc 1,2",
            "TĐ  4e, 33; TG 25a",
        ],
    },
    {
        stt: 538,
        noi_dung: "Ư u sầu, chán nản, năn nỉ, phàn nàn… L úc này người ta m ới thấy rõ giá trị những lời khuyên nhủ hùng hồn, những lời tuyên bố nảy lửa của con đến đâu. Thấy mặt con, ai dám theo Chúa nữa. thách Đ ức Kitô còn phải chịu, tôi xin mang lấy vào thân cho đủ mức, vì lợi ích cho thân thể Người là Hội Thánh.",
        chuong: 22,
        loi_chua: [
            "Cl 1,24: Giờ đây, tôi vui mừng được chịu đau khổ vì anh em. Những gian nan thử",
        ],
    },
    {
        stt: 539,
        noi_dung: "Vui với người thương con. Vui với người ghét con. Vui lúc con hớn hở. Vui lúc lòng con đau khổ tê tái. Vui lúc mọi người theo con. Vui lúc con cô đơn bị bỏ rơi. Vui tươi và làm cho m ọi người đến với con c ũng cảm thấy bầu khí vui t ươi, mặc dù lòng con tan nát. Đó  là thánh thiện hơn mọi sự ăn chay, hãm mình. em! Sao cho mọi người thấy anh em sống hiền hoà rộng rãi, Chúa đã gần đến. mọi k ẻ tật nguyền, bệnh hoạn, làm dấu chỉ Nước Ch úa đã đến, thì Gi áo hội cũng nhờ con cái mình mà liên kết với mọi người thuộc mọi hoàn cảnh, nhất là với những người nghèo hèn đau khổ và tình nguyện hy sinh cho họ. Thực vậy, Giáo hội chia vui s ẻ buồn với họ, nhận biết những ước vọng và những vấn đề nhân sinh của họ, cùng chịu khổ với họ trong những lo âu về sự chết.",
        chuong: 22,
        loi_chua: [
            "Pl 4,4-5: Anh em hãy vui luôn trong niềm vui của Chúa. Tôi nhắc lại: vui lên anh",
            "TG 12a: … Nh ư Chúa Kitô đã rảo qua khắp các thị thành và làng mạc, chữa lành",
        ],
        tham_chieu: [
            "Rm 12,15; Pl 2,17-18",
            "MV 1; LM 14c; TĐ  8cd, 13d",
        ],
    },
    {
        stt: 540,
        noi_dung: "Con không có tiền? Con không có quà để tặng? Con không có gì cả? Con quên tặng họ niềm vui, t ặng sự bình an m à thế gian kh ông thể cho được; kho t àng vui t ươi của con phải vô tận.",
        chuong: 22,
    },
    {
        stt: 541,
        noi_dung: "Làm sao cho h ết buồn? Hãy cầu nguyện! Tại sao thế? Vì con g ặp Chúa. Mađalêna tìm xác Chúa, hai môn đệ đi làng Emmau đã gặp Chúa và quên hết mọi u sầu (x. Lc 24,33- 35; Ga 20,18).",
        chuong: 22,
    },
    {
        stt: 542,
        noi_dung: "Càng được chung ph ần thống khổ c ủa Đ ức Kitô ch ừng nào, anh em h ãy vui m ừng! Ngõ hầu khi vinh quang c ủa Ngài mạc khải ra, anh em c ũng được vui m ừng hớn hở (1Pr 4,13). gian sẽ vui mừng. Anh em sẽ lo buồn, nhưng nỗi buồn của anh em sẽ trở thành niềm vui. Thánh giá, sách dạy sự khôn ngoan thật",
        chuong: 22,
        loi_chua: [
            "Ga 16,20: Th ật, Thầy bảo thật anh em : anh em s ẽ khóc lóc và than van, c òn thế",
            " ",
        ],
    },
    {
        stt: 543,
        noi_dung: "Lời giảng Thập giá, đối với những kẻ đang hư đi, là một sự điên rồ; còn đối với chúng ta, những người đang ở trên đường cứu thoát, lại là quyền năng của Thiên Chúa (1Cr 1,18).",
        chuong: 23,
    },
    {
        stt: 544,
        noi_dung: "Người ta khen hay chê, con đừng lo sợ vì bị mất mát hay sung sướng vì được tăng thêm điều gì. Chỉ một điều làm con thiệt hại: tội lỗi. Chỉ một điều tăng thêm giá trị: nhân đức. Khen chê đừng lo, cũng như không sợ súng giả, không ham bạc giả.",
        chuong: 23,
    },
    {
        stt: 545,
        noi_dung: "Ai làm cho tan tác lũ kiêu căng lòng trí? (Lc 1,51). Ai hạ kẻ quền năng khỏi ngai báu? (Lc 1,52). Ai sẽ mang lại trật tự cho bao tư tưởng lộn xộn, lệch lạc? Ai sẽ đem bình an cho người thời đại ta để vững tâm đi trên đường hy vọng? Chỉ có Khôn Ngoan Thiên Chúa ban qua tay Đ ức Mẹ, Toà Đ ấng Khôn Ngoan.",
        chuong: 23,
    },
    {
        stt: 546,
        noi_dung: "Thế giới nghèo quằn quại trong đói khát, tủi nhục, trong bao vấn đề xã hội, lúng túng giải quyết không được. Khó bó khôn. Thế giới tư bản lặn lội trong khoái lạc, tạo thêm nhu cầu, đầu óc chất chứa tư tưởng lộn xộn, tuyên truyền thêm bất an, hoang mang, t ự tôn mình l àm thầy thiên hạ. Ngạo mất khôn. cảnh quá cùng cực, cũng như tự do ấy bị hạ giá một khi buông thả theo những dễ dãi quá mức trong cuộc sống, con người dường như tự khép mình trong thứ tháp ng à c ô đơn. Tr ái l ại, t ự do ấy được c ủng c ố khi con ng ười ch ấp nh ận những ràng buộc không thể tránh được trong cuộc sống xã hội, coi những nhu cầu muôn mặt của tình li ên đới nhân loại là của mình v à tự buộc mình ph ải phục vụ cho cộng đoàn nhân loại.",
        chuong: 23,
        loi_chua: [
            "MV 31b: Sự tự do của con người nhiều lúc suy giảm đi, một khi con người rơi vào",
        ],
        tham_chieu: [
            "MV 10a, 19c; HN 12a",
        ],
    },
    {
        stt: 547,
        noi_dung: "Thế giới không chỉ biến đổi nhờ hành động, thế giới còn biến đổi nhờ tư tưởng, vì t ư tưởng chỉ huy hành động. nhờ sự hiểu biết. Chính s ự hiểu biết lôi kéo một cách dịu dàng tâm trí con người tìm kiếm và ái mộ những gì là chân là thiện. Rồi nhờ thấm nhuần sự hiểu biết mà con người được đưa từ thế giới hữu hình tới tận thế giới vô hình. Hơn hẳn những thế kỷ trước, thời đại chúng ta càng cần đến sự hiểu biết để tất cả những khám phá mới của con người mang tính chất nhân bản hơn. Bởi vì vận mệnh t ương lai c ủa th ế gi ới s ẽ l âm nguy, n ếu th ế gi ới kh ông ph át sinh ra những b ậc th ông thái l ỗi l ạc. Hơn n ữa, ph ải l ưu ý r ằng, nhiều qu ốc gia tuy nghèo nàn về kinh t ế, nhưng lại giàu có về phần hiểu biết, nên vẫn có thể trợ giúp những quốc gia khác rất đắc lực.",
        chuong: 23,
        loi_chua: [
            "MV 15bc: B ản chất tri th ức của nhân vịđược kiện toàn và phải được kiện toàn",
        ],
        tham_chieu: [
            "MV 4, 5, 7",
        ],
    },
    {
        stt: 548,
        noi_dung: "Khi những người thông minh nghĩ mình biết tất cả, Khi những nhà bác học tưởng mình khám phá được tất cả, Biết quỳ gối nguyện cầu Thiên Chúa, Biết khiêm tốn nhìn nh ận những phát minh c ủa mình chỉ là một tia s áng từ trời chiếu soi. Lúc ấy họ nhìn vũ trụ với cặp mắt khác, họ thấy mọi sự được tổ chức theo một trật tự, một chương trình hoàn hảo từ đời đời. định rằng nhờ trí tu ệ họ vượt trên mọi tạo vật. Qua c ác thời đại, nhờ chuyên cần trau d ồi t ài n ăng c ủa mình, chính con ng ười đã th ực s ự ti ến b ộ trong những khoa h ọc thực nghiệm, những khoa h ọc kỹ thuật và nghệ thuật. Trong thời đại chúng ta, con ng ười đã đạt được những thành công phi th ường, nhất là trong vi ệc khám phá và chế ngự thế giới vật chất. Tuy nhi ên con ng ười đã luôn luôn tìm ki ếm và đã khám phá ra ch ân lý sâu xa h ơn. Thực vậy, trí kh ôn con người không hẳn chỉ giới hạn trong những hiện tượng mà thôi, nhưng còn có thể thấu triệt thực tại siêu hình một cách thực sự chắc chắn, cho dù trí tuệ phần nào đã bị mờ tối và suy nhược do hậu quả của tội lỗi.",
        chuong: 23,
        loi_chua: [
            "MV 15a: Dự phần vào ánh sáng của trí tuệ Thiên Chúa, con người có lý để nhận",
        ],
        tham_chieu: [
            "MV 15bcd",
        ],
    },
    {
        stt: 549,
        noi_dung: "Các nhà bác học, các thiên tài đã đóng góp rất nhiều cho v ăn minh th ế giới, nhưng họ chỉ có những mảnh vụn ánh sáng, mảnh vụn chân lý. Một thế giới muốn có trật tự tốt đẹp, cần phải có một sự khôn ngoan siêu việt: Ngôi Lời, nhờ Người mà muôn vật được tạo thành. Thiên Chúa; vì thế, những cái hữu hình là do những cái vô hình mà có. của lý trí, c ó thể từ các tạo vật nhận biết cách chắc chắn có Thiên Chúa như nguyên lý và cứu cánh mọi sự (x. Rm 1,20). C ông đồng còn dạy: Chính nhờ Thiên Ch úa m ạc kh ải m à t ất c ả nh ững gì thu ộc v ề Thi ên Ch úa, t ự n ó v ốn không vượt qua kh ả năng lý trí con ng ười, trong hoàn cảnh hiện tại của nhân loại, đều có thể biết được cách dễ dàng, chắc chắn mà không lẫn lộn sai lầm.",
        chuong: 23,
        loi_chua: [
            "Dt 11,3: Nh ờ đức tin, ch úng ta hi ểu rằng vũ trụ đã được hình th ành bởi lời của",
            "MK 6b: Th ánh Công đồng tuyên xưng rằng: Con người nhờ ánh sáng tự nhiên",
        ],
        tham_chieu: [
            "Ga 1,3; Cl 1,16-17",
            "MV 35",
        ],
    },
    {
        stt: 550,
        noi_dung: "Ngôi Lời đã nhập thể, và Đ ức Chúa Cha đã phán: Ngài là Con chí ái của Ta, kẻ Ta đã sủng mộ, các ngươi hãy nghe Ngài (Mt 17,5). Người là Đư ờng: Con chỉ theo bước chân Người. Người là sự Thật: Con chỉ tin lời dạy của Người. Người là sự Sống: Con chỉ sống bằng tinh thần của Người (x. Ga 14,6). khôn để biết Thiên Chúa thật. Chúng ta ở trong Thiên Chúa thật, ở trong Con của Người là Đ ức Giêsu Kitô. Đ ức Giêsu Kitô là Thiên Chúa thật và là sự sống đời đời. chân lý đích thực về hoàn cảnh và ơn gọi toàn diện của họ, vì C húa Kitô là nguyên lý và mẫu mực của nhân loại đổi mới, một nhân loại thấm nhuần tình thương huynh đệ, sự thành thật và tinh th ần hoà bình m à mọi người đều ước nguyện… Chính Ch úa Kitô là sự thật và là đường lối mà việc rao giảng Phúc âm đã b ày t ỏ cho m ọi người khi v ọng đến tai h ọ nh ững l ời c ủa chính Ch úa Kitô: Hãy hối cải và tin vào Phúc âm (Mc 1,15). Vì k ẻ nào không tin thì đã bị luận phạt rồi, nên lời Chúa Kitô vừa là lời luận phạt vừa là lời ân sủng, vừa đem lại sự chết, vừa thông ban sự sống.",
        chuong: 23,
        loi_chua: [
            "1Ga 5,20: Ch úng ta bi ết rằng Con Thi ên Chúa đã đến và ban cho ch úng ta trí",
            "TG 8: Khi bi ểu dương Chúa Kitô, chính là Giáo hội mạc khải cho con người biết",
        ],
        tham_chieu: [
            "Ga 11,25; 18,37",
            "GH 40a; MK 2; TG 3b",
        ],
    },
    {
        stt: 551,
        noi_dung: "Con đừng nghi ngại lúc thấy đường hy vọng vắng bóng những người mà thế gian cho là khôn ngoan. Ch úa Giêsu đã báo trước: Lạy Cha l à Chúa trời đất, Con xin ng ợi khen Cha, vì Cha đã giấu các điều ấy với hạng khôn ngoan thông thái, mà đã mạc khải ra cho những kẻ bé mọn (Mt 11,25). Con hãy cảm tạ Chúa vì đã ban cho con biết sự khôn ngoan thật. có phúc, vì được nghe. Quả thế, Thầy bảo thật anh em, nhiều ngôn sứ và nhiều người công chính đã mong m ỏi thấy điều anh em đang thấy, mà không được thấy, nghe điều anh em đang nghe, mà không được nghe.",
        chuong: 23,
        loi_chua: [
            "Mt 13,16-17: Còn anh em, mắt anh em thật có phúc vì được thấy, tai anh em th ật",
        ],
        tham_chieu: [
            "Ep 1,16-17",
        ],
    },
    {
        stt: 552,
        noi_dung: "Thế gian s ợ sự khôn ngoan th ật, vì Ch úa Giêsu gọi đó là đường hẹp, vì n ó đảo lộn cuộc sống cũ, vì nó quấy rầy thế gian, vì n ó đặt lại nấc thang giá trị, vì thiên hạ cho là chướng tai. Nhưng qua m ọi th ời đại nh ững t âm h ồn thi ện chí khi êm cung, v à gi ới tr ẻ đầy nhi ệt huyết, đã theo sự khôn ngoan ấy đến cùng. theo những dục vọng của mình mà kiếm hết thầy này đến thầy nọ, bởi ngứa tai muốn nghe. H ọ sẽ ngoảnh tai đi không nghe ch ân lý, nhưng hướng về những chuyện hoang đường. Phần anh, h ãy thận trọng trong m ọi sự, hãy chịu đựng đau khổ, làm công việc của người loan báo Tin Mừng và chu toàn chức vụ của anh.",
        chuong: 23,
        loi_chua: [
            "2Tm 4,3-5: Sẽ đến thời người ta không còn chịu nghe gi áo lý lành mạnh, nhưng",
        ],
    },
    {
        stt: 553,
        noi_dung: "Sự khôn ngoan Chúa Thánh Thần ban, sẽ soi sáng các dự định, hướng dẫn các chương trình, đem lại cho các hành động của con một giá trị vĩnh cữu, và sẽ làm cho con thành người bất tử, trường sinh. vẹn. Người sẽ không tự mình n ói điều gì, nh ưng tất cả những gì Ng ười nghe, Người sẽ nói lại, và loan báo cho anh em biết những điều sẽ xảy đến. trợ giúp bên trong của Chúa Thánh Thần: Ngài thúc đẩy và quy hướng con tim về cùng Thiên Chúa, mơ ûmắt lý trí và ban cho mọi người cảm thấy dịu ngọt khi đón nhận và tin theo chân lý. Và để việc hiểu biết mạc khải được sâu rộng thêm mãi, cũng chính Ch úa Thánh Thần kh ông ngừng ki ện toàn đức tin qua các ơn của Ngài.",
        chuong: 23,
        loi_chua: [
            "Ga 16,13: Khi n ào Thần Khí s ự thật đến, Người sẽ dẫn anh em t ới sự thật toàn",
            "MK 5: Đ ể được niềm tin, cần có ân sủng của Thiên Chúa đi trước giúp đỡ và sự",
        ],
        tham_chieu: [
            "Ga 14,26; Cl 1,9-10",
            "GH 4; MV 38a; LM 11a; Đ T 10a",
        ],
    },
    {
        stt: 554,
        noi_dung: "Con tin tưởng và theo gương Thánh Phaolô: Khi đến với anh em, tôi đã không đến với uy thế của ngôn ngữ, hay khoa khôn ngoan để rao giảng chứng chỉ của Thiên Chúa. Quả tôi đã quyết định là giữa anh em, t ôi không muốn biết gì, ngo ài Đ ức Kitô Giêsu và là Đ ức Kitô Giêsu bịđóng đinh thập giá (1Cr 2,1-2).",
        chuong: 23,
    },
    {
        stt: 555,
        noi_dung: "Chúa Giêsu chịu đóng đinh là sự khôn ngoan từ trời; Ngài đã làm một cuộc cách mạng sáng chói, không thể che đậy được, với một mãnh lực không thể kềm hãm được. Kinh nghiệm hai mươi thế kỷ nay cho thấy rõ như thế và nhiều người can đảm đã đứng hàng đầu, phục vụ sự khôn ngoan ấy.",
        chuong: 23,
    },
    {
        stt: 556,
        noi_dung: "Muốn được khôn ngoan con h ãy tha thi ết cầu xin v à phó thác cả cuộc đời, sống tuyệt đối theo ý Chúa. Đ ến giờ phút cần thiết, dù bị điệu đến trước toà quan, l úc ấy không phải con nói, nhưng chính Chúa Thánh Thần sẽ nói bởi miệng các con, như Stêphanô đã rao giảng, đầy lòng tin vào Chúa Thánh Thần (x. Cv 6,9-10). Người sẽ ban cho. Vì Thiên Chúa ban cho mọi người cách rộng rãi, không quở trách. Học là cầu nguyện",
        chuong: 23,
        loi_chua: [
            "Gc 1,5: N ếu ai trong anh em thi ếu đức khôn ngoan, thì h ãy cầu xin Thi ên Chúa,",
            " ",
        ],
        tham_chieu: [
            "Mt 10,19-20",
        ],
    },
    {
        stt: 557,
        noi_dung: "Muốn tiến kịp, tiến nhanh, tiến vững trên đường Hy vọng, con phải học.",
        chuong: 24,
    },
    {
        stt: 558,
        noi_dung: "Giờ học là giờ cầu nguyện.",
        chuong: 24,
    },
    {
        stt: 559,
        noi_dung: "Ngươi phải yêu mến Chúa, Thiên Chúa ngươi, hết lòng ngươi, hết linh h ồn ngươi và hết trí kh ôn ngươi! (Mt 22,37). Ch ưa học để phục vụ đúng mức, con ch ưa mến Chúa đủ.",
        chuong: 24,
    },
    {
        stt: 560,
        noi_dung: "Học để biết. Học để canh tân. Học để phục vụ. Học để yêu mến. hiểu biết tất cả những gì tốt chúng ta có thể làm để phục vụ Đ ức Kitô. trưởng thành trong sự hiểu biết và lời giáo huấn của các ngài phải là linh dược thi êng liêng cho d ân Ch úa. Nh ưng ki ến thức c ủa th ừa t ác viên thánh cũng phải thánh vì n ó phát xuất từ nguồn mạch thánh và qui h ướng về cùng đích thánh. Vì v ậy, kiến thức đó trước hết được rút ra từ việc đọc và suy gẫm Sách Thánh, nhưng nó cũng được nuôi dưỡng hữu hiệu bằng việc nghiên cứu những t ài li ệu c ủa c ác Gi áo ph ụ, c ác th ánh Ti ến s ĩ v à c ác t ài li ệu c ủa c ác Thánh truyền. Ngoài ra, để trả lời thoả đáng những vấn đề do người thời nay gây ra, các linh mục phải hiểu biết cho thấu đáo những tài liệu của Quyền giáo huấn, nhất là các Công đồng, của các Đ ức Giáo Hoàng, cũng như phải tham khảo những tác giả thần học thời danh nhất và đã được thừa nhận.",
        chuong: 24,
        loi_chua: [
            "Plm 6: Ch ớ gì l òng tin m à anh chia s ẻ với chúng tôi trở nên hữu hiệu, giúp anh",
            "LM 19a: Trong lễ nghi truyền chức, Đ ức Giám mục khuyên bảo các linh mục hãy",
        ],
        tham_chieu: [
            "MV 5b; GD Lời mở đầu, 1b",
        ],
    },
    {
        stt: 561,
        noi_dung: "Ai có mười nén phải làm lợi mười nén. Ai có năm nén phải làm lợi năm nén. Ai có một nén cũng phải làm lợi một nén (x. Lc 19,13-25). Con mang trách nhiệm nặng nếu con từ chối học hỏi khi có thể được. cho mình, thích ứng với hoàn cảnh của mỗi đời sống, và biết lợi dụng những ân huệ Chúa Thánh Thần ban riêng.",
        chuong: 24,
        loi_chua: [
            "TĐ  4g: M ỗi người phải phát triển không ngừng những đức tính v à tài năng ban",
        ],
        tham_chieu: [
            "MV 53ab; GD Lời mở đầu",
        ],
    },
    {
        stt: 562,
        noi_dung: "Học đây không chỉ là vào lớp trau dồi kiến thức văn chương khoa học. Học là luyện khả năng của con, nghề nghiệp của con cho tinh vi, hiện đại. thánh cũng tiến thêm một bước mới, nên khuyên các linh mục hãy hoàn bị kiến thức của mình v ề Thiên Chúa và về nhân loại một cách thích h ợp và liên tục, và như thế, các ngài tự chuẩn bịđể đối thoại với những người đương thời một cách thích hợp hơn.",
        chuong: 24,
        loi_chua: [
            "LM 19b: Trong thời đại chúng ta, văn hoá nhân loại và ngay đến những khoa học",
        ],
        tham_chieu: [
            "LM 19c; TĐ  32a; TG 16d, 17c",
        ],
    },
    {
        stt: 563,
        noi_dung: "Muốn cách mạng thế giới, phải có ơn Chúa, nhưng con phải là khí cụ điêu luyện.",
        chuong: 24,
    },
    {
        stt: 564,
        noi_dung: "Trách nhiệm càng cao m à thiếu khả năng nghề nghiệp càng khốc hại. Con mu ốn phó mạng trong tay một phi công, một bác sĩ thiếu kinh nghiệm không? cả hai sẽ lăn cù xuống hố.",
        chuong: 24,
        loi_chua: [
            "Mt 15,14: Cứ để mặc họ. Họ là những người mù dắt người mù. Mù mà lại dắt mù,",
        ],
    },
    {
        stt: 565,
        noi_dung: "Xem nghề nghiệp con l à một ơn gọi thực hiện ý Chúa giữa xã hội, con s ẽ thánh hoá nghề con. sinh trong tình b ác ái và thấm nhiễm tinh thần tông đồ, sẽ làm chứng cho một vị Thầy duy nhất  là Chúa Kitô bằng đời sống cũng như bằng lời giảng dạy.",
        chuong: 24,
        loi_chua: [
            "GD 8c: C ác nhàgiáo dục, nhờ liên kết với các bạn đồng nghiệp và với các học",
        ],
        tham_chieu: [
            "TĐ  7b; TG 21c; GD 12, Phần kết luận",
        ],
    },
    {
        stt: 566,
        noi_dung: "Hy sinh cho ngh ề nghi ệp, t ận t ụy cho v ăn ho á, ph ục v ụ cho khoa h ọc, cao đẹp l ắm, nhưng con nhớ đây là phương tiện, không phải là cùng đích. em; dù là Phao-lô, hay A -pô-lô, hay K ê-pha, dù cả thế gian n ày, sự sống, sự chết, hiện tại hay tương lai, tất cả đều thuộc về anh em",
        chuong: 24,
        loi_chua: [
            "1Cr 3,21-22: Đ ừng ai dựa vào phàm nhân mà tự hào. Vì tất cả đều thuộc về anh",
        ],
    },
    {
        stt: 567,
        noi_dung: "Làm việc! Học và hành không lìa nhau. Con sẽ gần thực tế hơn, con sẽ thấy: nói dễ, làm khó. Con sẽ bớt phê bình, con sẽ năng xét mình. thì đừng có làm theo, vì họ nói mà không làm. trên l ý thuy ết nh ưng tr ên th ực h ành n ữa, v à c òn ph ải c ó kh ả n ăng thi h ành công t ác v ới tinh th ần trách nh iệm cá nh ân hay t ập đoàn, n ên trong k ỳ h ọc cũng như kỳ nghỉ, phải cho h ọ tập sự mục vụ bằng những công tác thực tập thích đáng.",
        chuong: 24,
        loi_chua: [
            "Mt 23,3: Tất cả những gì họ nói, anh em hãy làm, hãy giữ, còn những việc họ làm,",
            "Đ T 21: Vì c ác chủng sinh ph ải học nghệ thuật hoạt động tông đồ không những",
        ],
        tham_chieu: [
            "LM 19; TĐ  29d; GD 1b",
        ],
    },
    {
        stt: 568,
        noi_dung: "Hội thánh cần sự hợp nhất của những bộ óc thông minh để đem tình yêu Chúa đến trong mọi lãnh vực trần thế. Hội thánh đau khổ và rối loạn vì sự chia rẽ và lộn xộn của những bộ óc thông minh mà tự cao, tự đại. Các thần dữ đã làm như thế.",
        chuong: 24,
    },
    {
        stt: 569,
        noi_dung: "Ở  nhưng là cội rễ mọi sự dữ. Tông đồ không biết ở nhưng. Không có tông đồ hưu, chỉđổi cách làm việc tùy sức. không thuận tiện; hãy biện bác, ngăm đe, khuyên nhủ, với tất cả lòng nhẫn nại và chủ tâm dạy dỗ.",
        chuong: 24,
        loi_chua: [
            "2Tm 4,2: H ãy rao gi ảng l ời Ch úa, h ãy l ên ti ếng, l úc thu ận ti ện c ũng nh ư l úc",
        ],
        tham_chieu: [
            "1Tm 4,13-14",
        ],
    },
    {
        stt: 570,
        noi_dung: "Thanh niên, đời con đầy hy vọng, hãy hăng say luyện đức và rèn tài. Phấn khởi và tươi sáng biết bao vì con thao th ức vươn lên lý tưởng tông đồ, đó là môi trường hoạt động của con. gương mẫu cho c ác tín h ữu về lời ăn tiếng nói, về cách cư xử, về đức ái, đức tin và lòng trong sạch.",
        chuong: 24,
        loi_chua: [
            "1Tm 4,12: Chớ gì đừng có ai coi thường anh vì anh còn trẻ. Trái lại, anh hãy nên",
        ],
        tham_chieu: [
            "Tt 3,14",
        ],
    },
    {
        stt: 571,
        noi_dung: "Trên phi c ơ, nhìn th ấy xe c ộ, nhà cửa, loài vật như đồ chơi của lũ trẻ, lên nguyệt cầu mới th ấy địa c ầu nh ỏ b é. C àng h ọc h ỏi th ông th ái, c àng khi êm t ốn, c àng mu ốn h ọc thêm.",
        chuong: 24,
    },
    {
        stt: 572,
        noi_dung: "Hội thánh ở giữa trần gian. Ph ải đem tất cả mọi kiến thức khoa h ọc sử dụng vào việc bênh vực và trình bày chân lý. Càng hiểu biết con càng phục vụ Hội thánh đắc lực hơn. thể hoạt động cho sự thật. sử dụng những tài nguyên của các nền văn hoá khác biệt để phổ biến và giải thích cho mu ôn dân sứ điệp của Chúa Kitô trong khi rao gi ảng, để tìm t òi và thấu hiểu sâu xa hơn, để diễn tả sứ điệp ấy cách tốt đẹp hơn trong các lễ nghi phụng vụ và trong cuộc sống muôn mặt của cộng đoàn các tín hữu.",
        chuong: 24,
        loi_chua: [
            "2Cr 13,8: Vì chúng tôi không thể làm gì chống lại sự thật, nhưng chúng tôi chỉ có",
            "MV 58b: Trải qua các thế kỷ sống trong nhiều hoàn cảnh khác nhau, Giáo hội đã",
        ],
        tham_chieu: [
            "MK 12b; PV 37; MV 40d, 44bc, 62b; GM 12b",
        ],
    },
    {
        stt: 573,
        noi_dung: "Người càng thông thái, càng thấy khoa học có giới hạn. Nhiều người dốt, tưởng sự hiểu biết của mình vô hạn.",
        chuong: 24,
    },
    {
        stt: 574,
        noi_dung: "Nhiều người công giáo thông thái, nhưng khi sinh ho ạt giữa xã hội lại giấu giếm tính cách công giáo của mình. Đó  là công giáo sơ mi, tiện đâu thay đó. cả ý định của Thiên Chúa.",
        chuong: 24,
        loi_chua: [
            "Cv 20,27: Thật tôi đã không bỏ qua điều gì, trái lại đã rao giảng cho anh em t ất",
        ],
    },
    {
        stt: 575,
        noi_dung: "Nếu mỗi ngày con học thuộc một danh từ, nếu mỗi tháng con đọc thêm một cuốn sách, đến nay con đã tiến nhiều. Nếu đến nay con chưa làm, hãy khởi sự ngay từ hôm nay.",
        chuong: 24,
    },
    {
        stt: 576,
        noi_dung: "Không thông thạo, con dễ tự phụ, và tuyên bố táo bạo. Trường hợp có địa vị, con càng dễ ảo tưởng mình thông thạo hơn nữa. Đ ại họa cho con và cho nhiều người vì sự bất lực ngạo nghễ của con.",
        chuong: 24,
    },
    {
        stt: 577,
        noi_dung: "Tài không đủ, phải có đức. Tài của người kiêu căng, khó chịu, chỉđể sử dụng với máy móc và chất hoá học, không để yêu thương và thuyết phục người khác. ích mọi bề, bởi Chúa hứa ban s ự sống hiện tại cũng như tương lai cho ng ười có lòng đạo đức. thành phần nào trong xã hội, làm sao để đào tạo được những người nam và nữ không những tài giỏi về văn hoá mà còn có một tâm hồn cao th ượng, bởi vì thời đại chúng ta đang khẩn thiết đòi phải có những người như vậy.",
        chuong: 24,
        loi_chua: [
            "1Tm 4,8: Vì luy ện tập thân thể thì l ợi ích ch ẳng là bao, c òn lòng đạo đức thì l ợi",
            "MV 31a: Trước hết cần phải tổ chức việc giáo dục những người trẻ thuộc bất cứ",
        ],
        tham_chieu: [
            "1Cr 8,1; Tt 3,8",
            "GH 41e; MV 41b; Đ T 11a; TD 8b; GD 1a, 3a",
        ],
    },
    {
        stt: 578,
        noi_dung: "Tự xem mình chuy ên môn tất cả là phản khoa h ọc và lạc hậu. Thời đại này, muốn phục vụ phải đem tất cả mọi hiểu biết để hợp tác. rãi, nên hết mọi người đều được kêu gọi để chung l ưng làm việc, hu ống chi những ng ười tin n ơi Ch úa nh ất l à c ác Kit ô h ữu, vì h ọ đã được mang danh Chúa Kitô.",
        chuong: 24,
        loi_chua: [
            "HN 12: Ngày nay sự hợp tác trong các hoạt động xã hội đang được thiết lập rộng",
        ],
        tham_chieu: [
            "MV 25a; GD 12",
        ],
    },
    {
        stt: 579,
        noi_dung: "Văn bằng chứng tỏ con đã thông minh trong m ột giai đoạn nào đó, đặc biệt lúc đi thi. Nếu sự học hỏi của con dừng ngang đó, dù một đống văn bằng cũng không bảo đảm sự thông minh của con.",
        chuong: 24,
    },
    {
        stt: 580,
        noi_dung: "Con hỏi: Học đến bao giờ? Học luôn mãi! Thế giới biến chuyển luôn, công việc của Hội thánh mới mẻ luôn, khí cụ của Hội thánh phải tối tân mãi. Chúa không ban sự khôn ngoan của Salômon và ơn thông hiểu thiên phú của Đ ức Maria cho người làm biếng.",
        chuong: 24,
    },
    {
        stt: 581,
        noi_dung: "Con hiểu biết một chân lý khi con tìm h ọc chân lý ấy. Con c àng thông hiểu rõ rệt hơn khi con tìm cách bênh vực chân lý ấy. Anh biết anh đã học với những ai. Và từ thời thơ ấu, anh đã biết Sách Thánh, sách có thể dạy anh n ên người khôn ngoan để được ơn cứu độ, nhờ lòng tin vào Đ ức Kitô Giêsu. Tất cả những gì viết trong Sách Thánh đều do Thiên Chúa linh hứng, và có ích cho việc giảng dạy, biện bác, sửa dạy, giáo dục để trở nên công chính. Nh ờ vậy, người của Thiên Chúa nên thập toàn, và được trang b ị đầy đủ để làm mọi việc lành. Vinh dự của con người là chinh phục và cứu chuộc vũ trụ",
        chuong: 24,
        loi_chua: [
            "2Tm 3,14-17: Phần anh, hãy giữ vững những gì anh đã học được và đã tin chắc.",
        ],
        tham_chieu: [
            "1Tm 4,13-16",
        ],
    },
    {
        stt: 582,
        noi_dung: "Phát triển không phải chỉ là cho ăn, cho mặc, cũng không phải chỉ phát cày, phát cuốc, đào gi ếng, đào m ương. Ph át tri ển l à th ăng ti ến con ng ười to àn di ện, l à l àm h ọ s ống xứng người hơn. nhân vị, bởi vì con ng ười vượt trên mọi loài và vì nh ững quyền lợi cũng như bổn phận của con ng ười là phổ quát và bất khả xâm phạm. Vậy cần phải cho con người được tất cả những gì thiết yếu mà con người phải có để thực sự sống đời sống con người, như của ăn, áo mặc, chỗ ở, quyền tự do chọn lựa bậc sống và quyền lập gia đình, quyền được gi áo dục, quyền làm việc, quyền bảo tồn danh thơm tiếng tốt, quyền được kính tr ọng, quyền thông tin x ứng hợp, quyền hành động theo quy tắc ngay thẳng của lương tâm mình, quyền bảo vệ đời sống tư và quyền tự do chính đáng cả trong phạm vi tôn giáo nữa.",
        chuong: 25,
        loi_chua: [
            "MV 26b: … Con ng ười càng ngày c àng ý thức hơn v ề phẩm giá cao tr ọng c ủa",
        ],
        tham_chieu: [
            "MV 9c, 29b, 35a, 60a, 66c; TĐ  13c; TG 12d",
        ],
    },
    {
        stt: 583,
        noi_dung: "Con đừng thỏa mãn khi đã giúp người ta. Con đừng làm việc dễ hơn cả: cho. Chúa đòi con làm việc khó hơn, giúp kẻ khác để họ tự giúp lấy mình và để họ biết sẵn sàng giúp mọi người. dưới ánh sáng chân lý, biết hành động với tinh th ần trách nhiệm và cố gắng theo đuổi nh ững điều ch ân th ật v à c ông b ằng, b ằng c ách t ự ý c ộng t ác v ới người khác.",
        chuong: 25,
        loi_chua: [
            "TD 8b: Hãy cố gắng đào tạo nên những con người biết tự  phán đoán các sự việc",
        ],
        tham_chieu: [
            "MV 53b; LM 6b; TG 12d",
        ],
    },
    {
        stt: 584,
        noi_dung: "Thiên Chúa muốn chúng ta hợp tác trong việc tạo dựng cũng như trong việc cứu rỗi. Nếu Chúa làm một mình, c ông trình s ẽ hoàn hảo hơn, nhưng con ng ười sẽ kém cao cả. kết với anh em và phục vụ họ, có thể thực thi bác ái đích thực và góp công vào việc ki ện to àn c ông cu ộc s áng t ạo c ủa Thi ên Ch úa. H ơn n ữa ch úng t ôi cho rằng nhờ việc làm của mình, con ng ười cộng tác vào chính công cuộc cứu rỗi của Chúa Giêsu Kitô, Đ ấng đã nâng cao gi á trị của việc làm khi Ng ười làm việc với chính hai bàn tay của mình tại Nagiarét.",
        chuong: 25,
        loi_chua: [
            "MV 67b: Nhờ việc làm, con người theo lệ thường nuôi sống mình và gia đình, liên",
        ],
        tham_chieu: [
            "MV 34ab; LM 5a",
        ],
    },
    {
        stt: 585,
        noi_dung: "Chúa dạy con, xong công việc, hãy nói: Chúng tôi là những đầy tớ vô dụng, không làm gì hơn là phận sự phải làm (Lc 17,10). Thật là sâu xa, giàu ý nghĩa. Vô dụng vì chính ơn Chúa đã làm, con chỉ là khí cụ. Vô d ụng vì con kh ông c ần gi ữ anh em trong tình tr ạng th ụ ơn, thua k ém v ĩnh vi ễn, nhưng đã làm cho họ không cần đến con nữa.",
        chuong: 25,
    },
    {
        stt: 586,
        noi_dung: "Hãy làm cho người khác lớn lên và con khuất đi. Hãy cho họ ít hơn, đòi hỏi họ nhiều hơn. Hãy biết cứu họ và làm cho họ cứu kẻ khác. Đ ừng khư khư giữ địa vịân nhân, viện trợ, nhưng làm anh em c ủa mọi người, phục vụ mọi người.",
        chuong: 25,
    },
    {
        stt: 587,
        noi_dung: "Mặc dù giúp anh em sung s ướng bao nhiêu đi nữa, nếu để họ thành những bộ máy tự động, con chưa làm cho họ phát triển thực sự.",
        chuong: 25,
    },
    {
        stt: 588,
        noi_dung: "Thảm kịch của người nghèo không phải chỉ là thiếu thốn, nhưng còn vì h ọ không thể sống xứng con người.",
        chuong: 25,
    },
    {
        stt: 589,
        noi_dung: "Giám đốc và công nhân, sĩ quan và binh sĩ, giáo sư và học sinh, khác biệt nhau vì địa vị, vì cấp bậc, nhưng đó chỉ là phụ thuộc. Họ đồng hàng với nhau vì l à người, vì là anh em con Chúa, điều ấy mới quan hệ: Ta không gọi các con là tôi tớ, vì tôi tớ không biết việc chủ mình l àm. Ta đã gọi các con l à bạn hữu, vì mọi điều Ta đã nghe n ơi Cha Ta, Ta đã tỏ cho các ngươi biết (Ga 15,15). Thầy ; còn tất cả anh em đều là anh em với nhau. hơn, bởi vì m ọi người đều có một tâm linh v à được dựng nên giống hình ảnh Thiên Chúa nên có cùng một bản tính và cùng một nguồn gốc, hơn nữa vì được Chúa Kitô cứu chuộc nên họ đều được mời gọi như nhau và cùng hưởng chung một cùng đích nơi Thiên Chúa.",
        chuong: 25,
        loi_chua: [
            "Mt 23,8: Phần anh em, thì đừng để ai gọi mình là ráp-bi, vì anh em ch ỉ có một",
            "MV 29a: C àng ngày càng phải nhận thức sự bình đẳng căn bản giữa mọi người",
        ],
        tham_chieu: [
            "MV 24a, 78c; NK 5b; GD 1a",
        ],
    },
    {
        stt: 590,
        noi_dung: "Món quà tuyệt hảo mà con có thể tặng người giúp việc con không phải là chiếc áo đẹp, đôi giày tốt, cái đồng hồ quý, nhưng là tình người, tình anh em mà còn âm thầm tặng họ qua các cử chỉ nhỏ nhặt suốt ngày. đó. Tôi, Phao-lô, một người đã già và hơn nữa, một người đang bị tù vì Đ ức Kitô Giêsu, tôi van xin anh cho đứa con c ủa tôi, đứa con t ôi đã sinh ra trong cảnh xiềng xích, đó là Ô-nê-xi-mô",
        chuong: 25,
        loi_chua: [
            "Plm 9-10: Nhưng tôi thích k êu gọi lòng bác ái của anh hơn, để xin anh l àm điều",
        ],
    },
    {
        stt: 591,
        noi_dung: "Chúa có thể chọn những người thụ động, nhưng Ngài đã chấp nhận lầm lẫn, chọn những người tội lỗi, hung hăng, rắc rối để hợp tác với Ngài. cho tôi, vì Người đã tín nhiệm mà gọi tôi đến phục vụ Người. Trước kia, tôi là kẻ nói lộng ngôn, bắt đạo v à ngạo ngược, nh ưng tôi đã được Ng ười th ương xót, vì tôi đã hành động một cách vô ý thức, trong lúc chưa có lòng tin.",
        chuong: 25,
        loi_chua: [
            "1Tm 1,12-13: Tôi tạ ơn Đ ức Kitô Giêsu, Chúa chúng ta, Đ ấng đã ban s ức mạnh",
        ],
    },
    {
        stt: 592,
        noi_dung: "Chấp nhận những người chỉ biết nằm, biết ngồi, chỉ muốn lẽo đẽo đi theo, mu ốn được giúp, được c ứu, được cho, để con được l àm anh tr ưởng, được lu ôn lu ôn xem là c ần thiết, thật dễ vô cùng! Nhưng con h ãy luy ện nh ững con ng ười c ó tinh th ần tr ách nhi ệm, nh ững con ng ười muốn đứng, những con người đáng làm người. phẩm giá và trách nhiệm của giáo dân trong Giáo hội, các ngài nên sẵn sàng chấp nhận những ý kiến khôn ngoan c ủa họ, tin c ẩn giao cho h ọ những công tác để họ phục vụ Giáo hội, cho họ tự do và quyền hạn để hành động; hơn nữa, các ngài cũng nên khuyến khích h ọ tự đảm lấy trách nhiệm. Với tình cha con, các ngài hãy cẩn thận xem xét, trong Chúa Kitô, những kế hoạch, thỉnh cầu và khát vọng của họ. Đà ng khác, các chủ chăn phải nhìn nhận và tôn trọng sự tự do chính đáng của mọi người trong lãnh vực trần thế.",
        chuong: 25,
        loi_chua: [
            "GH 37c: Phần các chủ chăn có chức thánh, các ngài phải nhìn nhận và nâng cao",
        ],
        tham_chieu: [
            "GH 30a; LM 6b, 9b; TG 21d",
        ],
    },
    {
        stt: 593,
        noi_dung: "Thật là khó: Nhưng con phải quyết tâm giúp cho người khác: - Biết vùng dậy. - Biết suy tư. - Biết chiến đấu. - Biết chống lại ý con khi cần. Con sẽ hạnh phúc thật vì anh em thăng tiến với con.",
        chuong: 25,
        loi_chua: [
            "3Ga 4: Không có gì làm tôi vui sướng bằng khi nghe biết con cái tôi sống sự thật.",
        ],
        tham_chieu: [
            "2Ga 4",
        ],
    },
    {
        stt: 594,
        noi_dung: "Nguyên tử lực là khám phá lớn lao và hãnh diện cho thời đại ta. Ít người sử dụng nó vào mục đích hoà bình, phát triển. Càng ít người biết chiêm ngưỡng, ca ngợi quyền năng của Thiên Chúa. Nhưng nhiều người chiếm lấy món quà của Cha trên trời, để chế tạo khí giới ngày càng kinh khủng giết chết anh em. sức  tr ầm trọng cho nh ân loại và xúc phạm đến người nghèo một cách không thể tha th ứ được. Và phải hết sức sợ rằng cuộc thi đua võ trang, nếu vẫn còn tiếp di ễn, m ột ng ày n ào đó, s ẽ g ây ra m ọi tai h ọa do nh ững ph ương th ế đã được nó chuẩn bị sẵn",
        chuong: 25,
        loi_chua: [
            "MV 81c: Cần phải tuyên bố một lần nữa: cuộc thi đua võ trang là một tai họa hết",
        ],
        tham_chieu: [
            "MV 36c, 80",
        ],
    },
    {
        stt: 595,
        noi_dung: "Một điều sỉ nhục lớn lao con người làm cho Thiên Chúa là lạm dụng các món quà Ngài ban vào những mục đích bất công, tầy trời, vào những việc huynh đệ tương tàn khủng khiếp.",
        chuong: 25,
    },
    {
        stt: 596,
        noi_dung: "Không phải vũ trụ hết chỗ ở, nhưng lòng người quá chật hẹp! Không phải hết thịt để ăn, nhưng loài người chực vồ nuốt nhau hơn thú dữ. lợi dụng tự do để sống theo tính x ác thịt, nhưng hãy lấy đức mến mà phục vụ lẫn nhau. Vì t ất c ả L ề Lu ật được n ên tr ọn trong điều r ăn duy nh ất n ày l à: Ngươi ph ải y êu ng ười th ân c ận n hư chính mình. Nh ưng n ếu anh em c ắn x é nhau, anh em hãy coi chừng, anh em tiêu diệt lẫn nhau đấy ! bất hoà  giữa con người với nhau, vì chính nh ững nguyên nhân đó nuôi dưỡng chiến tranh, nhất là những bất công. Một số không ít những nguyên nhân này bắt nguồn từ những chênh lệch thái quá trong địa hạt kinh tế, cũng như từ sự trì hoãn những sửa đổi cần thiết. Một số nguyên nhân khác phát sinh từ đầu óc thống trị và miệt thị con người, và nếu tìm hiểu những lý do sâu xa hơn, thì đó là l òng tham lam, nghi l ỵ, ki êu c ăng v à nh ững đam m ê ích k ỷ kh ác. Vì con người không thể chịu đựng được bao nhi êu hỗn loạn ấy, cho nên dù không có chiến tranh tàn khốc, thế giới vẫn không ngừng bị những tranh chấp giữa con người với nhau và những bạo động làm xáo trộn.",
        chuong: 25,
        loi_chua: [
            "Gl 5,13-15: Thưa anh em, anh em đã được gọi để hưởng tự do. C ó điều là đừng",
            "MV 83a: Đ ể xây dựng hoà bình, tr ước hết cần phải tận diệt những nguyên nhân",
        ],
        tham_chieu: [
            "Mc 8,2-3",
            "MV 8be, 25c, 78b, 82bc",
        ],
    },
    {
        stt: 597,
        noi_dung: "Bớt di ễn thuy ết v ề h ạn h án ở Sahel, s óng th ần ở Bangladesh, b ạo động ở NamM ỹ, nhưng hãy tìm th ấy Chúa Giêsu bị bỏ rơi, kém mở mang, kề bên con, d ưới mái nhà con, bên kia vách tường con. Nếu nguồn suối yêu thương của nhân loại đã ráo cạn, Nếu sóng thần của hận thù ích kỷ đã dâng cao, Thì đại họa diệt vong không còn xa! của bất cứ người nào và tích c ực giúp đỡ khi h ọ đến với mình, hoặc có thể là một ng ười gi à l ão b ị m ọi ng ười b ỏ r ơi, ho ặc m ột c ông nh ân ngo ại qu ốc b ị khinh bỉ một cách bất công, hoặc một người lưu vong, hay m ột đứa bé sinh ra do m ột tình duy ên b ất hợp ph áp ch ịu đau kh ổ c ách b ất c ông vì t ội l ỗi mình không ph ạm, ho ặc m ột người đói ăn đang k êu gọi l ương t âm ch úng ta, l àm vang lại lời của Chúa: Bao nhiêu lần các ngươi làm những việc đó cho m ột trong những người hèn mọn là anh em Ta đây, tức là các ngươi làm cho Ta vậy (Mt 25,40).",
        chuong: 25,
        loi_chua: [
            "MV 27b: Th ời nay, ch úng ta c ó bổn phận khẩn thiết phải trở nên người lân cận",
        ],
        tham_chieu: [
            "MV 69a, 78b, 88a; LM 6c; TĐ  31e",
        ],
    },
    {
        stt: 598,
        noi_dung: "Nhân loại hãnh diện vì m ãnh lực của nguyên tử, vì c ông dụng của dầu hoả, vì s ức tàn phá của hoả tiễn, vì phi thuyền lên tận các hành tinh: thời đại của khả năng vô biên! Hãnh diện ấy có thể làm cho th ế gian ra b ụi tro, n ếu bỏ mục tiêu phát triển và quên Thiên Chúa, Đ ấng tạo thành trời đất, muôn vật hữu hình và vô hình. muốn của Thiên Chúa thì tồn tại mãi mãi. thuộc Thiên Chúa và con người có thể sử dụng chúng mà không cần quy hướng về Đ ấng Tạo Hoá, thì không một ai nhìn nhận Thiên Chúa lại không thấy rằng lập trường đó hết sức sai l ầm. Thực vậy, không có Tạo hoá, tạo vật đều tiêu tan. Ngoài ra mọi tín hữu, dù thuộc tôn giáo nào đi nữa, cũng luôn nghe tiếng Thiên Chúa và thấy Ngài hiện diện qua ti ếng nói của tạo vật. Lại nữa, quên mất Thiên Chúa, mọi tạo vật đều trở nên mờ tối.",
        chuong: 25,
        loi_chua: [
            "1Ga 2,17: Th ế gian đang qua đi, cùng với dục vọng của nó. C òn ai thi h ành ý",
            "MV 36c: Nếu sự độc lập của thực tại trần thế có nghĩa là: các tạo vật không lệ",
        ],
        tham_chieu: [
            "GH 36b; GM 12b; TĐ  4c, 7bc",
        ],
    },
    {
        stt: 599,
        noi_dung: "Đ ại họa không phải chỉ là đói khát, khốn khổ của các dân tộc nghèo khó. Đ ại họa chính là sự vô ý thức của các dân tộc no nê và bóc lột. mang danh Kit ô hữu, đang thản nhiên hưởng thụ quá nhiều của cải trong l úc nhiều quốc gia kh ác sống thiếu thốn cùng cực, bịđói khát bệnh tật và đủ mọi thứ b ất h ạnh d ày v ò. Tinh th ần kh ó ngh èo v à bác ái m ới l à vinh d ự v à d ấu chứng của Giáo hội Chúa Kitô.",
        chuong: 25,
        loi_chua: [
            "MV 88a: Phải tránh gương mù của một số quốc gia m à đa số dân chúng thường",
        ],
        tham_chieu: [
            "MV 9b, 66a, 85c",
        ],
    },
    {
        stt: 600,
        noi_dung: "Phát triển là danh hiệu mới của hoà bình (Phaolô VI). giản lược vào sự quân bình gi ữa các lực lượng đối phương, cũng không phát xuất do m ột nền cai tr ị độc t ài, nhưng theo đúng định nghĩa thì ho à bình l à công trình c ủa công bằng (Is 32,7). Ho à bình l à kết qủa của một trật tự đã được chính Thi ên Ch úa, Đ ấng S áng l ập, ghi kh ắc v ào x ã h ội lo ài ng ười v à phải nhờ những người luôn luôn khao kh át một nền công bằng hoàn hảo hơn thể hiện ra trong hành động.",
        chuong: 25,
        loi_chua: [
            "MV 78a: Ho à bình kh ông h ẳn l à v ắng b óng chi ến tranh, c ũng kh ông ch ỉ được",
        ],
        tham_chieu: [
            "MV 77a, 78b, 82b, 83",
        ],
    },
    {
        stt: 601,
        noi_dung: "Bao lâu các quốc gia mở mang chưa bỏ một phần trăm lợi tức giúp các dân nghèo phát triển; Bao lâu hai m ươi phần trăm dân giàu trên thế giới còn chiếm hết tám mươi phần trăm tài nguyên của nhân loại, Thì hiểm họa thế chiến nguyên tử không thể tránh được. trợ khác nhau d ưới hình th ức tặng phẩm, cho vay ho ặc đầu tư tài chánh. Một bên phải viện trợ  c ách quảng đại chứ không vì tham lam, c ũng như bên kia phải nhận với tất cả công minh.",
        chuong: 25,
        loi_chua: [
            "MV 85b: Các quốc gia tiến bộ phải giúp các quốc gia đang phát triển những viện",
        ],
        tham_chieu: [
            "MV 69a, 83, 86c",
        ],
    },
    {
        stt: 602,
        noi_dung: "Vạch kế hoạch và thực hiện viện trợ phát triển bất vụ lợi có triển vọng mang l ại hoà bình hơn là các cuộc hội nghị chế vũ khí hạch tâm, thượng đỉnh kinh tế… Phí gi ờ, phí của, chẳng ai tin ai!",
        chuong: 25,
    },
    {
        stt: 603,
        noi_dung: "Con phải là Tông đồ phát triển như Đ ức Phaolô VI đã kêu gọi. Chính ng ài đã là vị Giáo Hoàng lữ hành vì phát triển và hoà bình. khả năng mà đóng góp vào việc phát triển thực sự cộng đoàn mình.",
        chuong: 25,
        loi_chua: [
            "MV 65c: Ng ười công dân nên nhớ rằng, bổn phận và quyền lợi của mình l à tùy",
        ],
        tham_chieu: [
            "MV 82c; TG 12b",
        ],
    },
    {
        stt: 604,
        noi_dung: "Nói c ách c ụ th ể, ph át triển là thực hi ện Chúc Thư c ủa Ch úa Gi êsu trên trái đất: m ọi người yêu thương nhau, giúp đỡ nhau, san sẻ với nhau trong tình huynh đệ phổ cập. nhau; anh em hãy yêu thương nhau như Thầy đã yêu thương anh em. qủa c ủa ho à bình Ch úa Kit ô, ho à bình do Đ ức Ch úa Cha m à đến. Vì chính Chúa Con Nh ập Thể là thái tử hoà bình đã dùng thập giá Người để giải hoà mọi người với Thiên Chúa; Người đã tái lập sự hiệp nhất mọi người thành một dân tộc và một thân thể. Người đã hủy diệt hận thù trong chính xác thể Người, và sau khi đã khải hoàn phục sinh, Người đã đổ tràn Thánh Thần tình yêu đầy lòng con người. Do đó, trong khi thực thi ch ân lý trong b ác ái (Ep 4,15), m ọi Kitô hữu được khẩn thiết kêu mời hãy kết hiệp với những người thực sự yêu chuộng hoà bình để cầu khẩn và thiết lập hoà bình. Mức độ dấn thân: Thí mạng như Chúa Giêsu",
        chuong: 25,
        loi_chua: [
            "Ga 13,34: Th ầy ban cho anh em m ột điều r ăn m ới l à anh em h ãy y êu th ương",
            "MV 78cd: Phát sinh từ tình yêu tha nhân, hoà bình trần gian là hình ảnh và là kết",
            " ",
        ],
        tham_chieu: [
            "Cv 2,44; 4,32.34",
            "MV 21b",
        ],
    },
    {
        stt: 605,
        noi_dung: "Con đừng nghĩ dấn thân là lao mình vào những hoạt động hăng say náo nhiệt. Con hãy hiểu nghĩa dấn thân sâu hơn: Theo gương Chúa, yêu thương đến mức độ quên mình vì ng ười khác, hiến mình ho àn toàn nhưng không, để hiệp nhất với kẻ khác, hầu họ được phong công việc Chúa nơi họ được thành công. em, vì nh ững người Lao-đi-ki-a, và vì bao ng ười khác chưa thấy tôi tận mắt; như vậy là để họ được phấn khởi trong tâm hồn, và nhờ được liên kết chặt chẽ với nhau trong tình th ương, h ọ đạt t ới s ự th ông hi ểu phon g ph ú v à đầy đủ, khiến họ nhận biết mầu nhiệm của Thiên Chúa, tức là Đ ức Kitô. con đường tình y êu m ở r ộng cho t ất c ả m ọi n gười v à n ỗ l ực thi ết l ập tình huynh đệ đại đồng không bao giờ luống công. Ngôi Lời cũng nhắc nhở cho biết đức ái ấy không phải chỉđược thực hiện trong những việc vĩđại, nhưng trước hết trong nh ững hoàn cảnh thông thường của cuộc sống. Chịu chết cho tất cả chúng ta là những người tội lỗi, Người lấy gương sáng dạy chúng ta phải vác thập giá mà xác thịt và thế gian đặt nặng trên vai những kẻ mưu tìm hoà bình và công lý.",
        chuong: 26,
        loi_chua: [
            "Cl 2,1-2: Quả thế, tôi muốn anh em biết tôi phải chiến đấu gay go thế nào vì anh",
            "MV 38a: Đ ối với những ai tin vào tình yêu Thiên Chúa, Người cho họ xác tín rằng",
        ],
        tham_chieu: [
            "2Cr 12,15; Pl 1,23-26; 1Tx 2,7-8.11-12",
            "LM 6b, 13d",
        ],
    },
    {
        stt: 606,
        noi_dung: "Con người ch ỉ giống hình ảnh Chúa khi hi ến mình li ên lỉ như mỗi Ngôi trong Thi ên Chúa: Hoàn toàn hiến dâng, Hoàn toàn tương quan, Hoàn toàn yêu thương.",
        chuong: 26,
    },
    {
        stt: 607,
        noi_dung: "Con phải trở nên chính con theo ý Chúa, bằng cách giải tỏa hình ảnh Chúa trong con khỏi những bụi bặm bao phủ, dơ bẩn che đậy. Như nhà điêu khắc đục dũa tảng đá để nét mặt kính ái của Chúa tỏ hiện dần dần. Ngôi Lời nhập thể. Bởi vì Ađam con người đầu tiên đã là hình bóng của Ađam sẽ đến, là Chúa Kitô. Chúa Kitô, Ađam mới, trong khi m ạc khải về Chúa Cha và tình yêu của Ngài, đã cho con người biết rõ về chính con người và tỏ cho họ biết chính thiên chức rất cao cả của họ.",
        chuong: 26,
        loi_chua: [
            "MV 22a: M ầu nhi ệm v ề con ng ười ch ỉ th ực s ự được s áng t ỏ trong m ầu nhi ệm",
        ],
        tham_chieu: [
            "MV 12bc, 24c; TG 8",
        ],
    },
    {
        stt: 608,
        noi_dung: "Khi con giúp kẻ khác quên bản thân để hiến mình, con giúp họ làm hình ảnh Chúa hiện tỏ nơi họ.",
        chuong: 26,
    },
    {
        stt: 609,
        noi_dung: "Chính lúc hiến mình, con tập biết hiến mình. Vì nói hiến mình dễ, thực sự hiến mình khó; giảng khuyên hiến mình dài, tình nguyện hiến mình ngắn; hô hào hiến mình đông, bền đỗ hiến mình hiếm.",
        chuong: 26,
    },
    {
        stt: 610,
        noi_dung: "Mỗi dịp hiến mình trong ng ày không phải là một khổ đau, mất mát, nhưng là một đề nghị của Chúa để con được lớn lên. thì nó vẫn trơ trọi một mình; còn nếu chết đi, nó mới sinh được nhiều hạt khác.",
        chuong: 26,
        loi_chua: [
            "Ga 12,24: Thầy bảo thật anh em, nếu hạt lúa gieo vào lòng đất mà không chết đi,",
        ],
        tham_chieu: [
            "1Cr 15,36",
        ],
    },
    {
        stt: 611,
        noi_dung: "Con phải hiện diện trên đường hy vọng dâng hiến và mời gọi kẻ khác dâng hiến, đó là cách con phục vụ họ tốt đẹp hơn cả: con giúp họ nên giống hình ảnh Thiên Chúa trong Đ ức Kitô. người, nhưng là nâng cao nhân phẩm và sự hiệp nhất huynh đệ, bằng cách dạy những chân lý tôn giáo và luân lý mà Chúa Kitô đã soi s áng bằng ánh sáng của Người, và như thế, dần dần họ mở rộng con đường hoàn hảo hơn dẫn về Thiên Ch úa. Như v ậy con ng ười được tr ợ gi úp để đạt t ới ph ần rỗi, nhờ y êu mến Thiên Chúa và cận nhân; và như vậy, bắt đầu toả sáng mầu nhiệm Chúa Kitô, trong Ng ười xuất hiện con ng ười mới đã tạo dựng theo hình ảnh Thiên Chúa, và trong Người tình thương của Thiên Chúa được biểu lộ.",
        chuong: 26,
        loi_chua: [
            "TG 12d: C ác môn đệ kh ông tìm ti ến bộ và thịnh vượng thuần v ật chất cho con",
        ],
        tham_chieu: [
            "MV 22d, 24c",
        ],
    },
    {
        stt: 612,
        noi_dung: "Đâ y là bằng chứng để ta biết được lòng mến: là Đ ấng ấy đã thí mạng mình vì ta. Và ta, ta cũng phải thí mạng mình vì anh em (1Ga 3,16). Con hỏi Cha: Đâ u là mức độ dấn thân? Hãy làm như Chúa Giêsu: Thí mạng. Nếu con tuyên bố rùm beng, hoạt động khơi khơi, sống đạo lè phè, con sợ cực, sợ nghèo, sợ tù, sợ chết… N ếu con d ấn thấn lối: Cứu viện cho ng ười thắng trận, thì th ôi nên dẹp tiệm. Đó  là dấn thân trá hình, dấn thân thương mãi. mình cho đoàn chiên.",
        chuong: 26,
        loi_chua: [
            "Ga 10,11: Tôi chính là Mục Tử nhân lành. Mục Tử nhân lành hy sinh mạng sống",
        ],
        tham_chieu: [
            "Ga 15,13; Pl 2,30; 1Tx 2,7-8",
        ],
    },
    {
        stt: 613,
        noi_dung: "Con không muốn làm một mình, con muốn làm cho người khác cũng biết làm, Con không muốn dâng hiến một mình, con muốn người khác cũng dâng hiến, Con không muốn tạo cảm tình cho cá nhân con, con thúc đẩy người khác mở rộng vòng tình cảm đến anh em như một hòn đá tung xuống nước cứ gợn sóng tràn ra mãi. Đ ể lôi kéo họ ra khỏi chính mình, và trở nên con người như ý Chúa muốn từ đời đời.",
        chuong: 26,
    },
    {
        stt: 614,
        noi_dung: "Tại sao con cảm thấy đời mình lạc lõng, dở dang? Tại sao con thấy con đang xao xuyến; ngột ngạt? Vì con chưa đánh tan mây mù dày đặc đang che khuất hình ảnh Chúa trong con.",
        chuong: 26,
    },
    {
        stt: 615,
        noi_dung: "Những ng ười kh ác quanh con, c ả nh ân lo ại đau th ương, kh ấp kh ểnh tr ên đường m ịt mù… Đ ời con phải là hiến dâng, Đ ể bắt nhịp cầu hy vọng, Đ ể đưa họ đến với Chúa là cùng đích, là tình yêu, là tất cả. Bên Chúa, nhân loại không còn ai xa lạ, nhưng tất cả là anh em con. nô lệ của mọi người, hầu chinh phục thêm được nhiều người. bằng chính tình bác ái mà Thiên Chúa đã yêu chúng ta và muốn chúng ta cũng thương yêu nhau bằng tình bác ái đó. Bác ái Kitô giáo thực sự lan tràn tới mọi người không phân biệt chủng tộc, hoàn cảnh xã hội hay tôn giáo, bác ái không cầu mong m ột lợi ích hay m ột sự tri ân nào như Thiên Chúa đã yêu chúng ta bằng một tình yêu vô vị lợi, thì các tín hữu cũng phải lấy tình bác ái mà lo lắng cho con người, bằng cách yêu mến họ với cùng một ý hướng như khi Chúa tìm kiếm con người.",
        chuong: 26,
        loi_chua: [
            "1Cr 9,19: T ôi là một người tự do, kh ông lệ thuộc vào ai, nh ưng tôi đã trở thành",
            "TG 12a: Sự hiện diện của các Kitô hữu giữa các nhóm người phải được tác động",
        ],
        tham_chieu: [
            "Rm 6,13",
            "GH 10a; MV 92cd; NK 1b",
        ],
    },
    {
        stt: 616,
        noi_dung: "Có người nhắm mắt ngoảnh mặt để khỏi nhìn, c ó người bịt tai gi ả điếc để đừng nghe. Nhưng sự thật vẫn là sự thật. Con hãy nhìn rõ, nghe kỹ, học với thực tế, học với người khác. Thực tế là bài học, người anh em là thầy con. chúng thấy, tai chúng nghe.",
        chuong: 26,
        loi_chua: [
            "Mt 13,15a: L òng d ân n ày đã ra chai đá: ch úng đã b ịt tai nh ắm m ắt, k ẻo m ắt",
        ],
    },
    {
        stt: 617,
        noi_dung: "Các nhà xã hội học, tâm lý học, phân tích theo chuy ên môn, làm nhiều thống kê công phu. Con đừng xem th ường những công trình khoa h ọc ấy, nhưng con h ãy tiếp thu c ác câu hỏi họ nêu ra và đọc với đôi mắt đức tin.",
        chuong: 26,
    },
    {
        stt: 618,
        noi_dung: "Con gặp trăm ngàn thanh thiếu niên, lây lất trên đường, không lối thoát. Họ bàn tán bất tận về mộng xây dựng một xã hội mới, một con người mới, nhưng họ đã gặp xì-ke, bạo động, trụy lạc, dối trá, chán nản… H ọ cần con, h ọ kêu con: ti ếng kêu của người chết đuối, tiếng van của người ngộp thở. phương diện giáo dục cho mọi người, nhưng vẫn còn rất nhiều trẻ em và thanh thiếu niên chưa được hưởng sử huấn luyện căn bản và biết bao người khác vẫn còn thiếu một nền giáo dục thích hợp để phát huy chân lý và bác ái.",
        chuong: 26,
        loi_chua: [
            "GD Lời mở đầu c: Mặc dù đã có nhiều nỗ lực lớn lao để đem lại những lợi ích về",
        ],
        tham_chieu: [
            "MV 7a; LM 6c; TĐ  12",
        ],
    },
    {
        stt: 619,
        noi_dung: "Đâ y là mấy hạng dấn thân con nên biết: Có người sau một thời gian vẫy vùng dấn thân, đâm ra hoài nghi giá trị cuộc đấu tranh, rồi rút lui về nhà thờ, tìm nguồn an ủi, sợ bỏ quên Chúa, tôi không dấn thân. Có người dấn tnân cả xác lẫn hồn vào cuộc đấu tranh, v à để rảnh tay chém chặt, họ buông thả luôn cả Thiên Chúa. Trước họ nghĩ rằng: Đ ể thành công rồi sẽ nhớ Chúa, sau cùng họ nói: Đâ y là việc đời, tôi dấn thân, Chúa không liên hệ, mời Chúa đứng ngoài. Có người không chịu đào tẩu khỏi chiến trường mà cũng không phản bội sứ mạng Chúa trao, họ xác tín chỉ thắng trận với Chúa Kitô; vì thế với tất cả tâm hồn, họ nói: Tôi dấn thân với Chúa Kitô. quanh, chúng ta h ãy cởi bỏ mọi gánh nặng và tội lỗi đang trói buộc mình, v à hãy ki ên trì ch ạy trong cu ộc đua d ành cho ta, m ắt h ướng v ề Đ ức Gi êsu l à Đ ấng khai m ở và kiện toàn lòng tin. Chính Ng ười đã khước từ niềm vui d ành cho mình, m à cam ch ịu khổ hình th ập giá, chẳng nề chi ô nhục, và nay đang ngự bên hữu ngai Thi ên Chúa. Anh em h ãy tưởng nhớ Đ ấng đã cam ch ịu để cho những người tội lỗi chống đối mình như thế, để anh em kh ỏi sờn lòng nản chí. nỗ lực và trung thành chu toàn những bổn phận trần thế của họ dưới sự hướng dẫn c ủa tinh th ần Ph úc âm. Th ực sai l ầm cho nh ững ai bi ết r ằng ch úng ta không có một quê hương trường tồn ở trần thế nhưng phải kiếm tìm m ột quê hương hậu lai, mà lại tưởng rằng mình có thể xao lãng các bổn phận trần gian, như thể là không nhận thấy chính đức tin buộc phải chu toàn các bổn phận đó hoàn hảo hơn, mỗi người tùy theo ơn gọi của mình. Ng ược lại, cũng sai l ầm không kém đối với những ai nghĩ rằng có thể dấn thân hoàn toàn vào các sinh hoạt trần thế như thể các sinh hoạt ấy hoàn toàn xa lạ với đời sống tôn giáo, vì cho rằng đời sống tôn giáo chỉ hệ tại những hành vi ph ụng tự và một vài bổn phận luân lý phải chu toàn. Sự phân ly giữa đức tin mà họ tuyên xưng và cuộc sống thường nhật của nhiều người phải kể vào số những sai l ầm trầm trọng nhất của thời đại chúng ta… Theo g ương Chúa Giêsu đã sống như một người thợ, các Kitô hữu hãy vui m ừng vì c ó thể thi h ành mọi sinh ho ạt trần thế mà đồng thời có thể liên kết trong một tổng hợp sống động duy nhất, các cố gắng nhân lo ại, gia đình, ngh ề nghi ệp, khoa h ọc hay k ỹ thu ật v ới c ác gi á tr ị t ôn giáo. Dưới sự điều hướng tối cao của các giá trị tôn giáo này, mọi sự được quy hướng về vinh quang Thiên Chúa.",
        chuong: 26,
        loi_chua: [
            "Dt 12,1-3: Phần chúng ta được ngần ấy nhân chứng đức tin nh ư đám mây bao",
            "MV 43a: Công đồng khuyến khích các Kitô hữu, công dân của cả hai đô thị, hãy",
        ],
        tham_chieu: [
            "MV 10a",
        ],
    },
    {
        stt: 620,
        noi_dung: "Con có phải là hạng công giáo ngoan đạo, sống quanh quẩn phòng thánh và đã hoá nên nửa thần, nửa thánh, nửa người không? Hãy theo Chúa Giêsu: Thiên Chúa thật và người thật đến với trần gian. Xin con hãy nhập tịch người lại. thăm viếng cô nhi quả phụ lâm cảnh gian truân, và giữ mình cho kh ỏi mọi vết nhơ của thế gian.",
        chuong: 26,
        loi_chua: [
            "Gc 1,27: Có lòng đạo đức tinh tuyền và không tỳ ố trước mặt Thiên Chúa Cha, là",
        ],
    },
    {
        stt: 621,
        noi_dung: "Đ ừng để thiên hạ xây dựng thế giới này mỗi ngày mà con không hay biết, không khám phá, không thao thức, không nhúng tay vào. Chúa đã cứu chuộc con, và đặt con vào thế gian trong thế kỷ này, thập niên này, môi trường này. Đ ặt con, chứ không phải cục đá! Khác nhau lắm! Đ ừng làm công giáo bù nhìn. riêng, và trong nhi ệm vụ đó, được hướng dẫn nhờ ánh sáng Phúc âm và theo tinh th ần c ủa Gi áo h ội, v ới b ác ái Kit ô gi áo th úc đẩy, h ọ ph ải tr ực ti ếp v à cương quy ết h ành động. V ới t ư c ách l à c ông d ân, h ọ ph ải đem kh ả n ăng chuyên môn cùng với tinh thần trách nhiệm để cộng tác với các công dân khác. Họ phải tìm sự công chính nước Thiên Chúa ở mọi nơi và trong mọi sự.",
        chuong: 26,
        loi_chua: [
            "TĐ  7e: Gi áo dân phải đảm nhận việc canh t ân trật tự trần thế như là nhiệm vụ",
        ],
        tham_chieu: [
            "MV 40b, 57a; GM 19b",
        ],
    },
    {
        stt: 622,
        noi_dung: "Sự ly dị giữa cuộc sống đạo ở nhà thờ và ngoài xã hội, là gương xấu tai hại nhất trong thời đại chúng ta. Bạn thử cho t ôi thấy thế nào là tin m à không hành động, còn tôi, tôi sẽ hành động để cho b ạn thấy thế nào là tin. B ạn tin r ằng chỉ có một Thiên Chúa duy nhất. Bạn làm phải. Cả ma quỷ cũng tin như thế, và chúng run sợ. Hỡi người đầu óc rỗng tuếch, bạn có muốn biết rằng đức tin kh ông có hành động là vô dụng không?",
        chuong: 26,
        loi_chua: [
            "Gc 2,18-20: Có người sẽ bảo: Bạn, bạn có đức tin; c òn tôi, tôi có hành động.",
        ],
        tham_chieu: [
            "Gl 5,6",
        ],
    },
    {
        stt: 623,
        noi_dung: "Một cuộc cách mạng thật sự, khả dĩ canh tân tất cả, từ nơi sâu thẳm của lòng người đến toàn bộ cơ cấu chính trị, kinh tế, xã hội… c ủa thế giới, không thể thực hiện ngoài con người, ngoài Thiên Chúa, nhưng chỉđược thực hiện bởi con người, trong Chúa Kitô, với Chúa Kitô. Con hãy dấn thân vào mặt trận cách mạng thế giới ấy. dưới quyền một thủ lãnh là Đ ức Kitô.",
        chuong: 26,
        loi_chua: [
            "Ep 1,10: Đó  là đưa thời gian tới hồi viên mãn là quy tụ muôn loài trong trời đất",
        ],
    },
    {
        stt: 624,
        noi_dung: "Lâu nay cha thấy con đi kề bên Chúa mà không thấy Chúa, không gặp Chúa, không suy tư với Chúa, không đối thoại với Chúa, không hành động với Chúa. Con không an vui trong t âm hồn, và dấn thân một mình, ngoài Chúa. Con đã mời Chúa lui về nhà thờ!",
        chuong: 26,
    },
    {
        stt: 625,
        noi_dung: "Người Kitô hữu dấn thân khác với người ngoài vì nhìn mục đích và phương tiện với cái nhìn của đức tin: Mục đích: Vì Chúa Kitô, con mến Chúa trong anh em. Phương tiện: Hãy nhớ rằng, qua các tổ chức, các cơ cấu, con nhắm con người hợp tác chân thành, chứ không giựt giây họ, yêu thương chứ không thù ghét, không vụ lợi, không làm loạn. thứ hai, cho nên trước hết phải quan tâm đến sự sống của họ và quan tâm đến những phương tiện cần thiết giúp họ sống một đời sống xứng đáng, chứ đừng bắt chước người giàu có kia đã không săn sóc gì tới Lagiarô bất hạnh.",
        chuong: 26,
        loi_chua: [
            "MV 27a: M ỗi người đều phải coi ng ười đồng loại không trừ một ai nh ư cái tôi",
        ],
        tham_chieu: [
            "MV 26c, 63a, 64, 67c; TĐ  4c, 8e",
        ],
    },
    {
        stt: 626,
        noi_dung: "Con phải chọn cách dấn thân, căn cứ vào khả năng của con, nhu c ầu của anh em, m ôi trường con đang lặn lội. Con không làm được tất cả, nhưng làm tất cả những gì con l àm được, vì làm với đức tin. đức tin hành động nhờ đức ái. ơn lãnh đã lãnh được do Ch úa ban; th êm vào đó là ý thức mạnh mẽ về đức công bình và tình yêu chân thành đối với tha nhân. Đ ức tin sống động ấy cũng phát sinh nhi ều tổ chức nhằm xoa d ịu sự cùng khổ tinh th ần và thể xác, giáo dục tuổi trẻ, cải tiến những hoàn cảnh xã hội và cuộc sống thành nhân đạo hơn và củng cố nền hoà bình thế giới.",
        chuong: 26,
        loi_chua: [
            "Gl 5,6: Trong Đ ức Kitô Giêsu, cắt bì hay không cắt bì đều không có giá trị, chỉ có",
            "HN 23b: Đ ức tin vào Chúa Kitô làm trổ sinh những lời ngợi khen và cảm tạ vì các",
        ],
        tham_chieu: [
            "GH 48b; DT 2e; TĐ  4bc",
        ],
    },
    {
        stt: 627,
        noi_dung: "Tông đồ đạo đức c ũng l à m ột l ối d ấn th ân, nh ưng c ác ho ạt động r ất đáng khen ấy, không miễn cho con khỏi dấn thân phục vụ anh em trong các việc trần thế, nơi mà Chúa Quan Phòng đặt để con. đủ của ăn hằng ngày, mà có ai trong anh em l ại nói với họ: Hãy đi bình an, mặc cho ấm và ăn cho no , nh ưng lại kh ông cho h ọ những thứ thân x ác h ọ đang cần, thì nào có ích lợi gì?",
        chuong: 26,
        loi_chua: [
            "Gc 2,15-16: Giả như có người anh em hay ch ị em không có áo che thân và không",
        ],
        tham_chieu: [
            "2Cr 12,14-15",
        ],
    },
    {
        stt: 628,
        noi_dung: "Sống đức tin, con sẽ nhìn đôi mắt Chúa Giêsu, con sẽ thấy chiều kích đời đời trong các biến cố. điều ta không thấy. Chúa là Đ ấng bao ph ủ mặt đất hướng dẫn, cố gắng nhận định đâu là những dấu chỉ thực về sự hiện diện hoặc ý định của Thiên Chúa trong m ọi biến cố, mọi yêu sách và ước vọng mà họ dự phần với những người đương thời. Thực vậy, đức tin lấy ánh sáng mới mà chiếu soi mọi sự và biểu lộ ý định của Thiên Chúa v ề thi ên ch ức to àn v ẹn c ủa con ng ười v à do đó h ướng d ẫn l ý trí t ới những giải quyết hoàn toàn nhân bản.",
        chuong: 26,
        loi_chua: [
            "Dt 11,1: Đ ức tin là bảo đảm cho những điều ta hy vọng, là bằng chứng cho những",
            "MV 11a: Dân Thiên Chúa, nhờ đức tin mà tin rằng mình được Thánh Thần Thiên",
        ],
        tham_chieu: [
            "Rm 8,5.14",
            "TĐ  4bc, 31d",
        ],
    },
    {
        stt: 629,
        noi_dung: "Khi theo dõi tin tức, con phải nhìn thâu qua con người và lịch sử và xác trín: Đâ y là tin tức của Nước Trời; rồi sau khi xếp báo lại, tắt Rađiô, Tivi, con sẽ cầu nguyện sốt sắng.",
        chuong: 26,
    },
    {
        stt: 630,
        noi_dung: "Sau những hàng chữ trên mặt báo, trong những hình ảnh trên truyền hình, qua những tin tức của làn sóng điện, con khám phá giá trị Phúc âm trong những biến cố, con vui mừng và hy vọng, trước những thuận lợi cũng như lo âu và sầu khổ, trước những trở ngại cho bước tiến của Dân Chúa trên đường về Đ ất hứa.",
        chuong: 26,
    },
    {
        stt: 631,
        noi_dung: "Chúng ta thường phân biệt đạo và đời, hồn và xác, nhưng các yếu tố ấy không thể tách rời nhau được: Chỉ có một cuộc sống, Chỉ có một lịch sử, Đ ạo đời, hồn xác đều liên hệ mật thiết. hành động là đức tin chết.",
        chuong: 26,
        loi_chua: [
            "Gc 2,26: Một thân xác không hơi thở là một xác chết, cũng vậy, đức tin không có",
        ],
    },
    {
        stt: 632,
        noi_dung: "Bí quyết để đọc xuyên qua các biến cố là lấy Phúc âm nuôi tâm hồn con; sự thông hiệp liên l ỉ v ới Ch úa Gi êsu s ẽ cho con c ó tinh th ần c ủa Ng ài: Ch úa nhìn tr ần gian th ế nào?Đ ức Chúa Cha đã yêu trần gian đến nỗi sai Con M ột Ngài xuống cứu trần gian (x. Ga 3,16). dưỡng bằng sự phù giúp thiêng liêng chung cho mọi tín hữu, nhất là bằng việc tham d ự tích c ực v ào Ph ụng v ụ. Ng ười gi áo d ân ph ải l àm th ế n ào để nh ờ những phương tiện ấy mà chu to àn nhiệm vụ trần thế trong nh ững hoàn cảnh thường xuyên của cuộc sống mà vẫn không tách đời sống mình khỏi sự kết hiệp với Chúa Kitô, nhưng càng kết hiệp mật thiết hơn chính khi thi h ành công việc của mình theo ý Thiên Chúa.",
        chuong: 26,
        loi_chua: [
            "TĐ  4a: Đ ời s ống k ết hi ệp m ật thi ết v ới Ch úa Kit ô trong Gi áo h ội được nu ôi",
        ],
        tham_chieu: [
            "MV 4a; TĐ  4c",
        ],
    },
    {
        stt: 633,
        noi_dung: "Mỗi giây phút, con đang thực hiện chương trình của Thiên Chúa trong lịch sử. nhân loại, hoặc nỗ lực vĩ đại của con ng ười vất vả qua c ác thế kỷ nhằm cải thiện hoàn cảnh sinh sống, tự nó vốn phù hợp với ý định của Thiên Chúa. Thực vậy, được tạo dựng giống hình ảnh Thiên Chúa, con người đã nhận mệnh lệnh chinh phục trái đất cùng tất cả những gì chứa đựng trong đó, cai qu ản vũ trụ trong công bình và thánh thiện và khi nhìn nhận Thiên Chúa là Đ ấng tạo dựng mọi loài, họ quy hướng về Người chính bản thân mình cũng như muôn vật: như thế, khi con người chinh phục tất cả thì danh Chúa được tôn vinh khắp địa cầu. Chuẩn bị lễ Hiện xuống mới trong Hội thánh",
        chuong: 26,
        loi_chua: [
            "MV 34a: Đ ối với các tín hữu, chắc chắn sinh hoạt cá nhân cũng như tập thể của",
            " ",
        ],
        tham_chieu: [
            "MV 67b; LM 5a",
        ],
    },
    {
        stt: 634,
        noi_dung: "Canh tân là trở về nguồn. Công thức canh tân: Làm cho người công giáo trở lại đạo Công giáo. Làm cho người Kitô hữu trở lại với Chúa Kitô. Mới nghe, con ngạc nhiên, nhưng ngầm nghĩ lại, con sẽ thấy đúng như vậy. Một câu nói của Gandhi nhi ều lần khiến ta suy ngh ĩ: Tôi mến Chúa Kitô, nhưng tôi không yêu người Kitô hữu, vì họ không giống Chúa Kitô.",
        chuong: 27,
    },
    {
        stt: 635,
        noi_dung: "Canh t ân kh ông ph ải ch ỉ đổi n ước m ã b ên ngo ài, đổi m ột s ố nghi th ức cho ngo ạn mục, đổi tên các ủy ban cho k êu hơn, đạp đổ cơ cấu cũ, dựng nên một số tổ chức mới, hội nghị, tuyên ngôn… Thánh Phaolô nói rõ: Anh em hãy cởi bỏ kiểu sống xưa kia, con người cũ đã ra hư hốt buông theo những đam mê lầm lạc. Hãy để Thần Khí canh tân đổi mới anh em u t ận trí khôn. Hãy mặc lấy người mới đã được tạo dựng nên theo Thiên Chúa, trọng công chính và thánh thiện bắt nguồn trong sự thật (Ep 4,22-24). không men. Qu ả v ậy, Đ ức Kit ô đã ch ịu hi ến t ế l àm chi ên l ễ V ượt Qua c ủa chúng ta. người phải tùy theo ho àn cảnh của mình m à cố gắng làm cho Gi áo hội, đang mang trên mình s ự khiêm tốn và hy sinh c ủa Chúa Kitô, mỗi ngày một thêm trong sạch và mới mẻ, cho t ới khi Ch úa Kitô cho trình di ện trước mặt mình Giáo hội vinh quang không một vết ố, nét nhăn.",
        chuong: 27,
        loi_chua: [
            "1Cr 5,7: Anh em h ãy lo ại b ỏ men c ũ để tr ở th ành b ột m ới, vì anh em l à b ánh",
            "HN 4b: Tất cả mọi người công giáo phải hướng đến sự hoàn thiện Kitô giáo, mỗi",
        ],
        tham_chieu: [
            "2Cr 5,17; Cl 3,9-10",
            "GH 7e; MV 21e; DT 2b; HN 7a",
        ],
    },
    {
        stt: 636,
        noi_dung: "Người ta th ường bảo: Hội thánh ù lỳ, cổ xưa, nặng nề cơ cấu, nên không lạ gì ph ải có khủng hoảng. Không đúng vậy đâu. Con đừng la l àng và đổ lỗi cho H ội thánh để miễn cho con x ét mình và suy nghĩ. Hội thánh là toàn thể dân Chúa, trong đó có con. Đâ y là nguyên do khủng hoảng: 1. Hạ giá việc cầu nguyện. 2. Không có tinh thần siêu nhiên, cũng nói cũng nghĩ như kẻ khác. 3. Không chấp nhận sự điên dại của Thánh giá. Kitô về Giáo hội chưa, để rồi hăng hái tiến hành việc canh tân cũng như cải tổ Giáo hội đúng như bổn phận đòi hỏi.",
        chuong: 27,
        loi_chua: [
            "HN 4b: Mọi người hãy kiểm điểm coi mình c ó trung thành với ý muốn của Chúa",
        ],
        tham_chieu: [
            "GH 7e, 15; MV 43b; DT 2b",
        ],
    },
    {
        stt: 637,
        noi_dung: "Nói đến canh tân, người ta đã hao tốn bao nhiêu giấy mực để viết đề tài trở về nguồn. Nói thừa rồi, con hãy làm! Các Kitô hữu từ đầu đã làm gì? Họ đã bịđánh động mãnh liệt bởi Chúc thư yêu thương của Chúa Giêsu, còn tươi rói trong con tim họ. Cuộc cách mạng tình thương ấy đã canh tân cả thế giới La-hy, biến đổi nó tận gốc rễ, đã lột xác con người cũ, để thay vào đó một mẫu người mới, một xã hội mới. một ai coi b ất cứ cái gì mình c ó là của riêng, nhưng đối với họ, mọi sự đều là của chung. Nh ờ quy ền n ăng m ạnh m ẽ Thi ên Ch úa ban, c ác T ông Đ ồ l àm chứng Chúa Giêsu đã sống lại. Và Thiên Chúa ban cho tất cả các ông dồi dào ân sủng. tâm hồn. Thật vậy, những ước vọng hiệp nhất bắt nguồn và chín mu ồi nhờ sự đổi mới tâm hồn, từ bỏ chính mình v à bác ái một cách hết sức quảng đại. Vì thế, phải nguyện xin Ch úa Thánh Thần ban cho ch úng ta ơn thành thật quên mình, khiêm nhượng và hiền hoà trong khi phục vụ, quảng đại trong tình huynh đệ đối với tha nhân.",
        chuong: 27,
        loi_chua: [
            "Cv 4,32-33: Các tín hữu thời bấy giờ đông đảo, mà chỉ có một lòng một ý. Không",
            "HN 7a: Không thể có phong trào hiệp nhất chính danh m à không có sự hoán cải",
        ],
        tham_chieu: [
            "Cv 2,44-47",
            "GH 7e, 15; DT 2a",
        ],
    },
    {
        stt: 638,
        noi_dung: "Tình yêu nhân loại giới hạn vào một nhóm người, tình yêu thần linh đón tiếp mọi người. Tình yêu nhân loại đáp trả sau, tình yêu thần linh tình nguyện đi trước. Tình yêu nhân loại kéo riêng về mình, tình yêu thần linh hợp nhất với kẻ khác. Tình yêu nhân loại chỉ phần nào động đến con người, tình yêu thần linh biến đổi cả con người. Một khi con ng ười được biến đổi, xã hội sẽ biến đổi, luật lệ sẽ biến đổi, liên lạc giữa người với người sẽ biến đổi: canh tân toàn diện. vang, không tự đắc, không làm điều bất chính, kh ông tìm t ư lợi, không nóng giận, không nuôi hận thù, không mừng khi thấy sự gian ác, nhưng vui khi thấy điều chân thật. Đ ức mến tha th ứ tất cả, tin t ưởng tất cả, hy v ọng tất cả, chịu đựng tất cả. trong chính Gia Đ ình công giáo để đời sống của Giáo hội là chứng nhân trung thành và rõ rệt hơn về giáo lý và những định chế do Chúa Kitô truyền lại qua các Thánh Tông đồ.",
        chuong: 27,
        loi_chua: [
            "1Cr 13,4 -7: Đ ức m ến thì nh ẫn nh ục, hi ền h ậu, kh ông ghen t ương, kh ông v ênh",
            "HN 4e: C ần thành thật và chú ý cân nhắc những gì ph ải canh t ân và thực hiện",
        ],
        tham_chieu: [
            "GH 8c, 15; MV 21e, 43b, 77a; LM 1,12d; Đ T Lời mở đầu; HN 4b,6",
        ],
    },
    {
        stt: 639,
        noi_dung: "Con hãy về tận nguồn là Thiên Chúa để canh t ân. Thánh kinh n ói về Thiên Chúa làm sao? Thánh Gioan định nghĩa: Thiên Chúa là tình yêu (1Ga 4,8). Chúa Giêsu nói: Ta và Cha Ta là một (Ga 10,30). Chúa muốn con canh t ân như ý Chúa: Như Ta đã yêu mến các con, c ác con h ãy yêu mến nhau (Ga 13,34).  Đ ể hết thảy chúng nên một, cũng như, lạy Cha, Cha ở trong con và con ở trong Cha (Ga 17,21). Phúc âm, thì càng cổ võ và thực hiện sự hiệp nhất các Kitô hữu cách hữu hiệu hơn. Càng kết hiệp mật thiết với Chúa Cha, Chúa Con và Chúa Thánh Thần thì họ càng dễ dàng thắt chặt tình tương thân tương ái với nhau hơn.",
        chuong: 27,
        loi_chua: [
            "HN 7c: Hết mọi Kitô hữu hãy nhớ luôn là càng cố gắng sống trong sạch hơn theo",
        ],
        tham_chieu: [
            "MV 21e, 38a; LM 9c; TG 15b",
        ],
    },
    {
        stt: 640,
        noi_dung: "Phải canh tân bao lâu? - Phải luôn luôn khởi sự lại, - Phải luôn luôn tu chỉnh thêm. Con đừng an nghỉ, bao lâu hôm nay con chưa tiến hơn hôm qua một bước trong sự hiệp nhất với Chúa. Con phải đinh minh rằng, dừng lại là khởi sự thụt lùi xuống dốc, khởi sự thoái hoá. táng v ới Ng ười. B ởi th ế, c ũng nh ư Ng ười đã được s ống l ại t ừ c õi ch ết nh ờ quyền n ăng vinh hi ển c ủa Ch úa Cha, thì ch úng ta c ũng được s ống m ột đời sống mới. lịch sử nhân loại, khởi đầu từ khi thế giới khai nguyên và sẽ kéo dài đến ngày cuối cùng như lời Chúa phán. Dấn thân vào cuộc chiến này, con ng ười phải luôn luôn chiến đấu để gắn bó với sự thiện và chỉ tìm được sự thống nhất trong chính mình sau khi hết sức cố gắng với sự trợ giúp của ơn Chúa.",
        chuong: 27,
        loi_chua: [
            "Rm 6,4: Vì được dìm v ào trong c ái chết của Người, chúng ta đã cùng được mai",
            "MV 37b: Một cuộc chiến cam go chống lại quyền lực bóng tối tiếp diễn suốt trong",
        ],
        tham_chieu: [
            "1Tx 4,1",
            "GH 7g, 8c; MV 13b, 21e",
        ],
    },
    {
        stt: 641,
        noi_dung: "Con hỏi phải canh tân bản thân con đến mức độ nào? Cha muốn con canh t ân đến mức độ sung m ãn của Chúa Kitô theo tinh th ần Thánh Phaolô, nghĩa là đến độ không thể thêm gì v ào trong con, v à cũng không thể lấy bớt gì c ủa con được, mà sự giàu có của con là chính Chúa Giêsu. nhận biết Con Thiên Chúa, tới tình trạng con người trưởng thành, tới tầm vóc viên mãn của Đ ức Kitô.",
        chuong: 27,
        loi_chua: [
            "Ep 4,13: Cho đến khi tất cả chúng ta đạt tới sự hiệp nhất trong đức tin và trong sự",
        ],
        tham_chieu: [
            "Rm 12,2",
        ],
    },
    {
        stt: 642,
        noi_dung: "Con phải canh tân tâm hồn sao cho quảng đại đơn sơ đối với Chúa: Chúa muốn gì, con cũng cho hết, và đừng quên điểm thứ hai: Chúa cho gì con cũng nhận hết. là của con; và con được tôn vinh nơi họ.",
        chuong: 27,
        loi_chua: [
            "Ga 17,10: Tất cả những gì của con đều là của Cha, tất cả những gì của Cha đều",
        ],
        tham_chieu: [
            "Lc 15,31",
        ],
    },
    {
        stt: 643,
        noi_dung: "Khi con t ật bệnh, cha mẹ tiếp máu chuyển sang cho con, để đổi mới con, l àm cho con sống lại tươi tắn hồng hào hơn. Con chỉ canh t ân được đời sống con, canh t ân Hội thánh, nếu con li ên lỉ chuyển máu Chúa vào huyết quản, vào tim con, thay thế máu xấu của con. thế nào, thì kẻ ăn tôi, cũng sẽ nhờ tôi mà được sống như vậy.",
        chuong: 27,
        loi_chua: [
            "Ga 6,57: Như Chúa Cha là Đ ấng hằng sống đã sai tôi, và tôi sống nhờ Chúa Cha",
        ],
        tham_chieu: [
            "Ga 15,5-6",
        ],
    },
    {
        stt: 644,
        noi_dung: "Mỗi ngày báo chí chạy bằng tít lớn những câu chuyện giật gân, những biến cố bùng nổ giữa loài người. Con phải hiện diện, phải hồi hộp thao thức với nhân loại. Những thời triệu ấy thúc đẩy con x ây dựng một xã hội mới mà báo chí kh ông săn tin nổi: Xây dựng nước Thiên Chúa, ngay từ trần gian, với phương tiện của trần gian. chủ trương một thư luân lý duy c á nhân mà không lưu tâm hoặc không màng chi tới diễn tiến thời cuộc. Bổn phận công bình v à bác ái được chu to àn mỗi ngày một hơn là do mỗi người biết, tùy theo những khả năng của mình và nhu cầu của kẻ khác mà mưu ích chung, b ằng cách cổ võ và trợ giúp những định chế công hay tư nhằm cải thiện những điều kiện sống của con người.",
        chuong: 27,
        loi_chua: [
            "MV 30a: Hoàn cảnh biến đổi sâu rộng và nhanh chóng đòi hỏi cấp bách dừng ai",
        ],
        tham_chieu: [
            "MV 4a, 21cde; LM 3",
        ],
    },
    {
        stt: 645,
        noi_dung: "Thế kỷ nào cũng có những biến cố Phúc âm với những người Chúa Quan Phòng, ban cho thế giới, cho lịch sử: Bênêđitô, Augustinô, Phanxicô, Bênađô, Vincentê, Têrêxa Hài Đ ồng… V à mỗi lần như vậy c ác ngài lại khám phá một khiá cạnh mới mẻ, th ổi một luồng sinh khí mới của Phúc âm đáp lại đòi hỏi của thời đại.",
        chuong: 27,
    },
    {
        stt: 646,
        noi_dung: "Mỗi ngày Phúc âm hoá lại trí óc và quả tim con, b ằng cách đọc, suy ng ắm, say s ưa uống lấy lời hằng sống, để từ từ Phúc âm thấm nhuần sâu xa vào mọi tế bào, mọi thớ thịt của con. Đó  là canh tân, cách mạng chắc chắn nhất. như người khôn xây nhà trên đá. Dù mưa sa, n ước cuốn, hay b ão táp ập vào, nhà ấy cũng không sụp đổ, vì đã xây trên nền đá. Cậy, Mến để trong việc trau dồi các nhân đức ấy, họ đắc thủ cho bản thân một tinh thần cầu nguyện, họ củng cố bảo vệ ơn thiên triệu của họ, họ kiên cường các nhân đức khác và lớn lên trong nhi ệt tâm chinh ph ục mọi người về Chúa Kitô.",
        chuong: 27,
        loi_chua: [
            "Mt 7,24-25: Vậy ai nghe những lời Thầy nói đây mà đem ra thực hành, thì ví được",
            "Đ T 8b: C ác chủng sinh ph ải học sống theo Ph úc âm, đứng vững trong đức Tin,",
        ],
        tham_chieu: [
            "GH 15, 21a; LM 13b; HN 7c",
        ],
    },
    {
        stt: 647,
        noi_dung: "Với tất cả nỗ lực canh tân của chúng ta, Với tất cả sách vở, tổ chức, ủy ban, hoạt động, hy sinh, Với tất cả con người, cơ khí, nhà máy, phi thuyền, vệ tinh, khoa học… Chúng ta sẽ đi về đâu? Đ ời chúng ta có ý nghĩa gì? Ai giải đáp được? Nếu chúng ta kh ông nhìn l ên Chúa, là nguồn hy v ọng cho đời ta lu ôn luôn mới mẻ an vui. Chúa hằng sống, Đ ấng cứu độ mọi người, nhất là các tín hữu. câu hỏi chỉ thấy lờ mờ. Bởi vì c ó những lúc, nhất là trong nh ững biến cố lớn lao của cuộc sống, không ai có thể hoàn toàn tránh được câu hỏi nói trên. Chỉ một mình Thi ên Chúa là Đ ấng kêu gọi con ng ười suy ngh ĩ sâu xa h ơn và tìm hiểu khiêm tốn hơn mới đem lại được câu giải đáp hoàn toàn và hết sức chắc chắn.",
        chuong: 27,
        loi_chua: [
            "1Tm 4,10: Ch úng ta ph ải vất vả, phải chiến đấu, bởi đã đặt hy v ọng vào Thiên",
            "MV 21d: M ỗi người vẫn còn là một câu hỏi chưa giải đáp cho chính mình, m ột",
        ],
        tham_chieu: [
            "MV 3a, 41a; TĐ  7d; NK 1c",
        ],
    },
    {
        stt: 648,
        noi_dung: "Luôn bắt đầu lại, luôn thăng tiến bản thân. Đ ừng vội dừng chân, an nghỉ nếu mỗi ngày của ta không phải là một bước tiến lên trong sự kết hiệp với Thiên Chúa… H ãy biến đời con thành một cuộc leo núi. chúng tôi có tiêu tan đi, thì con ng ười bên trong c ủa chúng tôi ngày càng đổi mới. Th ật v ậy, m ột ch út gian tru ân t ạm th ời trong hi ện t ại s ẽ mang l ại cho chúng ta cả một khối vinh quang vô tận, tuyệt vời.",
        chuong: 27,
        loi_chua: [
            "2Cr 4,16 -17: Chúng tôi kh ông ch án nản. Tr ái lại, d ù con ng ười bên ngo ài c ủa",
        ],
    },
    {
        stt: 649,
        noi_dung: "Kể từ hôm nay, từ nét mặt, cử chỉ con, từ sự thinh lặng, hành động con, từ quả tim, tâm hồn con, từ lối sống, cách chết của con, phải toả ra ánh sáng Chúa hiện diện trong con, qua những nơi con đi, và những người con gặp. những công việc tốt đẹp anh em l àm, mà tôn vinh Cha c ủa anh em, Đ ấng ngự trên trời.",
        chuong: 27,
        loi_chua: [
            "Mt 5,16: Ánh s áng c ủa anh em ph ải chi ếu gi ãi trước m ặt thi ên h ạ, để h ọ th ấy",
        ],
    },
    {
        stt: 650,
        noi_dung: "Nếu chỉ giữ đạo, con chưa canh tân. Ma quỷ muốn đuổi Chúa ra khỏi thế giới và lôi thế giới ra khỏi Chúa. Con phải đem Chúa đến cho thế giới và đưa thế giới về với Chúa. đưa người ấy trở về, thì anh em hãy biết rằng: kẻ nào làm cho một tội nhân bỏ đường lầm lạc mà trở về, thì c ứu được linh h ồn ấy khỏi chết và che l ấp được muôn vàn tội lỗi của mình.",
        chuong: 27,
        loi_chua: [
            "Gc 5,19-20: Thưa anh em, nếu có người nào trong anh em lạc xa chân lý và có ai",
        ],
        tham_chieu: [
            "1Ga 4,3-4",
        ],
    },
    {
        stt: 651,
        noi_dung: "Vì một lý tưởng, người ta có thể hy sinh t ất cả. Muốn phục vụ công ích, phục vụ nhân loại thực sự, một Kitô hữu, mỗi cộng đoàn phải sống vì một lý tưởng: tin ở Thiên Chúa. Thiên Chúa dùng để cứu độ bất cứ ai có lòng tin, trước là người Do-thái, sau là người Hy-lạp. Vì trong Tin M ừng, sự công chính của Thiên Chúa được mặc khải, nhờ đức tin để đưa đến đức tin, nh ư có lời chép: Người công chính nhờ đức tin sẽ được sống.",
        chuong: 27,
        loi_chua: [
            "Rm 1,16 -17: T ôi kh ông h ổ th ẹn vì Tin M ừng. Qu ả th ế, Tin M ừng l à s ức m ạnh",
        ],
        tham_chieu: [
            "Dt 11,8-10",
        ],
    },
    {
        stt: 652,
        noi_dung: "Hàng rào kiên cố nhất không phải là chiến lũy, không phải là hàng rào điện tử, nhưng là hàng rào hờ hững của con: Ai ch ết mặc ai! Ai đói khổ mặc ai! S ụp đổ, thoái hoá cũng mặc! Như thế được rồi! làm sao vượt nổi! người này, ông tránh qua bên kia mà đi. Rồi cũng thế, một thầy Lê-vi đi tới chỗ ấy, cũng thấy, cũng tránh qua bên kia mà đi. Nhưng một người Sa-ma-ri kia đi đường, tới ngang chỗ người ấy, cũng thấy, và chạnh lòng thương.",
        chuong: 27,
        loi_chua: [
            "Lc 10,31-33: Tình cờ, có thầy tư tế cũng đi xuống trên con đường ấy. Trông thấy",
        ],
    },
    {
        stt: 653,
        noi_dung: "Canh tân xã hội bằng con người đã được canh tân trung thực theo Phúc âm. Đ ức tin sẽ đem lại một giá trị mới cho công việc bổn phận. Người ta kh ông biết rõ họ, không nghe họ nói, nhưng người ta c ông nhận có sự gì đổi mới, vì tự nhiên thấy nếp sống đẹp hơn, bầu không khí phảng phất hương vị mới lạ. hiệp nhất của mình ở mọi nơi, do đó công việc mà gia đình nhân loại phải bắt tay vào là xây dựng một thế giới thực sự nhân bản hơn cho tất cả mọi người ở mọi nơi. Công việc này chỉđược hoàn thành cách tốt đẹp nếu tất cả mọi người đều cải tạo tâm hồn để hướng về hoà bình đích thực. Như thế, sứ điệp Phúc âm phụ họa với những khát vọng và cố gắng cao c ả của nhân loại mới rực sáng lên ở th ời đại ch úng ta b ằng lu ồng s áng m ới, khi c ông b ố ph úc cho nh ững người kiến tạo hoà bình, vì họ sẽ được gọi là con Thiên Chúa (Mt 5,9).",
        chuong: 27,
        loi_chua: [
            "MV 77a: Gia đình nhân loại dần dần hiệp nhất với nhau v à đã ý thức hơn về sự",
        ],
        tham_chieu: [
            "GH 31b; MV 41b, 58d, 73e; TG 35",
        ],
    },
    {
        stt: 654,
        noi_dung: "Không phải bước nhanh, bước gấp, nhưng bước vững, con m ới tiến ra. Không phải hô hào thúc đẩy cho thế giới tiến, nhưng chính con phải khởi sự tiến lên.",
        chuong: 27,
    },
    {
        stt: 655,
        noi_dung: "Đ ức Phaolô VI đã vạch rõ muốn canh tân thế giới ngày nay phải loại bỏ: 1. Thuyết thế gian hoá: chỉ xem hạnh phúc trần thế là cùng đích, tôn thờ khoái lạc, của cải, quyền thế… 2. Thuyết tục hoá: không còn chấp nhận giá trị của hy sinh, khiêm nhượng, nhẫn nại… 3. Thuyết chính trị hoá: chủ trương chỉ có chính trị mới giải quyết được mọi vấn đề: Công lý, hoà bình phát triển. cũng v ậy, sẽ có những thầy d ạy giả hiệu, đó là những k ẻ sẽ lén lút đưa vào những tà thuyết dẫn tới diệt vong. Vì chối bỏ vị Chúa Tể đã chuộc họ về, họ sẽ mau chóng chuốc lấy hoạ diệt vong. Nhiều người sẽ học đòi các trò dâm đãng của họ, và vì họ, con đường sự thật sẽ bị phỉ báng. Vì tham lam, họ dùng lời lẽ gạt gẫm anh em để trục lợi. Án phạt họ đã sẵn sàng từ lâu, và hoạ diệt vong đã gần kề. nhìn nhận rằng tiến bộ của nhân loại có thể phục vụ hạnh phúc chân chính của con ng ười. Nh ưng Gi áo h ội kh ông th ể kh ông l ặp l ại l ời sau đây c ủa Th ánh Phaolô: Đ ừng theo th ói thế trần này (Rm 12,2) ngh ĩa là đừng buông mình ham chuộng hư danh và gian xảo khiến sinh hoạt con người vốn quy hướng về phụng sự Thiên Chúa và phục vụ con người, lại biến thành phương tiện phạm tội. Vậy, nếu có ai hỏi phải làm gì để vượt qua tình trạng khốn khổ ấy, người Kitô hữu sẽ tuyên xưng rằng: mọi sinh hoạt của con người hằng ngày đang lâm nguy vì kiêu ngạo và lòng vị kỷ thái quá, cần được thanh t ẩy và hoàn thiện nhờ thập giá và sự sống lại của Chúa Kitô.",
        chuong: 27,
        loi_chua: [
            "2Pr 2,1-3: Trong d ân cũng đã từng xuất hiện những ngôn sứ giả; giữa anh em",
            "MV 37cd: Bởi v ậy, Gi áo hội Ch úa Kitô tin t ưởng v ào ý định của Tạo hoá, v ẫn",
        ],
        tham_chieu: [
            "2Tm 3,1-5.14-17",
            "MV 19a, 20a, 21ab, 75e",
        ],
    },
    {
        stt: 656,
        noi_dung: "Cuộc đời con chỉ là một chuỗi liên tục: giờ ngủ, giờ thức dậy, giờ ăn, giờ học, giờ công sở, giờ lao tác, giờ giải trí, giờ tivi, giờ đọc báo. Nếu không có yếu tố gì thống nhất đời con, yếu tố cần thiết độc nhất, thì đời con thật là nhàm chán, rời rạc. Yếu tố ấy là Tình yêu Thiên Chúa. Đ ời con sẽ đổi mới hẳn. Tất cả hoạt động của con từ đây là những nét biểu lộ chứng tích của Thiên Chúa trong con. Đ ấng đã yêu mến tôi và hiến mạng vì tôi. gương Chúa Kitô trong việc chu toàn tác vụ: lương thực của Người là làm theo ý muốn của Đ ấng đã sai Người, để Người hoàn thành công việc của mình. … C ác linh mục phải thực hiện việc thống nhất đời sống của mình bằng cách kết hiệp với Chúa Kitô trong s ự nhận biết ý Chúa Cha v à trong s ự hiến thân cho đoàn chiên đã trao ph ó cho c ác ngài. Như thế, nhờ thi h ành những nhiệm vụ của Chúa Chiên nhân lành và trong chính khi thực thi bác ái mục vụ, các ngài tìm thấy mối dây hoàn thiện của Linh m ục ràng buộc đời sống và hoạt động của mình làm một.",
        chuong: 27,
        loi_chua: [
            "Gl 2,20b: Hiện nay tôi sống kiếp phàm nhân trong niềm tin vào Con Thiên Chúa,",
            "LM 14ab: Các Linh mục có thể kiến tạo sự thống nhất đời sống khi các ngài theo",
        ],
        tham_chieu: [
            "Ga 4,34",
            "MV 43a; LM 2e",
        ],
    },
    {
        stt: 657,
        noi_dung: "Con hãy hợp tác để tạo nên mùa xuân mới cho Hội thánh. Con hãy chuẩn bị các tâm hồn để đón nhận một lễ Hiện xống mới trong Hội thánh. Con hãy nên cánh cửa mở rộng để đón làn gió mát dịu ngập tràn, làm tươi sáng Hội thánh.",
        chuong: 27,
    },
    {
        stt: 658,
        noi_dung: "Nếu con kh ông ti ến l ên tr ên đường Hy v ọng, kh ông nh ắm đến s ự th ánh thi ện, con không phải là thế hệ trẻ, cũng chẳng phải là thế hệ già, con thuộc về thế hệ chết. Lạ lùng và hấp dẫn biết chừng nào! Giữa thời đại trụy lạc, khơi dậy một thế hệ thánh! Chúa muốn vậy, con không muốn sao? thực ra đã chết. Hãy tỉnh thức! Hãy củng cố chút sức còn lại đang suy tàn, vì Ta nhận thấy các việc của ngươi không được hoàn hảo trước mặt Thiên Chúa của Ta.",
        chuong: 27,
        loi_chua: [
            "Kh 3,1b-2: Ta bi ết các việc ngươi làm, biết ngươi được tiếng là đang sống, mà",
        ],
        tham_chieu: [
            "1Pr 1,13-16; 1Ga 3,3",
        ],
    },
    {
        stt: 659,
        noi_dung: "Canh tân đòi hỏi can đảm. Canh tân đòi hỏi quyết định: Trước bao nhiêu đau khổ, Trước tiếng gọi của Thiên Chúa, Con đừng hững hờ giả lơ, Hãy nên một tông đồ dấn thân cho công cuộc canh tân, dĩ nhiên với nhẫn nại, hy sinh và chỉ vì mến yêu Hội thánh. hổ thẹn vì tôi, người tù của Chúa; nhưng dựa vào sức mạnh của Thiên Chúa, anh hãy đồng lao cộng khổ với tôi để loan báo Tin Mừng. Người đã cứu độ và kêu g ọi ch úng ta v ào d ân th ánh c ủa Ng ười, kh ông ph ải vì c ông kia vi ệc n ọ chúng ta đã làm, nh ưng là do k ế hoạch v à ân sủng c ủa Người. Ân sủng đó, Người đã ban cho chúng ta từ muôn thuở trong Đ ức Kitô Giêsu.",
        chuong: 27,
        loi_chua: [
            "2Tm 1,8-9: Anh đừng hổ thẹn vì ph ải làm chứng cho Ch úa chúng ta, c ũng đừng",
        ],
    },
    {
        stt: 660,
        noi_dung: "Đ ộng lực và tác giả mọi cuộc canh t ân trong H ội thánh là Chúa Thánh Thần, Đ ấng canh tân mặt đất. Mọi cuộc canh t ân phải là một lễ Hiện xuống mới và không thể có lễ Hiện xuống mới ngoài Chúa Thánh Thần. Con không thể canh tân ngoài Chúa Thánh Thần. cho mỗi người mỗi cách, tuỳ theo ý của Người. tân v à d ẫn đưa Gi áo h ội để ho àn h ợp v ới Phu qu ân mình. Th ực v ậy, Ch úa Thánh Thần và Hiền thê nói với Chúa Giêsu rằng: Xin hãy đến (x. Kh 2,17).",
        chuong: 27,
        loi_chua: [
            "1Cr 12,11: Chính Thần Khí duy nhất ấy làm ra tất cả những điều đó và phân chia",
            "GH 4: Nhờ sức mạnh Phúc âm, Chúa Thánh Thần làm tươi trẻ, không ngừng canh",
        ],
        tham_chieu: [
            "Tt 3,5",
            "GH 13a; PV 43; MV 26d; TG 4; HN 2b",
        ],
    },
    {
        stt: 661,
        noi_dung: "Cập nhật hoá! Con ph ải cố gắng không ngừng để mỗi ngày con đổi mới, để máy thu thanh của thế gian b ắt được làn sóng Tin M ừng do con ph át ra, đem tiếng con vào tận mỗi tâm hồn, mỗi gia đình. Con hãy nên người của thời đại. vào cùng một công cuộc tông đồ của Giáo hội bằng nhiều hình thức và phương tiện khác nhau. Nh ững cộng tác viên phải luôn luôn thích nghi v ới những đòi hỏi mới của thời đại và không ngừng ra s ức phục vụ Chúa bởi biết rằng khó nhọc của mình không phải là uống phí trong Người (x. 1Cr 15,58).",
        chuong: 27,
        loi_chua: [
            "TĐ  33: Gi áo dân hãy chứng tỏ mình l à cộng tác viên của Chúa Giêsu, cộng tác",
        ],
        tham_chieu: [
            "MV 4a, 43b, 61c; DT 2e; TĐ  29b, 32a",
        ],
    },
    {
        stt: 662,
        noi_dung: "Canh tân là thích nghi Ph úc âm với thế giới hôm nay. Kh ông phải giảm bớt sức mạnh của Phúc âm, nhưng Hội thánh trình bày Phúc âm cho người thời đại với ngôn ngữ của thời đại, vì n ếu Hội thánh không đến với nhân loại, thì nh ân loại không đến với Hội thánh. mi-a, Giu -đê, C áp-pa-đô-ki-a, Pon -tô, v à A -xi-a, c ó ng ười l à d ân Phy -ghi-a, Pam-phy-li-a, Ai-cập, và những vùng Li-by-a giáp giới Ky-rê-nê; nào là những người từ Rô-ma đến đây; nào là người Do-thái cũng như người đạo theo; nào là người đảo Cơ-rê-ta hay ng ười Ả-rập, v ậy mà ch úng ta đều nghe h ọ dùng tiếng nói của chúng ta mà loan báo những kỳ công của Thiên Chúa! ngại cho vi ệc đối thoại với những người anh em. C ần phải trình b ày rõ ràng nguyên vẹn giáo lý. Không gì phá hoại hiệp nhất cho bằng chủ trương xu thời sai lệch, nó làm tổn thương giáo lý công giáo thuần tuý và làm lu mờ ý nghĩa đích thực và chắc chắn của những giáo lý này.",
        chuong: 27,
        loi_chua: [
            "Cv 2,9-11: Chúng ta đây, có người là dân Pác-thi-a, Mê-đi, Ê-lam, Mê-xô-pô-ta-",
            "HN 11a: Ph ương pháp v à c ách diễn tả Đ ức tin C ông giáo không được gây tr ở",
        ],
        tham_chieu: [
            "GH 36b; PV 9a; MV 21e, 44b, 76e; LM 4a",
        ],
    },
    {
        stt: 663,
        noi_dung: "Con quan t âm đến tất cả những gì li ên quan đến cuộc cách mạng thế giới hay l à con khép kín trong góc thế giới riêng của con? Với từng viên gạch nhỏ, con nh ẫn nại xây dựng một xã hội mới hay con c ứ chỉ trích theo lối tiêu cực cố hữu? Kitô hữu đừng buồn như những người không hy vọng",
        chuong: 27,
        loi_chua: [
            " ",
        ],
    },
    {
        stt: 664,
        noi_dung: "Người lạc đường, thất vọng; người tiến về đích, hy vọng; ở đó con sẽ gặp Thiên Chúa, Cha nhân từ đợi chờ con, con sẽ toại vọng. bao lâu các ông còn có ánh sáng, kẻo bóng tối bắt chợt các ông. Ai b ước đi trong bóng tối, thì kh ông biết mình đi đâu. Bao l âu các ông còn có ánh sáng, hãy tin vào ánh sáng, để trở nên con cái ánh sáng.",
        chuong: 28,
        loi_chua: [
            "Ga 12,35-36: Ánh sáng còn ở giữa các ông ít lâu nữa thôi. Các ông hãy bước đi,",
        ],
        tham_chieu: [
            "Ep 2,12; Dt 6,17-19",
        ],
    },
    {
        stt: 665,
        noi_dung: "Đ ối với người không biết đích, giờ chết là giờ thất vọng, vì mất tiền tài, mất khoái lạc, mất bằng hữu; trước mặt họ, toàn tối tăm, tư vô sụp đổ. Đ ối với con, cuối đường Hy vọng tràn ngập ánh sáng. để anh em ch ẳng hay bi ết gì, h ầu anh em kh ỏi buồn phiền như những người khác, là những người không có niềm hy vọng. người không những bịđau khổ và suy nh ược dần dần của thân xác hành hạ, mà hơn thế nữa, còn bị dày vò bởi nỗi lo sợ bị tiêu diệt đời đời. Theo bản năng con người có lý để ghê sợ cũng như từ chối sự hủy hoại hoàn toàn và sự tiêu diệt vĩnh viễn của bản thân… … Tr ước cái chết, óc tưởng tượng của con ng ười đành bất lực. Nhưng Giáo hội được mạc khải của Thiên Chúa dạy bảo, quả quyết rằng con người được Chúa dựng nên để đạt tới cứu cánh hạnh phúc sau những khổ cực trần thế này.",
        chuong: 28,
        loi_chua: [
            "1Tx 4,13: Thưa anh em, v ề những ai đã an giấc ngàn thu, chúng tôi không muốn",
            "MV 18ab: Tr ước cái chết, bí ẩn về thân phận con ng ười lên cao đến tột độ. Con",
        ],
        tham_chieu: [
            "Ga 14,28; Rm 8,11",
            "GH 48d; MV 10, 21c, 22e",
        ],
    },
    {
        stt: 666,
        noi_dung: "Con nhìn th ấy những giọt nước lã chã rơi trong m ột chiều đông. Mỗi ngày bao nhi êu người cùng vào cõi đời đời, như hạt nước kia kh ông ai để ý, và một giây phút nào đó, một hạt nước rơi ấy chính là con.",
        chuong: 28,
    },
    {
        stt: 667,
        noi_dung: "Người ta h ối tiếc và than van:  Đ ời tàn. Ngược lại, con ph ấn khởi và reo l ên: Niềm hy vọng hồng phúc và ngày trở lại của Chúa Giêsu Kitô sắp đến. Kìa xem nhà nông, họ kiên nhẫn chờ đợi cho đất trổ sinh hoa màu quý giá: họ phải đợi cả mưa đầu mùa lẫn mưa cuối mùa. Anh em c ũng vậy, hãy kiên nhẫn và bền tâm vững chí, vì ngày Chúa quang lâm đã gần tới.",
        chuong: 28,
        loi_chua: [
            "Gc 5,7-8: Thưa anh em, xin anh em c ứ kiên nhẫn cho t ới ngày Chúa quang l âm.",
        ],
        tham_chieu: [
            "Mt  25,21; 1Cr 15,16-19",
        ],
    },
    {
        stt: 668,
        noi_dung: "Người đời nói: Mỗi ngày gần mồ thêm một bước. Con phải nói: Mỗi ngày gần cửa Thiên đàng hơn một bước.",
        chuong: 28,
    },
    {
        stt: 669,
        noi_dung: "Người đời cho là chết, con phải kể là sống. Người đời gọi là hơi thở cuối cùng, con ph ải gọi là cuộc đời mới. Người đời gọi l à chấm dứt, nhưng đối với con l à khởi sự.",
        chuong: 28,
    },
    {
        stt: 670,
        noi_dung: "Con hãy sẵn sàng cầm đèn sáng đợi giờ Chúa trở lại, như Chúa muốn, nơi Chúa muốn, lúc Chúa muốn.",
        chuong: 28,
        loi_chua: [
            "Mt 25,13: Anh em hãy canh thức, vì anh em không biết ngày nào, giờ nào.",
        ],
        tham_chieu: [
            "Mt 24,42-43; Lc 17,26-30; 1Tx 5,4-8.23-24; Kh 3,3.19-21; 16,15",
        ],
    },
    {
        stt: 671,
        noi_dung: "Nghe tiếng cha m ẹ đến, đứa bé ở nội trú bỏ tất cả, không tiếc một cái gì để chạy theo cha mẹ. Con đừng dính bén bất cứ đồ vật gì ở nơi tạm trú này.",
        chuong: 28,
    },
    {
        stt: 672,
        noi_dung: "Biết trần gian l à nơi tạm trú, sao con c òn bo bo d ành cho được sở này, chức kia, ti ếc nuối chi ếc b àn, chiếc ghế…? Con s ẽ mang n ó v ào thiên đàng hưởng ph úc đời đời sao? Phi lý và điên khùng! lợi gì? Hoặc người ta sẽ lấy gì mà đổi mạng sống mình?",
        chuong: 28,
        loi_chua: [
            "Mt 16,26: Nếu người ta được cả thế giới mà phải thiệt mất mạng sống, thì nào có",
        ],
        tham_chieu: [
            "Lc 12,15-21; Cl 2,20; Tt 2,12-13; Gc 4,13-17",
        ],
    },
    {
        stt: 673,
        noi_dung: "Một l ời kinh g ây tin t ưởng cho con c ái Ch úa, nh ưng vì qu á quen, qu á th ường, con không ý thức t ất cả ý nghĩa th ế mạt, mà chỉ người c ông giáo được m ạc khải: Hằng sống, hằng trị muôn đời, Amen.",
        chuong: 28,
    },
    {
        stt: 674,
        noi_dung: "Trước muôn ngàn thử thách đau khổ, con hãy sốt sắng, tin tưởng và đọc nhiều lần: Tôi tin xác loài người ngày sau sống lại, tôi tin hằng sống vậy. Đó  là bí quyết can đảm của người Kitô hữu. vinh quang mà Thiên Chúa sẽ mặc khải nơi chúng ta. Chúa Kitô và được giải thoát khỏi nô lệ của cải trần thế, đang khi họ tìm kiếm của cải tồn tại vĩnh viễn, với lòng quảng đại họ sẽ hoàn toàn hiến mình để mở rộng Nước Thiên Chúa và đem tinh th ần Phúc âm thấm nhập và cải tạo lãnh vực thực tại trần thế. Giữa những cơn thử thách đời này họ tìm thấy sức mạnh trong niềm hy vọng vì họ nghĩ rằng: những đau khổ hiện thời chẳng thấm vào đâu so với vinh quang sắp tới sẽ được giãi bày cho chúng ta (Rm 8,18).",
        chuong: 28,
        loi_chua: [
            "Rm 8,18: Tôi nghĩ rằng: những đau khổ chúng ta chịu bây giờ sánh sao được với",
            "TĐ  4e: Trong đời sống lữ hành này, họ được giấu ẩn trong Thiên Chúa cùng với",
        ],
        tham_chieu: [
            "1Tx 4,16-17; Kh 20,12-13",
            "GH 8d, 48d; MV 21b; TG 8",
        ],
    },
    {
        stt: 675,
        noi_dung: "Nhìn bao nhiêu thân ngọc, mình ng à, minh tinh, hoa h ậu đã chịu số phận thối tha, h ư nát, con hiểu được tiếng hư vô và con tự rút lấy bài học. như hoa c ỏ; c ỏ thì kh ô, hoa thì r ụng; L ời Chúa v ẫn t ồn t ại đến mu ôn thu ở muôn đời. Đó  chính là Lời đã được loan báo cho anh em như một Tin Mừng.",
        chuong: 28,
        loi_chua: [
            "1Pr 1,24-25: Mọi phàm nhân đều như cỏ và tất cả vinh quang c ủa họ cũng đều",
        ],
    },
    {
        stt: 676,
        noi_dung: "Đ ừng để lúc sắp bước chân vào ngưỡng cửa đời đời, con h ối tiếc vì đã đổi của thiệt lấy toàn đồ giả. làm hư nát, và kẻ trộm khoét vách lấy đi. Nhưng hãy tích tr ữ cho mình nh ững kho tàng trên trời, nơi mối mọt không làm hư nát, và kẻ trộm không khoét vách lấy đi.",
        chuong: 28,
        loi_chua: [
            "Mt 6,19-20: Anh em đừng tích trữ cho mình những kho tàng dưới đất, nơi mối mọt",
        ],
        tham_chieu: [
            "Gc 5,1-3",
        ],
    },
    {
        stt: 677,
        noi_dung: "Trên thiên đàng, người tông đồ mới thôi lao nhọc. Nhưng ngay ở thiên đàng người tông đồ vẫn tiếp tục cứu giúp trần gian. với Người và trong Ng ười, các thánh không ngừng cầu bầu cho ch úng ta b ên Chúa Cha, b ằng cách trình bày các công nghiệp đã lập được khi c òn ở dưới thế, nh ờ Đ ấng Trung gian duy nh ất giữa Thiên Chúa v à loài người là Chúa Giêsu Kitô (x. 1Tm 2,5), khi h ọ đã phục vụ Chúa trong mọi sự và hoàn tất nơi thân xác họ những gì còn thiếu sót trong các đau khổ của Chúa Kitô, hầu mưu ích cho Thân thể Người là Giáo hội (x. Cl 1,24). Do đó, với tình huynh đệ, các ngài lo lắng giúp đỡ chúng ta rất nhiều vì chúng ta yếu hèn.",
        chuong: 28,
        loi_chua: [
            "GH 49: Đư ợc về quê trời và hiện diện trước nhan Ch úa (x. 2Cr 5,8) nh ờ Người,",
        ],
        tham_chieu: [
            "GH 50c, 51a",
        ],
    },
    {
        stt: 678,
        noi_dung: "Người tông đồ không chết, sự sống không tiêu diệt, chỉ biến đổi: Quả thế, hiện giờ ta thấy, nhưng ở trong gương, cách mường tượng. Bấy giờ thì tận mắt, diện đối diện (1Cr 13,12). mà lòng vẫn kính tin. Vì vậy, anh em được chan chứa một niềm vui khôn tả, rực rỡ vinh quang, b ởi đã nh ận được th ành qu ả c ủa đức tin, l à ơn c ứu độ con người.",
        chuong: 28,
        loi_chua: [
            "1Pr 1,8-9: Tuy kh ông thấy Người, anh em v ẫn yêu mến, tuy ch ưa được giáp mặt",
        ],
        tham_chieu: [
            "1Cr 13,12",
        ],
    },
    {
        stt: 679,
        noi_dung: "Giữa những đau khổ, oan ức, những giả dối, bất công, con h ãy vững vàng tuyên xưng với toàn thể dân Chúa: Và Người sẽ trở lại trong vinh quang , để phán xét kẻ sống và kẻ chết, Nước Người sẽ không bao giờ cùng. các thiên thần của Người, và bấy giờ, Người sẽ thưởng phạt ai n ấy xứng việc họ làm.",
        chuong: 28,
        loi_chua: [
            "Mt 16,27: Vì Con Ng ười sẽ ngự đến trong vinh quang c ủa Cha Ng ười, cùng với",
        ],
        tham_chieu: [
            "Mt 13,47-50; Ga 5,28-29; Kh 6,10-11; 22,12-14",
        ],
    },
    {
        stt: 680,
        noi_dung: "Con cảm thấy an ủi vì Đ ấng đoán xét con là Cha nhân từ. Ngài càng chí công, con càng vững lòng, vì Ng ài xử con theo s ự yếu đuối của con, nh ưng đừng lạm dụng lòng nhân lành Chúa để khuyến khích mình liều lĩnh trong tội lỗi. nhưng được hưởng ơn cứu độ, nhờ Đ ức Giêsu Kitô, Chúa chúng ta, Đ ấng đã chết vì chúng ta, để dầu thức hay ngủ, chúng ta cũng sống với Người. lại nhưng không mời gọi chúng ta tham dự sự sống và vinh hiển với Ngài; Ngài còn rộng rãi đổ tràn lòng nhân từ xuống cho ch úng ta v à còn đổ mãi không ngừng đến nỗi Ngài là Đ ấng tác tạo muôn loài lại phải trở nên mọi sự trong mọi ng ười (1Cr 15,28), để đồng th ời l àm vinh danh Ng ài v à t ạo n ên h ạnh phúc cho ch úng ta. Th ực vậy, Thiên Chúa muốn mời gọi mọi người tham d ự vào s ự s ống c ủa Ng ài, kh ông nh ững ch ỉ t ừng c á nh ân kh ông li ên l ạc gì v ới nhau, mà Ngài còn liên kết họ thành một dân duy nh ất, trong đó đoàn tụ mọi con cái đã tản mát khắp nơi.",
        chuong: 28,
        loi_chua: [
            "1Tx 5,9-10: Vì Thi ên Chúa đã không định cho ch úng ta ph ải chịu cơn thịnh nộ,",
            "TG 2b: Vì quá nhân từ thương xót, Thiên Chúa Cha đã tự ý dựng nên chúng ta, và",
        ],
        tham_chieu: [
            "Mt 18,12-14",
            "GH 40a, 48d; MK 3; MV 93",
        ],
    },
    {
        stt: 681,
        noi_dung: "Chúa gọi con l àm thánh, nếu con ch ấp nhận vào luyện ngục, con đã phụ tình y êu của Chúa. thiện. V ậy ai khinh th ường nh ững l ời d ạy tr ên, thì kh ông ph ải khinh th ường một người phàm, nhưng khinh thường Thiên Chúa; Đ ấng hằng ban cho anh em Thánh Thần của Người.",
        chuong: 28,
        loi_chua: [
            "1Tx 4,7-8: Thiên Chúa đã không kêu gọi chúng ta s ống ô uế, nhưng sống thánh",
        ],
    },
    {
        stt: 682,
        noi_dung: "Giữa những thử thách bên trong bên ngoài khủng khiếp nhất, con hãy nhớ lời sách Khải huyền: Và Người sẽ lau sạch nước mắt họ; chết sẽ không có nữa; phiền muộn, kêu gào và khó nhọc sẽ không còn nữa, vì các điều cũ đã qua! (Kh 21,4).",
        chuong: 28,
    },
    {
        stt: 683,
        noi_dung: "Luxia, Giaxinta, Phanxic ô đã tr ông th ấy ho ả ng ục v ô c ùng r ùng r ợn kinh kh ủng v à không bao gi ờ quên được cảnh tượng ấy. Hãy tin l ời Đ ức Mẹ! Đ ừng nhắm mắt không tin có hoả ngục để rồi một hôm mở mắt thấy mình trong hoả ngục. Khi người ta n ói: Bình an bi ết bao, y ên ổn biết bao!, thì l úc ấy tai ho ạ sẽ thình lình ập xuống, tựa cơn đau chuyển bụng đến với người đàn bà có thai, và sẽ chẳng có ai trốn thoát được.",
        chuong: 28,
        loi_chua: [
            "1Tx 5,2-3: Chính anh em đã biết rõ: ngày của Chúa sẽ đến như kẻ trộm ban đêm.",
        ],
        tham_chieu: [
            "Mt 13,41.49; 25, 30; Lc 17,26-30",
        ],
    },
    {
        stt: 684,
        noi_dung: "Máy điện tử tối tân nhất tên là muôn đời. Con hãy dùng nó để chọn quyết định quan trọng nhất của đời con. Muôn đời thù ghét trong hoả ngục? Muôn đời yêu thương trên thiên đàng? đẹp. Tìm được một viên ngọc quý, ông ta ra đi, bán tất cả những gì mình có mà mua viên ngọc ấy. thức để khi cuộc đời độc nhất của chúng ta ở trần gian chấm dứt (x. Dt 9,27), chúng ta x ứng đáng v ào d ự ti ệc c ưới v ới Ng ười v à được li ệt v ào s ố nh ững người được chúc phúc (x. Mt 25,31-46), chứ  không như những tôi tớ khốn nạn và lười biếng (x. Mt 25,26) sẽ bịđày vào lửa đời đời (x. Mt 25,41), vào chốn tối tăm, nơi khóc l óc v à nghiến răng (x. Mt 22,13.25,30). Th ật v ậy, trước khi ngự trị với Chúa Kitô vinh hiển, mọi người chúng ta đều phải trình diện trước toà Chúa Kitô, để mọi người lãnh lấy những thành quả đời mình đã làm trong thân xác hoặc lành hoặc dữ (2Cr 5,10). V à ngày tận thế ai đã làm lành sẽ sống lại hầu được sống, còn ai làm ác sẽ sống lại để chịu đoán phạt (Ga 5,29; x. Mt 25,46).",
        chuong: 28,
        loi_chua: [
            "Mt 13,45-46: Nước Trời lại cũng giống như chuyện một thương gia đi tìm ng ọc",
            "GH 48d: Vì kh ông biết ngày và giờ, chúng ta ph ải theo l ời Chúa dạy, luôn tỉnh",
        ],
        tham_chieu: [
            "Mt 16,26; Lc 12,15-21; Dt 4,1-2.11",
            "Mv 40b, 51d; TĐ  2; TG 2b",
        ],
    },
    {
        stt: 685,
        noi_dung: "Thái độ chấp nhận cái chết của giáo dân thời sơ khai là cả một cuộc cách mạng. Chứng tích ấy khiến thế giới Lamã phải tin ở tình yêu Thiên Chúa và cuộc sống vĩnh cửu. mãi để l àm ch ứng c ách h ùng h ồn tr ước m ặt m ọi ng ười, nh ất l à tr ước m ặt những kẻ bách hại mình về tình y êu của Chúa Kitô đối với nhân loại. Khi t ử đạo, người môn đệ đồng hoá với Thầy mình, Đ ấng đã tình nguy ện chấp nhận cái chết để cứu độ thế giới và người môn đệ nên giống Người trong vi ệc đổ máu; Giáo hội coi vi ệc tử đạo đó như một ân huệ lớn lao và một bằng chứng cao cả về đức ái.",
        chuong: 28,
        loi_chua: [
            "GH 42b: M ột số Kitô hữu ngay t ừ thời sơ khai đã được gọi và sẽ còn được gọi",
        ],
        tham_chieu: [
            "GH 41b, 48d, 50b; MV 18b, 21e",
        ],
    },
    {
        stt: 686,
        noi_dung: "Nhìn cuộc đời chóng qua không phải để yếm thế, bi quan, buông trôi… Nh ưng để phấn khởi, hăng say, tranh đua với thời gian. Người ta bảo thời giờ là vàng, con hãy xác tín: thời giờ là thiên đàng, thời giờ là tình yêu. không trì ho ãn. Người công chính c ủa Ta nh ờ lòng tin s ẽ được sống; nhưng nếu ng ười ấy b ỏ cu ộc, thì Ta kh ông h ài l òng v ề ng ười ấy. Ph ần chúng ta, chúng ta không phải là những người bỏ cuộc để phải hư vong, nhưng là những người có lòng tin để bảo toàn sự sống.",
        chuong: 28,
        loi_chua: [
            "Dt 10,37 -39: Ch ỉ c òn ít l âu n ữa, m ột ít th ôi, Đ ấng ph ải đến s ẽ đến, Ng ười s ẽ",
        ],
        tham_chieu: [
            "Lc 11,9-10; 2Tx 3,12",
        ],
    },
    {
        stt: 687,
        noi_dung: "Cái gì không mang nhãn hiệu muôn đời là đồ giả. đến những thực tại vô hình. Qu ả vậy, những sự vật hữu hình thì ch ỉ tạm thời, còn những thực tại vô hình mới tồn tại vĩnh viễn.",
        chuong: 28,
        loi_chua: [
            "2Cr 4,18: Vì th ế, chúng ta mới không chú tâm đến những sự vật hữu hình, nhưng",
        ],
    },
    {
        stt: 688,
        noi_dung: "Hạt lúa gieo xuống đất không chết, nhưng sẽ phát sinh sự sống phong phú mới mẻ hơn. Hạt gạo n ấu thành c ơm nuôi nh ân loại c ũng không chết, nh ưng t ươi n ở trong m ột cuộc sống khác đẹp hơn, cao quý hơn. phúc thay nh ững người đã chết, mà được chết trong Ch úa! Thần Khí p hán: Phải, họ sẽ được nghỉ ngơi, không còn vất vả nhọc nhằn nữa, vì c ác việc họ làm vẫn theo họ.",
        chuong: 28,
        loi_chua: [
            "Kh 14,13: Tôi nghe có tiếng từ trời phán rằng: Ngươi hãy viết: Ngay từ bây giờ,",
        ],
        tham_chieu: [
            "Ga  12,24-25; 1Cr 15,36",
        ],
    },
    {
        stt: 689,
        noi_dung: "Từ đây, trên các vòng hoa ph úng điếu xin con đừng để hai ch ữ phân ưu nữa, trong các thư từ con đừng để hai chữ quá cố nữa, vì họ đang an nghỉ trong niềm hy vọng sống lại và đang hưởng ánh sáng tôn nhan Chúa. cũng tin r ằng những người đã an gi ấc trong Đ ức Giêsu, sẽ được Thiên Chúa đưa về cùng Đ ức Giêsu.",
        chuong: 28,
        loi_chua: [
            "1Tx 4,14: N ếu chúng ta tin r ằng Đ ức Giêsu đã chết và đã sống lại, thì ch úng ta",
        ],
    },
    {
        stt: 690,
        noi_dung: "Đ ối với Kitô hữu, không có người chết. Tất cả các kẻ chết của chúng ta vẫn đang sống. Họ là chi thể của Chúa Kitô như chúng ta, chúng tôi thông hiệp với nhau trong đức tin. đã yên nghỉ trong an bình Ch úa Kitô không hề bị gián đoạn. Nhưng trái lại, Giáo hội xưa nay luôn tin rằng sự hiệp nhất đó còn được vững mạnh hơn nhờ việc truyền thông cho nhau những của cải thiêng liêng. Tránh gian khổ, con đừng mong làm thánh",
        chuong: 28,
        loi_chua: [
            "GH 49a: Sự hiệp nhất giữa những người còn sống trên dương thế với các anh em",
            " ",
        ],
        tham_chieu: [
            "GH 50c, 51a; MV 18b",
        ],
    },
    {
        stt: 691,
        noi_dung: "Bão tố bẻ gãy cành khô, cành sâu. Nhưng đừng tiếc những cành ấy, dù không gió cũng gãy, không gãy cũng phải chặt vì chúng làm hại.",
        chuong: 29,
    },
    {
        stt: 692,
        noi_dung: "Chúa Giêsu đến đâu cũng có một số người sống chết cho Ngài, và cũng có một số người quyết giết ch ết Ngài. Sao con mu ốn mọi người yêu con? Sao nao n úng khi c ó người ghét con? nếu anh em ch ịu khổ vì s ống c ông chính, thì anh em th ật có phúc! Đ ừng sợ những kẻ làm hại anh em và đừng xao xuyến. Đ ức Kitô là Đ ấng Thánh, hãy tôn Người làm Chúa ngự trị trong lòng anh em. Hãy luôn luôn sẵn sàng trả lời cho bất cứ ai chất vấn về niềm hy vọng của anh em.",
        chuong: 29,
        loi_chua: [
            "1Pr 3,13-15: Ai làm hại được anh em, nếu anh em nhiệt thành làm điều thiện? Mà",
        ],
    },
    {
        stt: 693,
        noi_dung: "Đư ờng con đi có hoa th ơm, cảnh đẹp, có chông gai, c ó hùm beo, c ó bạn hiền, có trộm cướp, lúc mưa sa, lúc nắng cháy… chuy ện không thể tránh được. Con cứ đi, miễn lòng con đầy Chúa, đi như Phanxicô, như Cyrillô, như Athanasiô, đừng mất giờ dừng lại, đừng sợ tiếng chửi, đừng ăn mày tiếng khen. sự viên của Thiên Chúa trong vi ệc loan b áo Tin M ừng Đ ức Kitô; anh đến để làm cho anh em được vững mạnh, và khích lệ đức tin của anh em, khiến không ai bị nao n úng vì c ác nỗi gian truân ấy. Hẳn anh em bi ết đó là số phận dành cho chúng ta. Th ật thế, khi c òn ở với anh em, ch úng tôi đã nói trước cho anh em rằng chúng ta sẽ gặp gian truân, điều đó đã xảy ra như anh em biết. Chúa, Giáo hội rao truy ền cái chết và thập giá Chúa, cho đến khi Ng ài lại đến (x. 1Cr 11,26). Gi áo hội vững mạnh nhờ thần lực của Chúa Phục sinh, để toàn thắng các khó khăn và sầu muộn từ bên trong c ũng như bên ngoài bằng yêu thương và kiên trì, v à trung th ành mạc khải cho th ế gian m ầu nhiệm của Chúa còn giấu trong b óng tối, cho đến khi được phô bày dưới ánh sáng vẹn toàn trong ngày sau hết.",
        chuong: 29,
        loi_chua: [
            "1Tx 3,2-4: Chúng tôi đã phái anh Ti-mô-thê, người anh em của chúng tôi và cộng",
            "GH 8d: Lữ hành giữa cơn bách hại của thế gian và trong niềm an ủi của Thiên",
        ],
        tham_chieu: [
            "Ga 14,1; 1Pr 4,12.19",
            "GH 7e; MV 22c; LM 13d; TĐ  4e; TG 5b, 42a",
        ],
    },
    {
        stt: 694,
        noi_dung: "Khi đau khổ cực độ, con h ãy nhìn l ên Thánh giá, ôm choàng lấy Thánh giá và con s ẽ thinh lặng đứng vững như Đ ức Mẹ.",
        chuong: 29,
    },
    {
        stt: 695,
        noi_dung: "Giữa những thử thách, con hãy nghĩ gian khổ sánh sao được với nước thiên đàng. Đó  là phương pháp của Chúa: Phúc cho ai kh ó nghèo, ai khóc lóc, ai chịu bắt bớ… vì n ước thiên đàng là của mình vậy (x. Mt 5,3-10). số người trong các ngươi vào ngục để thử thách các ngươi; các ngươi sẽ phải lâm cảnh gian truân trong vòng mười ngày. Hãy trung thành cho đến chết, và Ta sẽ ban cho ngươi triều thiên sự sống.",
        chuong: 29,
        loi_chua: [
            "Kh 2,10: Đ ừng sợ các nỗi đau khổ ngươi sắp phải chịu: này ma quỷ sắp tống một",
        ],
        tham_chieu: [
            "Rm 8,18; 1Cr 15,58; 2Cr 4,17; Gc 1,2-4",
        ],
    },
    {
        stt: 696,
        noi_dung: "Người ta vô ơn với con! Con làm ơn để họ cám ơn sao?",
        chuong: 29,
    },
    {
        stt: 697,
        noi_dung: "Con than phi ền vì kẻ nghịch của con li ên lỉ chen lấn, giành giựt gây trở ngại cho c ông việc tông đồ của con? Sao con qu ên dụ ngôn Cây lúa và cỏ lùng (x. Mt 13,24 -30)? Lúa cứ vươn lên! ở miền Giu-đê là những Hội Thánh của Đ ức Kitô Giêsu, vì anh em cũng đã phải ch ịu những nỗi đau kh ổ do đồng bào c ủa anh em g ây ra, nh ư c ác Hội Thánh đó đã phải chịu do người Do-thái. Những người này đã giết Chúa Giêsu và các ngôn sứ, đã bắt bớ chúng tôi, họ không đẹp lòng Thiên Chúa và chống lại tất cả mọi người; họ ngăn cản khi chúng tôi rao giảng cho người ngoại để những người này được ơn cứu độ. Như vậy họ luôn luôn chất đầy thêm tội lỗi; nhưng cuối cùng cơn thịnh nộ của Thiên Chúa đã giáng xuống trên họ.",
        chuong: 29,
        loi_chua: [
            "1Tx 2,14-16: Thưa anh em, anh em đã noi gương các Hội Thánh của Thiên Chúa",
        ],
        tham_chieu: [
            "Mt 13,24-30",
        ],
    },
    {
        stt: 698,
        noi_dung: "Hoạt động con bị hạn chế, danh tiếng con bị lu mờ, chống đối dồn dập tứ phiá! Hãy đợi chờ giờ của Chúa: Nhánh nào sinh quả, thì Người tỉa sạch, để nó sinh quả nhiều hơn (Ga 15,2), cành non sẽ đâm chồi nở hoa, mang trái nặng trĩu hơn.",
        chuong: 29,
    },
    {
        stt: 699,
        noi_dung: "Trong giờ Tử nạn, Chúa đem theo những Tông đồ Ngài yêu thương riêng: Phêrô, Gioan, Giacôbê (x. Mt 26,37-38). Con sợ Chúa thương không?",
        chuong: 29,
    },
    {
        stt: 700,
        noi_dung: "Trong gian khổ có ba điều con ).nên tránh: – Đ ừng điều tra tại ai? Hãy cám ơn dụng cụ nào đó Chúa dùng thánh hoá con. – Đ ừng than thở với bất cứ ai. Chúa Thánh Thể, Đ ức Mẹ là nơi con tâm sự trước hết. – Khi đã qua, đừng nhắc lại và trách móc, hận thù. Hãy quên đi, đừng nhắc lại bao giờ và nói: Alleluia! và nhất là Bí tích Thánh Thể, phải được kiên trì trong lời cầu nguyện, trong sự hiệp thông cùng một tinh thần (x. Cv 2,42), theo gương Giáo hội sơ khai, trong đó c ác tín h ữu ch ỉ c ó m ột t ấm l òng, m ột t âm h ồn (x. Cv 4,32)… L à chi th ể Chúa Kit ô, c ác tu s ĩ hãy mang l ấy g ánh nặng của nhau (x. Gl 6,2) v à trọng kính lẫn nhau trong tinh thần giao hảo huynh đệ (x. Rm 12,10).",
        chuong: 29,
        loi_chua: [
            "DT 15a: Đ ời sống chung được nuôi dưỡng bằng giáo lý Phúc âm, Phụng vụ thánh",
        ],
        tham_chieu: [
            "GH 34b, 49; MV 22c, 28c; TG 5b",
        ],
    },
    {
        stt: 701,
        noi_dung: "Con tức tối vì không biện minh được với kẻ thủ. Đ ừng lạ gì: Chúng đã bắt bớ các tiên tri, tiền bối của các ngươi (Mt 5,12).",
        chuong: 29,
    },
    {
        stt: 702,
        noi_dung: "Tránh gian khổ con đừng trông làm thánh. là lúc dân thánh cần phải có lòng kiên nhẫn và đức tin. gian đã hiến thân cho chúng ta hầu cứu chúng ta khỏi mọi tội ác và thanh tẩy một dân tộc để họ thuộc về Ngài và nhiệt thành làm việc Chúa (Tt 2,14), v à như thế qua cuộc khổ nạn mà vào vinh quang. Các linh mục cũng vậy, sau khi được Chúa Thánh Thần thánh hiến bởi việc xức dầu và được Chúa Kitô sai đi, các Ngài tiêu diệt nơi mình nh ững công trình c ủa xác thịt và hoàn toàn hiến thân phục vụ nhân loại: đó chính là sự thánh thiện mà Đ ức Giêsu đã ban cho các ngài để nhờ đó mà tiến gần đến con người hoàn thiện.",
        chuong: 29,
        loi_chua: [
            "Kh 13,10: Ai phải đi đày thì đi đày, ai phải chết vì gươm thì sẽ chết vì gươm. Đâ y",
            "LM 12b: Chúa Kitô, Đ ấng Chúa Cha đã thánh hoá, thánh hiến và sai xuống trần",
        ],
        tham_chieu: [
            "GH 7e, 41b; MV 22c; TG 5b",
        ],
    },
    {
        stt: 703,
        noi_dung: "Chúa đã dùng gian nan đau khổ để rèn luyện chúng ta hầu ta biết thông cảm với những người đau khổ. Như Chúa Giêsu đã cầu cho nhân loại với tiếng thống thiết và nước mắt (x. Dt 5,7). thành m ột v ị Th ượng T ế nh ân t ừ v à trung tín trong vi ệc th ờ ph ượng Thi ên Chúa, hầu đền tội cho d ân. Vì b ản thân Người đã trải qua th ử thách và đau khổ, nên Người có thể cứu giúp những ai bị thử thách.",
        chuong: 29,
        loi_chua: [
            "Dt 2,17-18: Người đã phải nên giống anh em  mình v ề mọi phương diện, để trở",
        ],
        tham_chieu: [
            "2Cr 1,3-4; Dt 5,7-10",
        ],
    },
    {
        stt: 704,
        noi_dung: "Trên thiên đàng con sẽ tiếc: Phải chi tôi đã có thêm nhiều dịp mến Chúa và chịu khó vì Chúa hơn!",
        chuong: 29,
    },
    {
        stt: 705,
        noi_dung: "Đ au khổ nhất là do những người phải thông cảm và có phận sự bênh vực con gây nên. Hãy hiệp với Chúa Giêsu chịu đóng đinh và bị bỏ rơi trên thánh giá: Lạy Thiên Chúa tôi, lạy Thiên Chúa tôi! Nhân sao Người lại bỏ tôi? (Mt 27,46).",
        chuong: 29,
    },
    {
        stt: 706,
        noi_dung: "Đ au khổ không những giúp). con can đảm nhẫn nại, nhưng còn có giá trị cứu chuộc rất lớn lao, nếu con hiệp với sự thương khó Chúa Giêsu. chọn, để họ cũng đạt tới ơn cứu độ trong Đ ức Kitô Giêsu, và được hưởng vinh quang muôn đời. những thử thách khác, hay bị bách hại vì sự công chính cũng biết kết hợp cách đặc biệt với Chúa Kitô, Đ ấng đã chịu đau khổ để cứu chuộc thế giới, vì trong Phúc âm Chúa đã tuyên bố họ là người có phúc, và vì Thiên Chúa của mọi ơn phúc, Đ ấng đã gọi chúng ta đến sự vinh hiển muôn đời trong Chúa Giêsu Kitô, sau khi chúng ta chịu đau khổ trong một thời gian ngắn, chính Người sẽ làm cho chúng ta hoàn hảo, vững chắc và mạnh mẽ (1Pr 5,10).",
        chuong: 29,
        loi_chua: [
            "2Tm 2,10: T ôi cam ch ịu m ọi s ự, để m ưu ích cho nh ững ng ười Thi ên Ch úa đã",
            "GH 41b: Ư ớc gì những người chịu đau khổ vì nghèo đói, tật nguyền, đau yếu và",
        ],
        tham_chieu: [
            "Rm 6,8; Cl 1,24; Dt 9,22",
            "GH 7e; TĐ  16g",
        ],
    },
    {
        stt: 707,
        noi_dung: "Nếu thể xác con căng thẳng, hãy tạm nghỉ. Gác bỏ các lo âu, con sẽ lấy lại sức và công việc sẽ kết qủa hơn. Chấp nhận giới hạn sức khoẻ của con là can đảm, biết săn sóc sức khoẻ là khôn ngoan.",
        chuong: 29,
    },
    {
        stt: 708,
        noi_dung: "Thời gian là một yếu tố quan trọng. Khi một biến cố xảy đến, đừng hấp tấp, lúng túng. Hãy suy nghĩ, nhẫn nại đợi chờ, lắm lúc sau m ột đêm, con s ẽ thấy sự việc khách quan và sáng suốt hơn.",
        chuong: 29,
    },
    {
        stt: 709,
        noi_dung: "Một bác sĩ nói: Ai thuê tôi săn sóc bệnh nhân một vạn đồng một ngày, tôi cũng không nhận! – Nữ tu đáp: Thưa Bác sĩ, phần tôi, nếu không phải vì m ến Chúa, một triệu đồng một giờ tôi cũng không chịu. Nhưng vì Chúa tôi sẽ ở đây đến chết.",
        chuong: 29,
    },
    {
        stt: 710,
        noi_dung: "Gian khổ là cơm bữa của đời người. Nhưng đối với người công giáo, cuộc sống của họ loan truy ền vi ệc Ch úa ch ịu ch ết v à tuy ên x ưng vi ệc Ch úa s ống l ại. Con c ó sung sướng khi đọc lời ấy không? dữ dù phải trải qua nhiều gian nan cũng như phải chết nữa. Nhưng vì được dự phần vào mầu nhiệm Phục sinh, được đồng hoá với cái chết của Chúa Kitô, được mạnh mẽ nhờ đức cậy, họ tiến lên đón nhận ngày sống lại.",
        chuong: 29,
        loi_chua: [
            "MV 22d: Người Kitô hữu chắc chắn cần thiết và có bổn phận chiến đấu chống sự",
        ],
        tham_chieu: [
            "GH 7e; MV 10a",
        ],
    },
    {
        stt: 711,
        noi_dung: "Hãy hành động cho tốt và biết thinh lặng. Kitô khiêm tốn làm việc trong khi tìm xem điều gì đẹp lòng Thiên Chúa và như bị ràng buộc bởi Thánh Thần, trong m ọi sự Ngài đều tuân theo ý c ủa Đ ấng muốn cho mọi người được cứu rỗi. Ngài có thể khám phá và tuân theo ý muốn này trong nh ững sự kiện hằng ngày bằng cách khiêm tốn phục vụ mọi người được Thiên Chúa ủy thác cho mình qua các nhiệm vụ riêng của mình cũng như qua những biến cố của đời sống.",
        chuong: 29,
        loi_chua: [
            "LM 15a: Ý thức những sự yếu hèn của mình, th ừa tác viên đích thực của Chúa",
        ],
        tham_chieu: [
            "LM 15c",
        ],
    },
    {
        stt: 712,
        noi_dung: "Con phản đối: Bất công! – Lòng con tức tối trước việc xảy đến gây khổ tâm cho con. Hãy nghĩ lại xem: Ch úa Giêsu đã làm gì n ên tội mà phải chịu đóng đinh? Như thế có công bình không? chết cho kẻ bất lương - hầu dẫn đưa chúng ta đến cùng Thiên Chúa. Thân xác Người đã bị giết chết, nhưng nhờ Thần Khí, Người đã được phục sinh.",
        chuong: 29,
        loi_chua: [
            "1Pr 3,18: Chính Đ ức Kitô đã chịu chết một lần vì t ội lỗi - Đ ấng Công Chính đã",
        ],
        tham_chieu: [
            "Mt 5,11-12; Cv 3,14; 5,40",
        ],
    },
    {
        stt: 713,
        noi_dung: "Hoa hồng, hoa hu ệ chỉ tốt thơm, rực rỡ, khi ph ân tro m àu mỡ biến thành hương sắc. Việc tông đồ cũng tiến mạnh khi gian khổ được đổi thành yêu thương.",
        chuong: 29,
    },
    {
        stt: 714,
        noi_dung: "Thử thách gian khổ là giấy phép theo Chúa để hưởng hạnh phúc hân hoan với Chúa: Nếu ai muốn theo Ta, thì hãy chối bỏ chính mình, hãy vác lấy khổ giá và hãy theo Ta (Mt 16,24). đến diệt vong, m à nhiều người lại đi qua đó. Còn cửa hẹp và đường chật thì đưa đến sự sống, nhưng ít người tìm được lối ấy.",
        chuong: 29,
        loi_chua: [
            "Mt 7,13-14: Hãy qua cửa hẹp mà vào, vì cửa rộng và đường thênh thang thì đưa",
        ],
        tham_chieu: [
            "Ga 16,20.22; 2Tx 1,4-5.7; 2Tm 2,11-12; Gc 1,12; 1Pr 4,13-14",
        ],
    },
    {
        stt: 715,
        noi_dung: "Không có cơn thử thách nào lớn lao bằng cơn thử thách của Chúa Giêsu trên Thánh giá. Lúc xác hấp hối, tâm hồn lại cảm thấy chính Đ ức Chúa Cha hầu như cũng bỏ rơi mình, Chúa Giêsu phải nói lên nỗi khổ ê chề nhất trong đời Ngài: Lạy Thiên Chúa tôi, lạy Thiên Chúa tôi! Nhân sao Người lại bỏ tôi? (Mt 27,46). Hãy hiệp nhất với Chúa Giêsu trong những giây phút hãi hùng, tối tăm nhất của đời con. Bì nh an s ẽ trở lại và con s ẽ nói được như Chúa Giêsu: Lạy Cha, con ký thác hồn con trong tay Cha (Lc 23,46).",
        chuong: 29,
    },
    {
        stt: 716,
        noi_dung: "Các ngươi có thể uống chén Ta u ống, và chịu thanh t ẩy, thứ thanh t ẩy Ta ph ải chịu không? (Mt 10,38). Con h ãy thưa: Con tình nguy ện u ống ch én đắng đến giọt cu ối cùng vì là chén đắng của Thầy, vì Thầy đã uống trước con! Chén càng đắng càng đầy, chứng tích tình yêu của con càng rõ rệt. Càng muốn cho con chia sẻ chén đắng, Chúa càng yêu thương tín nhiệm con. thách Đ ức Kitô còn phải chịu, tôi xin mang lấy vào thân cho đủ mức, vì lợi ích cho thân thể Người là Hội Thánh.",
        chuong: 29,
        loi_chua: [
            "Cl 1,24: Giờ đây, tôi vui mừng được chịu đau khổ vì anh em. Những gian nan thử",
        ],
        tham_chieu: [
            "Mt 26,39; Ga 18,11; 21,18",
        ],
    },
    {
        stt: 717,
        noi_dung: "Gian khổ nặng nề nếu con khiếp sợ trốn lánh, gian khổ dịu dàng nếu con can đảm tiếp nhận. Đ iều kiện vào Nước trời: Trở nên như trẻ thơ",
        chuong: 29,
        loi_chua: [
            " ",
        ],
    },
    {
        stt: 718,
        noi_dung: "Người mồ côi được sung t úc phú qúy là người hạnh phúc, nhưng không phải là người con hạnh phúc. Nghèo khổ mấy mà có cha yêu, mẹ mến là người con hạnh phúc. Con có ý thức mình vô cùng hạnh phúc vì làm con Chúa, con Mẹ Maria không? trở thành nô lệ và phải sợ sệt như xưa, nhưng là Thần Khí làm cho anh em nên nghĩa t ử, nh ờ đó c húng ta được k êu lên: Áp-ba! Cha ơi! Chính Th ần Khí chứng thực cho thần trí chúng ta rằng chúng ta là con cái Thiên Chúa. Vậy đã là con, thì c ũng là thừa kế, mà được Thiên Chúa cho th ừa kế, thì t ức là đồng thừa k ế v ới Đ ức Kit ô; vì m ột khi c ùng ch ịu đau k hổ v ới Ng ười, ch úng ta s ẽ cùng được hưởng vinh quang với Người. phẩm giá con người, vì phẩm giá ấy đặt nền tảng và nên hoàn hảo trong chính Thiên Chúa: bởi vì con ng ười có trí tuệ và tự  do được Thiên Chúa, Đ ấng tạo dựng đặt để trong xã hội, nhưng nhất là vì con người được gọi đến thông hiệp với chính Thiên Chúa và tham dự vào hạnh phúc của Ngài như con cái.",
        chuong: 30,
        loi_chua: [
            "Rm 8,15-17: Phần anh em, anh em đã không lãnh nhận Thần Khí khi ến anh em",
            "MV 21c: Gi áo hội cho r ằng nhìn nh ận Thiên Chúa không có gì ngh ịch lại với",
        ],
        tham_chieu: [
            "2Cr 6,18; Ep 1,5; 1Ga 3,1",
            "GH 9b, 40a, 48d; MV 40b",
        ],
    },
    {
        stt: 719,
        noi_dung: "Khi xin điều gì, người ta khai khả năng và công trạng… Nh ưng em bé chỉ khai cách đơn sơ: Con l à con ông… con b à… ở trên xóm…. Đó  là tất cả đơn từ của nó. Con h ãy hiên ngang và cầu nguyện như vậy: Con là con Chúa, con Đ ức Mẹ…",
        chuong: 30,
    },
    {
        stt: 720,
        noi_dung: "Đ ứa bé đến quán mua hàng cho mẹ, quán đã đóng cửa, nó gõ, gõ mãi, chủ quán tức tối, mở cửa, sẵn sàng mắng một trận, nhưng thấy em bé đơn sơ, chủ chịu thua và tươi cười âu yếm: Tội nghiệp, con giỏi quá, đi đâu giờ này?… v à nó được tất cả. Hãy sống như trẻ thơ!",
        chuong: 30,
    },
    {
        stt: 721,
        noi_dung: "Trẻ con kh ông cần biết cha m ẹ giàu hay ngh èo, chỉ biết có cha m ẹ là đủ. Dù có bom đạn, dù có đói rách hiểm nguy, miễn là có cha mẹ, trẻ ngủ thiếp đi bằng an. Nó nương náu nơi tình yêu hầu như toàn năng của cha mẹ. Con hãy phó thác như vậy! Tôi ban cho ch úng sự sống đời đời; không bao gi ờ ch úng phải diệt vong v à không ai c ướp được chúng khỏi tay t ôi. Cha t ôi, Đ ấng đã ban ch úng cho t ôi, thì lớn hơn tất cả, và không ai cướp được chúng khỏi tay Chúa Cha.",
        chuong: 30,
        loi_chua: [
            "Ga 10,27-29: Chiên của tôi thì nghe tiếng tôi; tôi biết chúng và chúng theo t ôi.",
        ],
    },
    {
        stt: 722,
        noi_dung: "Bé con lầm lẫn bao nhiêu lần, cha mẹ cứ thương vì biết đưá bé không có lòng xấu. Nó dốc lòng mãi và nó sa ngã mãi. Không hề gì! Chỉ cần thiện chí của nó. Mặc dù yêu cha mẹ, nhưng nó yếu đuối, không làm gì được: Con đừng dại nữa nghe con! … – Dạ – Con thương ba m á ngàn lần không? – Có – Vạn lần không? – Có – Triệu triệu lần không? – Có – Chúa chỉ cần thiện chí của con. Ơ n Chúa sẽ giúp con.",
        chuong: 30,
    },
    {
        stt: 723,
        noi_dung: "Khi cầu nguyện, con đừng ngại xin Chúa, nhưng cứ đơn sơ thành thật, như đứa bé: biết được yêu thương, nó xỏ tay vào túi áo cha, mở xách của mẹ để kiếm quà. Chúa không nói dụ ngôn đứa con xin cha bánh và cá sao? (x. Mt 7,9-10). để trong c ác nghi l ễ đó họ biết cầu nguyện chân thành; tùy theo ân sủng và nhu cầu của mỗi người các ngài hướng dẫn họ sống tinh thần cầu nguyện mỗi ngày thêm hoàn hảo hơn trong suốt đời sống.",
        chuong: 30,
        loi_chua: [
            "LM 5c: Các linh m ục còn dạy họ tham dự những buổi cử hành Phụng vụ Thánh,",
        ],
        tham_chieu: [
            "GH 41d; PV 12; LM 6b; DT 13c; TG 25b",
        ],
    },
    {
        stt: 724,
        noi_dung: "Con mệt quá, con cầm trí lâu không được, con chán nản. Không sao, miễn con yêu mến Chúa là đủ. Đ ứa bé chơi trước mặt cha m ẹ, ngồi trên chân cha m ẹ, hay nhìn cha m ẹ, hoặc ngủ ngon lành, cha mẹ cũng sung sướng nâng niu nó.",
        chuong: 30,
    },
    {
        stt: 725,
        noi_dung: "Trẻ con kh ông trốn tránh cha m ẹ, kh ông dối trá khi l ỡ lầm, hay l àm hư hỏng đồ vật trong nhà. Ngược lại, nó khóc và tìm cha m ẹ mà mách tội nó. Thay vì ti ếc của, trách phạt con, cha mẹ lại ẵm lấy, an ủi dỗ dành, qúy con hơn tiếc của. Con hãy khiêm tốn và thành thực với Chúa như vậy.",
        chuong: 30,
    },
    {
        stt: 726,
        noi_dung: "Cha mẹ xin kẹo của em bé, nó thu tay l ại, nó không cho, cha m ẹ năn nỉ, nó còn tiếc… Sau cùng, nó đưa tay ra, m ở tay dần dần và cho cha m ẹ. Cha mẹ vui mừng, hôn con vì nó đã quảng đại, thắng tính ích k ỷ và cho con th êm nữa. Chúa vui s ướng vì nh ững hy sinh nhỏ mọn của con.",
        chuong: 30,
    },
    {
        stt: 727,
        noi_dung: "Sống tinh thần con Chúa không phải là ủy mị, thụ động, nhưng là một linh đạo: Dễ dàng trong sự khó khăn, Đơ n sơ trong sự phức tạp, Dịu dàng trong sự cương quyết, Hùng dũng trong sự yếu đuối, Khôn ngoan trong sự điên dại. Quả thật, Ta b ảo các ngươi, nếu các ngươi không hoán cải mà nên như trẻ nhỏ, các ngươi sẽ không vào được Nước Trời (Mt 18,3). là luật chung c ũng như ràng buộc họ, và trong l úc nhờ đó mưu cầu những gì cần thiết để sống và hoạt động, họ hãy trút bỏ mọi âu lo quá đáng để cậy trông vào sự Quan Phòng của Cha trên trời (x. Mt 6,25).",
        chuong: 30,
        loi_chua: [
            "DT 13c: Trong chức vụ riêng của mỗi người, các tu sĩ phải cảm thấy luật làm việc",
        ],
        tham_chieu: [
            "MV 19a, 24a, 37d",
        ],
    },
    {
        stt: 728,
        noi_dung: "Tâm hồn trẻ con không biết căm thù: vừa bị cha mẹ sửa phạt, nó khóc lóc, nhưng quên liền, rồi lại thiu thiu ngủ trên tay vừa đánh phạt nó. Con hãy quên tất cả bực tức, ác cảm. Ở  trên tay dịu hiền của cha mẹ, con hạnh phúc quá rồi! ta lại càng phải tùng phục Cha tr ên trời để được sống. Cha tr ần thế sửa dạy chúng ta trong một thời gian ngắn, và theo sở thích của mình; còn Thiên Chúa sửa dạy là vì lợi ích của chúng ta, để chúng ta được thông phần vào sự thánh thiện của Người. Ngay lúc bị sửa dạy, thì chẳng ai lấy làm vui thú mà chỉ thấy buồn phiền. Nhưng sau đó, những người chịu rèn luyện như thế sẽ gặt được hoa trái là bình an và công chính.",
        chuong: 30,
        loi_chua: [
            "Dt 12,9-11: Chúng ta có cha trần thế sửa dạy mà chúng ta vẫn tôn kính, thì chúng",
        ],
    },
    {
        stt: 729,
        noi_dung: "Hãy bạo dạn vì chính ơn Chúa là điều kiện để nên thánh. Bạo dạn như trẻ thơ, vui tươi chấp nhận ý Chúa, sẵn sàng theo ý Chúa bất cứ đến đâu, yêu mến Chúa tận tình. Trẻ thơ sẵn sàng lên mặt trăng, tình nguyện đi phi thuy ền, miễn là có sự hiện diện của cha mẹ. . Người cất nhắc anh em khi đến thời Người đã định. Mọi âu lo, hãy trút cả cho Người, vì Người chăm sóc anh em.",
        chuong: 30,
        loi_chua: [
            "1Pr 5,6-7: Anh em hãy tự khiêm tự hạ dưới bàn tay uy quyền của Thiên Chúa, để",
        ],
        tham_chieu: [
            "Mt 18,3-4",
        ],
    },
    {
        stt: 730,
        noi_dung: "Tâm hồn trẻ thơ đây không phải là thơ ngây. Nhưng là yêu thương không giới hạn, phó thác cho cha m ẹ tất cả. Cha m ẹ bảo gì làm tất cả, theo cha m ẹ bỏ tất cả, tin t ưởng cha mẹ hơn tất cả. Hùng dũng, vững vàng, xứng đạo làm con Chúa.",
        chuong: 30,
    },
    {
        stt: 731,
        noi_dung: "Con trẻ không giữ gì riêng, ai cho gì, nó cũng giao cho cha mẹ. Hãy phó thác cho Chúa và Đ ức Mẹ, con sẽ được an toàn hạnh phúc.",
        chuong: 30,
    },
    {
        stt: 732,
        noi_dung: "Những công tác lớn lao nh ất của con n ào đáng gì đối với Chúa toàn năng, thế mà cả những việc nhỏ mọn nhất của con cũng có thể là những kỳ công, vì Chúa thấy lòng con. Chúa yêu thương con, như lòng cha mẹ hạnh phúc khi thấy đứa bé bước một bước, bập bẹ một tiếng.",
        chuong: 30,
    },
    {
        stt: 733,
        noi_dung: "Chúa Thánh Thể và Mẹ Maria là bí quyết sức mạnh con trên đường Hy vọng. Tất cả các tinh tú dù sáng láng, bao la đến đâu cũng không sánh với qủa đất nhỏ hẹp này được.",
        chuong: 30,
    },
    {
        stt: 734,
        noi_dung: "Thời gian là của Chúa, muôn vật là của Chúa, Ngài là Alpha và Ômêga, căn nguyên và cùng đích. Ngài toàn năng, cao c ả, nhưng đồng thời chăm sóc chim tr ời, cá biển, thú rừng, hoa đồng nội và đếm hết tóc trên đầu con; Chúa chỉ kể tình yêu. Bình an và hạnh phúc cho tâm hồn nhỏ bé biết khao khát yêu thương vô tận. kho; thế mà Cha anh em tr ên trời vẫn nuôi chúng. Anh em lại chẳng quý giá hơn chúng sao? con người, và cũng vì y êu thương mà luôn luôn bảo tồn con ng ười; hơn nữa con người chỉ sống hoàn toàn theo chân lý một khi tự ý nhìn nhận tình yêu ấy và phó thác cho Đ ấng tạo dựng mình.",
        chuong: 30,
        loi_chua: [
            "Mt 6,26: H ãy xem chim tr ời: ch úng kh ông gieo, kh ông g ặt, kh ông thu tích v ào",
            "MV 19a: Con người hiện hữu chỉ là do Thiên Chúa đã vì yêu thương nên tạo dựng",
        ],
        tham_chieu: [
            "GH 6b; MK 3; MV 2b, 24a, 38a; DT 13c",
        ],
    },
    {
        stt: 735,
        noi_dung: "Chúng ta quan niệm đường vào Nước Trời khó khăn, phức tạp quá! Chúa Giêsu chỉđặt một điều kiện: Quả thật, Ta bảo các ngươi, nếu các ngươi không hoán cải mà nên như trẻ nhỏ, các ngươi sẽ không vào được Nước Trời (Mt 18,3).",
        chuong: 30,
    },
    {
        stt: 736,
        noi_dung: "Nghe nói phó thác tất cả trong tay Ch úa, con đừng lo sợ. Không khó đâu! Mặc dù con không biết Chúa Kitô đưa con đi đâu, dành cho con nh ững bất ngờ gì, ch ỉ tin Ch úa là Cha của con, chừng ấy đủ rồi! (x. Mt 6,31-32). Bác ái, đồng phục của người Kitô hữu",
        chuong: 30,
        loi_chua: [
            " ",
        ],
    },
    {
        stt: 737,
        noi_dung: "Trước khi x ét đoán ai, con h ãy cầu nguyện rồi hãy làm như Chúa Giêsu trong tr ường hợp con. ai c ả. M à n ếu t ôi c ó x ét đoán, thì s ự x ét đoán c ủa t ôi v ẫn đúng s ự th ật, vì không phải chỉ có mình tôi, nhưng có tôi và Đ ấng đã sai tôi.",
        chuong: 31,
        loi_chua: [
            "Ga 8,15-16: Các ông xét đoán theo kiểu người phàm; phần tôi, tôi không xét đoán",
        ],
        tham_chieu: [
            "Ga 7,24",
        ],
    },
    {
        stt: 738,
        noi_dung: "Khi con đi công tác cho Đ ức Mẹ xa nh à con c ả cây số, chưa chắc con đã sống bác ái thật. Chừng nào con d ám công tác bên cạnh nhà con, đến với những người nghe th ấy con mỗi ngày, cha mới tin con bác ái thật!",
        chuong: 31,
    },
    {
        stt: 739,
        noi_dung: "Phàn nàn là một bệnh dịch hay l ây, triệu chứng: bi quan, m ất bình an, nghi ng ờ, mất nhuệ khí kết hiệp với Chúa.",
        chuong: 31,
    },
    {
        stt: 740,
        noi_dung: "Ký sổ vàng, mua v é số, cho áo quần cũ có khi đó chỉ là những việc bác ái để khỏi bị quấy rầy! Yêu thương mới là khó. Hãy để lòng con trong sổ vàng, trong vé số, trong gói quần áo cũ! cũng kh ông mi ễn c ưỡng, vì ai vui v ẻ d âng hi ến, thì được Thi ên Ch úa y êu thương.",
        chuong: 31,
        loi_chua: [
            "2Cr 9,7: Mỗi người hãy cho tuỳ theo quyết định của lòng mình, không buồn phiền,",
        ],
        tham_chieu: [
            "1Cr 16,14",
        ],
    },
    {
        stt: 741,
        noi_dung: "Tôi không làm việc bác ái được, vì t ôi không có tiền! Chỉ có tiền mới bác ái sao? – Bác ái b ằng n ụ c ười, b ác ái b ằng b ắt tay, b ác ái b ằng th ông c ảm, b ác ái b ằng th ăm viếng, bác ái bằng cầu nguyện. Thầy bảo thật anh em, người đó sẽ không mất phần thưởng đâu. chỉ được thực hiện trong c ác việc vĩ đại, nhưng trước hết trong nh ững hoàn cảnh thông thường của cuộc sống.",
        chuong: 31,
        loi_chua: [
            "Mc 9,41: Ai cho anh em uống một chén nước vì lẽ anh em thuộc về Đ ấng Kitô, thì",
            "MV 38a: Ngôi Lời Thiên Chúa cũng nhắc nhở cho biết đức bác ái ấy không phải",
        ],
        tham_chieu: [
            "Cv 12,5; 2Cr 9,14",
            "GH 40b; MV 27b, 78c; TĐ  8b",
        ],
    },
    {
        stt: 742,
        noi_dung: "Đ ừng đợi gần ch ết mới làm hoà với nhau. Đ ừng để gần ch ết mới phân phát c ủa c ải. Bác ái chẳng đặng đừng, Bác ái bất đắc dĩ. Con sẽ tiếc vì yêu thương quá chậm. được gặt, nếu không sờn lòng. Vậy bao lâu còn thời giờ, chúng ta hãy làm điều thiện cho m ọi người, nhất là cho nh ững anh em trong c ùng đại gia đình đức tin.",
        chuong: 31,
        loi_chua: [
            "Gl 6,9 -10: Khi l àm điều thiện, ch úng ta đừng nản chí, vì đến m ùa ch úng ta s ẽ",
        ],
    },
    {
        stt: 743,
        noi_dung: "Người ta không cần của con, không cần con cho, bằng cần con hiểu họ, thương họ! tôi để chịu thiêu đốt, mà không có đức mến, thì cũng chẳng ích gì cho tôi.",
        chuong: 31,
        loi_chua: [
            "1Cr 13,3: Giả như tôi có đem hết gia tài cơ nghiệp mà bố thí, hay nộp cả thân xác",
        ],
        tham_chieu: [
            "2Cr 12,14",
        ],
    },
    {
        stt: 744,
        noi_dung: "Đ ừng tức tối vì người ta ch ỉ trích con, h ãy cám ơn vì c òn bao nhi êu tồi tệ mà họ chưa nói.",
        chuong: 31,
    },
    {
        stt: 745,
        noi_dung: "Sống huynh đệ rất tốt đẹp, Chúa bảo: Đâ u có hai, ba ng ười họp lại nhân danh Ta, thì Ta ở giữa họ (Mt 18,20). Chúa biết khó nên Ngài đòi số tối thiểu, Ngài không đòi hơn hai hay ba.",
        chuong: 31,
    },
    {
        stt: 746,
        noi_dung: "Cuộc sống huynh đệ thử thách và nâng đỡ tình b ác ái như cây trên rừng che đỡ nhau khỏi ngã lúc gió bão. nâng đỡ những người yếu đuối, không có đức tin v ững mạnh, chứ không phải chiều theo s ở thích c ủa mình. M ỗi người chúng ta h ãy chiều theo s ở thích k ẻ khác, vì lợi ích của họ, và để xây dựng. Gl 6,2) v à tr ọng kính l ẫn nhau trong tinh th ần giao h ảo huynh đệ (x. Rm 12,10)… H ơn nữa, sự hiệp nhất huynh đệ loan b áo Chúa Kitô đã đến (x. Ga 13,35; 17,21) và phát sinh một năng lực tông đồ mãnh liệt.",
        chuong: 31,
        loi_chua: [
            "Rm 15,1-2: Bổn phận của chúng ta, nh ững người có đức tin v ững mạnh, là phải",
            "DT 15a: Là chi thể của Chúa Kitô, các tu sĩ hãy mang lấy gánh nặng của nhau (x.",
        ],
        tham_chieu: [
            "Ga 13,14-15; Rm12,10; Gl 6,2-5; 1Tx 5,14-15; 1Pr 4,8-10",
            "GM 28c, 30d; LM 8ac; DT 12b; NK 5a",
        ],
    },
    {
        stt: 747,
        noi_dung: "Con không lường được người say rượu có thể làm hại đến thế nào: đâm chém, đốt nhà, giết người… Khi con say vì đam mê hận thù, con càng mất sáng suốt hơn thế nữa. mà chẳng biết mình đi đâu, vì bóng tối đã làm cho mắt người ấy ra mù quáng.",
        chuong: 31,
        loi_chua: [
            "1Ga 2,11: Nh ưng ai gh ét anh em mình thì ở trong b óng tối và đi trong b óng tối",
        ],
        tham_chieu: [
            "Gc 4,1-3",
        ],
    },
    {
        stt: 748,
        noi_dung: "Chúa chỉ bắt các tông đồ mang m ột đồng phục rẻ tiền mà khó kiếm: Chính n ơi điều này mà mọi người sẽ biết các ngươi là môn đồ Ta: ấy là nếu các ngươi có lòng yêu mến lẫn nhau! (Ga 13,35).",
        chuong: 31,
    },
    {
        stt: 749,
        noi_dung: "Đâ u có tình yêu thương, ở đó có Thiên Chúa; đâu có thù ghét, ở đó có hoả ngục. chúng ta y êu th ương anh em. K ẻ kh ông y êu th ương, thì ở l ại trong s ự ch ết. Phàm ai gh ét anh em mình, ấy là kẻ sát nhân. Và anh em bi ết: không kẻ sát nhân nào có sự sống đời đời ở lại trong nó. huynh đệ của các tín hữu như họ đồng tâm nhất trí cộng tác cho đức tin Phúc âm và tỏ ra họ là dấu chỉ hiệp nhất.",
        chuong: 31,
        loi_chua: [
            "1Ga 3,14-15: Chúng ta bi ết rằng: chúng ta đã từ cõi chết bước vào cõi sống, vì",
            "MV 21e: Đ iều có thể làm chứng về sự hiện diện của Thiên Chúa hơn cả là đức ái",
        ],
        tham_chieu: [
            "1Ga 4,16; Gc 3,16",
            "GH 41g, 42a, 50b; TĐ  8bc",
        ],
    },
    {
        stt: 750,
        noi_dung: "Lấy lý do gi úp đỡ, khuyên bảo anh em, để dò chuyện bên này đem nói bên kia, đó là bác ái tình báo.",
        chuong: 31,
    },
    {
        stt: 751,
        noi_dung: "Trong một giây, bằng một chấm phết, bất cứ ai cũng có thể bôi nhọ bức họa vô giá của Raphael, đã tốn bao công phu thời giờ mới thực hiện nổi, nhưng ai làm lại được?",
        chuong: 31,
    },
    {
        stt: 752,
        noi_dung: "Chúa nói: Nếu ngươi dâng của lễ nơi bàn thờ, và ở đó nhớ ra anh em c ó điều bất bình với ngươi, hãy đặt của lễ đó trước bàn thờ, mà đi làm hoà với anh em ng ươi trước đã, rồi bấy giờ hãy đến mà dâng lễ vật của ngươi (Mt 5,23 -24). Còn con, con l àm ngược lại: cứ dâng lễ và phóng thanh cho mọi người biết, trừ ra gặp mặt đương sự. Tin mừng của con!",
        chuong: 31,
    },
    {
        stt: 753,
        noi_dung: "Con chủ trương phải đối thoại, nhưng con không chấp nhận ai nói trái ý con. Đó  là đối thoại có chương trình và giới hạn hay nói đúng hơn: hai người độc thoại. anh em, ch úng tôi đã mở rộng tấm lòng. Chúng tôi không hẹp hòi với anh em đâu, nhưng chính lòng dạ anh em hẹp hòi. Vậy anh em hãy đền đáp chúng tôi; tôi nói với anh em như nói với con cái: anh em cũng hãy mở rộng tấm lòng. nghĩ hoặc cùng một hành động với chúng ta trong vấn đề xã hội, chính trị hay cả tôn giáo nữa. Thực vậy, càng lấy sự nhân ái và yêu thương mà tìm hiểu sâu xa hơn những cách cảm nghĩ của họ, chúng ta c àng dễ dàng có thể đi tới đối thoại với họ hơn.",
        chuong: 31,
        loi_chua: [
            "2Cr 6,11-13: Thưa anh em người Cô-rin-tô, chúng tôi đã chân thành ngỏ lời với",
            "MV 28a: Cũng phải kính trọng và yêu thương những người không cùng một cảm",
        ],
        tham_chieu: [
            "MV 92c; GM 13b; Đ T 19b",
        ],
    },
    {
        stt: 754,
        noi_dung: "Con cho l à phi l ý, khi m ột lao c ông chỉ trích đòi dạy kỹ sư, kiến trúc sư xây cầu, làm nhà, một y công chỉ trích đòi hướng dẫn bác sĩ giải phẫu. Sao chính con lại chỉ trích cấp trên, nắm được nhiều yếu tố, có nhiều khả năng, nhiều kinh nghi ệm, nhiều cố vấn và nhiều ơn Chúa hơn con.",
        chuong: 31,
    },
    {
        stt: 755,
        noi_dung: "Hãy yêu thương nhau không bằng lời nói mà bằng việc làm. Hãy yêu thương nhau bằng tay mặt mà tay trái không biết. Các con hãy yêu mến nhau như Ta đã yêu mến các con (Ga 15,12). đầu môi chót lưỡi, nhưng phải yêu thương cách chân thật và bằng việc làm. nhu c ầu. Ở đâu có người thi ếu ăn, thiếu uống, thiếu mặc, thiếu nhà ở, thiếu thuốc men, thiếu việc làm, thiếu giáo dục, thiếu những phương tiện cần thiết để sống xứng danh con người, ở đâu có người bịđau khổ vì nghịch cảnh, ốm yếu, chịu cảnh lưu đày, tù ngục, thì ở đó bác ái Kitô giáo phải tìm gặp, ân cần săn sóc, ủi an v à xoa d ịu họ bằng những trợ giúp thích đáng. Thi h ành bổn phận này trước hết là bổn phận của những người giàu và các dân tộc giàu.",
        chuong: 31,
        loi_chua: [
            "1Ga 3,18: Hỡi anh em là những người con bé nhỏ, chúng ta đừng yêu thương nơi",
            "TĐ  8d: Ngày nay, hoạt động bác ái có thể phải nhằm tới tất cả mọi người và mọi",
        ],
        tham_chieu: [
            "GH 42b; MV 93; LM 9b",
        ],
    },
    {
        stt: 756,
        noi_dung: "Có loại bác ái ồn ào: Bác ái phóng thanh. Có loại bác ái kể công: Bác ái ngân hàng. Có loại bác ái nuôi người: Bác ái sở thú. Có loại bác ái khinh người: Bác ái chủ nhân. Có loại bác ái theo ý: Bác ái độc tài. Bác ái nhãn hiệu, bác ái giả hiệu. dữ, tha thiết với điều lành; thương mến nhau với tình huynh đệ, coi người khác trọng hơn mình.",
        chuong: 31,
        loi_chua: [
            "Rm 12,9-10: Lòng bác ái không được giả hình giả bộ. Anh em hãy gớm ghét điều",
        ],
        tham_chieu: [
            "Mt 16,2-4; 1Cr 13,4",
        ],
    },
    {
        stt: 757,
        noi_dung: "Lời bất công của người công chính vô cùng ác hại. Đó  là thuốc độc do tay b ác sĩ trao. Toa thuốc ấy càng truyền ra, càng giết người. những lời tốt đẹp, để xây dựng và làm ích cho người nghe.",
        chuong: 31,
        loi_chua: [
            "Ep 4,29: Anh em đừng bao giờ thốt ra những lời độc địa, nhưng nếu cần, hãy nói",
        ],
        tham_chieu: [
            "Gc 3,8-10",
        ],
    },
    {
        stt: 758,
        noi_dung: "Người tu hành chỉ còn một của riêng là danh tiếng. Ai phạm đến danh tiếng họ là ám sát họ.",
        chuong: 31,
    },
    {
        stt: 759,
        noi_dung: "Nếu con ch ỉ khen ng ười khen con, ch ỉ chấp nhận người không phản đối con, giao ti ếp với người đồng ý kiến với con, con không bác ái cũng không sáng suốt: mù dắt mù.",
        chuong: 31,
    },
    {
        stt: 760,
        noi_dung: "Cộng đoàn nào có một thánh tu h ành thì th ánh ấy hay l àm cho c ộng đoàn có nhiều thánh tử đạo.",
        chuong: 31,
    },
    {
        stt: 761,
        noi_dung: "Đ ặt mình v ào địa vị kẻ kh ác, con s ẽ thấy những l ời tuyên bố long tr ọng và vô trách nhiệm của con hớ hênh quá và con sẽ dè dặt dần.",
        chuong: 31,
    },
    {
        stt: 762,
        noi_dung: "Nói dễ, làm khó, ai cũng chê hiện tại, ai cũng tiếc quá khứ, ai cũng hoan nghênh chương trình của mình v ề tương lai. Nh ưng khi t ương lai c ủa con th ành hiện tại, con l ại cấm người ta phê bình!",
        chuong: 31,
    },
    {
        stt: 763,
        noi_dung: "Tính xấu của tôi, tôi cho là nhân đức. Thiện chí của anh em, tôi gọi là khuyết điểm.",
        chuong: 31,
    },
    {
        stt: 764,
        noi_dung: "Con không thiếu khuyết điểm, sao con tức tối và tấn công khuyết điểm của anh em? lòng nhân từ với mọi người.",
        chuong: 31,
        loi_chua: [
            "Tt 3,2-3: Đ ừng chửi bới ai, đừng hiếu chiến, nhưng phải hiền hoà, luôn luôn tỏ",
        ],
        tham_chieu: [
            "Mt 7,3-5",
        ],
    },
    {
        stt: 765,
        noi_dung: "Yêu người là trắc nghiệm chắc chắn nhất về lòng mến Chúa của con. người ấy là kẻ nói dối; vì ai không yêu thương người anh em mà họ trông thấy, thì không thể yêu mến Thiên Chúa mà họ không trông thấy. Đâ y là điều răn mà chúng ta đã nhận được từ Người: ai yêu mến Thiên Chúa, thì cũng yêu thương anh em mình. Cl 3,14; Rm 13,10), n ên đức ái chi ph ối mọi phương thế nên thánh, làm cho chúng hình thành và đạt được cùng đích. Vì thế, đức ái đối với Thiên Chúa và tha nhân là dấu chỉ người môn đệ chân chính của Chúa Kitô.",
        chuong: 31,
        loi_chua: [
            "1Ga 4,20-21: Nếu ai n ói: Tôi yêu mến Thiên Chúa mà lại ghét anh em mình,",
            "GH 42a: Đ ức ái là mối dây liên kết của sự trọn lành, là sự viên mãn của lề luật (x.",
        ],
        tham_chieu: [
            "1Ga 3,17; 4,7-8",
            "MV 24b, 72b; TĐ  8bc",
        ],
    },
    {
        stt: 766,
        noi_dung: "Yêu người không phải là vuốt ve nuông chiều họ, nhưng có lúc yêu người là làm phiền lòng họ, vì sự thật và vì lợi ích của họ. không hối tiếc. Mà giả như có hối tiếc - vì thấy rằng bức thư ấy đã làm cho anh em phải ưu phiền, tuy chỉ trong chốc lát,  thì nay t ôi lại vui mừng, không phải vì đã làm cho anh em phải ưu phiền, nhưng vì nỗi ưu phiền đó đã làm cho anh em hối cải. Thật thế, anh em đã phải ưu phiền theo ý Thiên Chúa, nên chúng tôi không làm thiệt hại gì cho anh em. dửng dưng với điều chân và thiện. Hơn thế nữa, chính đức ái thúc bách các môn đệ Chúa Kitô loan báo cho mọi người chân lý cứu rỗi.",
        chuong: 31,
        loi_chua: [
            "2Cr 7,8-9: Dù trong bức thư trước tôi có làm cho anh em phải ưu phiền, tôi cũng",
            "MV 28b: Đ ức ái và lòng nhân hậu không bao gi ờ cho ph ép chúng ta tr ở thành",
        ],
        tham_chieu: [
            "Ep 4,15",
            "MV 92d; LM 6a; HN 11a; TD 11b, 14d",
        ],
    },
    {
        stt: 767,
        noi_dung: "Chúa Giêsu không dạy yêu người bằng tình c ảm, vì Ch úa dạy con y êu cả kẻ nghịch của con. Y êu là thành thực muốn sự lành cho h ọ và làm tất cả để họ được hạnh phúc. Đ iều ấy đòi buộc con phải hoàn toàn quên mình. là tốt. Trái lại, kẻ thù ngươi có đói, hãy cho nó ăn; có khát, hãy cho nó uống; làm như vậy, ngươi sẽ chất than h ồng lên đầu nó. Đ ừng để cho s ự ác thắng được mình, nhưng hãy lấy thiện mà thắng ác. và giáo lý ấy nới rộng giới răn yêu thương đối với tất cả kẻ thù, đó chính l à giới răn trong Lu ật Mới: Các ngươi có nghe l ời truyền dạy hãy thương yêu thân nhân và ghét thù địch mình. Còn Ta, Ta dạy các ngươi: hãy thương yêu kẻ thù nghịch mình, cứ làm ơn cho kẻ ghét mình, lại cầu nguyện cho những người bắt bớ vu vạ cho ngươi nữa (Mt 5,43-44).",
        chuong: 31,
        loi_chua: [
            "Rm 12,17.20-21: Đ ừng lấy ác báo ác, hãy chú tâm vào những điều mọi người cho",
            "MV 28c: Giáo lý của Chúa Kitô cũng đòi chúng ta phải tha thứ những xúc phạm",
        ],
        tham_chieu: [
            "Mt 5,43tt; 1Tx 5,15; 1Pr 3,8-9",
            "MV 28a, 32c; TG 12a, 15b",
        ],
    },
    {
        stt: 768,
        noi_dung: "Con phải là món quà trong tay Ch úa, sẵn sàng để Chúa tặng cho bất kỳ ai. Một món quà mà ai cũng quý yêu thèm muốn.",
        chuong: 31,
    },
    {
        stt: 769,
        noi_dung: "Sự lầm lạc lớn nhất là không biết những người khác là Chúa Kitô. Có nhiều người tận thế mới vỡ lẽ! trong những người bé nhỏ nhất đây, là các ngươi đã không làm cho chính Ta vậy.",
        chuong: 31,
        loi_chua: [
            "Mt 25,45: Ta b ảo thật các ngươi: mỗi lần các ngươi không làm như thế cho m ột",
        ],
        tham_chieu: [
            "Mt 10,40; 18,5",
        ],
    },
    {
        stt: 770,
        noi_dung: "Trong cá tính nh ân cách mỗi người, không có hai ng ười giống nhau. Đ ừng vơ đũa cả nắm. Đ ời người kh ông phải là cuộn b ăng cát-xét đã được sang t ừng xê-ri giống nhau.",
        chuong: 31,
    },
    {
        stt: 771,
        noi_dung: "Chúng ta phải biết cám ơn lẫn nhau: Người nhận: vì được yêu thương giúp đỡ. Người cho: vì được dịp lớn lên trong tình yêu.",
        chuong: 31,
    },
    {
        stt: 772,
        noi_dung: "Tại sao ngày nào con cũng lập toà án và bắt anh em con diễn hành lần lượt qua đó? Tại sao lúc nào cha cũng thấy con ngồi ghế quan toà, không bao giờ ngồi băng bị can? đoán thế nào, thì anh em c ũng sẽ bị Thiên Chúa xét đoán như vậy; và anh em đong đấu nào, thì Thiên Chúa cũng sẽ đong đấu ấy cho anh em. bởi vậy Ngài ngăn cấm chúng ta x ét đoán tội lỗi bên trong c ủa bất cứ người nào.",
        chuong: 31,
        loi_chua: [
            "Mt 7,1-2: Anh em đừng xét đoán, để khỏi bị Thiên Chúa xét đoán, vì anh em x ét",
            "MV 28b: Chỉ có mình Thiên Chúa là quan toà và là Đ ấng thấu suốt mọi tâm hồn:",
        ],
        tham_chieu: [
            "Rm 2,1-3; 14,13",
            "HN 4b, 7b",
        ],
    },
    {
        stt: 773,
        noi_dung: "Thay nụ cười ngoại giao của con bằng nụ cười chân thành Kitô hữu. với người thân cận, vì chúng ta là phần thân thể của nhau.",
        chuong: 31,
        loi_chua: [
            "Ep 4,25: Một khi đã cởi bỏ sự gian dối, mỗi người trong anh em h ãy nói sự thật",
        ],
    },
    {
        stt: 774,
        noi_dung: "Các việc từ thiện, xã hội rất cần và rất tốt, nhưng với thời đại nguyên tử, có thể nói được rằng: chúng ta chưa yêu thương đích thực, khi chúng ta chưa dấn thân đòi hỏi, sáng tạo, biến đổi những cơ cấu ngăn chặn sự giải phóng con người, để làm cho con ng ười sống người hơn. Cũng vậy, tất cả cái gì con ng ười làm để đạt tới một mức độ công bình cao hơn, một tình huynh đệ rộng lớn hơn và một trật tự nhân đạo hơn trong c ác tương quan x ã hội, đều qúy trọng hơn các tiến bộ kỹ thuật, bởi vì, các tiến bộ ấy tuy có thể cung cấp chất liệu cho việc thăng tiến con người, nhưng tự chúng mà thôi không thể thực hiện được công việc thăng tiến ấy.",
        chuong: 31,
        loi_chua: [
            "MV 35a: Gi á trị con ng ười hệ tại ở cái mình l à hơn hệ tại ở cái mình c ó.",
        ],
        tham_chieu: [
            "MV 25a, 26c, 27a, 78b; TĐ  6a, 7, 8",
        ],
    },
    {
        stt: 775,
        noi_dung: "Nếu Thiên Chúa chỉ dạy mến Chúa thì hay quá! Nhưng Ngài thêm luật yêu người, cũng trọng bằng luật mến Chúa thì vô cùng rắc rối, phức tạp cho nhiều người!",
        chuong: 31,
    },
    {
        stt: 776,
        noi_dung: "Tại sao con ghi khắc khuyết điểm của anh em vào bia đá, còn tội lỗi của con thì viết trên cát? con mắt của mình thì lại không để ý tới?",
        chuong: 31,
        loi_chua: [
            "Mt 7,3: Sao anh th ấy cái rác trong con m ắt của người anh em, m à cái xà trong",
        ],
    },
    {
        stt: 777,
        noi_dung: "Môi trường đòi buộc con thinh lặng hoạt động, con cứ thích nghi theo m ôi trường và đi đến đâu con hãy gieo rắc tình yêu. Con sẽ ngạc nhiên, vì một ngày kia, nhìn lại những nơi con đã đi qua, h ạt giống tình y êu đã n ặng tr ĩu gấp m ười, g ấp tr ăm, nơi t âm h ồn những người Chúa Quan phòng định cho gặp con trên đường hy vọng.",
        chuong: 31,
    },
    {
        stt: 778,
        noi_dung: "Hạnh phúc cho một huynh đệ đoàn là gì? Là: Phúc cho những kẻ bị bắt bớ vì sự công chính (Mt 5,10). Đúng vậy! Đâ y là một cuộc bắt bớ có tổ chức, có thời khoá biểu, có luật lệ, nhưng sự bắt bớ này đem lại ơn cứu chuộc, vì đặt con trong ý nghĩa của lịch sử và của Hội thánh là xã hội hoá trần gian.",
        chuong: 31,
    },
    {
        stt: 779,
        noi_dung: "Một huynh đệ đoàn đích thực l à m ột c ộng đoàn hi ệp nhất; n ó kh ông nguyên t ử h oá, nhưng ngược lại nhân vị hoá con người. ủi, nếu tình bác ái khích lệ chúng ta, nếu chúng ta được hiệp thông trong Thần Khí, nếu chúng ta sống thân tình và biết cảm thương nhau, thì xin anh em h ãy làm cho ni ềm vui c ủa tôi được trọn vẹn, là hãy có cùng một cảm nghĩ, cùng một lòng mến, cùng một tâm hồn, cùng một ý hướng như nhau. chính việc xã hội hoá lại tạo thêm những liên hệ mới, tuy nhiên, những liên hệ mới ấy không phải lúc nào cũng giúp nhân vị trưởng thành một cách thích hợp, hoặc thăng hoa những tương quan nhân vị (nhân vị hoá).",
        chuong: 31,
        loi_chua: [
            "Pl 2,1-2: Nếu quả thật sự liên kết với Đ ức Kitô đem lại cho chúng ta một niềm an",
            "MV 6e: Nh ững liên hệ của con ng ười với đồng loại cứ tăng thêm mãi, đồng thời",
        ],
        tham_chieu: [
            "Rm 12,10; 1Cr 1,10; 2Cr 13,11",
            "GH 28b; MV 25a, 29a; TĐ  8e",
        ],
    },
    {
        stt: 780,
        noi_dung: "Ngày xưa tu đức là ăn chay, đánh tội, thức khuya, dậy sớm, sống thinh lặng. Ngày nay tu đức là sống giữa huynh đệ đoàn: hội họp, trao đổi, hợp tác… kia sống y êu th ương v à làm nh ững vi ệc t ốt. Ch úng ta đừng b ỏ c ác bu ổi hội họp, như vài người quen làm; trái lại, phải khuyến khích nhau, nhất là khi anh em thấy Ngày Chúa đến đã gần. thiết hơn, vì trong th ời đại chúng ta, b ởi nhiều lý do, c ác công cuộc tông đồ không những cần phải mang rất nhiều hình thức khác nhau, nhưng thật ra còn cần phải vượt khỏi giới hạn giáo xứ hay gi áo phận. Vậy, không một linh m ục nào có thể chu toàn đầy đủ sứ mệnh của mình một cách lẻ loi và hầu như riêng rẽ, nhưng phải hiệp sức với các linh m ục khác, dưới sự điều khiển của các vị lãnh đạo trong Giáo hội.",
        chuong: 31,
        loi_chua: [
            "Dt 10,24-25: Chúng ta hãy để ý đến nhau, làm sao cho người này thúc đẩy người",
            "LM 7c: Ngày nay, sự hiệp nhất giữa các Linh mục và các Giám mục lại càng khẩn",
        ],
        tham_chieu: [
            "GH 28e; MV 25a, 30b, 43b, 89a",
        ],
    },
    {
        stt: 781,
        noi_dung: "Mỗi chiều tối, trước lúc lên giường ngủ, con phải nói được rằng: Suốt ngày hôm nay, tôi đã yêu thương.",
        chuong: 31,
    },
    {
        stt: 782,
        noi_dung: "Những ai t ổ chức vu c áo, thoá mạ, xúi giục căm thù, chống đối, dù với mục đích nào, cũng không che dấu được tính cách phản Phúc âm, vì Chúa là tình yêu.",
        chuong: 31,
    },
    {
        stt: 783,
        noi_dung: "Hãy lấy một tờ giấy và bình tĩnh viết trên đó đức tính của người mà con bất bình, con sẽ thấy họ không hoàn toàn xấu như con nghĩ từ đầu.",
        chuong: 31,
    },
    {
        stt: 784,
        noi_dung: "Sao con tr ách móc khi ng ười ta ph ụ ơn con? C ông nghiệp của con m ất đi sao? Hay l à con bắt Chúa cám ơn con?Những gì các ngươi đã làm cho một người trong các anh em hèn mọn nhất này của Ta, là các ngươi đã làm cho chính mình Ta (Mt 25,40). thôi, vì kẻ ấy là môn đệ của Thầy, thì Thầy bảo thật anh em, người đó sẽ không mất phần thưởng đâu.",
        chuong: 31,
        loi_chua: [
            "Mt 10,42: Ai cho m ột trong nh ững kẻ bé nhỏ này uống, dù chỉ một chén nước lã",
        ],
    },
    {
        stt: 785,
        noi_dung: "Tại sao c on hà tiện một tiếng khen? Ti ếc nuối một nụ cười, một siết tay v ới người ta? Bao nhiêu người không cần bạc tiền, chỉ cần lòng con.",
        chuong: 31,
    },
    {
        stt: 786,
        noi_dung: "Nếu các công việc từ thiện xã hội của con không phải vì Chúa, thì con chỉ là nhân viên của một chi nhánh Hồng thập tự. cho thiên hạ thấy. Bằng không, anh em s ẽ chẳng được Cha của anh em, Đ ấng ngự trên trời, ban thưởng. Vậy khi bố thí, đừng có khua chiêng đánh trống, như bọn đạo đức gi ả th ường bi ểu di ễn trong h ội đường v à ngo ài ph ố x á, c ốt để người ta khen. Thầy bảo thật anh em, chúng đã được phần thưởng rồi. cho Chúa Giêsu Kitô; các ngài hợp tác với giáo dân và cùng với họ, xử sự theo gương Thầy, Đ ấng đến ở giữa mọi người không để được phục vụ, nhưng để phục vụ và hiến mạng sống mình thay cho nhiều người (Mt 20,28).",
        chuong: 31,
        loi_chua: [
            "Mt 6,1-2: Khi làm việc lành phúc đức, anh em phải coi chừng, chớ có phô trương",
            "LM 9b: Các linh mục phải lãnh đạo làm sao để không tìm tư lợi, nhưng tìm lợi ích",
        ],
        tham_chieu: [
            "GH 42a; LM 15a; TĐ  8ae",
        ],
    },
    {
        stt: 787,
        noi_dung: "Bác ái không có biên giới, nếu có biên giới không phải là bác ái nữa. tộc, hoàn cảnh xã hội hay tôn giáo; bác ái không cầu mong một lợi ích hay một sự tri ân nào.",
        chuong: 31,
        loi_chua: [
            "TG 12a: B ác ái Kitô giáo thực sự lan tr àn tới mọi người không phân biêt chủng",
        ],
        tham_chieu: [
            "MV 28ac, 32c; TG 15b",
        ],
    },
    {
        stt: 788,
        noi_dung: "Khi con giúp ai điều gì, phải hết sức bác ái, để người thụ ân tha thứ cho con cái nhục họ chịu khi nhận của con. bố thí được kín đáo. Và Cha của anh, Đ ấng thấu suốt những gì kín đáo, sẽ trả lại cho anh.",
        chuong: 31,
        loi_chua: [
            "Mt 6,3-4: Còn anh, khi bố thí, đừng cho tay trái biết việc tay phải làm, để việc anh",
        ],
    },
    {
        stt: 789,
        noi_dung: "Thường Chúa Gi êsu làm phép lạ rồi dặn đừng cho ai bi ết. C ó nhiều người ch ưa l àm phép lạ mà đã cho mọi người biết mình bác ái.",
        chuong: 31,
    },
    {
        stt: 790,
        noi_dung: "Đ ừng phàn nàn cà phê đắng, chỉ tại đường của con không ngọt đủ.",
        chuong: 31,
    },
    {
        stt: 791,
        noi_dung: "Một bộ máy dù tinh vi và kiên cố đến đâu, nếu các bộ phận khô dầu cũng hư hỏng. Hãy rót dầu bác ái của con vào để máy chạy điều hoà không sứt mẻ.",
        chuong: 31,
    },
    {
        stt: 792,
        noi_dung: "Bác ái là nối dài tình yêu Thiên Chúa đối với nhân loại. bằng chính tình bác ái mà Thiên Chúa đã yêu chúng ta và muốn chúng ta cũng yêu thương nhau bằng tình bác ái đó.",
        chuong: 31,
        loi_chua: [
            "TG 12a: Sự hiện diện của các Kitô hữu giữa các nhóm người phải được tác động",
        ],
        tham_chieu: [
            "GH 42a; MV 24c, 72b; TĐ  8b",
        ],
    },
    {
        stt: 793,
        noi_dung: "Con phải nói được cách thành thực rằng: Tôi không xem ai là kẻ nghịch của tôi, kể cả những người căm thù tôi nhất, những người bắt bớ tôi, thề không đội trời chung với tôi. Tôi luôn luôn xem họ là anh em tôi.",
        chuong: 31,
    },
    {
        stt: 794,
        noi_dung: "Con tốt, người ta nói con xấu, con vẫn tốt. Con nghèo, người ta khen con gi àu, con vẫn nghèo. Tại sao con lên ký và sút ký theo dư luận. quỷ ám. Con Người đến, cũng ăn cũng uống như ai, thì thiên hạ lại bảo: Đâ y là tay ăn nhậu, bạn bè với quân thu thuế và phường tội lỗi. Nhưng đức Khôn Ngoan được chứng minh bằng hành động.",
        chuong: 31,
        loi_chua: [
            "Mt 11,18-19: Ông Gio-an đến, không ăn không uống, thì thiên hạ bảo: Ông ta bị",
        ],
    },
    {
        stt: 795,
        noi_dung: "Người ta thu ê đăng báo để tâng bốc nh ững tài năng tưởng tượng c ủa mình, để tuyên truyền cho mình nh ững công trạng bịa đặt, để chụp mũ đối phương những tội ác dựng đứng. Con cũng muốn mà mắt Thiên Chúa như thế sao?",
        chuong: 31,
    },
    {
        stt: 796,
        noi_dung: "Tu sĩ sống thánh nhờ nhiều việc đạo đức riêng: ăn chay, hãm mình, luật dòng, tĩnh tâm. Giáo dân chỉ có một phương thế: sống thánh là bác ái.",
        chuong: 31,
    },
    {
        stt: 797,
        noi_dung: "Bác ái là tu đức liên lỉ: tu miệng lưỡi, tu quả tim, tu l ỗ tai, tu con m ắt, tu lá gan, tu b ộ óc… T ất cả con người con vẫy vùng, nhưng con phản ứng yêu thương, như Chúa Giêsu. yêu thương, và hãy sống trong tình bác ái, như Đ ức Kitô đã yêu thương chúng ta, và vì chúng ta, đã tự nộp mình làm hiến lễ, làm hy lễ dâng lên Thiên Chúa tựa hương thơm ngào ngạt.",
        chuong: 31,
        loi_chua: [
            "Ep 5,1-2: Anh e m hãy bắt chước Thiên Chúa, vì anh em l à con c ái được Người",
        ],
        tham_chieu: [
            "Pl 2,5",
        ],
    },
    {
        stt: 798,
        noi_dung: "Trong nhà Cha Ta c ó nhiều chỗ ở (Ga 14,2). L ời Chúa rất là thấm thiá! Con hãy đối xử với mỗi người khác nhau, kính tr ọng từng tâm hồn. Đ ừng xem con ng ười như một con số, một khối lượng, cộng lại là ra đáp số! Đ ối với con người không phải hai cộng hai là bốn luôn. Hai quả dưa với hai quả dưa có lúc là bốn ký, nhưng có lúc phải sáu quả mới được bốn ký. cần phải nhìn nhận nơi tha nhân hình ảnh Thiên Chúa vì họ đã được dựng nên giống hình ảnh Ngài và nhìn nhận nơi họ chính Chúa Kitô, bởi vì bất cứ sự gì được tặng cho ng ười nghèo là đã thực sự được dâng cho Ng ười. Phải hết sức tế nhị tôn trọng tự do và nhân phẩm của người được trợ giúp. Đ ừng làm hoen ố ý hướng ngay l ành vì mưu c ầu tư lợi hay vì m ột tham v ọng thống trị nào. Phải thoả mãn những đòi hỏi công bình tr ước đã kẻo những tặng phẩm đem cho tưởng là vì bác ái, mà thực ra phải đền trả vì đức công bằng. Phải loại trừ không những hậu quả mà cả nguyên nhân gây nên sự dữ. Phải tổ chức giúp đỡ sao cho những người được trợ giúp dần dần thoát khỏi sự lệ thuộc người khác và có thể tự túc.",
        chuong: 31,
        loi_chua: [
            "TĐ  8e: Đ ể thực thi b ác ái mà không bị chỉ trích v à để tỏ ra l à bác ái đích thực,",
        ],
        tham_chieu: [
            "MV 26c, 27a, 28b; DT 14c",
        ],
    },
    {
        stt: 799,
        noi_dung: "Bác ái liên kết con ng ười thành một cộng đồng làm phát sinh nh ững mối tương quan mới. Có tương quan mới, sẽ có thế giới mới.",
        chuong: 31,
    },
    {
        stt: 800,
        noi_dung: "Bác ái không phải chỉ có yêu thương và tha thứ. Bác ái là cả một hành động để tạo một bầu không khí mới giữa cộng đồng làng xã, cộng đồng quốc gia, công đồng quốc tế. kiên chứ không hẹp hòi, nghĩa là làm sao để đồng thời vẫn quan t âm đến ích lợi của toàn thể gia đình nhân loại, một gia đình được liên kết lại bằng nhiều ràng buộc giữa các nòi giống, chủng tộc và quốc gia.",
        chuong: 31,
        loi_chua: [
            "MV 75d: Công dân phải nung nấu tinh thần ái quốc với lòng đại lượng và trung",
        ],
        tham_chieu: [
            "GH 36b; MV 26a, 82b",
        ],
    },
    {
        stt: 801,
        noi_dung: "Biến thế giới của thú vật nên thế giới của con người, biến thế giới của con người nên thế giới của con Chúa.",
        chuong: 31,
    },
    {
        stt: 802,
        noi_dung: "Không ghét ai chưa đủ, thương người chưa đủ, giúp người chưa đủ. Hiệp nhất trong tình yêu và hành động mới đủ. Chúa Giêsu cầu xin: … Đ ể hết thảy chúng nên một, cũng như, lạy Cha, Cha ở trong Con và Con ở trong Cha (Ga 17,21). cả anh em h ãy nhất trí với nhau trong l ời ăn tiếng nói, và đừng để có sự chia rẽ giữa anh em, nhưng hãy sống hoà thuận, một lòng một ý với nhau. Giáo hội ở trong Chúa Kitô như bí tích, nghĩa là dấu chỉ và khí cụ, của sự  kết hợp mật thiết với Thiên Chúa và của sự hiệp nhất toàn thể nhân loại. Như thế, chính Gi áo h ội b ày t ỏ cho th ế gi ới bi ết r ằng s ự hi ệp nh ất b ên ngo ài trong phạm vi x ã hội bắt nguồn từ sự hiệp nhất tâm trí, ngh ĩa là từ đức tin v à đức mến, căn bản hiệp nhất bất khả phân ly của Giáo hội trong Chúa Thánh Thần. Sinh lực mà Giáo hội có thể chuyển thông cho x ã hội nhân loại ngày nay l à đức tin v à đức mến ấy, được thể hiện trong cuộc sống, chứ không phải do thế lực bên ngoài dựa vào những phương thế hoàn toàn nhân loại.",
        chuong: 31,
        loi_chua: [
            "1Cr 1,10: Thưa anh em, nhân danh Đ ức Giêsu Kitô, Chúa chúng ta, tôi khuyên tất",
            "MV 42c: Việc cổ võ hiệp nhất phù hợp với sứ mệnh sâu xa của Giáo hội, vì chính",
        ],
        tham_chieu: [
            "Rm 15,5-6; Ep 4,2-4; Pl 2,1-4",
            "GH 7c; MV 24c; GM 6a; LM 8a; HN 12",
        ],
    },
    {
        stt: 803,
        noi_dung: "Chúa Giêsu bị bỏ rơi trên Thánh giá, Chúa Giêsu còn bị bỏ rơi trong m ỗi anh em đau khổ khắp nơi trên thế giới. mà chẳng động lòng thương, thì làm sao tình yêu Thiên Chúa ở lại trong người ấy được ? răn riêng của Người và mặc cho nó một ý nghĩa mới phong phú hơn, khi Người muốn đồng hoá mình v ới anh em như chính đối tượng của bác ái, Người nói: Bao nhiêu lần các ngươi làm những việc đó cho một trong nh ững người hèn mọn là anh em Ta đây, tức là các ngươi làm cho Ta vậy (Mt 25,40). Vì thế, Giáo hội đặc biệt đề cao lòng xót thương đối với người nghèo đói, bệnh tật cũng như những công trình mệnh danh là từ thiện và tương trợ để xoa dịu mọi nỗi thống khổ của nhân loại.",
        chuong: 31,
        loi_chua: [
            "1Ga 3,17: N ếu ai c ó của cải thế gian v à thấy anh em mình l âm cảnh túng thiếu,",
            "TĐ  8bc: Ch úa Kitô đã làm cho gi ới răn bác ái đối với tha nh ân thành một giới",
        ],
        tham_chieu: [
            "GH 8c; MV 27b, 90c; TĐ  31e; TG 12a",
        ],
    },
    {
        stt: 804,
        noi_dung: "Ngày tận thế Chúa phán xét về đức ái, không phải về các thành công vĩđại. những kẻ Cha Ta chúc phúc, hãy đến thừa hưởng Vương Quốc dọn sẵn cho các ngươi ngay t ừ thuở tạo thiên lập địa. Vì x ưa Ta đói, các ngươi đã cho ăn; Ta khát, các ngươi đã cho uống; Ta là khách lạ, các ngươi đã tiếp rước; Ta trần truồng, các ngươi đã cho mặc; Ta đau yếu, các ngươi đã thăm viếng; Ta ngồi tù, các ngươi đến hỏi han.",
        chuong: 31,
        loi_chua: [
            "Mt 25,34-36: Bấy giờ Đ ức Vua sẽ phán cùng những người ở bên phải rằng: Nào",
        ],
    },
    {
        stt: 805,
        noi_dung: "Đ ừng đê hèn nói xấu người vắng mặt. Hãy nói như thể lời con được ghi âm, hành động như thể cử chỉ con được chụp hình. anh em mình là nói xấu và xét đoán Lề Luật. Nếu anh xét đoán Lề Luật, thì anh không còn là kẻ vâng giữ, mà là kẻ xét đoán Lề Luật. Chỉ có một Đ ấng ra Lề Luật và xét xử, đó là Đ ấng có quyền cứu thoát và tiêu diệt. Còn anh l à ai m à dám xét đoán người thân cận?",
        chuong: 31,
        loi_chua: [
            "Gc 4,11-12: Thưa anh em, anh em đừng nói xấu nhau. Ai n ói xấu hoặc xét đoán",
        ],
    },
    {
        stt: 806,
        noi_dung: "Nếu không triệt để thi hành chúc thư của Chúa Giêsu, là sống bác ái, thì con là đưá con bất hiếu vô phúc nhất. Thực hiện cách phi thường những việc tầm thường",
        chuong: 31,
        loi_chua: [
            "Ga 14,15: Nếu anh em yêu mến Thầy, anh em sẽ giữ các điều răn của Thầy.",
            " ",
        ],
    },
    {
        stt: 807,
        noi_dung: "Việc nhỏ, lòng nhỏ; việc lớn, lòng lớn; Việc lớn, lòng nhỏ; việc nhỏ, lòng lớn. Con hãy thực hành cách sau hết. Trung tín trong việc lớn, dễ; trung tín trong việc nhỏ, khó. Chúa khen kẻ thực hành cách sau này. lương trong việc rất nhỏ, thì cũng bất lương trong việc lớn.",
        chuong: 32,
        loi_chua: [
            "Lc 16,10: Ai trung tín trong vi ệc rất nhỏ, thì cũng trung tín trong vi ệc lớn; ai bất",
        ],
    },
    {
        stt: 808,
        noi_dung: "Theo mắt thế gian, công việc của Đ ức Mẹ rất tầm thường: giúp đỡ bà Isave, lo lắng cho Chúa Giêsu ở máng cỏ, chu toàn bổn phận ở Nagiarét, đi chầu lễ ở Giêrusalem, chôn cất thánh Giuse, chịu sỉ nhục đau đớn ở Calvariô. Dưới mắt siêu nhiên, đời Đ ức Mẹ phi th ường: Mẹ đã làm tất cả những việc ấy vì y êu mến Chúa Giêsu. tách rời khỏi động lực siêu nhiên của cuộc sống, theo lời Thánh Tông đồ: Hết thảy công việc anh em l àm trong l ời nói, hay vi ệc làm, hãy nhân danh Ch úa Giêsu Kitô mà thực hành, nhờ Người để cảm tạ Chúa Cha là Thiên Chúa (Cl 3,17).",
        chuong: 32,
        loi_chua: [
            "TD 4a: Những việc trong gia đình cũng như những việc ngoài xã hội không được",
        ],
        tham_chieu: [
            "GH 34b; 41g",
        ],
    },
    {
        stt: 809,
        noi_dung: "Ẵ m đứa bé là chuyện thường, nhưng được mẹ ẵm, đối với em bé là hạnh phúc lớn nhất mà em không chịu đổi với bất cứ giá nào.",
        chuong: 32,
    },
    {
        stt: 810,
        noi_dung: "Bí quyết của đời tôi: chấp nhận tất cả với tâm hồn đơn sơ, có vài tư tưởng tầm thường, nhưng sinh ảnh hưởng sâu rộng (Gioan XXIII).",
        chuong: 32,
    },
    {
        stt: 811,
        noi_dung: "Không có công việc nào hèn hạ, chỉ có tâm hồn hèn hạ.",
        chuong: 32,
    },
    {
        stt: 812,
        noi_dung: "Với tâm hồn cao c ả, việc tầm thường hoá ra cao c ả: Ai cho m ột bát nước lã vì danh Chúa sẽ được thưởng trên Thiên đàng. thôi, vì kẻ ấy là môn đệ của Thầy, thì Thầy bảo thật anh em, người đó sẽ không mất phần thưởng đâu.",
        chuong: 32,
        loi_chua: [
            "Mt 10,42: Ai cho m ột trong nh ững kẻ bé nhỏ này uống, dù chỉ một chén nước lã",
        ],
    },
    {
        stt: 813,
        noi_dung: "Muốn được phong thánh, phải chứng minh có nhân đức anh hùng. Bền chí làm những việc tầm thường suốt cả cuộc đời vì mến Chúa hẳn là anh hùng, Thánh Têrêxa Hài đồng đã làm như thế.",
        chuong: 32,
    },
    {
        stt: 814,
        noi_dung: "Muốn n ên thánh, con h ãy làm nh ững việc t ầm thường, c ó khi xem ra v ô nghĩa nh ất, nhưng hãy đặt vào đó tất cả niềm mến yêu của con. phần vào ân sủng thuộc chức vụ Giám mục, nhờ Kitô, Đ ấng Trung Gian v ĩnh cửu duy nh ất; cũng như hàng Giám mục, các linh m ục phải gia t ăng tình y êu Thiên Chúa và tha nhân bằng việc thi hành nhiệm vụ hằng ngày; các ngài phải gìn giữ mối giây liên lạc giữa hàng linh mục, phải được dư đầy của cải thiêng liêng, ph ải l à nh ững ch ứng nh ân s ống động c ủa Thi ên Ch úa tr ước m ặt m ọi người, và thi đua với những vị linh m ục mà qua c ác thế hệ, đã để lại những chứng tá thánh thiện sáng ngời trong những việc phục vụ thường khiêm tốn và kín đáo.",
        chuong: 32,
        loi_chua: [
            "1Cr 16,14: Hãy làm mọi sự vì đức ái.",
            "GH 41c: C ác linh m ục kết thành vòng hoa thi êng của hàng Giám mục và thông",
        ],
        tham_chieu: [
            "MV 34b; LM 14ab",
        ],
    },
    {
        stt: 815,
        noi_dung: "Tìm việc l ớn, khinh vi ệc nh ỏ, con s ẽ lạc đường Hy v ọng, vì Ch úa h ưá cho nh ững ai trung thành trong việc nhỏ được vào hưởng sự vui mừng của Ngài. thành! Đư ợc giao ít mà anh đã trung thành, thì tôi sẽ giao nhiều cho anh. Hãy vào mà hưởng niềm vui của chủ anh!",
        chuong: 32,
        loi_chua: [
            "Mt 25,21: Ông ch ủ n ói v ới ng ười ấy: Khá l ắm! h ỡi đầy t ớ t ài gi ỏi v à trung",
        ],
        tham_chieu: [
            "Lc 19,17",
        ],
    },
    {
        stt: 816,
        noi_dung: "Nhìn cây cổ thụ sum su ê, con đừng quên rằng, từng trăm năm trước, nó đã khởi sự từ một hạt giống tí tí. ruộng mình. Tuy n ó là loại nhỏ nhất trong tất cả các hạt giống, nhưng khi lớn lên, thì lại là thứ lớn nhất; nó trở thành cây, đến nỗi chim trời tới làm tổ trên cành được.",
        chuong: 32,
        loi_chua: [
            "Mt 13,31-32: Nước Trời cũng giống như chuyện hạt cải người nọ lấy gieo trong",
        ],
    },
    {
        stt: 817,
        noi_dung: "Tự nhiên có ai lên đỉnh núi Hy mã lạp sơn được? – Tự nhiên có ai lên cung trăng được? Thử thách, hiểm nguy, tập luyện, chuyên cần mỗi ngày, nhiều ngày mới đạt được đích họ hy vọng.",
        chuong: 32,
    },
    {
        stt: 818,
        noi_dung: "Con bảo đợi lúc nào có thời cơ, con sẽ làm việc vĩđại; không biết đời con thời cơ sẽ đến mấy lần! Nhưng hãy cướp thời cơ mỗi ngày để thực hiện cách phi th ường những việc tầm thường. lâu các ông còn có ánh sáng, kẻo bóng tối bắt chợt các ông. Ai bước đi trong bóng tối, thì không biết mình đi đâu. và thánh hoá. Chính chứng tá của đời sống Kitô hữu và những việc lành được làm v ới tinh th ần siêu nhiên c ó s ức l ôi kéo ng ười ta đến đức tin v à đến v ới Thiên Chúa, vì Chúa phán: Sự sáng các con phải soi trước mắt người ta, như vậy để họ xem thấy việc lành các con mà ngợi khen Cha c ác con ở trên Trời (Mt 5,16).",
        chuong: 32,
        loi_chua: [
            "Ga 12,35: Ánh sáng còn ở giữa các ông ít lâu nữa thôi. Các ông hãy bước đi, bao",
            "TĐ  6b: Người giáo dân có rất nhiều cơ hội làm việc tông đồ: rao giảng Phúc âm",
        ],
        tham_chieu: [
            "MV 43bd, 93 a; TG 11a",
        ],
    },
    {
        stt: 819,
        noi_dung: "Thiên hạ mua v é lên đỉnh nhà chọc trời Manhattan, khen ng ợi kiến trúc tân kỳ, nhưng mấy ai nhớ đến từng thanh sắt, từng viên sạn, từng hạt cát nhỏ làm nền móng vững chắc cho ngôi nhà ấy.",
        chuong: 32,
    },
    {
        stt: 820,
        noi_dung: "Thử lấy kính hiển vi mà xem: một giọt nước óng ánh hơn kim cương, một con vi trùng ghê tởm rùng mình; đừng khinh những cái nhỏ. phong đẩy mạnh thế nào đi nữa, thì cũng chỉ cần một bánh lái rất nhỏ để điều khiển theo ý của người lái. Cái lưỡi cũng vậy: nó là một bộ phận nhỏ bé của thân thể, mà lại huênh hoang l àm được những chuyện to l ớn. Cứ xem tia l ửa nhỏ bé dường nào, mà làm bốc cháy đám rừng to lớn biết bao!",
        chuong: 32,
        loi_chua: [
            "Gc 3,4 -5: Anh em c ũng h ãy nhìn xem t àu b è: d ù n ó c ó to l ớn, v à c ó b ị cu ồng",
        ],
    },
    {
        stt: 821,
        noi_dung: "Việc nhỏ: nhưng do mồ hôi nước mắt mà quý; việc thường nhưng do tình y êu tha thiết mà trọng. Người con thảo mặc chiếc áo len cũ rích nhưng không chịu đổi lấy bất cứ áo đắt tiền nào khác, vì mỗi mũi len đối với anh ta là một cử chỉ yêu thương của mẹ.",
        chuong: 32,
    },
    {
        stt: 822,
        noi_dung: "Ngày s ống c ủa con l à m ột c huỗi l ời nguy ện tin y êu c ụ th ể ho á trong c ông t ác t ầm thường. và gia đình, công ăn việc làm thường ngày, việc nghỉ ngơi thể xác và tinh thần, nếu họ chu toàn trong Thánh Thần và cả đến những thử thách của cuộc sống, nếu họ kiên trì đón nhận, thì t ất cả đều trở nên hiến lễ thiêng liêng đẹp lòng Thiên Chúa, nhờ Chúa Giêsu Kitô (x. 1Pr 2,5), được thành kính dâng lên Chúa Cha cùng với Mình Th ánh Chúa khi c ử hành Phép Thánh Thể. Như thế, giáo dân th ánh hi ến th ế gi ới n ày cho Thi ên Ch úa nh ờ bi ết ph ụng th ờ Ng ài b ằng hành động thánh thiện khắp nơi.",
        chuong: 32,
        loi_chua: [
            "GH 34b: … M ọi hoạt động, kinh nguyện và công cuộc tông đồ, đời sống hôn nhân",
        ],
        tham_chieu: [
            "GH 38, 41cg; LM 14ab; TĐ  4a",
        ],
    },
    {
        stt: 823,
        noi_dung: "Một bản nhạc du d ương, một bức họa thần tình, m ột tấm thảm quý đẹp được kết tinh bằng những mũi chỉ, những nét mực, những nốt nhạc đơn sơ, nhưng phải có danh xưng nhẫn nại mới sáng tạo ra tác phẩm.",
        chuong: 32,
    },
    {
        stt: 824,
        noi_dung: "Với năm cái bánh và hai con c á của em bé, Chúa đã làm phép lạ nuôi năm ngàn người (x. Mt 14,17). Chúa vẫn toàn năng, nhưng Chúa yêu thương thiện chí của con.",
        chuong: 32,
    },
    {
        stt: 825,
        noi_dung: "Xin n ước b à Samari, m ượn l ừa c ỡi v ào Gi êrusalem, m ượn thuy ền ng ồi gi ảng, m ượn phòng lập phép Thánh Thể, nhìn đồng tiền bà goá bỏ vào hòm cúng được Chúa chiếu cố đến, chủ nhân đâu ngờ việc không đâu mà mình được hân hạnh đến thế! (x. Mt 21,2; 26,18; Mc 12,43; Ga 4,9).",
        chuong: 32,
    },
    {
        stt: 826,
        noi_dung: "Một vi ệc r ất t ầm th ường c ó th ể t ạo được b ầu khí d ễ th ở, b ầu khí y êu th ương m à không t ốn c ủa, kh ông m ất c ông, kh ông ai th ấy. Nguy ệt c ầu t ốt đẹp c ách m ấy c ũng không ai sống được vì không có bầu khí thở được.",
        chuong: 32,
    },
    {
        stt: 827,
        noi_dung: "Trên đường dâng hiến, không có việc gì là tầm thường cả. Một cử chỉ nhỏ nhặt nhất vì kẻ khác là một bước đến tình yêu, do tình yêu, là một sự phát triển con người. việc, bền chí trong khó khăn, nhẫn nại và can đảm chịu đựng nỗi cô quạnh, sự mệt nhọc và những cố gắng vô hiệu. Họ sẽ đến cùng mọi người với tâm hồn rộng m ở, v ới con tim bao dung, tình nguy ện l ãnh nh ận nhi ệm v ụ được giao phó, quảng đại thích nghi cả với những phong tục khác thường của các dân tộc và những điều kiện sinh hoạt đổi thay, đồng tâm tương ái cộng tác với anh em và m ọi ng ười đang hi ến th ân cho c ùng m ột c ông vi ệc, để theo g ương c ộng đoàn thời các Tông đồ, họ cùng với các tín hữu hợp thành một con tim v à một tâm hồn duy nhất.",
        chuong: 32,
        loi_chua: [
            "TG 25a: … C ác nhà truyền giáo phải mau mắn khởi xướng, kiên trì hoàn tất công",
        ],
        tham_chieu: [
            "MV 38a; TĐ  4a, 8b",
        ],
    },
    {
        stt: 828,
        noi_dung: "Chúng ta không biết Chúa, Mẹ Maria làm gì suốt ba mươi năm âm thầm ở Nagiarét; lên thiên đàng chúng ta sẽ hiểu được phần nào.",
        chuong: 32,
    },
    {
        stt: 829,
        noi_dung: "Chúng ta có thể nghĩ rằng ba mươi năm này đầy yêu thương, thông hiệp, hiệp nhất, mà nhân loại không hiểu thấu vì là mầu nhiệm của Tình yêu Thiên Chúa.",
        chuong: 32,
    },
    {
        stt: 830,
        noi_dung: "Ba mươi năm chi xiết nhìn trông, Mấy hồi thầm lặng nói không ra lời. Giêsu nhìn Giuse, Maria, cha m ẹ nhìn Giêsu, cả nhà nhìn lên Chúa Cha. Ba m ươi năm hạnh phúc, với những việc tầm thường nhất trong cái nhìn thông hiệp thần linh nhất.",
        chuong: 32,
    },
    {
        stt: 831,
        noi_dung: "Giả như tôi nói được các thứ tiếng, nhân loại và thiên thần… V à giả như tôi được ơn tiên tri v à biết mọi sự nhiệm mầu, toàn cả trí tri; v à giả như tôi được tất cả lòng tin, khiến chuyển được đồi núi, mà tôi lại không có lòng mến, thì t ôi vẫn là không! Và giả như tôi đem cả gia tư vốn liếng mà phát chẩn; và giả như tôi nộp mình chịu thiêu, mà tôi lại không có lòng mến, thì c ũng hư không vô ích cho t ôi! (1Cr 13,1 -3). Việc con làm không quan hệ. Cách con làm mới quan hệ.",
        chuong: 32,
    },
    {
        stt: 832,
        noi_dung: "Có hai đường để sống giây phút hiện tại: thực hiện ý con hay th ực hiện ý Chúa. Con chọn đường nào? vậy, xin đừng theo ý con, mà xin theo ý Cha… L ạy Cha, nếu con cứ phải uống chén này mà không sao tránh khỏi, thì xin vâng ý Cha. Lãnh đạo là nô bọc tình nguyện",
        chuong: 32,
        loi_chua: [
            "Mt 26,39.42: Lạy Cha, nếu có thể được, xin cho con khỏi phải uống chén này. Tuy",
        ],
    },
    {
        stt: 833,
        noi_dung: "Đư ờng Hy v ọng c ần người l ãnh đạo. Theo t ư nguyên, l ãnh đạo là người d ẫn đường, cũng gọi là thủ lãnh, nghĩa là người làm đầu. Không có đầu suy nghĩ, tứ chi sẽ suy nhược, thiện chí bị phân tán, nghị lực sẽ lụn bại, hỗn loạn sẽ thống trị và công cuộc tan vỡ.",
        chuong: 33,
    },
    {
        stt: 834,
        noi_dung: "Lãnh đạo là người: Biết – Muốn – Thực hiện Và đồng thời gây cảm hứng cho kẻ khác Biết – Muốn – Thực hiện.",
        chuong: 33,
    },
    {
        stt: 835,
        noi_dung: "Lãnh đạo là phục vụ: phục vụ Thiên Chúa, ph ục vụ người mình điều khiển, phục vụ công ích. Lãnh đạo là nô bọc tình nguyện. thì phải làm người phục vụ anh em. lập các chức vụ khác nhau trong Gi áo hội hầu mưu ích cho to àn Thân. Thực vậy, c ác th ừa t ác vi ên sử d ụng quy ền bính thi êng li êng m à ph ục v ụ anh em mình, để mọi người thuộc d ân Thiên Chúa v à đương nhiên hưởng phẩm gi á Kitô hữu sẽ đạt đến phần rỗi, nhờ nỗ lực tiến đến cùng một cứu cánh trong tự do và trật tự.",
        chuong: 33,
        loi_chua: [
            "Mt 20,26: Gi ữa anh em thì kh ông được như vậy: Ai mu ốn làm lớn giữa anh em,",
            "GH 18a: Đ ể chăn dắt và phát triển Dân Thiên Chúa luôn mãi, Chúa Kitô đã thiết",
        ],
        tham_chieu: [
            "Mt 23,11; Ep 4,11-13; 1Pr 4,10-11",
            "GH 24a, 29a; GM 16a; Đ T 9b; DT 14c",
        ],
    },
    {
        stt: 836,
        noi_dung: "Chúa Giêsu đem lửa đến thế gian v à muốn cho qu ả đất rực cháy. Với chí khí t ông đồ, con phải là ngọn lửa đốt cháy những ngọn đuốc khác, làm cho ánh sáng lan rộng đến lúc thế giới thành một biển ánh sáng.",
        chuong: 33,
        loi_chua: [
            "Ga 1,9: Ngôi Lời là ánh sáng thật, ánh sáng đến thế gian và chiếu soi mọi người.",
        ],
        tham_chieu: [
            "Lc 12,49",
        ],
    },
    {
        stt: 837,
        noi_dung: "Hãy khiêm tốn quảng đại nếu Chúa muốn chọn con lãnh đạo môi trường của con. Đó  là sứ mệnh cao cả, quan trọng. Con cần ý thức hạnh phúc của các Tông đồ khi nghe Chúa Giêsu nói: Hãy theo Ta, Ta sẽ cho các ngươi làm ngư phủ chài lưới người (Mc 1,17). Si-môn, con ông Gio-an, anh c ó mến Thầy hơn các anh em n ày không? Ông đáp: Thưa Thầy có, Thầy biết con y êu mến Thầy. Đ ức Giêsu nói với ông: Hãy chăm sóc chiên con của Thầy.",
        chuong: 33,
        loi_chua: [
            "Ga 21,15: Khi các môn đệ ăn xong, Đ ức Giêsu hỏi ông Si-môn Phê-rô: Này anh",
        ],
    },
    {
        stt: 838,
        noi_dung: "Con phải tin tưởng vào sứ mệnh của con, cảm hoá kẻ khác và truyền thông cho họ lòng tin tưởng, bầu nhiệt huyết trong con. muốn của Người, được thấy Đ ấng Công Chính và nghe tiếng từ miệng Đ ấng ấy phán ra. Quả vậy, anh sẽ làm chứng nhân cho Đ ấng ấy trước mặt mọi người về các điều anh đã thấy và đã nghe. nhiệt thành đối với việc rao giảng Phúc âm cho thế giới, bằng cách dạy giáo lý và giảng thuyết để giáo huấn họ về nhiệm vụ của Giáo hội phải loan báo Chúa Kitô cho mu ôn dân, bằng cách dạy các gia đình Kitô hữu về sự cần thiết và vinh dự vun trồng ơn kêu gọi truyền giáo nơi con trai con gái mình; bằng cách cổ võ nhiệt tâm truyền giáo nơi thanh thi ếu niên trong c ác trường và các hội đoàn công giáo để từ nơi họ, xuất phát những nhà rao gi ảng Phúc âm tương lai. Các Ngài phải dạy tín hữu cầu nguyện cho các xứ truyền giáo và đừng xấu hổ xin h ọ bố thí v à trở nên như những hành khất vì C húa Kitô và vì ph ần rỗi các linh hồn.",
        chuong: 33,
        loi_chua: [
            "Cv 22,14-15: Thiên Chúa của cha ông chúng ta đã chọn anh để anh được biết ý",
            "TG 39b: Các linh mục, trong việc mục vụ, phải cổ võ và duy trì giữa tín hữu lòng",
        ],
        tham_chieu: [
            "2Tm 1,12",
            "LM 6b; Đ T 2ab, 8a; TG 37d, 42",
        ],
    },
    {
        stt: 839,
        noi_dung: "Nếu không trịđược tính bi quan, thái độ thất vọng, thói quen rụt rè, con đừng lãnh đạo. ta tr ở n ên nh út nh át, nh ưng l à m ột Th ần Khí khi ến ch úng ta được đầy s ức mạnh, tình thương, và biết tự chủ. Vậy anh đừng hổ thẹn vì phải làm chứng cho Chúa chúng ta, c ũng đừng hổ thẹn vì t ôi, người tù của Chúa; nhưng dựa vào sức mạnh của Thiên Chúa, anh hãy đồng lao cộng khổ với tôi để loan báo Tin Mừng.",
        chuong: 33,
        loi_chua: [
            "2Tm 1,7-8: Vì Thiên Chúa đã chẳng ban cho chúng ta một thần khí làm cho chúng",
        ],
    },
    {
        stt: 840,
        noi_dung: "Lãnh đạo là dấu hiệu hữu hình của quyền bính. Người lãnh đạo phải ý thức sứ mệnh chỉ huy của mình, sứ mệnh đại diện cho quyền bính và có bổn phận làm cho kẻ khác trọng uy quyền của mình. Làm như thế là phục vụ quần chúng. không bởi Thiên Chúa, và những quyền bính hi ện hữu là do Thi ên Chúa thiết lập. vào quy ền bính m à chính Ch úa Kit ô đã d ùng để ki ến t ạo, th ánh ho á v à cai quản Thân Thể Người. Vì v ậy, chức linh m ục của các ngài dù giả thiết đã có những bí tích khai sinh đời sống Kitô giáo, nhưng lại được một bí tích riêng in dấu đặc biệt khi c ác ngài được Chúa Thánh Thần xức dầu. Như thế các ngài nên giống Chúa Kitô linh m ục, đến nỗi có quyền thay m ặt Chúa Kitô là Đ ầu mà hành động.",
        chuong: 33,
        loi_chua: [
            "Rm 13,1: Mỗi người phải phục tùng chính quyền, vì không có quyền bính nào mà",
            "LM 2c: Ch ức vụ linh m ục liên kết với chức Giám mục, nên cũng được tham d ự",
        ],
        tham_chieu: [
            "Mt 7,29; Ga 19,11a",
            "GH 19,23a, 27a, 28a; LM 10b; TĐ  2b",
        ],
    },
    {
        stt: 841,
        noi_dung: "Tai họa lớn nhất của con khi lãnh đạo là sợ nói và hành động như một nhà lãnh đạo.",
        chuong: 33,
    },
    {
        stt: 842,
        noi_dung: "Đó n nhận mọi ý kiến, nhưng không lệ thuộc ý kiến.",
        chuong: 33,
    },
    {
        stt: 843,
        noi_dung: "Sáng kiến hợp thời và hữu hiệu mới lãnh đạo được.",
        chuong: 33,
    },
    {
        stt: 844,
        noi_dung: "Con hãy dừng ý chí tập trung tư tưởng, can đảm quyết định và quyết định kịp thời.",
        chuong: 33,
    },
    {
        stt: 845,
        noi_dung: "Có vô số ý kiến mà con không quyết định là vô ích. Có ít tư tưởng mà thực hiện tất cả mới là lãnh đạo thực sự.",
        chuong: 33,
    },
    {
        stt: 846,
        noi_dung: "Biết điều con muốn và muốn cách cương quyết. Nếu không cương quyết định đoạt, con sẽ làm các tùy viên tê liệt. Đ ể các tùy viên tự do quyết định, con sẽ gây hỗn loạn.",
        chuong: 33,
    },
    {
        stt: 847,
        noi_dung: "Lãnh đạo l à s ống kỷ lu ật, tìm hi ểu l ệnh tr ên, kh ôn kh éo h ành động theo m ệnh l ệnh. Lãnh đạo là tìm kiếm phương thế thực hiện và giàu nghị lực để thắng các trở ngại. thấy lòng tin, sự nhẫn nại, lòng yêu mến, sự kiên trì của tôi ;",
        chuong: 33,
        loi_chua: [
            "2Tm 3,10: Phần anh, anh đã theo s át đạo lý, cách sống, dự định của tôi; anh đã",
        ],
        tham_chieu: [
            "2Tm 4,2",
        ],
    },
    {
        stt: 848,
        noi_dung: "Việc con chỉ trích cấp trên làm nhụt nhuệ khí, tạo chia rẽ giữa các tùy viên và mở đường cho họ bình phẩm phương pháp, bươi móc khuyết điểm của chính con.",
        chuong: 33,
    },
    {
        stt: 849,
        noi_dung: "Chúa không sinh con để làm đàn cừu, đàn vịt, nhưng để lãnh đạo môi trường của con. Lãnh đạo là thúc đẩy, là lôi cuốn.",
        chuong: 33,
    },
    {
        stt: 850,
        noi_dung: "Muốn lãnh đạo sáng suốt, cần phải biết nghỉ ngơi. Nghỉ ngơi là nghệ thuật cần thiết để tránh nóng nảy, mệt trí, cau có, mất tự chủ, hoảng hốt. vắng mà nghỉ ngơi đôi chút. Quả thế, kẻ lui người tới quá đông, nên các ông cũng chẳng có thì giờ ăn uống nữa.",
        chuong: 33,
        loi_chua: [
            "Mc 6,31: Người bảo các ông: Chính anh em hãy lánh riêng ra đến một nơi thanh",
        ],
    },
    {
        stt: 851,
        noi_dung: "Lãnh đạo phải can đảm, có cái nhìn bình t ĩnh trước mọi biến cố, ở mọi nơi, trong m ọi lúc. Chừng ấy con ổn định được tình trạng thử thách nguy hiểm nhất.",
        chuong: 33,
    },
    {
        stt: 852,
        noi_dung: "Quá lao l ực, có ngày sẽ bất lực; quá bận tâm, có ngày mất nội tâm. Càng bận rộn con càng phải dành thì giờ để suy tư, học hỏi, và nhất là cầu nguyện. Con sẽ tìm được bình an.",
        chuong: 33,
    },
    {
        stt: 853,
        noi_dung: "Con đừng phí một giây, đừng dư một lời, đừng bỏ một dịp. Con sẽ nhận xét sâu sắc hơn, Có ý chí cương quyết hơn, Đư ợc người cảm phục hơn.",
        chuong: 33,
    },
    {
        stt: 854,
        noi_dung: "Biết giữ kỷ luật cá nhân, biết tổ chức đời sống, biết bắt đầu hành động, biết phân giá trị mỗi việc. Đó  là những điều kiện giúp con lãnh đạo cách hiên ngang, anh hùng, đem lại tin tưởng lúc mọi người nao núng, hoảng hốt. vững chãi của đời sống cộng đoàn và bác ái, mà hơn nữa, còn như một thành phần thiết yếu trong tất cả công cuộc huấn luyện đã đạt được tinh thần tự chủ, phát tri ển được s ự tr ưởng th ành v ững ch ãi v ề nh ân c ách, r èn luy ện được những tư cách khác giúp ích rất nhiều cho hoạt động của Giáo hội được quy củ và kết qủa.",
        chuong: 33,
        loi_chua: [
            "Đ T 11b: Không những phải coi kỹ luật trong đời sống chủng viện như một trợ lực",
        ],
        tham_chieu: [
            "LM 14a, 16c; Đ T 4b, 11a",
        ],
    },
    {
        stt: 855,
        noi_dung: "Nhìn rõ, nhìn thật, nhìn đúng, xét người, xét việc, xét cảnh. Đó  là óc thực tế con cần để lãnh đạo, dựa trên các dữ kiện khách quan. chủng sinh đạt được mức trưởng thành nhân bản khả đáng, nhất là mức trưởng thành đã được kiểm nghiệm trong m ột đức tính c ương ngh ị, trong kh ả năng quyết định chín ch ắn, và một óc ph ê phán x ác đáng v ề con ng ười v à về c ác biến cố.",
        chuong: 33,
        loi_chua: [
            "Đ T 11a: Nh ờ n ền gi áo d ục kh éo t ổ ch ức, c ũng phải nh ằm hu ấn luy ện cho c ác",
        ],
        tham_chieu: [
            "LM 14a; Đ T 21; TĐ  4c; TG 11b, 16d",
        ],
    },
    {
        stt: 856,
        noi_dung: "Dùng toàn công thức là máy móc, ngủ trong thủ tục là lỗi thời, lạc trong chi tiết là chật hẹp. Con phải: – Nhìn tổng quát, – Thích ứng dẻo dai, – Biến dở thành hay. Con cần: – Cố vấn, – Chuyên viên, – Nhất là ý chí của con. ban cho anh nh ờ lời ngôn sứ, khi h àng kỳ mục đặt tay tr ên anh. Anh h ãy tha thiết với những điều đó, chuyên chú vào đó, để mọi người nhận thấy những tiến bộ của anh.",
        chuong: 33,
        loi_chua: [
            "1Tm 4,14-15: Đ ừng thờ ơ với đặc sủng đang có nơi anh, đặc sủng Thiên Chúa đã",
        ],
    },
    {
        stt: 857,
        noi_dung: "Con phải phát triển, trau dồi khả năng để phục vụ đắc lực hơn.",
        chuong: 33,
    },
    {
        stt: 858,
        noi_dung: "Lãnh đạo mà thiếu khả năng, không những con mất uy tín mà còn thiếu liêm chính.",
        chuong: 33,
    },
    {
        stt: 859,
        noi_dung: "Đ ừng đòi vị lãnh đạo của con ph ải có đủ mọi tài năng, vì con s ẽ không tìm ra ng ười lãnh đạo lý tưởng ấy. Nhưng nếu con lãnh đạo, con phải kiếm cách phát triển khả năng không ngừng.",
        chuong: 33,
    },
    {
        stt: 860,
        noi_dung: "Đ ể có thể điều khiển mọi hoạt động và quy hướng mọi cố gắng về mục đích, người lãnh đạo phải có khả năng phân biệt rõ ràng những ý tưởng tổng quát, nhờ đó có cái nhìn toàn diện và hiểu biết đầy đủ về mọi ngành trong tổ chức của mình.",
        chuong: 33,
    },
    {
        stt: 861,
        noi_dung: "Mỗi cá nhân là một mầu nhiệm. Muốn lãnh đạo, con phải biết từng tùy viên, với nhu cầu, sở thích, tính tình, phản ứng của họ, để đánh giá họ đúng mức, đặt họ đúng chỗ. biết tôi.",
        chuong: 33,
        loi_chua: [
            "Ga 10,14: Tôi chính là Mục Tử nhân lành. Tôi biết chiên của tôi, và chiên của tôi",
        ],
    },
    {
        stt: 862,
        noi_dung: "Như Chúa Giêsu đã ở liên lỉ với các Tông đồ suốt ba n ăm, con h ãy hoà mình v ới các cộng tác viên của con, th ông cảm, chia s ẻ tâm sự vui bu ồn và đoán biết tâm lý từng người. Con sẽ ngạc nhiên vì lúc ấy họ đoàn kết và cố gắng vượt mức. Giám mục phải coi c ác linh m ục như anh em v à bạn hữu, và hết sức lo l ắng đến lợi ích vật chất và nhất là thiêng liêng của các ngài.",
        chuong: 33,
        loi_chua: [
            "LM 7a: Chính vì s ự hiệp thông trong c ùng một chức Tư Tế và thừa tác vụ, các",
        ],
        tham_chieu: [
            "GM 16a",
        ],
    },
    {
        stt: 863,
        noi_dung: "Con hãy đặt mình vào địa vị các cộng sự viên, trao đổi quan điểm thân mật với họ, đón tiếp ân cần, tỏ cho h ọ thấy con quan t âm đến họ, con hi ểu họ. Thái độ nhân hậu ấy sẽ làm cho họ yêu thương con, tin tưởng con. đã không làm hại ai, kh ông làm cho ai ph ải sạt nghiệp, không bóc lột ai. T ôi nói thế không phải để lên án anh em, vì t ôi đã từng nói: anh em h ằng ở trong lòng chúng tôi, sống chết chúng ta đều có nhau. Tôi rất tin t ưởng anh em, t ôi rất hãnh diện về anh em. T âm hồn tôi chứa chan ni ềm an ủi và tràn ngập nỗi vui mừng trong mọi cơn gian nan khốn khó.",
        chuong: 33,
        loi_chua: [
            "2Cr 7,2-4: Anh em hãy dành cho chúng tôi một chỗ trong lòng anh em. Chúng tôi",
        ],
        tham_chieu: [
            "2Cr 6,11-12",
        ],
    },
    {
        stt: 864,
        noi_dung: "Công trạng của con kh ông được ghi trong huy ch ương trên ngực, trong c ác bản tuyên dương, các diễn văn ca ngợi con. Phần thưởng của con được ghi trong cái nhìn, trong quả tim của các cộng sự viên. cho ch úng t ôi h ãnh di ện tr ước nhan Đ ức Gi êsu, Ch úa ch úng ta, khi Ng ười quang lâm, nếu không phải là anh em? Phải, chính anh em là vinh quang và là niềm vui của chúng tôi.",
        chuong: 33,
        loi_chua: [
            "1Tx 2,19-20: Ai là niềm hy v ọng, là niềm vui của chúng tôi, ai l à triều thiên làm",
        ],
        tham_chieu: [
            "Pl 4,1",
        ],
    },
    {
        stt: 865,
        noi_dung: "Chiếm được con tim của tùy viên, con có thể thấy họ dốc toàn lực để theo con vì họ biết con yêu họ thành thực, đậm đà, hy sinh t ận tụy cho h ọ. Nếu con kh ông lãnh đạo bằng tình yêu, con phải sử dụng hạ sách: vũ lực. sống mình cho đoàn chi ên. Ng ười l àm thu ê, vì kh ông ph ải l à m ục t ử, v à vì chiên không thuộc về anh, nên khi thấy sói đến, anh bỏ chiên mà chạy. Sói vồ lấy chiên và làm cho chiên tán loạn. sống giữa dân mình nh ư những người phục vụ, nghĩa là như những chủ chăn hiền từ biết các con chi ên mình v à con chi ên cũng biết chủ chăn; như những người cha đích thực tỏ lòng yêu thương và lo l ắng cho h ết mọi người và mọi người tỏ lòng tri ân tuân phục quyền hành Thiên Chúa đã ban cho c ác ngài. Các ngài hãy quy tụ đoàn chiên của mình thành một gia đình đông đủ và cổ võ để mọi người đều ý thức nhiệm vụ riêng mà sống và hoạt động trong tình hiệp thông bác ái.",
        chuong: 33,
        loi_chua: [
            "Ga 10,11-12: Tôi chính l à Mục Tử nhân lành. Mục Tử nhân lành hy sinh m ạng",
            "GM 16a: Trong khi thi h ành nhiệm vụ người cha và chủ chăn, các Giám mục hãy",
        ],
        tham_chieu: [
            "DT 14c",
        ],
    },
    {
        stt: 866,
        noi_dung: "Khi đã chinh phục được con tim của tùy viên, người lãnh đạo dám: - Đ ể tùy viên nhìn gần mà không sợ mất mát, - Hạ mình với họ mà vẫn cao thượng, - Tự nhiên, từ tốn mà được kính phục, - Cương quyết đòi hỏi mà được vâng lời triệt để. Người ngày hôm ấy. Lúc đó vào khoảng giờ thứ mười.",
        chuong: 33,
        loi_chua: [
            "Ga 1,39: Người bảo họ: Đ ến mà xem. Họ đã đến xem chỗ Người ở, và ở lại với",
        ],
        tham_chieu: [
            "Lc 19,5; 1Cr 9,20-21",
        ],
    },
    {
        stt: 867,
        noi_dung: "Con đừng quên rằng tùy viên của con là người, là một nhân vị, là con Chúa, nên chỉ có họ và Thiên Chúa mới có quyền đối với họ. Không ai được coi họ như vật sở hữu, như máy móc sản xuất. quyền như là những con cái Thiên Chúa bằng cách phát triển sự vâng phục tự nguyện.",
        chuong: 33,
        loi_chua: [
            "DT 14c: V ới lòng kính tr ọng nhân vị, các bề trên hãy cai qu ản những kẻ thuộc",
        ],
        tham_chieu: [
            "MV 28a; TĐ  8e",
        ],
    },
    {
        stt: 868,
        noi_dung: "Nhà lãnh đạo công tâm và khiêm tốn, làm việc cho người kế vị, bất kể người đó là ai – Con hãy đặt sự trường cửu của công việc lên trên danh tiếng và lợi ích cá nhân con. ông mà các ông không biết. Người sẽ đến sau t ôi và tôi không đáng cởi quai dép cho Người.",
        chuong: 33,
        loi_chua: [
            "Ga 1,26-27: Tôi đây làm phép rửa trong nước. Nhưng có một vịđang ở giữa các",
        ],
    },
    {
        stt: 869,
        noi_dung: "Lãnh đạo không gương sáng được vâng phục mà không được kính phục. Lãnh đạo ch ỉ n êu g ương s áng trong nhi ệm v ụ được kính ph ục m à kh ông được m ến phục. Lãnh đạo nêu gương sáng trong mọi lãnh vực được vâng phục, kính phục, chê trách được, không ngạo mạn, không nóng tính, không nghiện rượu, không hiếu chi ến, kh ông tìm ki ếm l ợi l ộc th ấp h èn; tr ái l ại, ph ải hi ếu kh ách, y êu chuộng điều thiện, chừng mực, công chính, th ánh thiện, biết tự chủ; người ấy phải gắn bó với lời đáng tin cậy và đúng đạo lý, để vừa có khả năng dùng giáo lý lành mạnh mà khuyên nhủ, vừa có khả năng bẻ lại những kẻ chống đối. và còn tìm c ách dẫn về đoàn này, để chúng cũng nghe ti ếng Chúa Kitô, hầu nên một đoàn chiên và một Chủ Chăn. Đ ể được thế, cần phải có nhiều đức tính đáng cho xã hội loài người kính chuộng như từ tâm, thành thật, dũng cảm, kiên nhẫn, yêu chuộng công lý, lịch thiệp và những đức tính khác mà Thánh Phaolô Tông đồ khuyên nhủ khi Ngài nói: Tất cả những gì là chân thật, là trong sạch, là công bằng, là thánh thiện, là khả ái, là danh thơm tiếng tốt, hoặc nhân đức, hoặc hạnh kiểm nào đáng khen, thì xin anh em hãy tưởng nghĩđến (Pl 4,8).",
        chuong: 33,
        loi_chua: [
            "Tt 1,7-9: Giám quản, với tư cách là quản lý của Thiên Chúa, phải là người không",
            "LM 3: Như các mục tử nhân lành, các linh mục phải nhận biết các chiên của mình",
        ],
        tham_chieu: [
            "Ga 13,15; 1Tx 2,10-12; 1Tm 3,2-5; 4,12; Tt 2,7",
            "GH 26c; GM 15c; DT 11a",
        ],
    },
    {
        stt: 870,
        noi_dung: "Đ ặc điểm của nhà lãnh đạo thiên tài là biết quy tụ cộng tác viên bằng cách: - Tìm họ, - Khám phá họ, - Tiếp đón họ, - Chọn họ, - Huấn luyện họ, - Tín nhiệm họ, - Sử dụng họ, - Mến yêu họ, Không ai là nhà lãnh đạo lý tưởng cũng như không ai là cộng tác viên thập toàn. và cắt cử anh em để anh em ra đi, sinh được hoa trái, và hoa trái của anh em tồn tại, hầu tất cả những gì anh em xin c ùng Chúa Cha nh ân danh Th ầy, thì Người ban cho anh em.",
        chuong: 33,
        loi_chua: [
            "Ga 15,16: Không phải anh em đã chọn Thầy, nhưng chính Thầy đã chọn anh em,",
        ],
    },
    {
        stt: 871,
        noi_dung: "Thiên Chúa là bí quyết của nhà lãnh đạo. Ngài ban uy quy ền và không bỏ rơi những ai dựa vào quyền năng của Ngài để lãnh đạo. Tinh th ần khiêm nhượng và lòng bác ái là căn bản; Phúc âm của Ngài hướng dẫn nhà lãnh đạo. thì phải làm người phục vụ anh em; ai mu ốn làm đầu anh em thì ph ải làm đầy tớ mọi người. Vì Con Ng ười đến không phải để được người ta phục vụ, nhưng là để phục vụ, và hiến mạng sống làm giá chuộc muôn người. gương mẫu Chúa Chiên lành, Người đến để phục vụ chứ không phải để được phục vụ (x. Mt 20,28; Mc 10,45) v à hiến mạng sống mình vì con chi ên (x. ga 10,11). Đư ợc chọn giữa loài người và đầy yếu hèn, ngài có thể cảm thông nỗi đau khổ với những ai dốt nát và lầm lạc (x. Dt 5,1-2). Giám mục không nên từ chối lắng nghe những kẻ thuộc quyền, nhưng hãy ân cần săn sóc họ như những người con đích thực, và khuyên nhủ họ hăng hái cộng tác với mình. Vì phải trả lẽ với Chúa về linh hồn con cái mình (x. Dt 13,17), Giám mục hãy cầu nguyện, rao giảng và làm mọi việc bác ái săn sóc họ và cả những người chưa thuộc đoàn chiên duy nhất mà ngài cũng phải coi như được trao phó cho mình trong Chúa. Như Tông đồ Phaolô, Giám mục mắc nợ tất cả mọi người, cho nên hãy hăng hái rao gi ảng Phúc âm cho m ọi người (x. Rm 1,14 -15) và khuyến khích các tín hữu làm việc tông đồ và truyền giáo.",
        chuong: 33,
        loi_chua: [
            "Mc 10,43-45: Giữa anh em thì không được như vậy: ai muốn làm lớn giữa anh em",
            "GH 27c: Đư ợc Chủ sai đi cai qu ản gia đình mình, Gi ám mục phải chiêm ngắm",
        ],
        tham_chieu: [
            "GH 6b; LM 6a, 13d, 15c; Đ T 4a",
        ],
    },
    {
        stt: 872,
        noi_dung: "Nhà lãnh đạo không chỉ căn cứ vào báo cáo thôi, nhưng nhất là lo l ắng đọc sách đời sống của mỗi tùy viên hơn: đọc trong lòng họ, trong khả năng họ, trong thử thách họ.",
        chuong: 33,
    },
    {
        stt: 873,
        noi_dung: "Chúa Giêsu không có ý biến đổi tức khắc các Tông đồ bằng mệnh lệnh, nhưng Chúa để họ dần dần tự canh tân. Con hãy tin tưởng và làm cho người ta tin t ưởng, sống và làm cho người ta thích sống như con. không có sức chịu nổi. trong khi họ thi hành bổn phận, tin vào Lời Chúa và dạy cho chúng ta biết tinh thần m à nh ững đồ đệ c ủa m ột v ị Th ầy nh ư th ế ph ải nh ận bi ết v à tu ân theo trong mọi lãnh vực.",
        chuong: 33,
        loi_chua: [
            "Ga 16,12: Th ầy c òn nhi ều điều ph ải n ói v ới anh em. Nh ưng b ây gi ờ, anh em",
            "TD 9: Mạc khải chứng tỏ rằng Chúa Kitô đã tôn trọng quyền tự do của con người",
        ],
        tham_chieu: [
            "TD 11ab, 14d",
        ],
    },
    {
        stt: 874,
        noi_dung: "Chúa Giêsu không định giờ để ra lệnh, hay mở lớp huấn luyện tinh thần. Ngài dùng cơ hội thực tế trong đời sống để dạy cho các tông đồ những bài học thiết thực: lúc đi ngang vườn nho, cây vả, đồng lúa, lúc các em bé đến chơi, lúc các Tông đồ tranh giành địa vị (x. Mt 21,18tt; Lc 9,46tt; Ga 4,35).",
        chuong: 33,
    },
    {
        stt: 875,
        noi_dung: "Trong việc tông đồ trực tiếp, tuy Chúa Giêsu có dạy những bài giảng riêng biệt, nhưng Ngài vẫn thích những cuộc gặp gỡ tự nhiên hơn. Trong những giây phút bất ngờ, ơn đặc sủng đã đến với Giakêu, Simon, bà Samari… (x. Mt 26,6; Lc 19 ,1tt; Ga 4,7tt).",
        chuong: 33,
    },
    {
        stt: 876,
        noi_dung: "Chúa Giêsu không bỏ các Tông đồ vì họ không hiểu Ngài hay cứng đầu đối với Ngài. Con đừng nản lòng, cứ nhẫn nại, tử tế với hạng người ác ý, ác tâm, đê tiện. Ơ n Chúa sẽ thu phục họ. cả! Lòng trí c ác anh th ật là chậm tin v ào lời các ngôn sứ! Nào Đ ấng Kitô lại chẳng phải ch ịu khổ hình nh ư thế, r ồi mới v ào trong vinh quang c ủa Người sao? Rồi bắt đầu từ ông Mô-sê và tất cả các ngôn sứ, Người giải thích cho hai ông những gì liên quan đến Người trong tất cả Sách Thánh. Thánh của mình, l à phải luôn luôn tìm c ách thấu hiểu chân lý mà Người đã trao ban, phải trung thành loan truyền và can đảm bảo vệ, nhưng không được dùng những phương tiện trái với tinh th ần Phúc âm. Nhưng đồng thời, vì tình yêu Chúa Kitô thúc bách, họ hãy lấy tình thương, sự khôn ngoan và lòng kiên nhân mà đối xử với những kẻ còn sống trong lầm lạc hoặc chưa nhận biết đức tin.",
        chuong: 33,
        loi_chua: [
            "Lc 24,25-27: Bấy giờ Đ ức Giêsu nói với hai ông rằng: Các anh ch ẳng hiểu gì",
            "TD 14d: M ỗi môn đệ đều có bổn phận quan tr ọng đối với Chúa Kitô, Thầy Chí",
        ],
        tham_chieu: [
            "2Tm 2,24-25",
            "TG 13ab; TD 9,11ab",
        ],
    },
    {
        stt: 877,
        noi_dung: "Nhiều gia đình, nhiều cộng đoàn chỉ dùng lưỡi đối thoại với nhau. N ếu biết dùng quả tim đối thoại đứng đắn, tâm hồn họ sẽ xích lại gần nhau.",
        chuong: 33,
    },
    {
        stt: 878,
        noi_dung: "Lúc đối thoại, Ch úa Gi êsu không đóng mi ệng Phêrô nóng nảy. Lời lẽ bồng bột chua chát của người khác không làm sụp đổ vũ trụ đâu. Con đừng sợ, cứ đối thoại với tất cả tâm hồn thay vì lý sự. những người ngang hàng với chúng tôi, không còn cơ hội đó nữa.",
        chuong: 33,
        loi_chua: [
            "2Cr 11,12: Đ iều tôi làm, tôi sẽ tiếp tục làm, để những kẻ muốn có cơ hội tự phụ là",
        ],
    },
    {
        stt: 879,
        noi_dung: "Tìm đâu ra bí quy ết của đối thoại làm tâm hồn được giải thoát, cởi mở, trí kh ôn được sáng suốt? – Hãy tìm trong Phúc âm.",
        chuong: 33,
    },
    {
        stt: 880,
        noi_dung: "Chúa Giêsu không từ khước một ai đối thoại với Ngài. Ngài đối thoại với bạn hữu, với người lạ, với dân ngoại, với người tội lỗi, với người chống đối. đúng theo ki ểu loài người để dẫn họ đến ánh sáng thần linh, thì c ác môn đệ của Người đã thấm nhuần tinh th ần Chúa Kitô, cũng phải hiểu biết người họ chung sống, và phải đàm thoại với họ, để nhờ chính việc đối thoại chân thành và nhẫn nại đó, các môn đệ học biết những ân huệ phong phú mà Thiên Chúa đã r ộng ban cho c ác d ân t ộc; đồng th ời c ác m ôn đệ ph ải c ố g ắng đem ánh sáng Phúc âm chiếu soi n hững ân huệ đó, giải thoát chúng và đem chúng về quy phục Chúa Cứu Thế.",
        chuong: 33,
        loi_chua: [
            "TG 11b: Nh ư chính Ch úa Kitô đã dò xét tâm hồn con ng ười và đối thoại với họ",
        ],
        tham_chieu: [
            "MV 92c; TĐ  14b, 31b",
        ],
    },
    {
        stt: 881,
        noi_dung: "Lãnh đạo phải trở nên mọi sự cho m ọi người, trong b ất cứ trường hợp nào, chấp nhận mọi thứ công việc, nhọc mệt, chống đối, và khi cần phải hy sinh cả mạng sống để mưu ích cho đoàn thể. Nhưng đừng bao giờ vì thế mà giảm sút sự lo lắng cho chính linh hồn con. Đ ức Kitô. Trái lại, khi ở giữa anh em, chúng tôi đã cư xử thật dịu dàng, chẳng khác n ào mẹ hiền ấp ủ con th ơ. Ch úng tôi đã quý mến anh em, đến nỗi sẵn sàng hiến cho anh em, kh ông những Tin M ừng của Thiên Chúa, mà cả mạng sống của chúng tôi nữa, vì anh em đã trở nên những người thân yêu của chúng tôi. hủy mình  m à nhận lấy thân phận tôi tớ (Pl 2,7). Do đó, họ phải sẵn sàng để suốt đời đứng vững trong ơn gọi của mình, phải từ bỏ mình và những gì mình có từ trước đến nay và trở nên mọi sự cho mọi người.",
        chuong: 33,
        loi_chua: [
            "1Tx 2,7-8: Chúng tôi có thể đòi anh em ph ải trọng đãi, với tư cách là Tông Đ ồ",
            "TG 24a: K ẻ được sai đi phải thấm nhuần đời sống và sứ mệnh của Đ ấng đã tự",
        ],
        tham_chieu: [
            "1Cr 9,27; 2Cr 12,15",
            "GH 27c; LM 13d; TG 25b",
        ],
    },
    {
        stt: 882,
        noi_dung: "Nhận tr ách nhi ệm l ãnh đạo, con ph ải nh ớ r ằng, sau khi đem h ết thi ện chí chu to àn nhiệm vụ, hãy xem mình l à tôi tớ vô dụng, nhìn nh ận mình c òn nhiều khuyết điểm và không ngạc nhiên, buồn phiền khi được đáp trả bằng hiểu lầm và vô ơn (x. Lc 17,10). Đ ọc lại đời sống dưới ánh sáng Phúc âm",
        chuong: 33,
        loi_chua: [
            " ",
        ],
    },
    {
        stt: 883,
        noi_dung: "Trên đường Hy v ọng, thỉnh thoảng con ph ải dừng chân, nơi bóng mát, để kiểm điểm, sửa ch ữa nh ững b ước l ệch l ạc, r út ki nh nghi ệm cho b ước ti ến, chu ẩn b ị th êm h ành trang. viên của những tổ chức này (tông đồ) kiểm điểm về những phương pháp, kết qủa của hoạt động tông đồ của mình, v à cùng nhau đem đời sống hằng ngày của mình đối chiếu với Phúc âm.",
        chuong: 34,
        loi_chua: [
            "TĐ  30e: Cùng với các bạn hữu hay với các đồng chí hợp thành tiểu tổ, các đoàn",
        ],
        tham_chieu: [
            "GM 16d; LM 19c; TĐ  32a",
        ],
    },
    {
        stt: 884,
        noi_dung: "Công tác càng lớn, kế toán càng kỹ. Nếu con cẩu thả, ấy là dấu con xem thường sự sống đời đời của con. nhiều n ăm. Th ôi, c ứ ngh ỉ ng ơi, c ứ ăn u ống vui ch ơi cho đã! Nh ưng Thi ên Chúa bảo ông ta: Đ ồ ngốc! Nội đêm nay, người ta sẽ đòi lại mạng ngươi, thì những gì ngươi sắm sẵn đó sẽ về tay ai?",
        chuong: 34,
        loi_chua: [
            "Lc 12,19-20: Lúc ấy ta sẽ nhủ lòng: hồn ta hỡi, mình bây giờ ê hề của cải, dư xài",
        ],
        tham_chieu: [
            "Mt 5,25-26",
        ],
    },
    {
        stt: 885,
        noi_dung: "Nhìn quá khứ để than van: vô ích. Nhìn quá khứ để kiêu căng: nguy hiểm. Nhìn quá khứ để rút kinh nghiệm cho hiện tại: khôn ngoan.",
        chuong: 34,
    },
    {
        stt: 886,
        noi_dung: "Kiểm điểm kỹ càng, kiểm điểm sáng suốt, kiểm điểm chân thành, kiểm điểm can đảm. Không kế toán viên nào, không máy IBM nào kiểm điểm thay con được, nếu con muốn cho đáp số trước. Tỉnh giấc đi, hỡi người còn đang ngủ! Từ chốn tử vong, tr ỗi dậy đi nào! Đ ức Kitô sẽ chiếu sáng ngươi!",
        chuong: 34,
        loi_chua: [
            "Ep 5,10-14: Bất cứ điều gì lộ ra, thì trở nên ánh sáng. Bởi vậy, có lời chép rằng :",
        ],
    },
    {
        stt: 887,
        noi_dung: "Kiểm điểm mỗi tối, kiểm điểm mỗi tuần, kiểm điểm mỗi lần xưng tội, kiểm điểm mỗi lần tĩnh tâm. Xe tốt mấy cũng phải làm máy lại, người khoẻ mấy cũng phải khám tổng quát nếu muốn tránh sụp đổ bất ngờ, không cứu vãn được.",
        chuong: 34,
    },
    {
        stt: 888,
        noi_dung: "Con đừng khinh d ễ những sự bất tín nh ỏ mọn. Không cần bão lụt khủng khiếp, những con sâu nhỏ trong m ột đêm, có thể làm tan n át bao nhi êu vốn liếng lao l ực trong m ột cánh đồng xanh tươi thơm ngát. lương trong việc rất nhỏ, thì cũng bất lương trong việc lớn.",
        chuong: 34,
        loi_chua: [
            "Lc 16,10: Ai trung tín trong vi ệc rất nhỏ, thì cũng trung tín trong vi ệc lớn; ai bất",
        ],
    },
    {
        stt: 889,
        noi_dung: "Chỉ có lính điên mới đưa lưng lãnh đạn, miễn đừng tử thương thì thôi. Đó  là thái độ của con khi phạm tội nhẹ, chỉ cốt tránh tội trọng thôi.",
        chuong: 34,
    },
    {
        stt: 890,
        noi_dung: "Con đau đớn vì nhi ều l ần đã ph ản b ội Ch úa: t ốt, nh ưng ch ưa đủ. Ph ải l àm nh ư Mađalêna các tội của bà, các tội lỗi nhiều đó, quả đã được tha r ồi vì b à đã cảm mến nhiều (Lc 7,47); phải làm như Gioan: trốn bỏ Chúa trong vườn Giếtsêmani, nhưng trở lại đứng bên Thánh giá, dốc quyết hằng yêu mến bằng hành động. Đ ấng Cứu Thế và là Chúa Chiên nhờ chịu các phép bí tích cách hiệu quả, nhất là trong việc năng chịu bí tích Cáo giải, được chuẩn bị bằng sự xét mình hằng ngày, vì nó sẽ giúp nhiều cho việc thật lòng trở về với tình yêu của Cha từ bi.",
        chuong: 34,
        loi_chua: [
            "LM 18b: Các thừa tác viên của ân sủng bí tích kết hợp mật thiết với Chúa Kitô là",
        ],
        tham_chieu: [
            "GH 40a; MV 25c, 37bcd; LM 5d, 6b; TĐ  8; HN 3e, 7",
        ],
    },
    {
        stt: 891,
        noi_dung: "Không tránh tội nhẹ, con mến yêu Chúa ít quá. Con không đủ động lực nội tâm để tiến trên đường Hy vọng. hãy cố gắng hết mình, để làm cho các ơn đó nên vững mạnh. Có thế, anh em sẽ không bao giờ vấp ngã.",
        chuong: 34,
        loi_chua: [
            "2Pr 1,10: Th ưa anh em, anh em đã được Thiên Chúa tuyển chọn và mời gọi, thì",
        ],
    },
    {
        stt: 892,
        noi_dung: "Không kiểm điểm bệnh thiếu sót là một thiếu sót lớn, đây là một ít hiện tượng: hững hờ làm việc Chúa, tính to án giảm thiểu các hy sinh, kh éo léo trốn tránh trách nhiệm, hành động vì lý do trần tục, so đo lánh nặng tìm nhẹ… đối với tha nhân và hơn nữa đối với chính Thiên Chúa, khiến phần rỗi đời đời của mình bịđe dọa.",
        chuong: 34,
        loi_chua: [
            "Gc 4,17: Vậy kẻ nào biết làm điều tốt mà không chịu làm thì mắc tội.",
            "MV 43a: Đ ối với Kitô hữu, xao lãng bổn phận trần thế, tức là xao lãng bổn phận",
        ],
        tham_chieu: [
            "LM 5c, 15a; Đ T 19a; TĐ  4a",
        ],
    },
    {
        stt: 893,
        noi_dung: "Sự ăn ăn hối cải của con không phải là hát bội, khóc lóc não nùng xong rồi hết tuồng hạ màn và đâu lại vào đó. người ở Giê-ru-sa-lem và trong kh ắp miền Giu-đê, sau đó cho c ác dân ngoại, kêu g ọi h ọ s ám h ối v à tr ở v ề c ùng Thi ên Ch úa, đồng th ời l àm nh ững vi ệc chứng tỏ lòng ăn năn sám hối.",
        chuong: 34,
        loi_chua: [
            "Cv 26,20b: Tôi đã rao giảng trước hết cho những người ở Đ a-mát, rồi cho những",
        ],
        tham_chieu: [
            "Mt 23,25-26",
        ],
    },
    {
        stt: 894,
        noi_dung: "Dù bay lồng lộng giữa không gian thế mà lộ trình của phi thuyền rất rõ rệt; là phi hành gia con phải sửa tay lái liên lỉ và triệt để nghe lời chỉ bảo từ quả đất. Lệch lạc là không đến đích. Người mới cho roi cho vọt.",
        chuong: 34,
        loi_chua: [
            "Dt 12,6: Vì Ch úa th ương ai thì m ới s ửa d ạy k ẻ ấy, v à c ó nh ận ai l àm con  thì",
        ],
        tham_chieu: [
            "Mt 24,11-13",
        ],
    },
    {
        stt: 895,
        noi_dung: "Kiểm điểm mấy cũng vô ích, n ếu con kh ông dốc quyết cải thiện. Coi m áy mà không làm máy lại, xe chẳng chạy được. hãy nh ớ l ại xem ng ươi đã t ừ đâu r ơi xu ống, h ãy h ối c ải v à l àm nh ững vi ệc ngươi đã làm thuở ban đầu. Bằng không, Ta đến với ngươi, và Ta sẽ đem cây đèn của ngươi ra khỏi chỗ của nó, nếu ngươi không hối cải.",
        chuong: 34,
        loi_chua: [
            "Kh 2,4-5: Ta tr ách ngươi điều này: ngươi đã để mất tình y êu thuở ban đầu. Vậy",
        ],
        tham_chieu: [
            "2Pr 2,20-22",
        ],
    },
    {
        stt: 896,
        noi_dung: "Dốc quyết ít điểm, dốc quyết thực tế, dốc quyết căn bản. Có những người tưởng mình thánh thiện vì có một sổ lớn đầy dẫy những dốc quyết mây mưa.",
        chuong: 34,
    },
    {
        stt: 897,
        noi_dung: "Đ ể sau đôi khi l à đường lối của người khôn ngoan, l ắm lúc là khẩu hiệu của những người bi quan, nhát đảm và bại trận. xét mai sau, thì ông Phê-lích phát sợ nên nói: Bây giờ ông có thể lui ra. Khi nào tiện dịp, tôi sẽ cho gọi ông đến.",
        chuong: 34,
        loi_chua: [
            "Cv 24,25: Khi ông Phao-lô biện luận về đức công chính, sự tiết độ và cuộc phán",
        ],
    },
    {
        stt: 898,
        noi_dung: "Chỉ giây phút hiện tại mới quan trọng. Đ ừng nhớ ngày hôm qua của con để khóc lóc. Nó đã vào dĩ vãng. Đ ừng nhìn ngày mai của anh em để xét đoán. Đ ừng lo ngày mai của con để bi quan. Nó còn trong tương lai. Giao quá khứ cho lòng nhân từ Chúa, giao tương lai cho sự quan phòng Chúa, giao tất cả cho tình yêu Chúa. nào có cái khổ của ngày ấy.",
        chuong: 34,
        loi_chua: [
            "Mt  6,34: Anh em đừng lo lắng về ngày mai : ng ày mai, cứ để ngày mai lo. Ng ày",
        ],
    },
    {
        stt: 899,
        noi_dung: "Đ ừng phiền muộn, đừng ngã lòng. Lắm lúc hiện tượng ấy do b ệnh kiêu ngạo phát sinh. Con cứ đinh ninh rằng con thuộc chín phẩm thiên thần không thể phạm tội sao? gáy, thì anh đã chối Thầy ba lần. Ông Phê-rô lại nói: Dầu có phải chết với Thầy, con cũng không chối Thầy. Tất cả các môn đệ cũng đều nói như vậy.",
        chuong: 34,
        loi_chua: [
            "Mt 26,34-35: Đ ức Giêsu bảo ông: Thầy bảo thật anh: nội đêm nay, gà chưa kịp",
        ],
        tham_chieu: [
            "Ga 8,7-9",
        ],
    },
    {
        stt: 900,
        noi_dung: "Con dốc quyết làm tông đồ Chúa, nhưng con kh ông phó thác vô điều kiện cho Ch úa. Làm sao con là khí cụ đắc lực trong tay Chúa, khi con còn tháo gỡ và cất dấu ít bộ phận. thưa : Thưa Thầy, xin cho phép tôi về chôn cất cha tôi trước đã. Đ ức Giêsu bảo: Cứ để kẻ chết chôn kẻ chết của họ. Còn anh, anh h ãy đi loan báo Triều Đ ại Thiên Chúa.",
        chuong: 34,
        loi_chua: [
            "Lc 9,59 -60: Đ ức Gi êsu n ói v ới m ột ng ười kh ác: Anh h ãy theo t ôi! Ng ười ấy",
        ],
        tham_chieu: [
            "Lc 14,18-20",
        ],
    },
    {
        stt: 901,
        noi_dung: "Trước c ông cu ộc l ớn lao, l ắm l úc con nghe c ám d ỗ mu ốn được khuy ến khích, được phương tiện của quyền thế để làm việc Chúa chóng kết qủa hơn, vinh danh Ch úa hơn. Vinh danh Chúa hay sáng danh con? - Nếu cần phương tiện quyền thế, Chúa Giêsu đã dùng rồi. - Hãy tìm Nước Trời rồi mọi sự sẽ được ban thêm cho con (x. Mt 6,33). - Chỉ trích kẻ khác, cậy quyền thế để rồi con cũng nương tựa và nô lệ quyền thế sao? tìm ki ếm vinh danh Thi ên Ch úa Cha trong Ch úa Kit ô. Vinh danh n ày h ệ t ại việc m ọi ng ười đón nh ận m ột c ách ý th ức, t ự do v à bi ết ơn c ông trình c ủa Thiên Chúa đã được hoàn tất trong Ch úa Kitô lại biểu lộ công trình đó trong suốt cuộc đời mình.",
        chuong: 34,
        loi_chua: [
            "LM 2e: Trong ch ức vụ và đời sống của mình, c ác Linh mục phải nhằm mục đích",
        ],
        tham_chieu: [
            "MV 43a; LM 9b; TĐ  3a, 4ac, 8a",
        ],
    },
    {
        stt: 902,
        noi_dung: "Phải ch ăng con s ợ ng ười s áng su ốt c ười con l à  điên d ại? L úc c òn s ống T êrêxa Avila, Phanxic ô Assisi ô, Cott ôlengô, Gioan Bosc ô… b ị nhi ều ng ười g ọi l à điên d ại, nhưng ngày nay nh ững tên điên dại ấy lại được tôn làm thánh. Hãy tin t ưởng và mạnh tiến. cái yếu đuối của Thiên Chúa còn hơn cái mạnh mẽ của loài người.",
        chuong: 34,
        loi_chua: [
            "1Cr 1,25: Cái điên rồ của Thiên Chúa còn hơn cái khôn ngoan của loài người, và",
        ],
    },
    {
        stt: 903,
        noi_dung: "Đ ể đi đúng hướng trên đường Hy v ọng, con ph ải phản ứng ngay: Lạy Chúa, tất cả vì yêu mến Chúa, tất cả vì Chúa trong anh em con, Con không dành gì cho con, Con không muốn ai biết ơn con, Con không muốn phần thưởng nào. còn các ông, các ông lại làm nhục tôi. Phần tôi, tôi không tìm vinh quang cho mình. Có Đ ấng tìm cho tôi và xét xử cho tôi. thống trị hay được danh gi á, nhưng để hết mình phụng sự Thiên Chúa và chu toàn bổn phận mục vụ.",
        chuong: 34,
        loi_chua: [
            "Ga 8,49-50: Đ ức Giêsu trả lời: Tôi không bị quỷ ám. Nhưng tôi tôn kính Cha tôi;",
            "Đ T 9a: Ch ủng sinh ph ải th ấu hi ểu th ật r õ r àng l à cu ộc đời h ọ kh ông ph ải để",
        ],
        tham_chieu: [
            "1Cr 3,22; Cl 3,11",
            "LM 9b, 14, 15; TĐ  4b",
        ],
    },
    {
        stt: 904,
        noi_dung: "Kiểm điểm rồi con ph ải làm gì? Con h ãy khiêm tốn khóc lóc tội mình nh ư Phêrô, hãy ngồi bên chân Chúa, hãy yêu mến bù lại như Mađalêna, hãy dốc quyết canh t ân như Giakêu, hãy làm tông đồ hăng say như Phaolô. Tràn đầy hy vọng, con tiến lên. khờ dại, nhưng hãy sống như người khôn ngoan.",
        chuong: 34,
        loi_chua: [
            "Ep 5,15: Anh em hãy cẩn thận xem xét cách ăn nết ở của mình, đừng sống như kẻ",
        ],
        tham_chieu: [
            "Mt 26,75; Lc 7,38-48; 19,1-10; 2Cr 11,22-33",
        ],
    },
    {
        stt: 905,
        noi_dung: "Ai cũng có những ước vọng: – Sách báo, – Trường học, – Hội đoàn, – Nhà máy. Với sức con, ước vọng lại hoàn ước vọng. Nhưng để ơn Chúa vào trước cái ước vọng ấy, con có những số kỷ lục. – Ngàn sách báo, – Vạn trường học, – Triệu hội đoàn, – Tỷ nhà máy.",
        chuong: 34,
    },
    {
        stt: 906,
        noi_dung: "Phương thế của con cũng là phương thế các tông đồ: – Thánh Thể: Ta sẽ ở với các con mọi ngày cho đến tận thế (Mt 28,20). – Thánh Linh: Người sẽ ban cho các ngươi một Đ ấng Bầu Chữa khác (Ga 14,16). – Mẹ Maria: Này là Mẹ Con! (Ga 19,27). – Phúc âm: Hãy đi khắp cả thiên hạ rao gi ảng Tin m ừng cho m ọi loài thụ tạo (Mc 16,15). Chúa Giêsu đã trao cho con, con cho là ít sao? Thế gian có gì sánh được không? chỉ dựa vào bằng chứng xác thực của Thần Khí và quyền năng Thiên Chúa. Có vậy, đức tin của anh em mới không dựa vào lẽ khôn ngoan người phàm, nhưng dựa vào quyền năng Thiên Chúa. hoạt động giúp các Kitô hữu được nuôi dưỡng bằng Lời của Thiên Chúa nơi Thánh Kinh v à Bàn tiệc Thánh Thể; ai c ũng biết rằng việc siêng năng lui t ới bàn thánh quan trọng chừng nào cho việc thánh hoá bản thân các Linh mục.",
        chuong: 34,
        loi_chua: [
            "1Cr 2,4-5: Tôi nói, tôi giảng mà chẳng có dùng lời lẽ khôn khéo hấp dẫn, nhưng",
            "LM 18a: Trong t ất cả các phương thế thiêng liêng, quan tr ọng hơn cả là những",
        ],
        tham_chieu: [
            "GH 48b; LM 18bc; Đ T 8a; TG 4,9b",
        ],
    },
    {
        stt: 907,
        noi_dung: "Trước hoài bão lớn lao, ch ương trình h ành động vĩđại, trở ngại cao nh ư núi rộng như biển, con yếu đuối sao vượt nổi? Lấy phương tiện ở đâu? Thánh Phaolô đã nói với giáo dân ngày xưa băn khoăn như con: Những điều thế gian coi là yếu đuối, thì Thiên Chúa đã chọn để bêu nhuốc những gì l à mạnh mẽ (1Cr 1,27), hi ện tôi có là gì, l à bởi ơn Thiên Chúa, và ơn Người xuống cho t ôi đã không ra h ư luống (1Cr 15,10), ngh ĩa là con phải trung tín nghe theo ơn Chúa. các ngài được vững mạnh trong đời sống thiêng liêng, miễn là các ngài ngoan ngoãn theo Thần khí Chúa Kitô, Đ ấng ban sự sống và dẫn dắt các ngài.",
        chuong: 34,
        loi_chua: [
            "LM 12c: Khi thi h ành thừa tác vụ của Chúa Thánh Thần và của sự công chính,",
        ],
        tham_chieu: [
            "LM 15a",
        ],
    },
    {
        stt: 908,
        noi_dung: "Kiểm điểm là đọc lại đời con, dưới ánh sáng đức tin. Linh mục có thể tận tâm tìm kiếm những dấu hiệu của thánh ý Chúa và những thúc đẩy của ơn thánh Ngài trong nh ững biến cố khác nhau c ủa đời sống, và như th ế ng ày c àng tr ở nên d ễ d àng v âng ph ục s ứ m ệnh đã nh ận l ãnh trong Chúa Thánh Thần hơn.",
        chuong: 34,
        loi_chua: [
            "LM 18b: Dưới ánh sáng đức tin được nuôi dưỡng bằng việc đọc Sách Thánh, các",
        ],
        tham_chieu: [
            "LM 14; TĐ  30e",
        ],
    },
    {
        stt: 909,
        noi_dung: "Cứ sáu tháng một lần, hãy lập một thống kê các hoạt động của con, một thống kê các đồ dùng của con, một thống kê các tình cảm của con, xem xét kỹ càng và can đảm gạch bỏ những gì vô ích. Mẹ nghèo khó, nhưng Mẹ ban cho ta kho tàng trọng nhất: Chính Chúa Giêsu, Đ ấng ban mọi ân sủng",
        chuong: 34,
        loi_chua: [
            " ",
        ],
    },
    {
        stt: 910,
        noi_dung: "Không có mẹ, dù được mọi người lo lắng bảo đảm đến đâu, em bé cũng không đi theo. Nhưng đi với mẹ, dù băng rừng, vượt suối, đói rét, em v ẫn đi. Trong cu ộc chiến, bao nhiêu bà mẹ chết rồi, đứa con vẫn lê lết một bên. Trên đường Hy vọng, con nắm tay Mẹ Maria; có Mẹ đã đủ cho con rồi, con không cô đơn. Mẹ là nguồn sống, là an vui, là hy vọng của chúng con. ảnh v à kh ởi thủy c ủa Giáo hội phải hoàn thành đời sau; c ũng thế, d ưới đất này, cho t ới ngày Chúa đến (x. 2Pr 3,10), Ng ài chiếu sáng như dấu chỉ lòng cậy trông vững vàng và niềm an ủi cho dân Chúa đang lữ hành.",
        chuong: 35,
        loi_chua: [
            "GH 68a: Ng ày nay M ẹ Chúa Giêsu đã được vinh hi ển hồn xác trên trời, là hình",
        ],
        tham_chieu: [
            "GH 66; TĐ  4j",
        ],
    },
    {
        stt: 911,
        noi_dung: "Trẻ em chỉ cần mẹ. Vắng bóng mẹ, trẻ khóc nức nở, không ai dỗ được, cho nó kẹo bánh, quà đẹp hay vàng ngọc nó cũng vứt đi, nó chỉ vui tươi lại khi gặp mẹ. Con phải trở nên như trẻ em, để hiểu và yêu mến Mẹ Maria.",
        chuong: 35,
    },
    {
        stt: 912,
        noi_dung: "Tình yêu Mẹ như làn gió mát, như hạt sương mai, làm tâm hồn quằn quại khao khát an bình, được êm dịu ủi an.",
        chuong: 35,
    },
    {
        stt: 913,
        noi_dung: "Này là Mẹ con! (Ga 19,27). Sau ph ép Thánh Thể, Chúa không thể trối gì h ơn cho con; Mẹ đã đạp đầu con rắn, Mẹ sẽ giúp con chiến thắng ma quỷ, thế gian, xác thịt. Mẹ sẽ ban ơn cho con giữ vững lý tưởng cao cả Chúa đã đặt vào lòng con. mẫu, bà Ma-ri-a vợ ông Cơ-lô-pát, cùng với bà Ma-ri-a Mác-đa-la. Khi th ấy thân mẫu và môn đệ mình thương mến đứng bên cạnh, Đ ức Giêsu nói với thân mẫu rằng: Thưa Bà, đây là con của Bà. Rồi Người nói với môn đệ: Đ ây là mẹ của anh. Kể từ giờ đó, người môn đệ rước bà về nhà mình. Nữ rất thánh Maria, Đ ấng mà Chúa Kitô khi h ấp hối trên Thánh giá đã trối ban làm mẹ người môn đệ.",
        chuong: 35,
        loi_chua: [
            "Ga 19,25 -27: Đ ứng gần thập giá Đ ức Gi êsu, c ó thân mẫu Người, ch ị của thân",
            "Đ T 8a: Họ phải lấy lòng tin cậy như con thảo mà tôn kính và yêu mến Đ ức Trinh",
        ],
        tham_chieu: [
            "Kh 12,1tt",
            "GH 62a; LM 18b",
        ],
    },
    {
        stt: 914,
        noi_dung: "Đ ứa con b ệnh tật, xấu xí, ng ười mẹ vẫn thương yêu. Dù con ngu ội lạnh, tội lỗi, phản bội, hãy phó mình trong tay Mẹ. Chúa Giêsu trối: Này là Mẹ Con! (Ga 19,27), nỡ nào Mẹ bỏ con.",
        chuong: 35,
    },
    {
        stt: 915,
        noi_dung: "Lúc sa ng ã, hãy khiêm tốn, khóc lóc với Mẹ, vì con đã giết chết Con M ẹ. Mẹ sẽ đón nhận con. Gioan M ẹ c ũng nhận, ng ười tr ộm l ành, Ma đalêna, M ẹ c ũng nhận l àm con Mẹ.",
        chuong: 35,
    },
    {
        stt: 916,
        noi_dung: "Mẹ Maria l à sách Phúc âm sống, cỡ nhỏ, bình d ân, hơn tất cả các sách vừa tầm con.",
        chuong: 35,
    },
    {
        stt: 917,
        noi_dung: "Muốn biết Mẹ tốt đẹp chừng nào, con h ãy nhớ Mẹ là Mẹ Chúa Ngôi Hai, cao c ả, toàn năng: phúc cho con biết mấy vì Ngài cũng là Mẹ của con. Nếu không có lời trăn trối của Chúa Giêsu, con không thể hiểu được. trời, chân đạp mặt trăng, và đầu đội triều thiên mười hai ngôi sao. Bà có thai, đang kêu la đau đớn và quằn quại vì sắp sinh con.",
        chuong: 35,
        loi_chua: [
            "Kh 12,1-2: Một điềm lớn xuất hiện trên trời: một người Phụ Nữ, mình khoác mặt",
        ],
    },
    {
        stt: 918,
        noi_dung: "Muốn nên thánh, con hãy bắt chước trẻ thơ. Nó không hiểu lý thuyết gì, nhưng nó nhìn mẹ nó, nó làm theo mẹ nó, nó tin mẹ nó biết tất cả, làm đúng tất cả. Nhìn Mẹ Maria, làm như Mẹ Maria, con sẽ nên thánh. tình cản chóng qua và vô bổ, cũng không hệ tại một sự dễ tin phù phiếm, nhưng phát sinh từ một đức tin chân thật. Đ ức tin dẫn chúng ta đến chỗ nhìn nhận địa vị cao cả của Mẹ Thiên Chúa, và thúc đẩy chúng ta lấy tình con th ảo yêu mến và noi gương các nhân đức của Mẹ chúng ta.",
        chuong: 35,
        loi_chua: [
            "GH 6a: Ph ần các tín h ữu, hãy nhớ rằng lòng tôn sùng chân chính kh ông hệ tại",
        ],
        tham_chieu: [
            "GH 64, 65, 66",
        ],
    },
    {
        stt: 919,
        noi_dung: "Đ ọc kinh c ầu Đ ức Mẹ là cách đơn sơ Hội thánh dạy con hi ểu và nhớ các t ước hi ệu, quyền n ăng, nh ân đức, l òng y êu th ương c ủa M ẹ con. C àng nhìn M ẹ, con c àng sung sướng, hy vọng cho ph ận mình đang chiến đấu vất vả và con k êu Mẹ như trẻ thơ: Cầu cho chúng con! Cầu cho chúng con!",
        chuong: 35,
    },
    {
        stt: 920,
        noi_dung: "Với tâm tình th ánh thiện, hãy ghi v ào lòng mà suy ni ệm, mấy lời vắn tắt diễn tả cuộc đời Mẹ để yêu mến và bắt chước: – Này tôi là tôi tá Chúa: Ecce. – Xin hãy thành sự cho tôi theo lời Ngài!: Fiat. – Linh hồn tôi ngợi khen Chúa: Magnificat (x. Lc 1,38-46). Đ ức Trinh Nữ thành Nagiarét được Thiên Thần vâng lệnh Chúa đến truyền tin và kính ch ào l à Đ ấng đầy ơn ph úc (x. Lc 1,28). V à Trinh N ữ đã đáp l ời Thiên sứ rằng: Này tôi là tôi tá Chúa, xin h ãy xảy ra cho t ôi theo l ời Ngài (Lc 1,38). Nh ư thế, Đ ức Maria con ch áu Ađam, vì ch ấp nhận lời Thiên Chúa, đã trở nên Mẹ Chúa Giêsu.",
        chuong: 35,
        loi_chua: [
            "GH 56: Tr àn đầy thánh thiện, có một không hai ngay t ừ lúc mới được thụ thai,",
        ],
        tham_chieu: [
            "GH 46b",
        ],
    },
    {
        stt: 921,
        noi_dung: "Phản ứng đầu ti ên c ủa tr ẻ th ơ l à g ọi: M ẹ ơi! M ẹ! khi lo s ợ, l úng t úng, đau bu ồn. Tiếng mẹ là tất cả cho nó. Con hãy năng gọi: Mẹ, Mẹ ơi! Con yêu mến Mẹ, con trông cậy Mẹ, Mẹ là tất cả của con.",
        chuong: 35,
    },
    {
        stt: 922,
        noi_dung: "Chuỗi Mân Côi là dây ràng buộc con với Mẹ, là cuốn phim kỷ niệm con đường hy vọng của Mẹ: âu yếm như ở Bêlem, khắc khoải như bên Ai cập, trầm lặng như thời Nagiarét, lao động như trong xưởng mộc, sốt sắng như tại Đ ền thờ, cảm động lúc Chúa giảng, đau khổ bên thánh giá, vui mừng lúc Phục sinh, làm tông đồ bên Gioan. Tóm lại, Chúa sống trong Mẹ, Mẹ trong Chúa, hai cuộc đời chỉ là một. Đ ừng bỏ chuỗi Mân côi Mẹ đã trao và qua đó Mẹ nhủ con sống như Mẹ, với Mẹ, nhờ Mẹ, trong Mẹ. hiệu: Mẹ Thiên Chúa, và các tín hữu đã khẩn cầu cùng ẩn nấu dưới sự che chở của Ngài trong mọi cơn gian nan khốn khó. Nhất là từ Công đồng Êphêsô, dân Thiên Chúa đã gia t ăng lòng tôn kính Đ ức Maria c ách lạ lùng: họ sùng kính mến yêu, cầu khẩn và noi g ương đúng như lời Ngài đã tiên báo: Muôn đời sẽ khen t ôi có phúc, vì Đ ấng toàn năng đã làm cho t ôi những việc trọng đại (Lc 1,48-49).",
        chuong: 35,
        loi_chua: [
            "GH 66a: T ừ nh ững thời r ất xa x ưa, Đ ức Trinh N ữ đã được t ôn kính d ưới tước",
        ],
        tham_chieu: [
            "GH 67a; LM 18b",
        ],
    },
    {
        stt: 923,
        noi_dung: "Không gì qu ý bằng món qùa lòng Mẹ Maria t ặng cho ch úng ta: Ch úa Giêsu, món quà quý nhất. Chính lòng Đ ức Mẹ cũng quý nhất vì: Giêsu Con lòng Bà. cưu mang cũng được chúc phúc. Bởi đâu tôi được Thân Mẫu Chúa tôi đến với tôi thế này?",
        chuong: 35,
        loi_chua: [
            "Lc 1,42-43: Em được chúc phúc hơn mọi người phụ nữ, và người con em đang",
        ],
    },
    {
        stt: 924,
        noi_dung: "Chúa Giêsu đã chỉ rõ cho chúng ta mẫu gương để theo: Đ ức Chúa Cha: Hãy nên trọn lành như Cha các ngươi trên trời là Đ ấng trọn lành (Mt 5,48). Nhưng vì không ai thấy Cha trên trời, nên Chúa Giêsu đã chỉ trích mình Ngài: Ai thấy Ta thì thấy Cha (Ga 14,9). Và rồi để giúp chúng ta sống như Ngài, Chúa cho một mẫu gương dịu hiền, âu yếm, Mẹ Maria: Này là Mẹ con (Ga 19,27). dạy: Thực vậy, chỉ có một Thiên Chúa duy nh ất, và chỉ có một Đ ấng Trung gian duy nhất giữa Thiên Chúa với nhân loại, đó là Con Người Kitô Giêsu đã dâng mình làm giá chuộc mọi người (1Tm 2,5 -6). Nhưng vai trò làm Mẹ của Đ ức Ma ria đối v ới loài người kh ông l àm lu m ờ hay gi ảm b ớt vai tr ò Trung gian của Chúa Kitô chút nào, trái lại còn làm sáng tỏ mãnh lực của sự trung gian ấy. Vì m ọi ảnh hưởng có sức cứu rỗi của Đ ức Trinh N ữ trên nhân loại không phát sinh từ một sự cần thiết khách thể nào, nhưng từ ý định nhân lành của Thiên Chúa và bắt nguồn từ công nghiệp dư tràn của Chúa Kitô.",
        chuong: 35,
        loi_chua: [
            "GH 60a: Chúng ta chỉ có một Đ ấng Trung gian duy nhất, như lời Thánh Tông đồ",
        ],
        tham_chieu: [
            "GH 43a; DT 25",
        ],
    },
    {
        stt: 925,
        noi_dung: "Con thơ bắt chước mẹ tất cả, dù khó khăn nguy hiểm, vì mẹ là thần tượng, là tất cả, vì yêu mẹ, tin mẹ; xem mẹ uống thuốc, con uống theo; mẹ đi ở tù, con vào theo. Mẹ Maria là tấm gương sáng vừa tầm con, con hãy mô phỏng gương Mẹ. Chúa ba Ngôi không thể làm một tâm hồn thánh thiện hơn được.",
        chuong: 35,
    },
    {
        stt: 926,
        noi_dung: "Mẹ nêu gương ẩn dật khiêm cung, nh ưng đồng thời Mẹ luôn luôn hiện diện phục vụ. Mẹ không ra mặt, không lên tiếng nhưng Mẹ hằng ở gần bên Chúa Giêsu: Hãy sống trọn vẹn cho Chúa Giêsu đang ở trong con. rồi. Đ ức Giêsu đáp: Thưa bà, chuyện đó can gì đến bà và tôi? Giờ của tôi chưa đến. Thân mẫu Người nói với gia nhân: Người bảo gì, các anh cứ việc làm theo. rõ ràng, và ngay t ừ đầu, trong ti ệc cưới thành Cana x ứ Galilêa, vì động lòng thương xót, Ngài đã cầu bầu, khiến Chúa Giêsu, Đ ấng thiên sai, l àm phép lạ đầu ti ên c ủa Ng ười (x. Ga 2,1 -11). Trong th ời gian Ch úa truy ền đạo, Đ ức Maria đã đón nhận lời của Con Ng ài, những lời nâng cao N ước Tời lên khỏi những b ận t âm v à liên hệ huy ết nh ục, v à tuy ên bố l à c ó ph úc cho nh ững ai nghe và giữ lời Thiên Chúa (x. Mc 3,35 v à song song; Lc 11,27 -28) như chính Ngài h ằng thực h ành những điều đó c ách trung tín (x. Lc 2,19.51). Nh ư th ế Đ ức Trinh Nữ cũng đã tiến bước trong cuộc lữ hành đức tin, trung th ành hiệp nhất với Con cho đến bên thập giá, là nơi mà theo ý Thiên Chúa, Ngài đã đứng ở đó (x. Ga 19,25).",
        chuong: 35,
        loi_chua: [
            "Ga 2,3-5: Khi thấy thiếu rượu, thân mẫu Đ ức Giêsu nói với Người: Họ hết rượu",
            "GH 58: Trong cu ộc đời công khai của Chúa Giêsu, Mẹ Người cũng đã xuất hiện",
        ],
        tham_chieu: [
            "LM 18b; TĐ  4j",
        ],
    },
    {
        stt: 927,
        noi_dung: "Chúa Giêsu đang tiếp tục sống và hành động trong H ội thánh và trong con. M ẹ Maria cũng hiện diện trong Hội thánh và trong con, vì Mẹ là Mẹ Hội thánh và Mẹ con. dứt, nhưng Ngài vẫn tiếp tục liên lỉ cầu bầu để đem lại cho chúng ta những ân huệ gi úp ch úng ta được ph ần r ỗi đời đời. V ới tình t ừ m ẫu, Ng ài ch ăm s óc những anh em c ủa Con Ng ài đang lữ hành trên dương thế và đang gặp bao nguy hiểm, thử thách, cho đến khi họ đạt tới hạnh phúc quê trời. Vì thế, trong Giáo hội, Đ ức Nữ Trinh được kêu cầu qua c ác tước hi ệu: Trạng sự, Vị Bảo Trợ, Đ ấng Phù Hộ và Đ ấng Trung Gian. Tuy nhiên phải hiểu các tước hiệu ấy thế nào để không thêm bớt gì vào vinh dự và quyền năng của Đ ấng Kitô Trung Gian duy nhất.",
        chuong: 35,
        loi_chua: [
            "GH 62a: Sau khi v ề Trời, vai tr ò của Đ ức Maria trong vi ệc cứu độ không chấm",
        ],
        tham_chieu: [
            "GH 63a; TG 42b",
        ],
    },
    {
        stt: 928,
        noi_dung: "Những lúc vinh hi ển của đời Chúa Giêsu: trên núi Taborê, khi v ào thành Giêrusalem, lúc làm phép lạ… M ẹ ở trong bóng tối. Những giây phút nguy hiểm đau buồn nhất, Mẹ can đảm hiện diện: lúc di tản sang Ai-cập, trên đường Tử nạn bi thảm, dưới Thánh giá, trong nhà tiệc ly. M ẹ không sống cho M ẹ, Mẹ chỉ sống cho Ch úa, cho c ông cuộc cứu chuộc.",
        chuong: 35,
    },
    {
        stt: 929,
        noi_dung: "Cùng cầu nguyện với các Tông đồ, giúp các Tông đồ lãnh nhận Chúa Thánh Thần, Mẹ đã chuẩn bị, đã chứng kiến ngày công khai ho á Hội thánh, cũng như Mẹ đã sinh H ội thánh trong Chúa Giêsu. Mẹ thực là Mẹ Hội thánh. mấy ng ười phụ nữ, v ới bà Ma-ri-a thân mẫu Đ ức Gi êsu, v à với anh em c ủa Đ ức Giêsu.",
        chuong: 35,
        loi_chua: [
            "Cv 1,14: Tất cả các ông đều đồng tâm nhất trí, chuy ên cần cầu nguyện cùng với",
        ],
    },
    {
        stt: 930,
        noi_dung: "Mẹ có thể hiện ra n ơi đô thị, giữa những nhà chọc trời, trong c ác Vương cung th ánh đường, cho c ác nhân vật quan tr ọng, các nhà thần học. Nhưng Mẹ đã chọn nơi hoang vu, núi đồi, xa vắng, với những kẻ chất phác, vì Mẹ muốn đến với những người không ai thèm đến, đến những chỗ không ai muốn đến. Mẹ muốn con cùng đến với Mẹ. thuộc chi tộc Giu-đa. Bà vào nhà ông Da-ca-ri-a và chào hỏi bà Ê-li-sa-bét. Bà Ê-li-sa-bét vừa nghe ti ếng bà Ma-ri-a chào, thì đứa con trong b ụng nhảy lên, và bà được đầy tràn Thánh Thần,",
        chuong: 35,
        loi_chua: [
            "Lc 1,39-40: Hồi ấy, b à Ma-ri-a vội vã lên đường, đến miền núi, vào một thành",
        ],
    },
    {
        stt: 931,
        noi_dung: "Mẹ thiếu tất cả những gì trần gian cho là hạnh phúc. Đ ọc kinh: Linh hồn tôi ngợi khen Chúa, con th ấy Mẹ như một vực sâu thấp hèn, tôi tá, người hèn mọn, người đói khát. Nhưng Chúa đã nhìn đến vực thẳm ấy và với lòng thương xót, đã làm cho Mẹ đầy ơn phúc, nghĩa là đầy Chúa. Đ ức Chúa ở cùng bà.",
        chuong: 35,
        loi_chua: [
            "Lc 1,28: Sứ thần vào nhà trinh nữ và nói: Mừng vui lên, hỡi Đ ấng đầy ân sủng,",
        ],
    },
    {
        stt: 932,
        noi_dung: "Mẹ Maria nghèo khó, không tiền, không bạc, có lúc không nhà cửa, không ghế bàn, Mẹ không biết giảng, nhưng Mẹ có một món quà quý nhất để cho: - Các mục tử Bêlem, - Ba vịđạo sĩ phương đông, - Simêon và Anna ở Đ ền thánh, - Nhân loại ở Gôlgôtha (x. Mt 2,11; Lc 2,16,22-39); Ga 19,25-27). Mẹ đã thinh l ặng cho h ọ Chúa Giêsu, món quà mà chỉ Mẹ có, món quà ấy giảng thay cho Mẹ, vì đó là Ngôi Lời.",
        chuong: 35,
    },
    {
        stt: 933,
        noi_dung: "Sự hy sinh to àn hi ến c ủa M ẹ c àng cao qu ý khi M ẹ ph ó th ác cho Ch úa tr ọn v ẹn. Đ i ngược lại ước nguyện của các thiếu nữ thời ấy, Mẹ đã quyết sống đồng trinh. Ch úa đã ban cho Mẹ cả hai; vừa đồng trinh vừa làm Mẹ Thiên Chúa, Mẹ nhân loại. biết đến việc vợ chồng! Chúa trong tâm hồn và thân xác, và đem Sự Sống đến cho thế gian. Ngài được công nhận và tôn kính là Mẹ thật của Thiên Chúa và của Đ ấng Cứu Thế. Đư ợc cứu chuộc cách kỳ diệu hơn nhờ công nghiệp Con Ngài và hiệp nhất mật thiết và bền chặt với Con. Đ ức Maria đã lãnh nhận nhiệm vụ và vinh d ự cao c ả là được làm Mẹ Con Thiên Chúa, do đó làm ái nữ của Chúa Cha và Cung thánh của Chúa Thánh Thần. Nhờ lãnh nhận ân sủng vô cùng cao quý này, Ngài đã trổi vượt mọi tạo vật khác trên trời dưới đất. Nhưng đồng thời, vì thu ộc dòng dõi Adam, Ngài cũng liên kết với tất cả mọi người cần được cứu rỗi; hơn nữa, Ngài thật là Mẹ các chi thể của Chúa Kitô … vì đã cộng tác trong đức ái để sinh ra các tín hữu trong Giáo hội là những chi thể của Đ ầu ấy.",
        chuong: 35,
        loi_chua: [
            "Lc 1,34: B à Ma-ri-a thưa với sứ thần: Việc ấy sẽ xảy ra c ách nào, vì t ôi không",
            "GH 53: Khi sứ thần truyền tin, Đ ức Nữ Trinh Maria đã đón nhận Ngôi Lời Thiên",
        ],
        tham_chieu: [
            "GH 56",
        ],
    },
    {
        stt: 934,
        noi_dung: "Lòng con r ộng bao la, nh ưng túi con c ó giới hạn, chỉ có một món quà con c ó thể cho luôn, một món quà quý không ai có thể mua nổi, một quà tặng tốt không ai sánh bằng: Hãy cho họ Chúa Giêsu như Mẹ Maria. mừng trọng đại, cũng là tin mừng cho toàn dân: Hôm nay, một Đ ấng Cứu Đ ộ đã sinh ra cho anh em trong th ành vua Đ a-vít, Ng ười l à Đ ấng Kit ô Đ ức Chúa.",
        chuong: 35,
        loi_chua: [
            "Lc 2,10-11: Sứ thần bảo họ: Anh em đừng sợ. Này tôi báo cho anh em m ột tin",
        ],
    },
    {
        stt: 935,
        noi_dung: "Tràn trào nước mắt, con đế với Mẹ an ủi kẻ âu lo; đau khổ ê chề, con đến với Mẹ phù hộ các giáo hữu; tội lỗi ngã sa, con đến với Mẹ bầu chữa kẻ có tội. Chính con cũng hãy trở thành một Maria khác, lòng con hãy giống lòng Mẹ, để đón tiếp mọi người đến trú ẩn và con cũng sẽ là nguồn sống, là an vui, là hy vọng của anh em.",
        chuong: 35,
    },
    {
        stt: 936,
        noi_dung: "Mẹ hoàn toàn sống cho Chúa Giêsu, sứ mệnh của Mẹ là đồng công cứu chuộc với Chúa Giêsu… T ất cả vinh dự của Mẹ là do nơi Chúa Giêsu. Mẹ không là gì c ả nếu Con Mẹ không phải là Chúa Giêsu, nếu cả cuộc đời Mẹ không dành trọn cho Ch úa Giêsu. Đ ời con cũng không là gì cả nếu tách lìa khỏi Chúa Giêsu. gươm sẽ đâm thâu tâm hồn bà. như thế, Giáo hội với một tình yêu đặc biệt, tôn kính Đ ức Maria vinh hiển, Mẹ Thiên Ch úa, Đ ấng đã được n ối k ết v ới c ông trình c ứu chu ộc c ủa Con Ng ài bằng mối dây bất khả phân ly.",
        chuong: 35,
        loi_chua: [
            "Lc 2,35: Những ý nghĩ từ thâm tâm nhiều người sẽ lộ ra. Còn chính bà, một lưỡi",
            "PV 103: Trong khi cử hành các mầu nhiệm của Chúa Kitô theo chu k ỳ hằng năm",
        ],
        tham_chieu: [
            "GH 57, 61a, 62a, 63",
        ],
    },
    {
        stt: 937,
        noi_dung: "Con hãy tìm gi á trị của một đời sống thiêng liêng, một linh đạo sâu xa n ơi Mẹ Maria. Mẹ ho ạt động, nh ưng t ất c ả m ọi c ử ch ỉ v à t ư t ưởng, d ù v ụn v ặt nh ất, c ũng vì Ch úa Giêsu. Mẹ không thể có một giây phút nào ngoài Chúa Giêsu được. Mẹ có một đời sống nội t âm s âu s ắc v ô t ận. Trong M ẹ, ho ạt động v à chi êm ni ệm kh ông t ách lìa nhau. : chiêm niệm giữa hoạt động, hoạt động do chiêm niệm. lòng. là Đ ức Trinh N ữ Rất Th ánh Maria, N ữ vương các Tông đồ: khi s ống ở trần gian, Ngài đã sống cuộc đời như mọi người, vất vả lo lắng cho gia đình, nhưng luôn luôn kết hợp mật thiết với Con mình v à đã c ộng tác vào c ông việc của Đ ấng Cứu Thế một cách riêng biệt; còn bây giờ, sau khi đã được đưa lên trời, với tình yêu thương của người Mẹ, Ngài săn sóc những đứa em của Con Mẹ, đang trên đường lữ hành, gặp nhiều nguy hiểm và thử  thách, Ngài lo lắng cho tới khi họ về tới quê hương hạnh phúc. Mọi người hãy hết lòng tôn sùng Mẹ và phó thác đời sống và cả việc tông đồ của mình cho Mẹ coi sóc.",
        chuong: 35,
        loi_chua: [
            "Lc 2,19: Còn bà Ma-ri-a thì hằng ghi nhớ mọi kỷ niệm ấy, và suy đi nghĩ lại trong",
            "TĐ  4j: Gương mẫu hoàn hảo của đời sống thiêng liêng và đời sống tông đồ chính",
        ],
        tham_chieu: [
            "DT 5e",
        ],
    },
    {
        stt: 938,
        noi_dung: "Lối phản chứng trung thực nhất, cuộc cách mạng lớn lao nhất trong lịch sử loài người, Mẹ Maria đã làm với Chúa Gi êsu, trong chính mình: kh ông đập đổ, kh ông tiêu di ệt, không hủy bỏ lề luật. Mẹ đã hy sinh để giây phút lịch sử được thực hiện: Tân Ư ớc đã được thực hiện thay thế Cựu Ư ớc.",
        chuong: 35,
    },
    {
        stt: 939,
        noi_dung: "Con thích phi êu lưu, h ãy bước theo M ẹ. Đ ời Mẹ là một cu ộc h ành trình, phi êu l ưu trong đức tin, chỉ biết phó thác mọi sự trong tay Ch úa, và tiến đi, từ máng cỏ đến Ai- cập, từ Nagiarét đến Gôlgôtha… C ứ tin và đi! Phiêu lưu vô cùng bảo đảm!",
        chuong: 35,
    },
    {
        stt: 940,
        noi_dung: "Bất cứ ở đâu con c ũng hãy noi g ương Mẹ Maria, trao ban Ch úa Giêsu cho th ế gian… Đ iều cần không phải là nơi chỗ, vì lần đầu tiên, trong chuồng bò, Mẹ đã cho các mục tử Chúa Giêsu. Nhưng điều cần là con ph ải sống bác ái, hiệp nhất vì l úc ấy mới có Chúa Giêsu ở giữa con. Đ ời con ph ải là một lễ Giáng sinh li ên lỉ, mang Ch úa đến cho m ọi người. nhảy lên vui sướng. Kitô là Người được thụ thai bởi phép Chúa Thánh Thần và được Đ ức Nữ Trinh sinh ra để, nhờ Giáo hội, cũng sinh ra v à lớn lên trong l òng các tín h ữu. Đ ời sống của Đ ức Nữ Trinh l à một gương sáng của tình m ẫu tử thắm thiết. Tình mẫu tử ấy phải là động lực của tất cả những ai cộng tác vào sứ mệnh tông đồ của Giáo hội để tái sinh nhân loại.",
        chuong: 35,
        loi_chua: [
            "Lc 1,44: Vì n ày đây, tai t ôi vừa nghe ti ếng em ch ào, thì đứa con trong b ụng đã",
            "GH 65: Trong c ông cuộc tông đồ, Giáo hội có lý để nhìn lên Đ ấng đã sinh Chúa",
        ],
        tham_chieu: [
            "GH 64",
        ],
    },
    {
        stt: 941,
        noi_dung: "Tâm hồn con tr ẻ trung, mu ốn sống rất trung th ực, con h ãy bắt ch ước Mẹ. Trong M ẹ không có cái tôi nữa, không còn tì v ết của con ng ười cũ nữa. Mẹ vô nhiễm và đầy tràn Chúa đến nỗi không thể nói đến Mẹ Maria mà không nghĩđến Chúa Giêsu. Thiên Chúa, Đ ấng cứu độ tôi.",
        chuong: 35,
        loi_chua: [
            "Lc 1,46 -47: Linh h ồn tôi ngợi khen Đ ức Ch úa, thần trí t ôi hớn hở vui m ừng vì",
        ],
    },
    {
        stt: 942,
        noi_dung: "Không Thiên Chúa, con hoàn toàn trống rỗng, cô đơn, khố nạn. Mức độ sung mãn hạnh phúc c ủa con t ùy thu ộc m ức độ con k ết hi ệp v ới Thi ên Ch úa. M ẹ Ma ria ho àn to àn hướng về Thiên Chúa; Ngài thấy Mẹ là thụ tạo toàn hảo như ý Ngài. Mọi sự tốt đẹp của Thiên Chúa biểu lộ cách trong sáng nhất trong Mẹ. sẽ khen t ôi diễm phúc. Đ ấng Toàn Năng đã làm cho t ôi biết bao điều cao c ả, danh Người thật chí thánh chí tôn!",
        chuong: 35,
        loi_chua: [
            "Lc 1,48-49: Phận nữ tỳ hèn mọn, Người đoái thương nhìn tới; từ nay, hết mọi đời",
        ],
    },
    {
        stt: 943,
        noi_dung: "Mẹ Maria là hiện thân của sự nghèo khó. Mẹ sống nghèo cách tự nhiên, vui vẻ. Mẹ yêu mến cuộc sống nghèo, vì l òng Mẹ giàu, kho t àng Mẹ lớn. Mẹ nghèo nhất, nhưng Mẹ đẹp nhất, vì Mẹ đẹp với vẻ đẹp của Chúa ban. Có gì nghèo bằng thiên nhiên, mà lại đẹp như thiên nhiên: từ ái như mặt trăng, rực rỡ như mặt trời, óng ánh như hạt sương, dễ thương như chim sẻ, thơm tho như cành huệ (x. Kh 12,1). hai ông bà không tìm được chỗ trong nhà trọ. Chúa, là những người tin tưởng, hy vọng và lãnh nhận ơn cứu độ nơi Chúa.",
        chuong: 35,
        loi_chua: [
            "Lc 2,7: B à sinh con trai đầu lòng, lấy tã bọc con, r ồi đặt nằm trong m áng cỏ, vì",
            "GH 55: Ng ài, Đ ức Maria, tr ổi vượt trên các người khiêm hạ và khó nghèo của",
        ],
        tham_chieu: [
            "GH 46b; TĐ  4j",
        ],
    },
    {
        stt: 944,
        noi_dung: "Càng cảm thấy mình bất lực, càng thêm đau khổ. Dưới chân thánh giá, Mẹ bất lực hoàn toàn; nhìn con th ân yêu, lòng Mẹ càng tan n át. Nhưng Mẹ đứng vững để Mẹ ấp ủ con những khi con cảm thấy bất lực trước đau khổ.",
        chuong: 35,
    },
    {
        stt: 945,
        noi_dung: "Dưới chân Thánh giá, Mẹ Maria đạt đến mức độ anh hùng của mọi nhân đức: hiền lành, khiêm nhượng, thinh lặng, nhẫn nại, tin tưởng, cậy trông, yêu mến. Mẹ nghèo trơ trọi vì mất cả con ruột là Giêsu, Thiên Chúa làm người. Mẹ mến Chúa đến độ có thể hiến dâng cả mạng sống mình hi ệp với máu con để cứu chuộc nhân loại. Mẹ chịu tử đạo vì không được chết theo con. Mẹ tin cậy vững vàng trước điều thiên hạ cho là thất bại, sụp đổ hoàn toàn: Chúa chết! vào hy lễ của con với tấm lòng của một người mẹ hết tình ưng thuận hiến tế hy vật do lòng mình sinh ra.",
        chuong: 35,
        loi_chua: [
            "GH 58a: Đ ức Maria đã đau đớn chịu khổ cực với Con Một của mình và dự phần",
        ],
        tham_chieu: [
            "GH 65; PV 103",
        ],
    },
    {
        stt: 946,
        noi_dung: "Khi lạc mất Chúa Giêsu, Mẹ đau khổ tìm con, chính l úc đó tình yêu của Mẹ biểu lộ rất rõ rệt (x. Lc 2,48). Khi con kh ông còn được bao b ọc bằng bầu khí huynh đệ thánh thiện, lúc hầu như con mất Chúa rồi, chính đó là lúc Chúa Giêsu trắc nghiệm tình yêu của con đối với Chúa có thành thực không!",
        chuong: 35,
    },
    {
        stt: 947,
        noi_dung: "Ai mến Mẹ thì yêu thích chuỗi Mân côi. Bởi vì chỉ có người yêu mới lập đi lập lại một chuyện, một lời mà không biết nhàm chán.",
        chuong: 35,
    },
    {
        stt: 948,
        noi_dung: "Mẹ Maria không chỉ nhìn Chúa Giêsu, Mẹ nhìn Bà Isave, nhìn Gioan, nhìn đôi tân hôn ở Cana… Con h ãy có cái nhìn của Mẹ: nhìn Chúa, nhìn người. Con phải trả lời được cho mọi người về niềm hy vọng trong con",
        chuong: 35,
        loi_chua: [
            " ",
        ],
    },
    {
        stt: 949,
        noi_dung: "Chúc tụng Thiên Chúa và là Cha của Chúa chúng ta, Đ ức Giêsu Kitô, Đ ấng đã thể theo lòng thương hải hà mà tái sinh chúng ta cho hy vọng hằng sống nhờ sự Phục sinh, từ cõi chết của Đ ức Giêsu Kitô (1Pr 1,3).",
        chuong: 36,
    },
    {
        stt: 950,
        noi_dung: "Người công giáo là ánh sáng giữa đêm tối, là muối sống giữa thối nát, và là hy v ọng giữa một nhân loại thất vọng. muối nó cho m ặn lại? Nó đã thành vô dụng, thì ch ỉ còn việc quăng ra ngo ài cho người ta chà đạp thôi. Chính anh em là ánh sáng cho trần gian. Một thành xây trên núi không tài nào che giấu được. Chúa Kitô và đang sống giữa thế gian, giữ một vai trò rất quan trọng và đáng được đặc bi ệt l ưu t âm. Th ực v ậy, b ổn ph ận ri êng c ủa h ọ l à: sau khi th ấm nhuần tinh thần Chúa Kitô, họ phải làm sống động tự bên trong như men trong bột v à sắp đặt c ông việc tr ần thế để ch úng luôn luôn được th ực hi ện theo ý Chúa Kitô.",
        chuong: 36,
        loi_chua: [
            "Mt 5,13 -14: Chính anh em l à muối cho đời. Nhưng muối mà nhạt đi, thì l ấy gì",
            "TG 15g: Giáo dân, nghĩa là các Kitô hữu đã nhờ phép Rửa tội mà sát nhập vào",
        ],
        tham_chieu: [
            "Pl 2,14-15",
            "GH 10a; MV 43d; TĐ  2b",
        ],
    },
    {
        stt: 951,
        noi_dung: "Thánh Phaol ô h ằng khuy ên nh ủ gi áo d ân đừng s ống nh ư nh ững ng ười kh ông c ó hy vọng. để anh em ch ẳng hay bi ết gì, h ầu anh em kh ỏi buồn phiền như những người khác, là những người không có niềm hy vọng.",
        chuong: 36,
        loi_chua: [
            "1Tx 4,13: Thưa anh em, v ề những ai đã an giấc ngàn thu, chúng tôi không muốn",
        ],
    },
    {
        stt: 952,
        noi_dung: "Kitô h ữu l à nh ững ng ười ngóng đợi ni ềm hy v ọng phúc l ộc v à cu ộc hi ển linh vinh quang của Thiên Chúa lớn lao và là Cứu Chúa của ta, Đ ức Giêsu Kitô (Tt 2,13). dường n ào, ph ải s ống đạo đức v à th ánh thi ện bi ết bao, trong khi mong đợi ngày của Thiên Chúa và làm cho ngày đó mau đến, ngày mà các tầng trời sẽ bị thiêu huỷ và ngũ hành sẽ chảy tan ra trong l ửa hồng. Nhưng, theo l ời Thiên Chúa hứa, chúng ta mong đợi trời mới đất mới, nơi công lý ngự trị. sắp tới sẽ được giãi bày cho ch úng ta (Rm 8,16; x. 2Tm 2,11 -12), chúng ta mạnh mẽ tin t ưởng trông đợi niềm hy v ọng hạnh phúc và ngày trở lại vinh quang c ủa Thi ên Ch úa cao c ả v à Đ ấng c ứu chu ộc ch úng ta l à Ch úa Gi êsu Kitô (Tt 2,13). Người sẽ cải tạo thân xác hèn mạt ta ra gi ống thân xác sáng láng của Người (Pl 3,21), và sẽ ngự đến để được vinh quang trong các thánh của Người và được thán phục trong mọi người đã tin (2Tx 1,10).",
        chuong: 36,
        loi_chua: [
            "2Pr 3,11-13: Muôn vật phải tiêu tan như thế, thì anh em ph ải là những người tốt",
            "GH 48d: Tin rằng những đau khổ hiện thời chẳng thấm vào đâu với vinh quang",
        ],
        tham_chieu: [
            "Cv 1,11; 1Tm 6,14-15",
            "GH 44c; MV 45b",
        ],
    },
    {
        stt: 953,
        noi_dung: "Nhiều người công giáo giao kho án việc cứu rỗi trần gian cho Ch úa. Họ không ý thức rằng Chúa giao việc cứu rỗi trần gian cho họ cộng tác. giả, là dân thánh, dân riêng của Thiên Chúa, để loan truy ền những kỳ công của Người, Đ ấng đã gọi anh em ra kh ỏi miền u tối, vào nơi đầy ánh sáng diệu huyền.",
        chuong: 36,
        loi_chua: [
            "1Pr 2,9: Còn anh em, anh em l à giống nòi được tuyển chọn, là hàng tư tế vương",
        ],
        tham_chieu: [
            "Mc 5,18-20; Gc 5,19-20",
        ],
    },
    {
        stt: 954,
        noi_dung: "Yêu Chúa là yêu trần gian. M ê say Ch úa là mê say tr ần gian. Hy v ọng ở Chúa là hy vọng trần gian được cứu rỗi. gian, nhưng là để thế gian, nhờ Con của Người, mà được cứu độ.",
        chuong: 36,
        loi_chua: [
            "Ga 3,17: Thi ên Chúa sai Con c ủa Người đến thế gian, kh ông phải để lên án thế",
        ],
        tham_chieu: [
            "Rm 5,8-10; 1Cr 15,1-2; 1Tm 2,5-7",
        ],
    },
    {
        stt: 955,
        noi_dung: "Con phải loan Tin mừng cho thế giới. Tin mừng ấy không phải chỉ gồm những giới răn tiêu cực nhưng chính là một sứ điệp lạ lùng: Chúa thương yêu ta, Chúa yêu thương trần gian và cứu trần gian. Người thì khỏi phải chết, nhưng được sống muôn đời. không được loại bỏ bất cứ lợi ích thiêng liêng hay vật chất nào có thể làm cho họ. Nhưng người tông đồ đích thực không chỉ hài lòng với hoạt động này, mà họ còn phải quan t âm đến việc rao gi ảng Chúa Kitô cho anh em b ằng cả lời nói nữa. Bởi vì nhiều người chỉ có thể nghe Ph úc âm và nhận biết Chúa Kitô nhờ những người giáo dân sống gần họ.",
        chuong: 36,
        loi_chua: [
            "Ga 3,16: Thiên Chúa yêu thế gian đến nỗi đã ban Con Một, để ai tin vào Con của",
            "TĐ  13c: Việc tông đồ phải nhằm tới hết mọi người trong môi trường hoạt động và",
        ],
        tham_chieu: [
            "Rm 5,8-10; 1Cr 15,1-2; 1Tm 2,5-7",
            "GH 16; MV 19a, 43a; TĐ  6c; TG 2b",
        ],
    },
    {
        stt: 956,
        noi_dung: "Trên Thánh giá, Chúa nghèo lắm! Con chỉ xin Chúa Giêsu chịu đóng đinh một điều: yêu thương, đau khổ và luôn luôn hy vọng.",
        chuong: 36,
    },
    {
        stt: 957,
        noi_dung: "Nếu suy ngắm những trang này, mà con không làm cho Phúc âm tràn ngập cả đời con, nếu con còn cầu nguyện: Nước Cha dừng lại, thì con kh ông phải là hy vọng của trần gian. một sự cần thiết bắt buộc tôi phải làm. Khốn thân tôi nếu tôi không rao giảng Tin Mừng!",
        chuong: 36,
        loi_chua: [
            "1Cr 9,16: Đ ối với tôi, rao giảng Tin Mừng không phải là lý do để tự hào, mà đó là",
        ],
    },
    {
        stt: 958,
        noi_dung: "Chỉ trong vài chục năm gần đây, nhân loại đã tiến bộ về khoa học và kỹ thuật hơn nhiều thế kỷ trước. Nhân loại đầy đủ sức mạnh khủng khiếp có thể tự sát với vũ khí hạch tâm. Nhân loại đầy đủ phương tiện khổng lồ, hầu như no nê không thiếu gì nữa. Nhân loại cảm thấy làm được mọi sự, nhưng không biết tại sao mình s ống, mình đi về đâu, tương lai thế nào? Nhân loại đang trải qua một cơn khủng hoảng hy vọng. nào con người cũng có thể bắt nó phục vụ mình. Cố gắng đi sâu hơn vào thâm tâm mình, con ng ười nhiều khi l ại tỏ ra hoang mang h ơn về chính mình. D ò dẫm tìm hi ểu rõ hơn những luật lệ của đời sống xã hội, con ng ười lại do d ự không dám định đoạt hướng đi cho mình. Do những hoàn cảnh phức tạp như thế chi phối, rất nhiều người đương thời thấy khó lòng có thể nhận chân được những giá trị trường cửu và đồng thời cũng khó mà hoà hợp những giá trịấy cho đúng với những phát minh g ần đây. Do đó, bị lay động giữa hy v ọng và lo âu, băn khoăn về sự xoay chuy ển hiện tại của th ế giới, h ọ c ảm thấy m ột n ỗi ưu t ư. S ự xoay chuy ển c ủa thế gi ới đang thách đố và thúc bách con người tìm câu giải đáp.",
        chuong: 36,
        loi_chua: [
            "MV 4ce: … Đ ang khi b ành trướng quá rộng quyền lực của mình, không phải lúc",
        ],
        tham_chieu: [
            "MV 3a, 10a, 21cd",
        ],
    },
    {
        stt: 959,
        noi_dung: "Thiên Chúa không lùi bước trước tiến bộ của con người. Ngược lại càng đầy sức mạnh, con người càng cảm thấy cần hy vọng để tiến, cần tình yêu để sống. Nếu không có như thế, sống để làm gì? Có đáng sống không? Không lẽ hư vô và thù ghét là gia nghiệp của con người tiến bộ? dùng tài năng và sức lực riêng để thực hiện là chống đối quyền năng của Thiên Chúa, không coi thụ tạo có lý trí như một địch thủ của Tạo hoá, mà lại xác tín rằng các thắng lợi của nhân loại là dấu hiệu biểu dương Thiên Chúa cao cả và là kết qủa của ý định khôn lường của Ngài.",
        chuong: 36,
        loi_chua: [
            "MV 34c: Ng ười Kit ô h ữu kh ông nh ững kh ông coi c ác c ông trình do con ng ười",
        ],
        tham_chieu: [
            "MV 21c, 36bc, 39b, 42c, 44; TĐ  7b",
        ],
    },
    {
        stt: 960,
        noi_dung: "Con ng ười ngh ĩ r ằng khoa h ọc c àng ti ến b ộ, Thi ên Ch úa c àng tho ái l ùi. Trong l òng nhiều người Chúa chết rồi. Giờ đây lương tâm họ được giải thoát, nhưng cái tự do ấy làm cho họ hoang mang, hoảng hốt. Họ thiếu hy vọng! xã hội đều có những định luật và những giá trị riêng mà con người phải khám phá dần dần, sử dụng và điều hoà, thì đòi hỏi một sự độc lập như thế là một việc hoàn toàn chính đáng: đó là điều không những người đương thời đòi hỏi mà còn phù hợp với ý muốn của Tạo hoá… B ởi vậy, việc khảo sát có phương pháp trong m ọi ngành, nếu tiến hành một cách khoa h ọc thực sự và theo c ác tiêu chuẩn luân lý, sẽ không bao gi ờ thực sự trái nghịch với đức tin , vì c ác thực tại trần thế và các thực tại đức tin đều bởi một Thiên Chúa mà ra. H ơn nữa, những ai kiên nhẫn và khiêm tốn cố gắng nghiên cứu sâu xa những bí ẩn của sự vật, mặc dù không ý thức, nhưng vẫn được bàn tay Chúa hướng dẫn, vì Ngài là Đ ấng bảo trì mu ôn loài và khiến chúng hiện hữu theo b ản tính ri êng của mỗi loài.",
        chuong: 36,
        loi_chua: [
            "MV 36b: Nếu sự độc lập của các thực tại trần thế có nghĩa là các tạo vật và các",
        ],
        tham_chieu: [
            "MV 17, 19b, 20, 33, 34c, 37",
        ],
    },
    {
        stt: 961,
        noi_dung: "Thời đại nào cũng có những người tự xưng là tiên tri, nh ưng đường lối của họ không đem lại hy vọng cho nhân loại. Chỉ Chúa Giêsu tự xưng là Đư ờng, chỉ Ngài đem lại hy vọng với kích thước của thế giới; Hãy đi khắp cả thiên hạ rao giảng Tin mừng cho mọi loài thụ tạo(Mc 16,15). Các con s ẽ là chứng tá của Ta ở Giêrusalem, trong toàn cõi Giuđê và Samari, v à cho đến tận cùng trái đất(Cv 1,8). cân nhắc các thần khí xem c ó phải bởi Thiên Chúa hay kh ông, vì đã có nhiều ngôn sứ giả lan tràn khắp thế gian. Căn cứ vào điều này, anh em nhận ra thần khí của Thiên Chúa: thần khí nào tuyên xưng Đ ức Giêsu Kitô là Đ ấng đã đến và trở nên người phàm, thì thần khí ấy bởi Thiên Chúa. thắng v ượt chính mình, c ũng kh ông ai ho àn toàn thoát ly được y ếu đuối, c ô đơn hay nô lệ, nhưng mọi người đều cần Chúa Kitô làm gương mẫu, làm Thầy dạy, làm Đ ấng giải thoát, Đ ấng cứu độ và Đ ấng ban s ự sống. Thực ra, trong lịch sử loài người dù là về phương diện trần thế, Phúc âm đã là men tự do v à tiến bộ, lại luôn chứng tỏ là men huynh đệ, hiệp nhất và hoà bình. V ậy không phải là vô lý khi các tín hữu sùng kính Chúa Kitô là Đ ấng muôn dân trông đợi và là Đ ấng cứu chuộc muôn dân.",
        chuong: 36,
        loi_chua: [
            "1Ga 4,1-2: Anh em th ân mến, anh em đừng cứ thần khí n ào cũng tin, nhưng hãy",
            "TG 8: T ự mình v à do s ức ri êng mình, kh ông ai được gi ải tho át kh ỏi t ội l ỗi v à",
        ],
        tham_chieu: [
            "2Pr 3,3-7",
            "MV 21g, 41a; TG 13a",
        ],
    },
    {
        stt: 962,
        noi_dung: "Con người hy vọng để sống, để tiếp tục sống. Con người sẽ quay về với ai có thể mang lại cho họ niềm hy vọng lớn lao nhất. Niềm hy vọng ấy Chúa Giêsu đã quả quyết: Ta đã đến, là để chúng được có sự sống, và có một cách dồi dào(Ga 10,10). Niềm hy vọng ấy, Chúa ban qua tay Mẹ Maria: Nguồn hy vọng của chúng con.",
        chuong: 36,
    },
    {
        stt: 963,
        noi_dung: "Giáo dân là người mến yêu sứ mệnh trần thế của mình, là người thực hiện đời đời trong đời tạm. - Là người tin rằng Chúa giao cho mình trần gian và anh em, để đưa họ đến cứu rỗi vĩnh cửu. - L à ng ười x ác tính r ằng Ch úa ban ơn c ứu r ỗi, nh ưng Ch úa đòi s ự h ợp t ác c ủa con người. Biết hy vọng, bảo đảm hy vọng, mang lại hy vọng. trọng những bổn phận ở trần gian này mà trái lại còn tạo thêm những động lực mới giúp hoàn tất những bổn phận ấy. Vả lại, nếu thiếu căn bản là Thiên Chúa và thiếu niềm hy vọng vào đời sống trường cửu thì phẩm giá con người bị tổn thương cách trầm trọng như thường thấy ngày nay, và những bí ẩn về sự sống, sự ch ết, v ề t ội l ỗi v à đau kh ổ v ẫn kh ông gi ảp đáp được, nh ư th ế con ng ười nhiều khi rơi vào tuyệt vọng.",
        chuong: 36,
        loi_chua: [
            "MV 21c: Gi áo hội còn dạy rằng hy v ọng cánh chung kh ông làm giảm tầm quan",
        ],
        tham_chieu: [
            "GH 31b, 35a; MV 34c, 39b, 93a; TĐ  5a, 7e, 27",
        ],
    },
    {
        stt: 964,
        noi_dung: "Người hy v ọng là người cầu nguyện. Đ ối tượng của lời cầu nguyện cũng là đối tượng của niềm hy vọng. Người hy vọng là cộng tác viên của Thiên Chúa. Ngài tìm gọi họ để hoàn tất việc tạo dựng và cứu chuôïc của Ngài. thách Đ ức Kitô còn phải chịu, tôi xin mang lấy vào thân cho đủ mức, vì lợi ích cho thân thể Người là Hội Thánh.",
        chuong: 36,
        loi_chua: [
            "Cl 1,24: Giờ đây, tôi vui mừng được chịu đau khổ vì anh em. Những gian nan thử",
        ],
    },
    {
        stt: 965,
        noi_dung: "Chúng ta c ầu xin Ch úa, nhưng Chúa trông vào chúng ta. Ng ài đã lập một cơ quan để ban ơn cứu rỗi: Hội thánh. Hội thánh chịu trách nhiệm về công việc của Chúa, và về niềm hy vọng lớn lao nhất của toàn thể anh em. Giáo  h ội, vì nh ững đòi hỏi căn bản của công giáo tính v à vì m ệnh lệnh của Đ ấng Sáng lập, nhất quyết loan báo Phúc âm cho hết mọi người.",
        chuong: 36,
        loi_chua: [
            "TG 1a: Đư ợc Thiên Chúa sai đến muôn dân để nên bí tích c ứu độ phổ quát,",
        ],
        tham_chieu: [
            "GH 14a, 48b; TG 7a; HN 3e; GD 3c",
        ],
    },
    {
        stt: 966,
        noi_dung: "Có hạng công giáo đợi chờ, khoanh tay mong đợi niềm hy vọng đến. Có hạng công giáo thụ động, trốn tránh, vô trách nhiệm. Họ chỉ biết nhìn l ên để kêu cứu, mà không biết nhìn t ới để tiến, nhìn quanh để chia sẻ, gánh vác. Niềm hy vọng đang ở giữa họ, mà họ không hay!",
        chuong: 36,
    },
    {
        stt: 967,
        noi_dung: "Con không trốn tránh hi ện tại để trông đợi một cu ộc s ống khác. Con tin h ằng sống vậy. Niềm hy vọng ấy đã đâm chồi nơi con, và sẽ tiếp tục tươi nở bất tận. cao t ự đại, c ũng đừng đặt hy v ọng v ào c ủa c ải ph ù v ân, nh ưng v ào Thi ên Chúa, Đ ấng cung cấp dồi dào mọi sự cho c húng ta hưởng dùng. Họ phải làm việc thiện và trở nên giàu có về các việc tốt lành, phải ăn ở rộng rãi, sẵn sàng chia sẻ. Như vậy họ tích trữ cho mình m ột vốn liếng vững chắc cho tương lai, để được sự sống thật. trái đất các giá trị về nhân phẩm, về hiệp thông huynh đệ và tự do, nghĩa làmọi thành quả tốt đẹp do bản tính và hoạt động con người đem lại, chúng ta sẽ gặp lại ch úng, nh ưng l à g ặp l ại sau khi ch úng ta được thanh t ẩy kh ỏi m ọi t ỳ ố, được chiếu sáng và biến đổi, nghĩa là khi Ch úa Kitô giao ho àn lại Chúa Cha vương qu ốc v ĩnh c ửu v à đại đồng: Vương qu ốc c ủa Ch ân l ý v à S ự s ống, vương quốc thánh thiện và ân phúc, vương quốc công bình, yêu thương và hoà bình. Vương quốc ấy đã hiện diện cách mầu nhiệm ở trần gian này và sẽ được kiện toàn khi Chúa đến.",
        chuong: 36,
        loi_chua: [
            "1Tm 6,17-19: Những người giàu ở trần gian này, anh hãy truyền cho họ đừng tự",
            "MV 39c: Sau khi đã theo mệnh lệnh Chúa và nhờ Chúa Thánh Thần phổ biến trên",
        ],
        tham_chieu: [
            "GH 5b, 48d; MV 21g, 93a",
        ],
    },
    {
        stt: 968,
        noi_dung: "Con hoàn toàn sống trong hiện tại, nhưng con cũng hoàn toàn sống trong đời đời. Con chăm lo cứu rỗi anh em, Nhưng con không quên làm với Chúa và vì Chúa. Con hết sức tiến tới, Nhưng với tất cả ánh sáng từ trời cao, Con dấn thân giữa trần thế, Nhưng với tình yêu thần linh. Tất cả điều ấy có ý nghĩa gì? Nếu con không mang niềm hy vọng lớn lao nhất trong quả tim con? tông đồ trong Gi áo hội c ũng như giữa đời, trong ph ạm vi thi êng liêng c ũng như trong phạm vi trần thế. Hai phạm vi tuy khác biệt, nhưng trong ý định duy nhất của Thiên Chúa, chúng được liên kết với nhau đến nỗi chính Thiên Chúa muốn thâu tóm vũ trụ lại trong Ch úa Kitô thành một tạo v ật mới, kh ởi sự ở trần gian v à hoàn tất trong ng ày sau h ết. Trong c ả hai ph ạm vi, ng ười giáo dân, vừa là tín h ữu vừa là công dân, phải được hướng dẫn liên tục bằng một lương tâm Kitô giáo duy nhất.",
        chuong: 36,
        loi_chua: [
            "TĐ  5a: Ng ười giáo dân, trong khi thi h ành sứ mệnh này của Giáo hội, làm việc",
        ],
        tham_chieu: [
            "GH 36d; MV 42b, 43a, 57a, 72a",
        ],
    },
    {
        stt: 969,
        noi_dung: "Con hãy làm cho người công giáo tin tưởng ở ơn gọi Kitô hữu, ơn gọi gia đình, ơn gọi vợ chồng, ơn gọi nghề nghiệp. Họ sẽ hết chán nản, họ sẽ tràn đầy hy vọng vì họ ý thức rằng Đ ấng đã gọi họ sẽ đưa họ đi đến cùng đích. Thiên Chúa, Đ ấng kêu gọi anh em vào Nước của Người và chia sẻ vinh quang với Người. 5,16; Cl 4,5) và kiên trì trông đợi một ngày kia sẽ đến (x. Rm 8,25), họ sẽ tỏ ra là con c ái của lời hứa; nhưng niềm hy v ọng đó, họ không nên giấu kín trong lòng, trái lại họ phải diễn tả nó qua nh ững cơ cấu của cuộc sống trần gian, bằng cách hoán cải không ngừng và chiến đấu chống lại bá chủ của thế gian tăm tối này và bọn tà thần (Ep 6,12).",
        chuong: 36,
        loi_chua: [
            "1Tx 2,12: Chúng tôi đã khuyên nhủ, khích lệ, van nài anh em sống xứng đáng với",
            "GH 35a: N ếu giáo dân vững lòng tin c ậy mà lợi dụng thời gian hi ện tại (x. Ep",
        ],
        tham_chieu: [
            "Rm 5,1-2",
            "GH 9b, 13c, 35c, 41e; MV 1; HN 12",
        ],
    },
    {
        stt: 970,
        noi_dung: "Làm một cuộc cách mạng: đừng đem đời người công giáo xa lìa m ôi trường, để quây quần quanh các việc thiêng liêng. Đ ấy người công giáo mang niềm hy vọng của mình xâm nhập môi trường.",
        chuong: 36,
    },
    {
        stt: 971,
        noi_dung: "Con hãy cố gắng, dù yếu đuối sa ngã, hãy xin Chúa thứ tha và tiếp tục tiến. Trên võ đài, trong vận động trường quốc tế, các lực sĩ cũng lắm lần ngã qụy, bì nhi ều cú đấm, bị thương tích, nhưng cứ vùng dậy, cứ hy vọng, họ đã đoạt giải vô địch quốc tế. chối Thầy ba lần. Ông ra ngoài, khóc lóc thảm thiết.",
        chuong: 36,
        loi_chua: [
            "Mt 26,75: Ông Phê-rô sực nhớ lời Đ ức Giêsu đã nói: Gà chưa kịp gáy thì anh đã",
        ],
        tham_chieu: [
            "Lc 7,37-38; 23,41-42",
        ],
    },
    {
        stt: 972,
        noi_dung: "Không thể quan niệm được một Kitô hữu không mê say đắm hy vọng ngập tràn thế giới. cùng nhau ca t ụng Thiên Chúa (x. Cv 2,42 -47), họ phải dâng mình làm hy vật sống động, thánh thiện đẹp lòng Thiên Chúa (x. Rm 12,1), ph ải làm chứng về Chúa Kitô trên khắp mặt đất và trình bày niềm hy vọng về cuộc sống vĩnh cửu mà họ ôm ấp cho những ai đang khao khát (x. 1Pr 3,15).",
        chuong: 36,
        loi_chua: [
            "GH 10a: T ất c ả c ác m ôn đệ c ủa Ch úa Kit ô, trong khi ki ên t âm cầu nguy ện v à",
        ],
        tham_chieu: [
            "MV 1,39b,43a; TĐ  7e",
        ],
    },
    {
        stt: 973,
        noi_dung: "Các bạn Thế Hệ mới (GEN) phải là thanh ni ên của hy v ọng, vì v ới hy v ọng, các bạn s ẽ lu ôn lu ôn h ạnh ph úc v à c ác b ạn s ẽ l àm cho m ọi ng ười h ạnh ph úc (Chiara Lubich).",
        chuong: 36,
    },
    {
        stt: 974,
        noi_dung: "Con hỏi chừng nào có thể xin t ừ chức tông đồ, nghỉ việc tông đồ được. Công việc tông đồ có thể thay đổi tùy khả năng, tuổi tác, nhưng sứ mệnh tông đồ con đã nhận lãnh do phép Thánh tẩy và Thêm sức, chỉ chấm dứt với hơi thở cuối cùng, như Chúa Giêsu khi nói hoàn tất trên Thánh giá. Đ ức Kitô, điều này tốt hơn bội phần: Nhưng ở lại đời này thì cần thiết hơn, vì anh em. Và tôi biết chắc rằng tôi sẽ ở lại và ở bên cạnh tất cả anh em để giúp anh em tấn tới và được hưởng niềm vui đức tin mang lại cho anh em.",
        chuong: 36,
        loi_chua: [
            "Pl 1,23-25: Vì tôi bị giằng co giữa hai đàng: ao ước của tôi là ra đi để được ở với",
        ],
    },
    {
        stt: 975,
        noi_dung: "Gia đình công giáo là tương lai, là hy vọng của Hội thánh. Phải động viên toàn lực gia đình công giáo theo tiếng gọi của Hội thánh, để lôi cuốn và thúc đẩy họ loan Tin mừng cho thế giới, một thế giới càng ngày càng có nhiều người khô đạo.",
        chuong: 36,
    },
    {
        stt: 976,
        noi_dung: "Con hãy hy vọng luôn luôn, đừng chán nản vì nh ững kh ó kh ăn n ội b ộ, ngay trong việc t ông đồ. Nh ư Thánh Phaolô: Kẻ thì vì ghen t ương và ganh t ỵ; nh ưng kẻ thì vì thiện cảm mà rao giảng Đ ức Kitô… Can chi! Mi ễn là Đ ức Kitô được rao truyền thì tôi vui mừng và tôi cứ vui mừng luôn! (Pl 1,15.18).",
        chuong: 36,
    },
    {
        stt: 977,
        noi_dung: "Con đừng thất vọng vì thi ếu phương tiện. Một vị Hồng y gi áo chủ đã nói: Chúng ta hãy dùng phương tiện của các thánh Tông đồ: các ngài giảng dạy và viết thư; với chừng ấy, các ngài đã chinh phục thế gian. Các ngài đâu có máy móc. Cha chỉ sợ con quá kỹ thuật mà hồn không tông đồ.",
        chuong: 36,
    },
    {
        stt: 978,
        noi_dung: "Chấm này nối tiếp chấm kia, ngàn vạn chấm thành một đường dài. Phút này nối tiếp phút kia, muôn triệu phút thành một đời sống. Chấm mỗi chấm cho đúng, đường sẽ đẹp. Sống mỗi phút cho tốt, đời sẽ thánh. Đư ờng hy vọng do mỗi chấm hy vọng. Đ ời hy vọng do mỗi phút hy vọng. vinh Thiên Chúa.",
        chuong: 36,
        loi_chua: [
            "1Cr 10,31: Dù ăn, dù uống, hay làm bất cứ việc gì, anh em h ãy làm tất cả để tôn",
            " ",
        ],
    },
    {
        stt: 979,
        noi_dung: "Đ ể tóm kết những tư tưởng con đã suy ngắm trước đây, Cha mong con h ằng ngày nhớ đến các điều đơn sơ sau đây, khác nào những tấm bảng chỉ lối đi trên đường Hy v ọng của con: Con muốn thực hiện một cuộc cách mạng: canh t ân thế giới. Hoài bão lớn lao đó, sứ mệnh cao đẹp đó, Chúa trao cho con, con thi h ành với quyền lực Chúa Thánh Thần. Mỗi ngày con chuẩn bị Lễ Hiện Xuống mới quanh con.",
        chuong: 37,
    },
    {
        stt: 980,
        noi_dung: "Con xúc tiến một chiến dịch: làm cho m ọi người hạnh phúc. Con hy sinh mình t ừng giây phút với Chúa Giêsu, để đem an bình trong t âm hồn, phát triển thịnh vượng cho các dân tộc. Đư ờng lối tu đức thầm kín và thiết thực!",
        chuong: 37,
    },
    {
        stt: 981,
        noi_dung: "Con nắm vững một đường lối tông đồ: thí mạng vì anh em, vì kh ông có tình yêu nào lớn lao h ơn (x. Ga 15,13). Con hao m òn từng giây phút và sẵn sàng tiêu hao để chinh phục anh em về với Chúa.",
        chuong: 37,
    },
    {
        stt: 982,
        noi_dung: "Con hô một khẩu hiệu: Tất c ả hiệp nhất, hiệp nhất giữa các người công giáo, hiệp nhất giữa các Kitô hữu, hiệp nhất giữa các dân tộc. Như Chúa Cha và Chúa Con là một (x. Ga 17,22-23).",
        chuong: 37,
    },
    {
        stt: 983,
        noi_dung: "Con tin một sức mạnh: Thánh Thể. Thịt Máu Chúa sẽ làm cho con sống, Ta đã đến, là để chúng được có sự sống, và có một cách dồi dào (Ga 10,10). Nh ư Manna nu ôi dân Do Thái đi đường về Đ ất hứa, Thánh Thể sẽ nuôi con đi cùng đường Hy v ọng (x. Ga 6,53).",
        chuong: 37,
    },
    {
        stt: 984,
        noi_dung: "Con mang một đồng phục, nói một ngôn ngữ: Bác ái là chứng tích để biết con là môn đệ Chúa (x. Ga 13,35), là dấu hiệu rẻ mà khó kiếm nhất. Bác ái là sinh ng ữ s ố m ột m à Th ánh Phaol ô cho l à cao tr ọng hơn ti ếng n ói c ủa lo ài người và các thiên thần, là ngôn ngữ độc nhất sẽ tồn tại trên Thiên đàng (x.1Cr 13,1).",
        chuong: 37,
    },
    {
        stt: 985,
        noi_dung: "Con nắm một bí quyết: Cầu nguyện. Không ai mạnh bằng người cầu nguyện, vì Chúa đã hưá ban tất cả. Khi các con hiệp nhau cầu nguyện có Chúa ở giữa các con (x. Mt 18,20). Cha tha thi ết khuyên con, ngo ài giờ kinh, h ãy cầu nguyện mỗi ngày tối thiểu một giờ, nếu được hai giờ càng tốt. Không phải là mất mát vô ích đâu! Trên quãng đường Cha đi, Cha đã thấy lời thánh Têrêxa Avila ứng nghiệm: Ai không cầu nguyện, không cần ma quỷ lôi kéo, sẽ tự mình sa xuống hoả ngục.",
        chuong: 37,
    },
    {
        stt: 986,
        noi_dung: "Con giữ một nội quy: Phúc âm. Đó  là hiến pháp trên tất cả mọi hiến pháp, là hiến pháp Chúa Giêsu đã để lại cho các Tông đồ (x. Mt 4,23). Hiến pháp ấy không khô khan, phức tạp, gò bó như các hiến pháp khác, ngược lại, linh động, nhân hậu, làm phấn khởi tâm hồn con. Một vị thánh ngoài Phúc âm là thánh giả.",
        chuong: 37,
    },
    {
        stt: 987,
        noi_dung: "Con trung th ành theo m ột vĩ lãnh đạo là Chúa Kitô và Đ ại diện của Ngài: Đ ức Gi áo Hoàng, các Giám mục, kế vị các thánh Tông đồ (x. Ga 20,22 -23). Hãy sống và chết vì Hội thánh như Chúa Kitô. Đ ừng nghĩ chết vì Hội thánh mới hy sinh. Sống vì Hội thánh cũng đòi hỏi nhiều hy sinh.",
        chuong: 37,
    },
    {
        stt: 988,
        noi_dung: "Con có một tình yêu: Mẹ Maria, Thánh Gioan Maria Vianney đã nói: Mối tình đầu của tôi là Mẹ Maria. Nghe M ẹ sẽ không lầm lạc, hoạt động vì M ẹ sẽ không thất bại, làm vinh danh Mẹ sẽ được sống đời đời.",
        chuong: 37,
    },
    {
        stt: 989,
        noi_dung: "Con c ó m ột s ự kh ôn ngoan: Khoa h ọc Th ánh gi á (x.1Cr 2,2). Nhìn Ch úa Gi êsu tr ên thánh giá, con giải quyết ngay được vấn đề đang khiến con xao xuyến. Thánh giá là tiêu chuẩn để chọn lựa và quyết định, tâm hồn con sẽ bình an.",
        chuong: 37,
    },
    {
        stt: 990,
        noi_dung: "Con có một lý tưởng: hướng về Chúa Cha, một người Cha đầy yêu thương. Cả cuộc đời Chúa Giêsu, mọi tư tưởng, hành động đều nhắm một hướng: … Đ ể cho thế gian biết là Ta yêu mến Cha, và như Cha truyền dạy Ta sao, Ta làm như vậy (Ga 14,31), Ta hằng làm những sự đẹp lòng Người (Ga 8,29).",
        chuong: 37,
    },
    {
        stt: 991,
        noi_dung: "Con chỉ có một mối lo sợ: tội lỗi. Triều đình Hoàng đế Hy lạp đã nhóm họp để bàn cách trả thù thánh Gioan Kim Khẩu vì Ngài đã thẳng thắn khiển trách Bà Hoàng Hậu. Kế hoạch I: Bỏ tù. Nhưng ông ấy sẽ được dịp cầu nguyện, chịu khó vì Chúa như ông hằng mong muốn. Kế hoạch II: Lưu đày. Nhưng đối với ông ấy, đâu cũng là đất Chúa. Kế hoạch III: Tử hình. Ông sẽ được tử đạo, chúng ta sẽ thoả mãn nguyện vọng ông: được về với Chúa. Tất cả kế hoạch I, II, III, không làm cho ông đau khổ, ngược lại ông sẽ vui sướng chấp nhận. Kế hoạch IV: Chỉ có một điều ông khiếp sợ nhất, gớm ghét nhất là tội lỗi, nhưng bắt ông phạm không được! Nếu con chỉ sợ tội, thì không ai mạnh hơn con.",
        chuong: 37,
    },
    {
        stt: 992,
        noi_dung: "Con ôm ấp một ước nguyện: Nước Cha tr ịđến, ý Cha được thành sự, dưới đất cũng như trên trời (Mt 6,10). Dưới đất lương dân biết Chúa như trên trời. Dưới đất mọi người khởi sự yêu nhau như trên trời. Dưới đất đã bắt đầu hạnh phúc như trên trời. Con sẽ nỗ lực thực hiện nguyện vọng ấy. Khởi sự đem hạnh phúc thiên đàng cho mọi người ngay từ trần thế.",
        chuong: 37,
    },
    {
        stt: 993,
        noi_dung: "Con chỉ thiếu một điều: Có gì đem bán mà cho k ẻ khó, và ngươi sẽ có một kho t àng trên trời, đoạn hãy đến theo Ta! (Mc 10,21), ngh ĩa l à con ph ải dứt khoát. Ch úa cần hạng tình nguyện thoát ly!",
        chuong: 37,
    },
    {
        stt: 994,
        noi_dung: "Con dùng một phương pháp tông đồ hữu hiệu: tiếp xúc để hoà mình, nhập thể với mọi người để hiểu, để nghe, để yêu mọi người. Tiếp xúc hữu hiệu hơn giảng, hơn viết sách. Tiếp xúc giữa người với người, lòng bên lòng, bí quyết bền đỗ, bí quyết thành công.",
        chuong: 37,
    },
    {
        stt: 995,
        noi_dung: "Chỉ có một việc quan tr ọng nhất, Maria đã chọn phần tốt nhất: ngồi bên Chúa (x. Lc 10,41-42. Nếu con không sống nội tâm, nếu Chúa Giêsu không phải là linh hồn các hoạt động của con thì… Con th ấy nhiều, hiểu nhiều rồi, Cha miễn nói.",
        chuong: 37,
    },
    {
        stt: 996,
        noi_dung: "Con chỉ có một của ăn: Thánh ý Chúa Cha (x. Ga 4,34) nghĩa là con sống, con lớn lên bằng ý Chúa, con hành động do ý Chúa. Ý Chúa như thức ăn làm con sống mạnh, vui; ngoài ý Chúa con chết.",
        chuong: 37,
    },
    {
        stt: 997,
        noi_dung: "Con chỉ có một giây phút đẹp nhất: giây phút hiện tại (x. Mt 6,34; Gc 4,13 -15). Sống trong tình yêu Chúa cách trọn vẹn, đời con sẽ tuyệt đẹp nếu kết tinh bằng từng triệu giây phút đẹp nhất. Con thấy đơn sơ, không phải khó!",
        chuong: 37,
    },
    {
        stt: 998,
        noi_dung: "Con chỉ có một tuyên ngôn: Phúc thật tám mối. Trên núi, Chúa Giêsu đã tuyên bố: Bát ph úc (x. Mt 5,3 -12). H ãy s ống nh ư v ậy, con s ẽ n ếm được h ạnh ph úc r ồi rao truyền cho mọi người con gặp.",
        chuong: 37,
    },
    {
        stt: 999,
        noi_dung: "Con chỉ có một công việc quan hệ: Bổn phận, không kể lớn hay nhỏ, vì lúc ấy con làm việc của Cha con tr ên Trời. Ngài chỉ định cho con th ực hiện chương trình c ủa Ngài trong lịch sử (x. Lc 2,49; Ga 17,4). Làm bổn phận là đường lối tu đức chắc chắn nhất, đơn sơ nhất. Nhiều người bày vẽ một lối tu đức rắc rối, rồi phàn nàn là khó!",
        chuong: 37,
    },
    {
        stt: 1000,
        noi_dung: "Con chỉ có một cách nên thánh: Ơ n Chúa và ý chí con (x.1Cr 15,10). Ch úa không bao giờ thiếu ơn; con có đủ ý chí không?",
        chuong: 37,
    },
    {
        stt: 1001,
        noi_dung: "Con chỉ có một phần thưởng: Thiên Chúa (x. Mt 25,21.23; 2Tm 4,7 -8; Kh 2,26 -28; 3,21; 22,12-14). Khi Ch úa h ỏi T ôma Aqui nô: Con đã vi ết r ất đúng v ề Ta, con mu ốn ph ần th ưởng nào? – Con chỉ muốn Chúa! THÁNH GIUSE 1) Thánh Giuse kh ông sống lâu đủ để nghe Ch úa Giêsu giảng dạy, hoặc để đọc cuốn Phúc âm đầu tiên do th ánh Matthêu chép vào giữa thập niên 80-90. Nhưng Ngài đã sống Phúc âm trước khi có sách Phúc âm. Ngài đã thực hiện được sự thống nhất giữa chiêm niệm và hoạt động. Con thử ngắm nhìn cuộc đời tuyệt diệu ấy dưới ba khiá cạnh: a) Thánh Giuse lắng nghe Lời Chúa, đón nhận Lời Chúa và gìn giữ Lời Chúa (x. Mt 1,18- 25). Lời Chúa ở đây trước hết chính là Ngôi Lời Nhập Thể. Hạnh phúc chừng nào lúc được nghe l ời Chúa Giêsu, được Người gọi là cha! Th ánh Giuse đã sống Phúc âm nguyên chất, Phúc âm bằng xương thịt. Con đừng đọc Thánh Kinh như bất cứ sách nào khác, nhưng qua mỗi dòng chữ trong đó, con hãy lắng nghe Lời Chúa nói với con, nhưng Thánh Giuse. b) Thánh Giuse đã sống Lời Chúa: Ngài sống với Lời Chúa, bằng Lời Chúa và vì L ời Chúa. Ngài hằng ghi tạc vào lòng và suy niệm mỗi lời Chúa Giêsu nói, ngay khi người còn bé (x. Lc 2,41-52). Ngài đã đọc Lời Chúa qua các biến cố (x. Mt 2,1-23). Con h ãy xin Th ánh Giuse t ập cho con bi ết  đọc L ời Ch úa, bi ết  đánh v ần L ời Chúa… Con ng ạc nhi ên sao? H ãy xem ng ười mù ch ữ: họ đâu c ó mù! Họ vẫn nhìn thấy các mẫu tự nhưng không đánh vần được, vẫn nhìn thấy chữ mà đọc không ra. Là một tâm hồn tận hiến, một Kitô hữu ngoan đạo, thế mà lắm lúc con l ại mắc nạn mù Lời Chúa: Đ ọc một tranh Th ánh Kinh, con kh ông thấy gì cả; thậm chí ngày nào cũng nghe L ời Chúa, c ũng thưa Tạ ơn Chúa, Lạy Chúa Kitô, ngợi khen Ch úa, nhưng rồi chẳng hiểu gì, coi Lời Chúa chẳng có gơ-ram nào hết, còn thua cả chương trình Truyền hình nữa! c) Th ánh Giuse th ực hi ện Lời Ch úa. L ời Ch úa đã đi s âu vào cu ộc s ống c ủa Ngài, lay chuyển và đổi mới đời Ngài. Ngài chấp nhận chịu liên lụy vì Lời Chúa: vất vả trốn sang Ai-cập (x. Mt 2,13 -14), đau xót khi nghe Simêon tiên báo Con mình sẽ chịu khổ nạn (x. Lc 2,33 -35)… Kh ông gi ữ cho ri êng mình, Ng ài chia s ẻ L ời Ch úa v ới m ọi người, nhất là với Mẹ Maria. Sung sướng biết ngần nào! Vì Lời Chúa là chân lý, và chân lý giải thoát (x. Ga 8,31 -32) khỏi những đê hèn của nhân loại, nên hiểu được Lời Chúa, Giuse và Maria đã bỏ mọi sự, chấp nhận mọi hậu quả, trung thành gìn giữ kho tàng quý yêu ấy. Đó  là hạnh phúc lớn nhất trên đời. Lời Chúa đã gây nên cuộc cách mạng Kitô giáo: Thánh Giuse đã nêu cao giá trị của lao động; Ngài đã đánh tan thành kiến giai cấp: dù thuộc dòng dõi vua Đ avít, dù là cha nuôi Đ ấng Cứu Thế, Ngài vẫn không ngại làm một người thợ mộc tầm thường (x. Mt 13,55). Ngài đã nêu gương sáng trong cuộc sống gia đình. 2) Thánh Giuse không được phúc tham dự Thánh lễ, không được phúc rước lễ. Đó  có thể là hoàn c ảnh c ủa con b ây giờ hay trong t ương lai, vì điều ki ện sinh ho ạt, vì c ông t ác không thuận tiện… L úc ấy, con h ãy nhớ lời Công Đ ồng Vaticanô II: Gi áo hội luôn tôn kính Th ánh Kinh nh ư chính Th ân Thể Chúa, nhất là trong Ph ụng vụ thánh, Giáo hội kh ông ngừng l ấy bánh ban s ự s ống từ b àn tiệc Lời Ch úa, c ũng như t ừ b àn tiệc Mình Chúa Kitô để ban ph át cho các tín h ữu (x. MK 21), Th ánh Giuse đã sống bên cạnh Ngôi Lời làm người, rước Lời của Người vào lòng. Thánh Giuse đã kết hiệp với Chúa Giêsu, đời Ngài đã nên một với Lời Chúa. Có giây phút chiêm ngắm nào, có lời cầu nguyện nào tốt đẹp hơn, cao c ả hơn? Nhờ bí tích Th ánh Thể, Chúa Giêsu có thể hiện diện nhiều nơi, còn những nơi không có Thánh Thể, Người cũng có thể hiện diện nhờ Lời Người (x.1Ga 2,24). Dù không được rước lễ hay được rước lễ mỗi ngày, con h ãy tiếp tục sống Lời Chúa (x. Mt 4,4; Lc 4,4). Các sách thiêng liêng thường xem Th ánh Giuse nh ư mẫu gương của đời nội tâm thâm trầm, điều này rất đúng. Nhưng nếu xem Ng ài như một thầy dòng khổ tu c âm lặng, viện lý rằng Phúc âm đã không ghi l ại một lời nào của Ngài, thì cha kh ông đồng ý. Cha nghĩ rằng: sở dĩ Phúc âm không nhắc lại lời nào của Thánh Giuse, là vì như tất cả mọi người, Ngài đã nói những câu rất thông thường trong cu ộc sống. Chỉ có điều là Ngài đã nói với tinh thần Phúc âm. Chúa Giêsu đã nói suốt ba mươi năm trước khi đi giảng dạy, nhưng sách Phúc âm đâu có ghi lại một lời nào trong khoảng thời gian rất dài này! Con kh ông phải là nhà hùng biện, giáo sư, văn hào, chính tr ị gia… cho n ên không ai ghi l ại lời con. Nh ưng cũng như Thánh Giuse, con h ãy dùng những lời đơn sơ, thông thường mà mang lại hạnh phúc, vui tươi, an bình cho nhi ều người. Với mọi người con gặp mỗi ngày, con hãy đọc những bài tham luận tình thương, những kinh Magnificat văn vắn, dễ thương. Cha không muốn tách lìa l òng sùng kính M ẹ Maria v ới việc tôn kính Th ánh Giuse. Vì xưa ở trần gian Mẹ Maria và Chúa Giêsu không thể yêu qúy và tin c ậy ai hơn Thánh Giuse (x. Lc 8,21). Qua Ng ôi Lời Nhập Thể, chắc chắn Thánh Giuse kết hiệp với Mẹ Maria còn mật thiết hơn mọi đôi bạn khác, vì Lời Chúa đem lại hiệp nhất cho các tâm hồn, khác nào hai cành nho, một khi đã được tước bỏ hết lớp vỏ trần tục bên ngoài, được đem ghép vào thân nho là Nguồn Sống. Tất cả cùng chung một nhựa sống, một sinh lực và trở nên Một. Đư ờng Hy Vọng được đặt dưới sự bảo trợ đặc biệt của Thánh Giuse nên gọi là Công trình của Thánh Giuse (Opus Joseph). Nguyện vọng tha thiết của cha là các con hãy dâng hiến cuộc đời cho Mẹ Maria và Thánh Giuse, trở nên những đứa con điên của các Ngài, và nhờ các Ngài đưa các con đến với Chúa Giêsu. Các con hãy sống và làm cho người khác thích sống tâm tình dâng hiến ấy như các con.",
        chuong: 37,
        loi_chua: [
            " ",
            " ",
        ],
    },
];


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
