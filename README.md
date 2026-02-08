# Website Nghiên Cứu Đức Hồng Y Nguyễn Văn Thuận

Một trang web nghiên cứu toàn diện về cuộc đời, linh đạo và di sản của Đấng Đáng Kính - Đức Hồng y Phanxicô Xaviê Nguyễn Văn Thuận (1928-2002).

## 🌟 Tính Năng Chính

*   **Tiểu sử tương tác**: Timeline cuộc đời với các mốc sự kiện quan trọng, từ thời thơ ấu đến những năm tù đày và sứ vụ tại Rôma.
*   **Kho tàng Đường Hy Vọng**: 1001 câu suy niệm với tính năng tìm kiếm và lọc theo chủ đề.
*   **Linh đạo Hy vọng**: Các bài viết chuyên sâu về tư tưởng thần học và linh đạo của ngài.
*   **Trích dẫn mỗi ngày**: Tính năng hiển thị câu suy niệm ngẫu nhiên mỗi ngày.
*   **Giao diện hiện đại**: Thiết kế theo phong cách Công giáo trang trọng, hỗ trợ chế độ Tối/Sáng (Dark Mode).
*   **Responsive**: Tương thích hoàn hảo trên mọi thiết bị từ điện thoại đến máy tính.

## 🛠 Công Nghệ Sử Dụng

*   **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
*   **Ngôn ngữ**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)
*   **Search Engine**: [Fuse.js](https://fusejs.io/)
*   **Utility**: `clsx`, `tailwind-merge`

## 🚀 Cài Đặt và Chạy Dự Án

1.  **Cài đặt dependencies**:

    ```bash
    npm install
    ```

2.  **Chạy môi trường phát triển (Development)**:

    ```bash
    npm run dev
    ```

    Truy cập [http://localhost:3000](http://localhost:3000) để xem trang web.

3.  **Build dự án (Production)**:

    ```bash
    npm run build
    npm start
    ```

## 📂 Cấu Trúc Dự Án

*   `src/app`: Chứa các trang (page) và layout của ứng dụng.
*   `src/components`:
    *   `layout`: Header, Footer.
    *   `sections`: Các section lớn như Hero, Timeline, CorpusExplorer.
    *   `ui`: Các component nhỏ tái sử dụng (Button, Card, Badge...).
*   `src/lib/data`: Chứa dữ liệu tĩnh (tiểu sử, timeline, corpus).

## 🎨 Design System

Dự án sử dụng hệ màu sắc lấy cảm hứng từ Phụng vụ Công giáo:
*   **Catholic Gold** (#D4AF37): Màu vàng thánh thiêng.
*   **Liturgical Purple** (#6B46C1): Màu tím phụng vụ.
*   **Sacred Red** (#B91C1C): Màu đỏ tử đạo.
*   **Heavenly Blue** (#1E40AF): Màu xanh hy vọng.
*   **Fonts**: Crimson Text (Serif) cho tiêu đề, Inter (Sans) cho nội dung.

## 📄 Bản Quyền

Dự án được xây dựng nhằm mục đích nghiên cứu và tôn vinh di sản của Đức Hồng y Nguyễn Văn Thuận. Nội dung được tổng hợp từ các nguồn tài liệu chính thống.
