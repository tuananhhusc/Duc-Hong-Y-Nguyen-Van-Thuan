export interface APAReference {
    id: string;
    author: string;
    year: string;
    title: string;
    source: string;
    url?: string;
    accessDate?: string;
    doi?: string;
    pages?: string;
    publisher?: string;
    volume?: string;
    issue?: string;
}

// Comprehensive APA References for Cardinal Nguyen Van Thuan Research
export const academicReferences: APAReference[] = [
    // Primary Vatican Sources
    {
        id: "vatican-bio",
        author: "Vatican Press Office",
        year: "2001",
        title: "NGUYÊN VAN THUÂN Card. François Xavier: Official Biography",
        source: "Holy See Press Office",
        url: "https://press.vatican.va/content/salastampa/en/documentation/cardinali_biografie/cardinali_bio_nguyen-van-thuan_fx.html",
        accessDate: "2026-02-09"
    },
    {
        id: "vatican-beatification",
        author: "Dicastery for the Causes of Saints",
        year: "2017",
        title: "Decree on the Heroic Virtues of the Servant of God Francis Xavier Nguyen Van Thuan",
        source: "Vatican City: Holy See",
        accessDate: "2026-02-09"
    },

    // Official Cause Materials
    {
        id: "cardinal-association",
        author: "Cardinal Van Thuan Association",
        year: "n.d.",
        title: "Biography of Cardinal Francis Xavier Nguyen Van Thuan",
        source: "Cardinal Van Thuan Foundation",
        url: "https://www.cardinalvanthuan.org/index.php/en/life/biography",
        accessDate: "2026-02-09"
    },

    // Published Books
    {
        id: "road-of-hope-en",
        author: "Nguyen Van Thuan, F. X.",
        year: "2013",
        title: "The Road of Hope: A Gospel from Prison",
        source: "Boston, MA: Pauline Books & Media",
        publisher: "Pauline Books & Media"
    },
    {
        id: "road-of-hope-vi",
        author: "Nguyễn Văn Thuận, F. X.",
        year: "1990",
        title: "Đường Hy Vọng: 1001 Câu Suy Niệm",
        source: "Roma: Nhà xuất bản Đại kết",
        publisher: "Nhà xuất bản Đại kết"
    },
    {
        id: "witness-hope",
        author: "Nguyen Van Thuan, F. X.",
        year: "2000",
        title: "Testimony of Hope: The Spiritual Exercises of John Paul II",
        source: "Boston, MA: Pauline Books & Media",
        publisher: "Pauline Books & Media"
    },
    {
        id: "prayers-hope",
        author: "Nguyen Van Thuan, F. X.",
        year: "1997",
        title: "Prayers of Hope, Words of Courage",
        source: "Boston, MA: Pauline Books & Media",
        publisher: "Pauline Books & Media"
    },
    {
        id: "ignatius-biography",
        author: "Lecleir, S., & Nguyen Thi Tu, E.",
        year: "2018",
        title: "Cardinal Nguyen Van Thuan: A Testament of Hope",
        source: "San Francisco, CA: Ignatius Press",
        publisher: "Ignatius Press",
        url: "https://ignatius.com/cardinal-nguyen-van-thuan-cfntp/"
    },

    // Academic and Theological Sources
    {
        id: "catholic-preaching",
        author: "Catholic Preaching",
        year: "2022",
        title: "The Eucharistic Shape of Cardinal Van Thuan's Holy and Heroic Life",
        source: "The Anchor",
        url: "https://catholicpreaching.com/wp/the-eucharistic-shape-of-cardinal-van-thuans-holy-and-heroic-life-the-anchor-september-16-2022/",
        accessDate: "2026-02-09"
    },
    {
        id: "christian-heritage",
        author: "Christian Heritage Centre",
        year: "2024",
        title: "Venerable Francis-Xavier Nguyen Van Thuan",
        source: "Christian Heritage Centre at Stonyhurst",
        url: "https://christianheritagecentre.com/media/nguyen-van-thuan/",
        accessDate: "2026-02-09"
    },
    {
        id: "focolare",
        author: "Focolare Movement",
        year: "2025",
        title: "François-Xavier Nguyen Van Thuan: Witness of Hope",
        source: "Focolare.org",
        url: "https://www.focolare.org/en/francois-xavier-nguyen-van-thuan-witness-of-hope/",
        accessDate: "2026-02-09"
    },

    // Vietnamese Sources
    {
        id: "giesu-net",
        author: "Giesu.net",
        year: "2020",
        title: "Đường Hy Vọng: Toàn văn 1001 câu suy niệm",
        source: "Giesu.net",
        url: "https://giesu.net/duong-hy-vong/",
        accessDate: "2026-02-09"
    },
    {
        id: "vn-missionaries-taiwan",
        author: "Vietnamese Missionaries in Taiwan",
        year: "n.d.",
        title: "Đường Hy Vọng dưới ánh sáng Lời Chúa và Công Đồng",
        source: "Catholic Church in Taiwan",
        url: "https://vntaiwan.catholic.org.tw/hyvong2/hyvong2.htm",
        accessDate: "2026-02-09"
    },

    // Pontifical Documents
    {
        id: "john-paul-ii-consistory",
        author: "John Paul II",
        year: "2001",
        title: "Consistory for the Creation of New Cardinals",
        source: "Vatican City: Libreria Editrice Vaticana",
        accessDate: "2026-02-09"
    },
    {
        id: "pope-francis-beatification",
        author: "Francis",
        year: "2017",
        title: "Promulgation of Decrees of the Dicastery for the Causes of Saints",
        source: "Vatican City: Holy See Press Office",
        accessDate: "2026-02-09"
    },

    // Encyclopedia and Reference Works
    {
        id: "new-catholic-encyclopedia",
        author: "Catholic University of America",
        year: "2003",
        title: "Nguyen Van Thuan, Francis Xavier",
        source: "New Catholic Encyclopedia (2nd ed., Vol. 10)",
        publisher: "Detroit, MI: Gale",
        pages: "pp. 371-372"
    }
];

// Page-specific reference mappings
export const pageReferences = {
    "tieu-su": [
        "vatican-bio",
        "cardinal-association",
        "ignatius-biography",
        "christian-heritage",
        "new-catholic-encyclopedia"
    ],
    "linh-dao": [
        "focolare",
        "catholic-preaching",
        "witness-hope",
        "vn-missionaries-taiwan"
    ],
    "duong-hy-vong": [
        "road-of-hope-en",
        "road-of-hope-vi",
        "giesu-net",
        "prayers-hope"
    ],
    "ung-dung": [
        "focolare",
        "pope-francis-beatification",
        "christian-heritage",
        "witness-hope"
    ]
};

// Helper function to get references for a specific page
export function getReferencesForPage(pageId: keyof typeof pageReferences): APAReference[] {
    const refIds = pageReferences[pageId];
    return refIds
        .map(id => academicReferences.find(ref => ref.id === id))
        .filter((ref): ref is APAReference => ref !== undefined);
}

// Format a single reference in APA style
export function formatAPAReference(ref: APAReference): string {
    let citation = `${ref.author}. (${ref.year}). `;
    citation += `*${ref.title}*. `;
    citation += ref.source;
    if (ref.pages) {
        citation += ` (${ref.pages})`;
    }
    citation += ".";
    if (ref.url) {
        citation += ` ${ref.url}`;
    }
    return citation;
}
