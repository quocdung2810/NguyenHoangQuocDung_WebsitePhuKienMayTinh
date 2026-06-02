const products = [
  { id: 1, name: 'Chuột gaming RGB GX-01', category: 'Chuột', price: 350000, badge: 'Bán chạy', collection: 'best' },
  { id: 2, name: 'Bàn phím cơ K87', category: 'Bàn phím', price: 790000, badge: 'Hot', collection: 'best' },
  { id: 3, name: 'Tai nghe gaming H7', category: 'Tai nghe', price: 520000, badge: 'Âm thanh tốt', collection: 'best' },
  { id: 4, name: 'Webcam Full HD W2', category: 'Webcam', price: 430000, badge: 'Học online', collection: 'new' },
  { id: 5, name: 'Lót chuột speed size XL', category: 'Lót chuột', price: 150000, badge: 'Giá tốt', collection: 'new' },
  { id: 6, name: 'Hub USB-C 6 in 1', category: 'Phụ kiện', price: 390000, badge: 'Tiện dụng', collection: 'new' },
  { id: 7, name: 'Đế tản nhiệt laptop N5', category: 'Phụ kiện', price: 280000, badge: 'Mát máy', collection: 'new' },
  { id: 8, name: 'Micro thu âm USB M1', category: 'Micro', price: 610000, badge: 'Livestream', collection: 'best' }
];

products.push(
  { id: 9, name: 'Chuột không dây silent M20', category: 'Chuột', price: 220000, badge: 'Văn phòng', collection: 'new', visual: 'SILENT M20', tone: 'teal' },
  { id: 10, name: 'Bàn phím cơ RGB TKL Pro', category: 'Bàn phím', price: 890000, badge: 'RGB', collection: 'best', visual: 'TKL PRO', tone: 'violet' },
  { id: 11, name: 'Tai nghe Bluetooth Air X3', category: 'Tai nghe', price: 470000, badge: 'Không dây', collection: 'new', visual: 'AIR X3', tone: 'blue' },
  { id: 12, name: 'Loa vi tính 2.0 S12 RGB', category: 'Loa', price: 360000, badge: 'Âm bass', collection: 'best', visual: 'S12 SPEAKER', tone: 'amber' },
  { id: 13, name: 'Tay cầm chơi game G-Pad 5', category: 'Tay cầm', price: 520000, badge: 'Gamepad', collection: 'new', visual: 'G-PAD 5', tone: 'cyan' },
  { id: 14, name: 'Keycap PBT phối màu cyber', category: 'Keycap', price: 260000, badge: 'Custom', collection: 'new', visual: 'PBT KEYCAP', tone: 'pink' },
  { id: 15, name: 'Giá đỡ laptop nhôm Fold X', category: 'Giá đỡ', price: 310000, badge: 'Gọn nhẹ', collection: 'new', visual: 'FOLD X', tone: 'slate' },
  { id: 16, name: 'Cáp HDMI 4K bọc dù 2m', category: 'Cáp', price: 120000, badge: '4K', collection: 'new', visual: 'HDMI 4K', tone: 'amber' },
  { id: 17, name: 'Đầu đọc thẻ nhớ USB 3.0', category: 'Đầu đọc thẻ', price: 95000, badge: 'Tiết kiệm', collection: 'new', visual: 'CARD READER', tone: 'teal' },
  { id: 18, name: 'Box SSD M.2 NVMe Type-C', category: 'Ổ cứng', price: 430000, badge: 'Tốc độ cao', collection: 'best', visual: 'NVME BOX', tone: 'blue' },
  { id: 19, name: 'Bộ vệ sinh laptop 7 món', category: 'Vệ sinh', price: 89000, badge: 'Cần thiết', collection: 'new', visual: 'CLEAN KIT', tone: 'slate' },
  { id: 20, name: 'Đèn LED màn hình Monitor Bar', category: 'Đèn LED', price: 640000, badge: 'Setup đẹp', collection: 'best', visual: 'MONITOR BAR', tone: 'cyan' },
  { id: 21, name: 'USB WiFi băng tần kép AC650', category: 'USB WiFi', price: 210000, badge: 'Kết nối', collection: 'new', visual: 'AC650 WIFI', tone: 'teal' },
  { id: 22, name: 'Bộ chia HDMI Switch 3 cổng', category: 'Phụ kiện', price: 180000, badge: 'Tiện dụng', collection: 'new', visual: 'HDMI SWITCH', tone: 'violet' },
  { id: 23, name: 'Arm màn hình đơn Gas Spring', category: 'Giá đỡ', price: 760000, badge: 'Ergonomic', collection: 'best', visual: 'MONITOR ARM', tone: 'slate' },
  { id: 24, name: 'Bàn di chuột RGB viền LED', category: 'Lót chuột', price: 240000, badge: 'RGB', collection: 'new', visual: 'RGB PAD', tone: 'pink' }
);

const defaultVisuals = {
  1: ['RGB MOUSE', 'cyan'],
  2: ['K87 KEYBOARD', 'violet'],
  3: ['H7 HEADSET', 'teal'],
  4: ['FULL HD CAM', 'blue'],
  5: ['XL PAD', 'amber'],
  6: ['USB-C HUB', 'slate'],
  7: ['COOLING N5', 'cyan'],
  8: ['USB MIC', 'pink']
};

products.forEach((product) => {
  const fallback = defaultVisuals[product.id] || [product.category.toUpperCase(), 'cyan'];
  product.visual = product.visual || fallback[0];
  product.tone = product.tone || fallback[1];
  product.stock = {
    1: 18, 2: 12, 3: 9, 4: 16, 5: 34, 6: 21, 7: 14, 8: 8,
    9: 27, 10: 7, 11: 11, 12: 15, 13: 10, 14: 23, 15: 19, 16: 42,
    17: 30, 18: 13, 19: 36, 20: 6, 21: 25, 22: 28, 23: 5, 24: 17
  }[product.id] || 10;
});

const productImageFiles = {
  1: ['assets/images/products/01-chuot-gaming-rgb-gx-01/p01-1.webp', 'assets/images/products/01-chuot-gaming-rgb-gx-01/p01-2.webp', 'assets/images/products/01-chuot-gaming-rgb-gx-01/p01-3.webp'],
  2: ['assets/images/products/02-ban-phim-co-k87/p02-1.webp', 'assets/images/products/02-ban-phim-co-k87/p02-2.webp', 'assets/images/products/02-ban-phim-co-k87/p02-3.webp'],
  3: ['assets/images/products/03-tai-nghe-gaming-h7/p03-1.webp', 'assets/images/products/03-tai-nghe-gaming-h7/p03-2.webp', 'assets/images/products/03-tai-nghe-gaming-h7/p03-3.webp'],
  4: ['assets/images/products/04-webcam-full-hd-w2/p04-1.webp', 'assets/images/products/04-webcam-full-hd-w2/p04-2.webp', 'assets/images/products/04-webcam-full-hd-w2/p04-3.webp'],
  5: ['assets/images/products/05-lot-chuot-speed-size-xl/p05-1.webp', 'assets/images/products/05-lot-chuot-speed-size-xl/p05-2.webp', 'assets/images/products/05-lot-chuot-speed-size-xl/p05-3.webp'],
  6: ['assets/images/products/06-hub-usb-c-6-in-1/p06-1.webp', 'assets/images/products/06-hub-usb-c-6-in-1/p06-2.webp', 'assets/images/products/06-hub-usb-c-6-in-1/p06-3.webp'],
  7: ['assets/images/products/07-de-tan-nhiet-laptop-n5/p07-1.webp', 'assets/images/products/07-de-tan-nhiet-laptop-n5/p07-2.webp', 'assets/images/products/07-de-tan-nhiet-laptop-n5/p07-3.webp'],
  8: ['assets/images/products/08-micro-thu-am-usb-m1/p08-1.webp', 'assets/images/products/08-micro-thu-am-usb-m1/p08-2.webp', 'assets/images/products/08-micro-thu-am-usb-m1/p08-3.webp'],
  9: ['assets/images/products/09-chuot-khong-day-silent-m20/p09-1.webp', 'assets/images/products/09-chuot-khong-day-silent-m20/p09-2.webp', 'assets/images/products/09-chuot-khong-day-silent-m20/p09-3.webp'],
  10: ['assets/images/products/10-ban-phim-co-rgb-tkl-pro/p10-1.webp', 'assets/images/products/10-ban-phim-co-rgb-tkl-pro/p10-2.webp', 'assets/images/products/10-ban-phim-co-rgb-tkl-pro/p10-3.webp'],
  11: ['assets/images/products/11-tai-nghe-bluetooth-air-x3/p11-1.webp', 'assets/images/products/11-tai-nghe-bluetooth-air-x3/p11-2.webp', 'assets/images/products/11-tai-nghe-bluetooth-air-x3/p11-3.webp'],
  12: ['assets/images/products/12-loa-vi-tinh-2-0-s12-rgb/p12-1.webp', 'assets/images/products/12-loa-vi-tinh-2-0-s12-rgb/p12-2.webp', 'assets/images/products/12-loa-vi-tinh-2-0-s12-rgb/p12-3.webp'],
  13: ['assets/images/products/13-tay-cam-choi-game-g-pad-5/p13-1.jpg', 'assets/images/products/13-tay-cam-choi-game-g-pad-5/p13-2.jpg', 'assets/images/products/13-tay-cam-choi-game-g-pad-5/p13-3.jpg'],
  14: ['assets/images/products/14-keycap-pbt-phoi-mau-cyber/p14-1.webp', 'assets/images/products/14-keycap-pbt-phoi-mau-cyber/p14-2.webp', 'assets/images/products/14-keycap-pbt-phoi-mau-cyber/p14-3.webp'],
  15: ['assets/images/products/15-gia-do-laptop-nhom-fold-x/p15-1.webp', 'assets/images/products/15-gia-do-laptop-nhom-fold-x/p15-2.webp', 'assets/images/products/15-gia-do-laptop-nhom-fold-x/p15-3.webp'],
  16: ['assets/images/products/16-cap-hdmi-4k-boc-du-2m/p16-1.webp', 'assets/images/products/16-cap-hdmi-4k-boc-du-2m/p16-2.webp', 'assets/images/products/16-cap-hdmi-4k-boc-du-2m/p16-3.webp'],
  17: ['assets/images/products/17-dau-doc-the-nho-usb-3-0/p17-1.webp', 'assets/images/products/17-dau-doc-the-nho-usb-3-0/p17-2.webp', 'assets/images/products/17-dau-doc-the-nho-usb-3-0/p17-3.webp'],
  18: ['assets/images/products/18-box-ssd-m-2-nvme-type-c/p18-1.webp', 'assets/images/products/18-box-ssd-m-2-nvme-type-c/p18-2.webp', 'assets/images/products/18-box-ssd-m-2-nvme-type-c/p18-3.webp'],
  19: ['assets/images/products/19-bo-ve-sinh-laptop-7-mon/p19-1.webp', 'assets/images/products/19-bo-ve-sinh-laptop-7-mon/p19-2.webp', 'assets/images/products/19-bo-ve-sinh-laptop-7-mon/p19-3.webp'],
  20: ['assets/images/products/20-den-led-man-hinh-monitor-bar/p20-1.webp', 'assets/images/products/20-den-led-man-hinh-monitor-bar/p20-2.webp', 'assets/images/products/20-den-led-man-hinh-monitor-bar/p20-3.webp'],
  21: ['assets/images/products/21-usb-wifi-bang-tan-kep-ac650/p21-1.jpg', 'assets/images/products/21-usb-wifi-bang-tan-kep-ac650/p21-2.jpg', 'assets/images/products/21-usb-wifi-bang-tan-kep-ac650/p21-3.jpg'],
  22: ['assets/images/products/22-bo-chia-hdmi-switch-3-cong/p22-1.webp', 'assets/images/products/22-bo-chia-hdmi-switch-3-cong/p22-2.webp', 'assets/images/products/22-bo-chia-hdmi-switch-3-cong/p22-3.webp'],
  23: ['assets/images/products/23-arm-man-hinh-don-gas-spring/p23-1.webp', 'assets/images/products/23-arm-man-hinh-don-gas-spring/p23-2.webp', 'assets/images/products/23-arm-man-hinh-don-gas-spring/p23-3.webp'],
  24: ['assets/images/products/24-ban-di-chuot-rgb-vien-led/p24-1.webp', 'assets/images/products/24-ban-di-chuot-rgb-vien-led/p24-2.webp', 'assets/images/products/24-ban-di-chuot-rgb-vien-led/p24-3.webp']
};

const CART_KEY = 'qdung-gear-cart';
const FAVORITE_KEY = 'qdung-gear-favorites';
const USER_KEY = 'qdung-gear-user';
const ACCOUNT_KEY = 'qdung-gear-account';
const ACCOUNTS_KEY = 'qdung-gear-accounts';
const AUTH_RESET_KEY = 'qdung-gear-auth-reset-v39';
const LANG_KEY = 'qdung-gear-language';
const REVIEW_KEY = 'qdung-gear-product-reviews';
const STUDENT_NAME = 'Nguyễn Hoàng Quốc Dũng';
const STUDENT_EMAIL = 'DH52300259@student.stu.edu.vn';
const STUDENT_PHONE = '0815047218';
const DEFAULT_CUSTOMER_NAME = 'Khách hàng QDung';
const formatPrice = (value) => new Intl.NumberFormat('vi-VN').format(value) + 'đ';
const memoryStore = {};

const translations = {
  en: {
    'Trang chủ': 'Home',
    'Sản phẩm': 'Products',
    'Giỏ hàng': 'Cart',
    'Liên hệ': 'Contact',
    'Giới thiệu': 'About',
    'Blog': 'Blog',
    'Lab thực hành': 'Labs',
    'Tìm kiếm': 'Search',
    'Đăng nhập': 'Sign in',
    'Xem sản phẩm': 'Shop products',
    'Xem Lab thực hành': 'View labs',
    'Gaming gear & phụ kiện máy tính': 'Gaming gear & computer accessories',
    'Nâng cấp góc học tập, làm việc và chơi game của bạn': 'Upgrade your study, work, and gaming setup',
    'Chuột, bàn phím, tai nghe, webcam, hub USB-C và phụ kiện laptop được trình bày theo phong cách công nghệ, dễ tìm, dễ mua.': 'Mice, keyboards, headsets, webcams, USB-C hubs, and laptop accessories in a clean tech shopping experience.',
    'Ưu đãi hôm nay': 'Today deal',
    'Combo học online': 'Online study combo',
    'Webcam Full HD + Tai nghe gaming + Hub USB-C.': 'Full HD webcam + gaming headset + USB-C hub.',
    'Tiết kiệm đến 15%': 'Save up to 15%',
    'Danh mục sản phẩm': 'Product categories',
    'Chuột gaming': 'Gaming mice',
    'Bàn phím cơ': 'Mechanical keyboards',
    'Tai nghe': 'Headsets',
    'Webcam': 'Webcams',
    'Hub & phụ kiện': 'Hubs & accessories',
    'Freeship': 'Free shipping',
    'Đơn từ 500.000đ': 'Orders from 500,000 VND',
    'Bảo hành': 'Warranty',
    'Hỗ trợ 12 tháng': '12-month support',
    'Tư vấn': 'Advice',
    'Chọn gear theo nhu cầu': 'Gear matched to your needs',
    'Sản phẩm bán chạy': 'Best sellers',
    'Được chọn nhiều': 'Popular picks',
    'Xem tất cả': 'View all',
    'Danh mục nổi bật': 'Featured categories',
    'Mua nhanh theo nhu cầu': 'Shop by need',
    'Gaming': 'Gaming',
    'Học online': 'Online learning',
    'Văn phòng': 'Office',
    'Livestream': 'Livestream',
    'Bộ sưu tập mới': 'New collection',
    'Gear mới về': 'New arrivals',
    'Tin tức': 'News',
    'Gợi ý chọn phụ kiện': 'Accessory buying tips',
    'Xem Blog': 'View blog',
    'Đăng ký nhận bản tin': 'Newsletter',
    'Nhận thông tin sản phẩm mới và ưu đãi': 'Get product news and offers',
    'Đăng ký': 'Subscribe',
    'Chi tiết': 'Details',
    'Thêm giỏ': 'Add to cart',
    'Thêm vào giỏ hàng': 'Add to cart',
    'Mua ngay': 'Buy now',
    'Không tìm thấy sản phẩm phù hợp.': 'No matching products found.',
    'Giỏ hàng đang trống.': 'Your cart is empty.',
    'Tiếp tục mua hàng': 'Continue shopping',
    'Xóa': 'Remove',
    'Xóa toàn bộ giỏ hàng': 'Clear cart',
    'Thanh toán khi nhận hàng': 'Cash on delivery',
    'Chuyển khoản ngân hàng': 'Bank transfer',
    'Ví điện tử / QR': 'E-wallet / QR',
    'Bạn thanh toán bằng tiền mặt khi nhận hàng.': 'Pay in cash when your order arrives.',
    'Chuyển khoản demo: QDUNG GEAR - STK 0815047218 - Nội dung: QDUNG + số điện thoại.': 'Demo transfer: QDUNG GEAR - Account 0815047218 - Content: QDUNG + phone number.',
    'Thanh toán demo qua ví điện tử/QR, nhân viên sẽ liên hệ xác nhận.': 'Demo e-wallet/QR payment. Staff will contact you to confirm.',
    'Đặt hàng': 'Place order',
    'Tài khoản khách hàng': 'Customer account',
    'Đăng nhập demo để lưu thông tin đặt hàng và kiểm tra giỏ hàng nhanh hơn.': 'Demo sign-in to save checkout info and review your cart faster.',
    'Mật khẩu': 'Password',
    'Ghi nhớ đăng nhập': 'Remember me',
    'Tài khoản demo': 'Demo account',
    'Bạn có thể dùng email sinh viên của mình và mật khẩu bất kỳ từ 6 ký tự.': 'Use your student email and any password with at least 6 characters.',
    'Đăng xuất': 'Sign out',
    'Thông tin': 'Information',
    'Website bán phụ kiện máy tính, phục vụ học tập, làm việc và gaming.': 'A computer accessories shop for study, work, and gaming.',
    'Địa chỉ:': 'Address:',
    'Email:': 'Email:',
    'Điện thoại:': 'Phone:',
    'Chuột': 'Mouse',
    'Bàn phím': 'Keyboard',
    'Phụ kiện': 'Accessories',
    'Lót chuột': 'Mouse pad',
    'Micro': 'Microphone',
    'Bán chạy': 'Best seller',
    'Hot': 'Hot',
    'Âm thanh tốt': 'Great audio',
    'Học online': 'Online study',
    'Giá tốt': 'Good price',
    'Tiện dụng': 'Handy',
    'Mát máy': 'Cooling',
    'Livestream': 'Livestream',
    'Chuột gaming RGB GX-01': 'GX-01 RGB gaming mouse',
    'Bàn phím cơ K87': 'K87 mechanical keyboard',
    'Tai nghe gaming H7': 'H7 gaming headset',
    'Webcam Full HD W2': 'W2 Full HD webcam',
    'Lót chuột speed size XL': 'XL speed mouse pad',
    'Hub USB-C 6 in 1': '6-in-1 USB-C hub',
    'Đế tản nhiệt laptop N5': 'N5 laptop cooling stand',
    'Micro thu âm USB M1': 'M1 USB recording microphone',
    'Hub': 'Hub',
    'Đế tản nhiệt': 'Cooling stand',
    'Loa': 'Speakers',
    'Tay cầm': 'Gamepad',
    'Keycap': 'Keycap',
    'Giá đỡ': 'Stand',
    'Cáp': 'Cable',
    'Đầu đọc thẻ': 'Card reader',
    'Ổ cứng': 'Storage',
    'Vệ sinh': 'Cleaning',
    'Đèn LED': 'LED light',
    'USB WiFi': 'USB WiFi',
    'Văn phòng': 'Office',
    'RGB': 'RGB',
    'Không dây': 'Wireless',
    'Âm bass': 'Bass sound',
    'Gamepad': 'Gamepad',
    'Custom': 'Custom',
    'Gọn nhẹ': 'Compact',
    '4K': '4K',
    'Tiết kiệm': 'Budget',
    'Tốc độ cao': 'High speed',
    'Cần thiết': 'Essential',
    'Setup đẹp': 'Setup look',
    'Kết nối': 'Connectivity',
    'Ergonomic': 'Ergonomic',
    'Chuột không dây silent M20': 'M20 silent wireless mouse',
    'Bàn phím cơ RGB TKL Pro': 'RGB TKL Pro mechanical keyboard',
    'Tai nghe Bluetooth Air X3': 'Air X3 Bluetooth headset',
    'Loa vi tính 2.0 S12 RGB': 'S12 RGB 2.0 desktop speakers',
    'Tay cầm chơi game G-Pad 5': 'G-Pad 5 game controller',
    'Keycap PBT phối màu cyber': 'Cyber color PBT keycap set',
    'Giá đỡ laptop nhôm Fold X': 'Fold X aluminum laptop stand',
    'Cáp HDMI 4K bọc dù 2m': '2m braided 4K HDMI cable',
    'Đầu đọc thẻ nhớ USB 3.0': 'USB 3.0 memory card reader',
    'Box SSD M.2 NVMe Type-C': 'Type-C M.2 NVMe SSD enclosure',
    'Bộ vệ sinh laptop 7 món': '7-piece laptop cleaning kit',
    'Đèn LED màn hình Monitor Bar': 'Monitor Bar LED screen light',
    'USB WiFi băng tần kép AC650': 'AC650 dual-band USB WiFi adapter',
    'Bộ chia HDMI Switch 3 cổng': '3-port HDMI switch',
    'Arm màn hình đơn Gas Spring': 'Single gas spring monitor arm',
    'Bàn di chuột RGB viền LED': 'RGB LED mouse pad'
  }
};

const blogPosts = [
  {
    slug: 'chon-chuot-gaming',
    category: 'Gaming',
    title: 'Cách chọn chuột phù hợp kích thước tay',
    excerpt: 'DPI, form cầm và trọng lượng ảnh hưởng lớn đến trải nghiệm chơi game.',
    productQuery: 'chuột',
    content: [
      'Khi chọn chuột gaming, nhiều bạn chỉ nhìn vào DPI rất cao, nhưng thực tế DPI chỉ là một phần nhỏ. Điều quan trọng hơn là cảm biến ổn định, form chuột hợp tay và trọng lượng phù hợp với cách rê chuột.',
      'Nếu bàn tay nhỏ hoặc thường cầm kiểu claw grip, chuột gọn và nhẹ sẽ dễ kiểm soát hơn. Nếu cầm palm grip, chuột có lưng cao và thân dài sẽ đỡ mỏi khi dùng lâu.',
      'Với sinh viên vừa học vừa chơi game, mức DPI sử dụng phổ biến thường nằm trong khoảng 800 đến 1600. Bạn nên chọn chuột có phần mềm hoặc nút chuyển DPI để linh hoạt giữa học tập, thiết kế và giải trí.'
    ],
    tips: ['Ưu tiên cảm biến ổn định hơn thông số quá cao', 'Chọn form theo kiểu cầm tay', 'Lót chuột lớn giúp rê chuột chính xác hơn']
  },
  {
    slug: 'combo-hoc-online',
    category: 'Học tập',
    title: 'Combo học online gọn cho sinh viên',
    excerpt: 'Webcam, tai nghe và hub USB-C giúp buổi học ổn định hơn.',
    productQuery: 'webcam',
    content: [
      'Một góc học online ổn không cần quá đắt. Bộ cơ bản nên có webcam rõ hình, tai nghe có mic tốt và hub USB-C nếu laptop thiếu cổng kết nối.',
      'Webcam Full HD giúp hình ảnh rõ hơn trong lớp học trực tuyến. Tai nghe có mic lọc ồn nhẹ giúp giọng nói dễ nghe hơn khi thuyết trình hoặc làm việc nhóm.',
      'Hub USB-C là món rất hữu ích khi bạn cần cắm chuột, bàn phím, USB, HDMI hoặc đầu đọc thẻ cùng lúc. Đây là phụ kiện nhỏ nhưng làm trải nghiệm học tập gọn hơn nhiều.'
    ],
    tips: ['Chọn webcam Full HD nếu thường bật camera', 'Tai nghe nên có mic rõ giọng', 'Hub USB-C giúp mở rộng cổng kết nối']
  },
  {
    slug: 'setup-ban-lam-viec',
    category: 'Setup',
    title: 'Giữ bàn làm việc gọn với phụ kiện đúng',
    excerpt: 'Lót chuột lớn, hub kết nối và đế tản nhiệt giúp góc máy sạch hơn.',
    productQuery: 'giá đỡ',
    content: [
      'Một bàn học gọn giúp bạn tập trung hơn. Không nhất thiết phải mua quá nhiều đồ, nhưng vài phụ kiện đúng sẽ làm góc máy sạch và tiện hơn.',
      'Lót chuột lớn giúp gom khu vực bàn phím và chuột thành một vùng làm việc rõ ràng. Giá đỡ laptop nâng màn hình lên cao hơn, giảm cúi cổ khi học lâu.',
      'Nếu dùng laptop nhiều giờ, đế tản nhiệt hoặc giá đỡ thoáng khí giúp máy mát hơn. Kết hợp thêm hub kết nối và dây cáp gọn sẽ tạo cảm giác chuyên nghiệp hơn.'
    ],
    tips: ['Dùng lót chuột lớn để gom khu vực thao tác', 'Nâng laptop lên ngang tầm mắt', 'Dùng hub và dây ngắn để giảm rối bàn']
  },
  {
    slug: 'ban-phim-tkl-fullsize',
    category: 'Bàn phím',
    title: 'Nên chọn bàn phím cơ TKL hay fullsize?',
    excerpt: 'TKL gọn hơn cho bàn nhỏ, fullsize tiện nếu bạn thường nhập số liệu.',
    productQuery: 'bàn phím',
    content: [
      'Bàn phím fullsize có đủ phím số nên tiện cho nhập liệu, kế toán hoặc làm bảng tính. Điểm trừ là chiếm nhiều diện tích bàn hơn.',
      'Bàn phím TKL bỏ cụm phím số, giúp chuột có nhiều không gian hơn. Đây là lựa chọn rất hợp với bàn nhỏ, người chơi game hoặc người thích setup gọn.',
      'Nếu bạn hiếm khi dùng phím số, TKL là lựa chọn cân bằng. Nếu thường xuyên nhập số liệu, fullsize vẫn tiện hơn.'
    ],
    tips: ['TKL hợp bàn nhỏ và gaming', 'Fullsize hợp nhập liệu nhiều', 'Nên thử layout trước khi mua']
  }
];

function readStore(key) {
  try {
    if (window.localStorage) return window.localStorage.getItem(key);
  } catch (error) {
    // Some embedded browsers block localStorage; cookies keep the demo usable.
  }

  const cookie = document.cookie.split('; ').find((item) => item.startsWith(key + '='));
  if (cookie) return decodeURIComponent(cookie.split('=').slice(1).join('='));
  return memoryStore[key] || null;
}

function writeStore(key, value) {
  memoryStore[key] = value;
  try {
    if (window.localStorage) window.localStorage.setItem(key, value);
  } catch (error) {
    // Fallback below.
  }
  try {
    document.cookie = `${key}=${encodeURIComponent(value)}; path=/; max-age=2592000; SameSite=Lax`;
  } catch (error) {
    // The URL fallback still keeps cart navigation working.
  }
}

function removeStore(key) {
  delete memoryStore[key];
  try {
    if (window.localStorage) window.localStorage.removeItem(key);
  } catch (error) {
    // Fallback below.
  }
  try {
    document.cookie = `${key}=; path=/; max-age=0; SameSite=Lax`;
  } catch (error) {
    // Nothing else to clear.
  }
}

function resetOldAuthAccountsOnce() {
  if (readStore(AUTH_RESET_KEY) === 'done') return;
  removeStore(USER_KEY);
  removeStore(ACCOUNT_KEY);
  removeStore(ACCOUNTS_KEY);
  writeStore(AUTH_RESET_KEY, 'done');
}

function hydrateCartFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const cartParam = params.get('cart');
  if (!cartParam) return;

  try {
    JSON.parse(cartParam);
    writeStore(CART_KEY, cartParam);
    params.delete('cart');
    const nextUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '') + window.location.hash;
    window.history.replaceState(null, '', nextUrl);
  } catch (error) {
    params.delete('cart');
    const nextUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '') + window.location.hash;
    window.history.replaceState(null, '', nextUrl);
  }
}

function getCart() {
  return JSON.parse(readStore(CART_KEY) || '[]');
}

function saveCart(cart) {
  writeStore(CART_KEY, JSON.stringify(cart));
  updateCartCount();
  syncCurrentCartUrl(cart);
}

function syncCurrentCartUrl(cart) {
  if (!document.getElementById('cartItems')) return;
  const params = new URLSearchParams(window.location.search);
  if (cart.length) params.set('cart', JSON.stringify(cart));
  else params.delete('cart');
  const nextUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '') + window.location.hash;
  window.history.replaceState(null, '', nextUrl);
}

function getFavorites() {
  return JSON.parse(readStore(FAVORITE_KEY) || '[]');
}

function saveFavorites(favorites) {
  writeStore(FAVORITE_KEY, JSON.stringify([...new Set(favorites.map(Number))]));
  updateFavoriteButtons();
  renderFavoritesPage();
}

function getUser() {
  return JSON.parse(readStore(USER_KEY) || 'null');
}

function getLegacyAccount() {
  return JSON.parse(readStore(ACCOUNT_KEY) || 'null');
}

function normalizeAccountValue(value) {
  return String(value || '').trim().toLowerCase();
}

function accountMatches(account, identifier) {
  const normalized = normalizeAccountValue(identifier);
  if (!account || !normalized) return false;
  return [account.phone, account.email, account.name].filter(Boolean).some((item) => normalizeAccountValue(item) === normalized);
}

function getAccountIdentity(account) {
  const provider = normalizeAccountValue(account?.provider);
  const mainId = normalizeAccountValue(account?.phone || account?.email || account?.name);
  if (!mainId) return '';
  return provider ? `${provider}:${normalizeAccountValue(account.email || account.name)}` : mainId;
}

function getAccounts() {
  const stored = JSON.parse(readStore(ACCOUNTS_KEY) || '[]');
  const accounts = Array.isArray(stored) ? stored : [];
  const legacy = getLegacyAccount();
  if (legacy && !accounts.some((account) => getAccountIdentity(account) === getAccountIdentity(legacy))) {
    return [...accounts, legacy];
  }
  return accounts;
}

function saveAccount(account) {
  const identity = getAccountIdentity(account);
  if (!identity) return account;
  const accounts = getAccounts().filter((item) => getAccountIdentity(item) !== identity);
  accounts.push(account);
  writeStore(ACCOUNTS_KEY, JSON.stringify(accounts));
  if (!account.provider) writeStore(ACCOUNT_KEY, JSON.stringify(account));
  return account;
}

function findAccountByIdentifier(identifier) {
  return getAccounts().find((account) => accountMatches(account, identifier)) || null;
}

function findSignupDuplicate(phone, email) {
  const normalizedPhone = normalizeAccountValue(phone);
  const normalizedEmail = normalizeAccountValue(email);
  return getAccounts().find((account) => {
    const samePhone = normalizedPhone && normalizeAccountValue(account.phone) === normalizedPhone;
    const sameEmail = normalizedEmail && normalizeAccountValue(account.email) === normalizedEmail;
    return samePhone || sameEmail;
  }) || null;
}

function getAccount() {
  const user = getUser();
  const accounts = getAccounts();
  if (user) {
    const current = accounts.find((account) => {
      const sameProvider = user.provider && account.provider === user.provider && normalizeAccountValue(account.email) === normalizeAccountValue(user.email);
      return sameProvider || accountMatches(account, user.phone) || accountMatches(account, user.email) || accountMatches(account, user.name);
    });
    if (current) return current;
  }
  return getLegacyAccount() || accounts[0] || null;
}

function getLanguage() {
  return readStore(LANG_KEY) || 'vi';
}

function translate(text) {
  if (getLanguage() === 'vi') return text;
  return translations.en[text] || text;
}

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  })[char]);
}

function getDisplayEmail(account, user) {
  const email = account?.email || user?.email || '';
  return email.includes('@') ? email : STUDENT_EMAIL;
}

function isStudentIdentity(account, user) {
  return [account?.email, user?.email].includes(STUDENT_EMAIL)
    || [account?.phone, user?.phone].includes(STUDENT_PHONE);
}

function getDisplayName(account, user) {
  const name = account?.name || user?.name || '';
  const looksLikePhone = /^0\d{9}$/.test(name.trim());
  const looksLikeEmail = name.includes('@');
  if (name && !looksLikePhone && !looksLikeEmail) return name;
  return isStudentIdentity(account, user) ? STUDENT_NAME : DEFAULT_CUSTOMER_NAME;
}

function setupLanguageSwitcher() {
  const header = document.querySelector('.site-header');
  if (!header || document.querySelector('.language-switcher')) return;
  const switcher = document.createElement('label');
  switcher.className = 'language-switcher';
  switcher.innerHTML = `
    <span>LANG</span>
    <select aria-label="Chọn ngôn ngữ">
      <option value="vi">VI</option>
      <option value="en">EN</option>
    </select>
  `;
  const select = switcher.querySelector('select');
  select.value = getLanguage();
  select.addEventListener('change', () => {
    writeStore(LANG_KEY, select.value);
    applyLanguage();
    renderProducts('featuredProducts', products.slice(0, 4));
    renderProducts('bestSellerProducts', products.filter((product) => product.collection === 'best'));
    renderProducts('newCollectionProducts', products.filter((product) => product.collection === 'new'));
    setupProductsPage();
    renderCartPage();
  });
  header.insertBefore(switcher, document.querySelector('.menu-toggle'));
}

function translateElement(element) {
  if (!element.dataset.i18nSource) element.dataset.i18nSource = element.textContent.trim();
  const source = element.dataset.i18nSource;
  if (source) element.textContent = translate(source);
}

function applyLanguage() {
  document.documentElement.lang = getLanguage();

  document.querySelectorAll('.site-nav a, .quick-actions a:not(.quick-cart), .quick-search button, .button, .eyebrow, .category-menu h2, .category-menu a, .promo-grid span, .promo-grid strong, .section-title-row a, .newsletter-form button, .auth-help h2, [data-logout]').forEach(translateElement);

  document.querySelectorAll('h1, h2, h3, p, label, li, strong, span').forEach((element) => {
    if (element.closest('.category-grid')) return;
    if (element.children.length) return;
    const text = element.textContent.trim();
    if (!text || text.length > 170) return;
    if (!element.dataset.i18nSource && translations.en[text]) element.dataset.i18nSource = text;
    if (element.dataset.i18nSource) element.textContent = translate(element.dataset.i18nSource);
  });

  document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach((field) => {
    if (!field.dataset.i18nPlaceholder) field.dataset.i18nPlaceholder = field.placeholder;
    const placeholders = {
      'Tìm chuột, bàn phím, tai nghe...': 'Search mice, keyboards, headsets...',
      'Tìm sản phẩm...': 'Search products...',
      'Nhập email của bạn': 'Enter your email',
      'DH52300259@student.stu.edu.vn': 'DH52300259@student.stu.edu.vn',
      'Nhập tối thiểu 6 ký tự': 'Enter at least 6 characters'
    };
    field.placeholder = getLanguage() === 'vi' ? field.dataset.i18nPlaceholder : placeholders[field.dataset.i18nPlaceholder] || field.dataset.i18nPlaceholder;
  });

  document.querySelectorAll('.quick-cart').forEach((link) => {
    const count = link.querySelector('.cart-count')?.textContent || '0';
    link.innerHTML = `${translate('Giỏ hàng')} <span class="cart-count">${count}</span>`;
  });

  document.querySelectorAll('#checkoutForm fieldset label, .inline-check').forEach((label) => {
    const input = label.querySelector('input');
    if (!input) return;
    if (!label.dataset.i18nSource) label.dataset.i18nSource = label.textContent.trim();
    const source = label.dataset.i18nSource;
    label.textContent = '';
    label.appendChild(input);
    label.append(' ' + translate(source));
  });
}

function showToast(message) {
  let toast = document.querySelector('.toast-message');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-message';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('is-visible');
  setTimeout(() => toast.classList.remove('is-visible'), 2200);
}

function updateCartCount() {
  const count = getCart().reduce((total, item) => total + item.quantity, 0);
  document.querySelectorAll('.cart-count').forEach((item) => {
    item.textContent = count;
  });
  updateCartLinks();
}

function getLinkPrefix(link) {
  const href = link.getAttribute('href') || '';
  return href.match(/^(\.\.\/)+/)?.[0] || '';
}

function updateCartLinks() {
  const cart = getCart();
  const suffix = cart.length ? '?cart=' + encodeURIComponent(JSON.stringify(cart)) : '';
  document.querySelectorAll('a[href$="cart.html"], a[href*="cart.html?"]').forEach((link) => {
    const prefix = getLinkPrefix(link);
    link.href = prefix + 'cart.html' + suffix;
  });
}

function updateAuthStatus() {
  const user = getUser();
  const account = getAccount();
  document.querySelectorAll('.quick-actions a:not(.quick-cart)').forEach((link) => {
    if (!link.dataset.authPrefix) {
      link.dataset.authPrefix = getLinkPrefix(link);
    }
    const prefix = link.dataset.authPrefix;
    if (user) {
      link.textContent = (getLanguage() === 'vi' ? 'Xin chào ' : 'Hi, ') + getDisplayName(account, user);
      link.href = prefix + 'account.html';
    } else {
      link.textContent = translate('Đăng nhập');
      link.href = prefix + 'login.html';
    }
  });
}

function addToCart(id) {
  const product = products.find((item) => item.id === Number(id));
  if (!product) return;
  const cart = getCart();
  const existing = cart.find((item) => item.id === product.id);
  if (existing) existing.quantity += 1;
  else cart.push({ id: product.id, quantity: 1 });
  saveCart(cart);
  renderCartPage();
  showToast((getLanguage() === 'vi' ? 'Đã thêm vào giỏ hàng: ' : 'Added to cart: ') + translate(product.name));
}

function buyNow(id) {
  const product = products.find((item) => item.id === Number(id));
  if (!product) return;
  const cart = getCart();
  const existing = cart.find((item) => item.id === product.id);
  if (existing) existing.quantity += 1;
  else cart.push({ id: product.id, quantity: 1 });
  saveCart(cart);
  window.location.href = 'cart.html?cart=' + encodeURIComponent(JSON.stringify(cart));
}

function toggleFavorite(id) {
  const productId = Number(id);
  const favorites = getFavorites();
  const exists = favorites.includes(productId);
  const next = exists ? favorites.filter((item) => item !== productId) : [...favorites, productId];
  saveFavorites(next);
  const product = products.find((item) => item.id === productId);
  showToast(exists ? 'Đã xóa khỏi yêu thích.' : 'Đã thêm vào sản phẩm yêu thích: ' + (product?.name || ''));
}

function updateFavoriteButtons() {
  const favorites = getFavorites();
  document.querySelectorAll('[data-favorite-toggle]').forEach((button) => {
    const id = Number(button.dataset.favoriteToggle);
    const active = favorites.includes(id);
    button.classList.toggle('is-active', active);
    button.textContent = active ? '♥ Đã thích' : '♡ Yêu thích';
  });
}

function shareProduct(platform) {
  const title = document.getElementById('detailName')?.textContent || 'QDung Gear';
  const url = window.location.href;
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(title);
  const targets = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    google: `https://www.google.com/search?q=${encodedText}%20QDung%20Gear`,
    x: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`
  };
  window.open(targets[platform] || url, '_blank', 'noopener,noreferrer');
}

function getSavedReviews() {
  return JSON.parse(readStore(REVIEW_KEY) || '{}');
}

function saveProductReview(productId, review) {
  const allReviews = getSavedReviews();
  const key = String(productId);
  allReviews[key] = [review, ...(allReviews[key] || [])].slice(0, 12);
  writeStore(REVIEW_KEY, JSON.stringify(allReviews));
}

function fakeProductReviews(product) {
  const people = ['Minh Khang', 'Gia Bảo', 'Anh Dũng', 'Ngọc Trâm', 'Hoàng Phúc', 'Thiên Ân'];
  const comments = [
    `Đóng gói chắc chắn, ${product.category.toLowerCase()} dùng ổn so với giá.`,
    'Shop tư vấn nhanh, giao diện mua hàng rõ ràng, nhận hàng đúng mô tả.',
    'Sản phẩm hợp để học tập và setup góc máy, nhìn ngoài khá đẹp.',
    'Mình đã dùng vài ngày, thao tác ổn định và đáng tiền trong tầm giá.'
  ];
  return comments.map((content, index) => ({
    name: people[(product.id + index) % people.length],
    rating: index === 1 ? 4 : 5,
    content,
    createdAt: new Date(2026, 4, Math.max(1, 28 - product.id - index)).toISOString(),
    verified: true,
    demo: true
  }));
}

function getProductReviews(product) {
  const saved = getSavedReviews()[String(product.id)] || [];
  return [...saved, ...fakeProductReviews(product)];
}

function ratingStars(rating) {
  return '★★★★★'.slice(0, rating) + '☆☆☆☆☆'.slice(0, 5 - rating);
}

function productImage(product, variant = 0) {
  const realImages = productImageFiles[product.id];
  if (realImages?.length) return realImages[variant % realImages.length];

  const themes = {
    cyan: ['#00d4ff', '#00a99d', '#08111f'],
    teal: ['#2dd4bf', '#0f766e', '#0b1220'],
    violet: ['#a78bfa', '#6d28d9', '#111827'],
    blue: ['#60a5fa', '#2563eb', '#0f172a'],
    amber: ['#fbbf24', '#f59e0b', '#111827'],
    pink: ['#f472b6', '#db2777', '#111827'],
    slate: ['#94a3b8', '#334155', '#08111f']
  };
  const [primary, secondary, dark] = themes[product.tone] || themes.cyan;
  const labels = [product.visual, translate(product.category), 'QDUNG GEAR', formatPrice(product.price), translate(product.badge)];
  const title = labels[variant % labels.length];
  const subtitle = variant === 0 ? 'QDUNG GEAR' : product.visual;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="${primary}" stop-opacity=".95"/>
          <stop offset=".58" stop-color="${secondary}" stop-opacity=".9"/>
          <stop offset="1" stop-color="${dark}"/>
        </linearGradient>
        <linearGradient id="shine" x1="0" x2="1">
          <stop offset="0" stop-color="#ffffff" stop-opacity=".7"/>
          <stop offset="1" stop-color="#ffffff" stop-opacity=".08"/>
        </linearGradient>
      </defs>
      <rect width="640" height="420" rx="34" fill="url(#bg)"/>
      <path d="M0 310 C140 250 190 380 330 300 C450 230 505 270 640 205 L640 420 L0 420Z" fill="#ffffff" opacity=".13"/>
      <g opacity=".24" stroke="#ffffff" stroke-width="2">
        <path d="M76 70h120M76 106h72M500 70h64M470 106h94M84 330h90M455 334h108"/>
        <circle cx="480" cy="110" r="5"/><circle cx="154" cy="330" r="5"/><circle cx="560" cy="72" r="5"/>
      </g>
      <rect x="118" y="116" width="404" height="188" rx="26" fill="#ffffff" opacity=".16" stroke="#ffffff" stroke-opacity=".38"/>
      <rect x="158" y="154" width="324" height="76" rx="18" fill="url(#shine)" opacity=".42"/>
      <text x="320" y="208" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="42" font-weight="900" fill="#ffffff">${title}</text>
      <text x="320" y="258" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700" fill="#eafffb" opacity=".88">${subtitle}</text>
    </svg>
  `;
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

function productGalleryImages(product) {
  return productImageFiles[product.id] || Array.from({ length: 6 }, (_, index) => productImage(product, index));
}

function renderProducts(targetId, list) {
  const target = document.getElementById(targetId);
  if (!target) return;

  if (!list.length) {
    target.innerHTML = '<div class="empty-state">Không tìm thấy sản phẩm phù hợp.</div>';
    return;
  }

  target.innerHTML = list.map((product) => `
    <article class="product-card product-card-clickable" data-product-link="product-detail.html?id=${product.id}" tabindex="0" aria-label="Xem chi tiết ${translate(product.name)}">
      <div class="product-card__flag">${product.collection === 'best' ? 'Best' : 'New'}</div>
      <div class="product-card__image">
        <img src="${productImage(product)}" alt="${translate(product.name)}">
      </div>
      <div class="product-card__body">
        <div class="product-card__meta">
          <span class="badge">${translate(product.badge)}</span>
          <span>${translate(product.category)}</span>
        </div>
        <h3>${translate(product.name)}</h3>
        <div class="product-card__rating">
          <span>★★★★★</span>
          <em>4.9 • Đã bán ${product.id * 7 + 24}</em>
        </div>
        <div class="product-card__price-row">
          <p class="price">${formatPrice(product.price)}</p>
          <small>Trả góp demo</small>
        </div>
        <div class="button-row">
          <button class="button" type="button" data-add-cart="${product.id}">${translate('Thêm giỏ')}</button>
          <button class="button buy-now-button" type="button" data-buy-now="${product.id}">${translate('Mua ngay')}</button>
        </div>
      </div>
    </article>
  `).join('');
}

function setupProductsPage() {
  const target = document.getElementById('productList');
  if (!target) return;

  const search = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  const sortSelect = document.getElementById('sortSelect');
  const loadMoreButton = document.getElementById('loadMoreProducts');
  const loadMoreWrap = document.getElementById('productLoadMoreWrap');
  const loadMoreNote = document.getElementById('productLoadMoreNote');
  const params = new URLSearchParams(window.location.search);
  const query = params.get('q') || '';
  if (search && query) search.value = query;
  let visibleCount = 16;
  let filteredProducts = [];
  let randomProducts = [];

  if (categoryFilter && categoryFilter.options.length <= 1) {
    [...new Set(products.map((item) => item.category))].forEach((category) => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      categoryFilter.appendChild(option);
    });
  }

  function randomFromShown(source, count = 8) {
    if (!source.length) return [];
    return Array.from({ length: count }, () => source[Math.floor(Math.random() * source.length)]);
  }

  function renderPagedProducts() {
    const regularItems = filteredProducts.slice(0, visibleCount);
    const visibleItems = [...regularItems, ...randomProducts];
    renderProducts('productList', visibleItems);

    if (!loadMoreButton || !loadMoreWrap || !loadMoreNote) return;
    loadMoreWrap.hidden = !filteredProducts.length;
    if (!filteredProducts.length) return;

    loadMoreButton.textContent = 'Xem thêm sản phẩm';
    loadMoreNote.textContent = '';
  }

  function apply() {
    const keyword = (search?.value || '').trim().toLowerCase();
    const selectedCategory = categoryFilter?.value || 'all';
    let result = products.filter((product) => {
      const matchKeyword = product.name.toLowerCase().includes(keyword) || product.category.toLowerCase().includes(keyword);
      const matchCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchKeyword && matchCategory;
    });

    if (sortSelect?.value === 'price-asc') result = result.sort((a, b) => a.price - b.price);
    if (sortSelect?.value === 'price-desc') result = result.sort((a, b) => b.price - a.price);
    visibleCount = 16;
    randomProducts = [];
    filteredProducts = result;
    renderPagedProducts();
  }

  [search, categoryFilter, sortSelect].forEach((control) => control?.addEventListener('input', apply));
  loadMoreButton?.addEventListener('click', () => {
    const hasMore = visibleCount < filteredProducts.length;
    if (hasMore) visibleCount += 8;
    else randomProducts = [...randomProducts, ...randomFromShown(filteredProducts, 8)];
    renderPagedProducts();
  });
  apply();
}

function productDetailContent(product) {
  const categorySpecs = {
    'Chuột': ['Cảm biến quang học độ nhạy cao', 'DPI điều chỉnh nhiều mức', 'Thiết kế cầm lâu không mỏi'],
    'Bàn phím': ['Layout gọn dễ setup', 'LED RGB nhiều chế độ', 'Phím bấm phản hồi nhanh'],
    'Tai nghe': ['Âm thanh rõ, mic đàm thoại ổn', 'Đệm tai êm', 'Phù hợp học online và gaming'],
    'Webcam': ['Độ phân giải Full HD', 'Tự động cân bằng sáng', 'Kẹp màn hình chắc chắn'],
    'Hub': ['Nhiều cổng kết nối', 'Vỏ nhôm tản nhiệt tốt', 'Cắm là dùng'],
    'Đế tản nhiệt': ['Quạt làm mát êm', 'Nâng góc gõ thoải mái', 'Phù hợp laptop học tập và gaming'],
    'Micro': ['Thu âm rõ giọng', 'Kết nối USB tiện lợi', 'Dùng cho học online, stream, họp nhóm'],
    'Loa': ['Âm lượng đủ lớn cho góc học tập', 'LED trang trí nổi bật', 'Kết nối máy tính dễ dàng'],
    'Tay cầm': ['Cầm chắc tay', 'Nút bấm nhạy', 'Hỗ trợ nhiều tựa game phổ biến'],
    'Keycap': ['Chất liệu PBT bền màu', 'Phối màu nổi bật', 'Dễ thay thế cho bàn phím cơ'],
    'Giá đỡ': ['Kết cấu chắc chắn', 'Điều chỉnh góc linh hoạt', 'Giúp bàn làm việc gọn hơn'],
    'Cáp': ['Tín hiệu ổn định', 'Dây bọc dù bền', 'Phù hợp học tập, trình chiếu, giải trí'],
    'Ổ cứng': ['Tốc độ truyền dữ liệu cao', 'Vỏ gọn dễ mang theo', 'Kết nối Type-C hiện đại']
  };
  const specs = categorySpecs[product.category] || ['Thiết kế gọn đẹp', 'Dễ sử dụng', 'Phù hợp setup máy tính cá nhân'];
  return {
    specs,
    origin: 'QDung Gear chọn lọc',
    warranty: product.price >= 500000 ? '12 tháng' : '6 tháng',
    stock: product.collection === 'best' ? `Còn ${product.stock} sản phẩm, bán chạy` : `Còn ${product.stock} sản phẩm`,
    package: '1 sản phẩm, hộp đựng, phiếu bảo hành demo',
    description: [
      `${translate(product.name)} là sản phẩm thuộc nhóm ${translate(product.category)}, phù hợp cho học tập, làm việc, giải trí và setup góc máy hiện đại.`,
      'Sản phẩm được trình bày theo phong cách thương mại điện tử: thông tin rõ ràng, giá dễ nhìn, có voucher demo và thao tác mua nhanh.',
      'Lưu ý: hình ảnh trong đồ án là ảnh minh họa local để website chạy ổn định khi nộp bài.'
    ]
  };
}

function setupProductDetail() {
  const mainImage = document.getElementById('detailMainImage');
  const thumbs = document.getElementById('detailThumbs');
  if (!mainImage || !thumbs) return;

  const id = Number(new URLSearchParams(window.location.search).get('id') || 1);
  const product = products.find((item) => item.id === id) || products[0];
  const detailName = document.getElementById('detailName');
  const detailPrice = document.getElementById('detailPrice');
  const detailDesc = document.getElementById('detailDesc');
  const detailStock = document.getElementById('detailStock');
  const detailExtra = document.getElementById('detailExtra');
  const content = productDetailContent(product);

  if (detailName) detailName.textContent = translate(product.name);
  if (detailPrice) detailPrice.textContent = formatPrice(product.price);
  if (detailStock) detailStock.innerHTML = `Còn <strong>${product.stock}</strong> sản phẩm tại QDung Gear`;
  if (detailDesc) {
    detailDesc.textContent = `${translate(product.name)} thuộc nhóm ${translate(product.category)}, phù hợp cho học tập, làm việc, giải trí và setup góc máy hiện đại.`;
  }
  if (detailExtra) {
    detailExtra.innerHTML = `
      <section class="detail-section">
        <h2>Chi tiết sản phẩm</h2>
        <div class="spec-grid">
          <div><span>Danh mục</span><strong>${translate(product.category)}</strong></div>
          <div class="stock-spec"><span>Kho hàng</span><strong>${content.stock}</strong></div>
          <div><span>Bảo hành</span><strong>${content.warranty}</strong></div>
          <div><span>Xuất xứ</span><strong>${content.origin}</strong></div>
          <div><span>Gửi từ</span><strong>TP Hồ Chí Minh</strong></div>
          <div><span>Đóng gói</span><strong>${content.package}</strong></div>
        </div>
      </section>
      <section class="detail-section">
        <h2>Mô tả sản phẩm</h2>
        ${content.description.map((item) => `<p>${item}</p>`).join('')}
        <ul class="feature-list">${content.specs.map((item) => `<li>${item}</li>`).join('')}</ul>
      </section>
      <section class="detail-section review-box">
        <h2>Đánh giá sản phẩm</h2>
        <div id="detailReviewSummary" class="review-overview"></div>
        <div id="productReviewList" class="review-list"></div>
      </section>
      <section id="productComments" class="detail-section product-comments">
        <h2>Bình luận & đánh giá của bạn</h2>
        <form id="productReviewForm" class="review-form" data-product-id="${product.id}">
          <label>Họ tên<input name="name" type="text" placeholder="Tên hiển thị khi đánh giá" required></label>
          <label>Số sao
            <select name="rating" required>
              <option value="5">5 sao - Rất hài lòng</option>
              <option value="4">4 sao - Hài lòng</option>
              <option value="3">3 sao - Tạm ổn</option>
              <option value="2">2 sao - Cần cải thiện</option>
              <option value="1">1 sao - Chưa hài lòng</option>
            </select>
          </label>
          <label>Nội dung<textarea name="content" rows="4" placeholder="Chia sẻ cảm nhận sau khi mua sản phẩm..." required></textarea></label>
          <button class="button" type="submit">Gửi đánh giá</button>
          <p id="productReviewMessage" class="form-message" aria-live="polite"></p>
        </form>
      </section>
    `;
  }

  const images = productGalleryImages(product);
  mainImage.src = images[0];
  mainImage.alt = translate(product.name);
  thumbs.innerHTML = images.map((src, index) => `
    <button class="gallery-thumb ${index === 0 ? 'is-active' : ''}" type="button" data-gallery-index="${index}">
      <img src="${src}" alt="${translate(product.name)} ${index + 1}">
    </button>
  `).join('');

  document.querySelectorAll('[data-detail-add]').forEach((button) => {
    button.dataset.addCart = product.id;
    button.textContent = translate('Thêm vào giỏ hàng');
  });
  document.querySelectorAll('[data-detail-buy]').forEach((button) => {
    button.dataset.buyNow = product.id;
    button.textContent = translate('Mua ngay');
  });
  document.querySelectorAll('[data-favorite-toggle]').forEach((button) => {
    button.dataset.favoriteToggle = product.id;
  });
  renderProductReviews(product);
  setupProductReviewForm(product);
  renderRelatedProducts(product);
  updateFavoriteButtons();
  focusReviewFromUrl();
}

function renderProductReviews(product) {
  const summary = document.getElementById('detailReviewSummary');
  const target = document.getElementById('productReviewList');
  if (!summary || !target) return;
  const reviews = getProductReviews(product);
  const average = reviews.reduce((sum, review) => sum + Number(review.rating || 5), 0) / reviews.length;
  summary.innerHTML = `
    <div class="rating-row">
      <strong>${average.toFixed(1)}/5</strong>
      <span>${ratingStars(Math.round(average))}</span>
      <em>${reviews.length} đánh giá</em>
    </div>
    <p>Người mua đánh giá sản phẩm rõ thông tin, phù hợp nhu cầu học tập, làm việc và setup góc máy.</p>
  `;
  target.innerHTML = reviews.map((review) => `
    <article class="review-item">
      <div class="review-item__head">
        <strong>${escapeHTML(review.name)}</strong>
        <span>${ratingStars(Number(review.rating || 5))}</span>
      </div>
      <p>${escapeHTML(review.content)}</p>
      <small>${review.verified ? 'Đã mua hàng' : 'Đánh giá của bạn'} • ${new Date(review.createdAt).toLocaleDateString('vi-VN')}</small>
    </article>
  `).join('');
}

function setupProductReviewForm(product) {
  const form = document.getElementById('productReviewForm');
  if (!form) return;
  const user = getUser();
  const account = getAccount();
  const nameInput = form.elements.name;
  if (nameInput && !nameInput.value) nameInput.value = getDisplayName(account, user);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = document.getElementById('productReviewMessage');
    if (!form.checkValidity()) {
      if (message) {
        message.textContent = 'Vui lòng nhập đầy đủ tên, số sao và nội dung đánh giá.';
        message.className = 'form-message is-error';
      }
      form.reportValidity();
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    saveProductReview(product.id, {
      name: data.name,
      rating: Number(data.rating),
      content: data.content,
      createdAt: new Date().toISOString(),
      verified: true
    });
    renderProductReviews(product);
    form.elements.content.value = '';
    if (message) {
      message.textContent = 'Đã gửi đánh giá. Bình luận của bạn đã được thêm vào sản phẩm.';
      message.className = 'form-message is-success';
    }
    showToast('Đã thêm đánh giá sản phẩm');
  });
}

function focusReviewFromUrl() {
  const params = new URLSearchParams(window.location.search);
  if (!params.has('review') && window.location.hash !== '#productComments') return;
  setTimeout(() => {
    document.getElementById('productComments')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.querySelector('#productReviewForm textarea')?.focus();
  }, 250);
}

function renderRelatedProducts(product) {
  const target = document.getElementById('relatedProducts');
  if (!target) return;
  const related = products
    .filter((item) => item.id !== product.id && (item.category === product.category || item.collection === product.collection))
    .slice(0, 4);
  const fallback = products.filter((item) => item.id !== product.id).slice(0, 4);
  const list = related.length ? related : fallback;
  target.innerHTML = list.map((item) => `
    <a class="related-card" href="product-detail.html?id=${item.id}">
      <img src="${productImage(item)}" alt="${translate(item.name)}">
      <span>${translate(item.category)}</span>
      <strong>${translate(item.name)}</strong>
      <em>${formatPrice(item.price)}</em>
    </a>
  `).join('');
}

function setGalleryImage(index) {
  const mainImage = document.getElementById('detailMainImage');
  const thumbs = [...document.querySelectorAll('.gallery-thumb')];
  if (!mainImage || !thumbs.length) return;
  const safeIndex = (index + thumbs.length) % thumbs.length;
  const selected = thumbs[safeIndex];
  mainImage.src = selected.querySelector('img').src;
  thumbs.forEach((thumb) => thumb.classList.remove('is-active'));
  selected.classList.add('is-active');
  selected.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
}

function moveGallery(direction) {
  const thumbs = [...document.querySelectorAll('.gallery-thumb')];
  if (!thumbs.length) return;
  const current = thumbs.findIndex((thumb) => thumb.classList.contains('is-active'));
  setGalleryImage((current < 0 ? 0 : current) + direction);
}

function setupBlogPage() {
  const postTarget = document.getElementById('blogPost');
  const listTarget = document.getElementById('blogList');
  if (!postTarget || !listTarget) return;

  const slug = new URLSearchParams(window.location.search).get('post');
  const selected = slug ? blogPosts.find((post) => post.slug === slug) : null;

  if (selected) {
    postTarget.hidden = false;
    postTarget.innerHTML = `
      <span class="badge">${selected.category}</span>
      <h1>${selected.title}</h1>
      <p class="blog-lead">${selected.excerpt}</p>
      ${selected.content.map((paragraph) => `<p>${paragraph}</p>`).join('')}
      <div class="blog-tip-box">
        <h2>Gợi ý nhanh</h2>
        <ul>${selected.tips.map((tip) => `<li>${tip}</li>`).join('')}</ul>
      </div>
      <a class="button" href="products.html?q=${encodeURIComponent(selected.productQuery)}">Xem sản phẩm liên quan</a>
    `;
  } else {
    postTarget.hidden = true;
    postTarget.innerHTML = '';
  }

  listTarget.innerHTML = blogPosts.slice(0, 4).map((post) => `
    <a href="blog.html?post=${post.slug}" class="${selected && post.slug === selected.slug ? 'is-active' : ''}">
      <article>
        <span>${post.category}</span>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <em>Đọc bài viết</em>
      </article>
    </a>
  `).join('');
}

function getCartRows() {
  return getCart()
    .map((item) => ({ ...item, product: products.find((product) => product.id === item.id) }))
    .filter((item) => item.product);
}

function updateCartItem(id, quantity) {
  const cart = getCart().map((item) => item.id === Number(id) ? { ...item, quantity: item.quantity + quantity } : item)
    .filter((item) => item.quantity > 0);
  saveCart(cart);
  renderCartPage();
}

function removeCartItem(id) {
  saveCart(getCart().filter((item) => item.id !== Number(id)));
  renderCartPage();
}

function renderCartPage() {
  const target = document.getElementById('cartItems');
  if (!target) return;
  const rows = getCartRows();

  if (!rows.length) {
    target.innerHTML = `<p>${translate('Giỏ hàng đang trống.')}</p><a class="button" href="products.html">${translate('Tiếp tục mua hàng')}</a>`;
  } else {
    target.innerHTML = rows.map((item) => `
      <article class="cart-line cart-line-full">
        <div>
          <strong>${translate(item.product.name)}</strong>
          <span>${formatPrice(item.product.price)}</span>
        </div>
        <div class="qty-controls">
          <button type="button" data-cart-dec="${item.id}">-</button>
          <span>${item.quantity}</span>
          <button type="button" data-cart-inc="${item.id}">+</button>
          <button type="button" data-cart-remove="${item.id}">${translate('Xóa')}</button>
        </div>
      </article>
    `).join('') + `<button class="button button-light" type="button" data-clear-cart>${translate('Xóa toàn bộ giỏ hàng')}</button>`;
  }

  const subtotal = rows.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > 0 && subtotal < 1000000 ? 30000 : 0;
  const total = subtotal + shipping;
  const subtotalEl = document.getElementById('cartSubtotal');
  const shippingEl = document.getElementById('shippingFee');
  const totalEl = document.getElementById('cartTotal');
  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (shippingEl) shippingEl.textContent = formatPrice(shipping);
  if (totalEl) totalEl.textContent = formatPrice(total);
}

function renderFavoritesPage() {
  const target = document.getElementById('favoriteItems');
  if (!target) return;
  const favorites = getFavorites()
    .map((id) => products.find((product) => product.id === Number(id)))
    .filter(Boolean);

  if (!favorites.length) {
    target.innerHTML = '<p>Chưa có sản phẩm yêu thích.</p><a class="button button-light" href="products.html">Khám phá sản phẩm</a>';
    return;
  }

  target.innerHTML = favorites.map((product) => `
    <article class="favorite-line">
      <img src="${productImage(product)}" alt="${translate(product.name)}">
      <div>
        <strong>${translate(product.name)}</strong>
        <span>${translate(product.category)} • ${formatPrice(product.price)}</span>
      </div>
      <div class="button-row">
        <button class="button" type="button" data-add-cart="${product.id}">Thêm giỏ</button>
        <button class="button button-light" type="button" data-remove-favorite="${product.id}">Xóa</button>
      </div>
    </article>
  `).join('');
}

function setupPaymentNotes() {
  const note = document.getElementById('paymentNote');
  const form = document.getElementById('checkoutForm');
  if (!note || !form) return;
  const messages = {
    COD: 'Bạn thanh toán bằng tiền mặt khi nhận hàng.',
    'Chuyển khoản': 'Chuyển khoản demo: QDUNG GEAR - STK 0815047218 - Nội dung: QDUNG + số điện thoại.',
    'Ví điện tử': 'Thanh toán demo qua ví điện tử/QR, nhân viên sẽ liên hệ xác nhận.'
  };
  form.addEventListener('change', () => {
    const method = new FormData(form).get('payment');
    note.textContent = translate(messages[method] || messages.COD);
  });
}

function setupCheckout() {
  const form = document.getElementById('checkoutForm');
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = document.getElementById('checkoutMessage');
    const rows = getCartRows();
    if (!rows.length) {
      message.textContent = getLanguage() === 'vi' ? 'Giỏ hàng đang trống, vui lòng thêm sản phẩm trước khi đặt hàng.' : 'Your cart is empty. Please add a product before placing an order.';
      message.className = 'form-message is-error';
      return;
    }
    if (!form.checkValidity()) {
      message.textContent = getLanguage() === 'vi' ? 'Vui lòng nhập đúng thông tin nhận hàng.' : 'Please enter valid delivery information.';
      message.className = 'form-message is-error';
      form.reportValidity();
      return;
    }
    const customer = Object.fromEntries(new FormData(form).entries());
    const subtotal = rows.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const shipping = subtotal > 0 && subtotal < 1000000 ? 30000 : 0;
    const total = subtotal + shipping;
    const createdAt = new Date();
    const deliveryDate = new Date(createdAt);
    deliveryDate.setDate(createdAt.getDate() + 3);
    const order = {
      code: 'QD' + String(createdAt.getTime()).slice(-8),
      customer,
      items: rows.map((item) => ({
        id: item.id,
        name: item.product.name,
        category: item.product.category,
        price: item.product.price,
        quantity: item.quantity
      })),
      totals: { subtotal, shipping, total },
      status: 'Đang chuẩn bị hàng',
      createdAt: createdAt.toISOString(),
      deliveryDate: deliveryDate.toISOString()
    };
    writeStore('qdung-last-order', JSON.stringify(order));
    if (!getUser()) {
      writeStore(USER_KEY, JSON.stringify({ name: customer.name, email: STUDENT_EMAIL, phone: customer.phone }));
      updateAuthStatus();
    }
    saveCart([]);
    renderCartPage();
    message.innerHTML = getLanguage() === 'vi'
      ? `Đặt hàng thành công. Dự kiến giao ngày ${deliveryDate.toLocaleDateString('vi-VN')}. <a href="account.html">Xem đơn hàng trong tài khoản</a>.`
      : `Order placed successfully. Estimated delivery: ${deliveryDate.toLocaleDateString('en-US')}. <a href="account.html">View order in account</a>.`;
    message.className = 'form-message is-success';
  });
}

function setupLogin() {
  const form = document.getElementById('loginForm');
  if (!form) return;
  const message = document.getElementById('loginMessage');
  const existing = getUser();
  if (existing && message) {
    message.textContent = (getLanguage() === 'vi' ? 'Bạn đang đăng nhập với email: ' : 'Signed in with email: ') + existing.email;
    message.className = 'form-message is-success';
  }
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      message.textContent = getLanguage() === 'vi' ? 'Vui lòng nhập tài khoản và mật khẩu tối thiểu 6 ký tự.' : 'Please enter your account and a password with at least 6 characters.';
      message.className = 'form-message is-error';
      form.reportValidity();
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    const identifier = data.identifier || data.email;
    const account = findAccountByIdentifier(identifier);
    if (!account || account.password !== data.password) {
      message.textContent = getLanguage() === 'vi' ? 'Tài khoản hoặc mật khẩu chưa đúng.' : 'Account or password is incorrect.';
      message.className = 'form-message is-error';
      return;
    }
    const name = getDisplayName(account, { name: identifier });
    writeStore(USER_KEY, JSON.stringify({ name, email: account.email || identifier, phone: account.phone || '', provider: account.provider || '' }));
    updateAuthStatus();
    message.textContent = getLanguage() === 'vi' ? 'Đăng nhập thành công. Đang chuyển về trang chủ...' : 'Signed in successfully. Returning to home...';
    message.className = 'form-message is-success';
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 700);
  });
}

function setupSignup() {
  const form = document.getElementById('signupForm');
  if (!form) return;
  const message = document.getElementById('signupMessage');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    if (!form.checkValidity()) {
      message.textContent = 'Vui lòng nhập đủ thông tin đăng ký.';
      message.className = 'form-message is-error';
      form.reportValidity();
      return;
    }
    if (data.password !== data.confirm) {
      message.textContent = 'Mật khẩu nhập lại chưa khớp.';
      message.className = 'form-message is-error';
      return;
    }
    const duplicate = findSignupDuplicate(data.phone, data.email);
    if (duplicate) {
      const phoneTaken = normalizeAccountValue(duplicate.phone) === normalizeAccountValue(data.phone);
      message.textContent = phoneTaken
        ? 'Số điện thoại này đã được đăng ký. Vui lòng đăng nhập hoặc dùng số khác.'
        : 'Email này đã được đăng ký. Vui lòng đăng nhập hoặc dùng email khác.';
      message.className = 'form-message is-error';
      return;
    }
    const account = {
      name: data.name,
      phone: data.phone,
      email: data.email || '',
      password: data.password,
      createdAt: new Date().toISOString()
    };
    saveAccount(account);
    removeStore(USER_KEY);
    updateAuthStatus();
    message.textContent = 'Đăng ký thành công. Đang chuyển về trang đăng nhập...';
    message.className = 'form-message is-success';
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 700);
  });
}

function setupSocialAuth() {
  document.querySelectorAll('[data-social-auth]').forEach((button) => {
    button.addEventListener('click', () => {
      const provider = button.dataset.socialAuth;
      const mode = button.dataset.socialMode || 'login';
      const providerName = provider === 'facebook' ? 'Facebook' : 'Google';
      const currentUser = getUser();
      const defaultName = currentUser?.provider === providerName ? getDisplayName(null, currentUser) : '';
      const enteredName = window.prompt(`Nhập tên hiển thị ${providerName} của bạn:`, defaultName);
      if (enteredName === null) return;
      const cleanName = enteredName.trim() || DEFAULT_CUSTOMER_NAME;
      const defaultEmail = currentUser?.provider === providerName ? currentUser.email || '' : '';
      const enteredEmail = window.prompt(`Nhập email ${providerName} của bạn:`, defaultEmail);
      if (enteredEmail === null) return;
      const cleanEmail = enteredEmail.trim() || `${provider}-${Date.now()}@qdunggear.demo`;
      const account = {
        name: cleanName,
        phone: '',
        email: cleanEmail,
        password: 'social-demo',
        provider: providerName,
        createdAt: new Date().toISOString()
      };
      const targetMessage = document.getElementById(mode === 'signup' ? 'signupMessage' : 'loginMessage');

      saveAccount(account);
      if (mode === 'signup') {
        removeStore(USER_KEY);
        updateAuthStatus();
        if (targetMessage) {
          targetMessage.textContent = `Đăng ký bằng ${providerName} thành công. Đang chuyển về trang đăng nhập...`;
          targetMessage.className = 'form-message is-success';
        }
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 700);
        return;
      }

      writeStore(USER_KEY, JSON.stringify({ name: account.name, email: account.email, phone: account.phone, provider: providerName }));
      updateAuthStatus();
      if (targetMessage) {
        targetMessage.textContent = `Đăng nhập bằng ${providerName} thành công. Đang chuyển về trang chủ...`;
        targetMessage.className = 'form-message is-success';
      }
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 700);
    });
  });
}

function setupAccountPage() {
  const panel = document.getElementById('accountProfile');
  if (!panel) return;

  const user = getUser();
  const account = getAccount();
  const lastOrder = JSON.parse(readStore('qdung-last-order') || 'null');

  if (!user) {
    panel.innerHTML = `
      <div class="account-empty">
        <h1>Tài khoản của tôi</h1>
        <p>Bạn chưa đăng nhập. Hãy đăng nhập hoặc đăng ký để lưu thông tin mua hàng.</p>
        <div class="button-row">
          <a class="button" href="login.html">Đăng nhập</a>
          <a class="button button-light" href="signup.html">Đăng ký</a>
        </div>
      </div>
    `;
    return;
  }

  const orderItems = (lastOrder?.items || []).map((item) => ({
    id: item.id || item.product?.id || 0,
    name: item.name || item.product?.name || 'Sản phẩm',
    category: item.category || item.product?.category || '',
    price: Number(item.price || item.product?.price || 0),
    quantity: Number(item.quantity || 1)
  }));
  const orderSubtotal = lastOrder?.totals?.subtotal ?? orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const orderShipping = lastOrder?.totals?.shipping ?? (orderSubtotal > 0 && orderSubtotal < 1000000 ? 30000 : 0);
  const orderTotal = lastOrder?.totals?.total ?? orderSubtotal + orderShipping;
  const orderCreated = lastOrder ? new Date(lastOrder.createdAt).toLocaleString('vi-VN') : '';
  const orderDelivery = lastOrder?.deliveryDate ? new Date(lastOrder.deliveryDate).toLocaleDateString('vi-VN', { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' }) : 'Chưa cập nhật';
  const contactParams = new URLSearchParams({
    order: lastOrder?.code || '',
    name: getDisplayName(account, user),
    email: getDisplayEmail(account, user),
    message: lastOrder
      ? `Tôi cần hỗ trợ đơn hàng ${lastOrder.code}. Ngày giao dự kiến: ${orderDelivery}.`
      : 'Tôi cần tư vấn thêm về sản phẩm tại QDung Gear.'
  });
  const contactUrl = `contact.html?${contactParams.toString()}`;

  panel.innerHTML = `
    <section class="account-hero-card">
      <div>
        <p class="eyebrow">Tài khoản QDung Gear</p>
        <h1>Xin chào ${getDisplayName(account, user)}</h1>
        <p>Quản lý thông tin đăng nhập demo, giỏ hàng và đơn hàng gần nhất.</p>
      </div>
      <button class="button button-light" type="button" data-logout>Đăng xuất</button>
    </section>
    <section class="account-grid">
      <article>
        <h2>Thông tin cá nhân</h2>
        <dl>
          <div><dt>Họ tên</dt><dd>${getDisplayName(account, user)}</dd></div>
          <div><dt>Email</dt><dd>${getDisplayEmail(account, user)}</dd></div>
          <div><dt>Số điện thoại</dt><dd>${account?.phone || user.phone || 'Chưa cập nhật'}</dd></div>
        </dl>
      </article>
      <article class="account-order-card">
        <h2>Đơn hàng gần nhất</h2>
        ${lastOrder ? `
          <div class="order-status-row">
            <span>${lastOrder.status || 'Đang xử lý'}</span>
            <strong>${lastOrder.code || 'QD-DEMO'}</strong>
          </div>
          <dl class="order-meta-list">
            <div><dt>Ngày đặt</dt><dd>${orderCreated}</dd></div>
            <div><dt>Ngày giao dự kiến</dt><dd>${orderDelivery}</dd></div>
            <div><dt>Thanh toán</dt><dd>${lastOrder.customer?.payment || 'COD'}</dd></div>
            <div><dt>Địa chỉ</dt><dd>${lastOrder.customer?.address || 'Chưa cập nhật'}</dd></div>
          </dl>
          <div class="order-items">
            ${orderItems.map((item) => `
              <div class="order-item-row">
                <span>${item.quantity}x</span>
                <strong>${item.name}<small>${item.category}</small></strong>
                <em>${formatPrice(item.price * item.quantity)}</em>
                <div class="order-item-actions">
                  <a href="product-detail.html?id=${item.id}">Xem sản phẩm</a>
                  <a href="product-detail.html?id=${item.id}&review=1&order=${encodeURIComponent(lastOrder.code || '')}#productComments">Đánh giá</a>
                </div>
              </div>
            `).join('')}
          </div>
          <dl class="order-total-list">
            <div><dt>Tạm tính</dt><dd>${formatPrice(orderSubtotal)}</dd></div>
            <div><dt>Phí giao hàng</dt><dd>${formatPrice(orderShipping)}</dd></div>
            <div><dt>Tổng cộng</dt><dd>${formatPrice(orderTotal)}</dd></div>
          </dl>
          <div class="order-action-row">
            <a class="button button-light" href="${contactUrl}">Liên hệ người bán</a>
            <a class="button" href="product-detail.html?id=${orderItems[0]?.id || 1}&review=1&order=${encodeURIComponent(lastOrder.code || '')}#productComments">Đánh giá sản phẩm</a>
          </div>
        ` : '<p>Chưa có đơn hàng nào. Bạn có thể mua nhanh từ trang sản phẩm.</p>'}
        <a class="button button-light" href="products.html">Tiếp tục mua hàng</a>
      </article>
    </section>
  `;
}

function togglePassword(button) {
  const field = button.closest('.password-field')?.querySelector('input');
  if (!field) return;
  field.type = field.type === 'password' ? 'text' : 'password';
  button.textContent = field.type === 'password' ? 'Xem' : 'Ẩn';
}

function logout() {
  removeStore(USER_KEY);
  updateAuthStatus();
  setupAccountPage();
  const message = document.getElementById('loginMessage');
  if (message) {
    message.textContent = getLanguage() === 'vi' ? 'Đã đăng xuất.' : 'Signed out.';
    message.className = 'form-message is-success';
  }
}

function setupMenu() {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (!button || !nav) return;
  button.addEventListener('click', () => nav.classList.toggle('is-open'));
}

function setupNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = new FormData(form).get('email');
    writeStore('qdung-newsletter-email', email);
    const message = document.getElementById('newsletterMessage');
    if (message) {
      message.textContent = getLanguage() === 'vi' ? 'Đã đăng ký nhận bản tin thành công.' : 'Newsletter subscription saved.';
      message.className = 'form-message is-success';
    }
    form.reset();
  });
}

function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const params = new URLSearchParams(window.location.search);
  const user = getUser();
  const account = getAccount();
  const nameField = form.elements.name;
  const emailField = form.elements.email;
  const messageField = form.elements.message;
  if (nameField) nameField.value = params.get('name') || getDisplayName(account, user);
  if (emailField) emailField.value = params.get('email') || getDisplayEmail(account, user);
  if (messageField) {
    const orderCode = params.get('order');
    messageField.value = params.get('message') || (orderCode ? `Tôi cần liên hệ người bán về đơn hàng ${orderCode}.` : '');
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = document.getElementById('contactMessage');
    if (!form.checkValidity()) {
      if (message) {
        message.textContent = getLanguage() === 'vi' ? 'Vui lòng nhập đầy đủ thông tin liên hệ.' : 'Please complete your contact information.';
        message.className = 'form-message is-error';
      }
      form.reportValidity();
      return;
    }

    const data = {
      ...Object.fromEntries(new FormData(form).entries()),
      createdAt: new Date().toISOString()
    };
    writeStore('qdung-contact-message', JSON.stringify(data));
    if (message) {
      message.textContent = getLanguage() === 'vi'
        ? 'Đã gửi liên hệ thành công. QDung Gear sẽ phản hồi qua email hoặc số điện thoại.'
        : 'Contact request saved. QDung Gear will respond by email or phone.';
      message.className = 'form-message is-success';
    }
    form.reset();
  });
}

function setupGlobalClicks() {
  document.addEventListener('click', (event) => {
    const addButton = event.target.closest('[data-add-cart]');
    if (addButton) {
      addToCart(addButton.dataset.addCart);
      return;
    }

    const buyButton = event.target.closest('[data-buy-now]');
    if (buyButton) {
      buyNow(buyButton.dataset.buyNow);
      return;
    }

    const favoriteButton = event.target.closest('[data-favorite-toggle]');
    if (favoriteButton) {
      toggleFavorite(favoriteButton.dataset.favoriteToggle);
      return;
    }

    const removeFavoriteButton = event.target.closest('[data-remove-favorite]');
    if (removeFavoriteButton) {
      saveFavorites(getFavorites().filter((id) => id !== Number(removeFavoriteButton.dataset.removeFavorite)));
      return;
    }

    const shareButton = event.target.closest('[data-share-platform]');
    if (shareButton) {
      shareProduct(shareButton.dataset.sharePlatform);
      return;
    }

    const productCard = event.target.closest('[data-product-link]');
    if (productCard) {
      window.location.href = productCard.dataset.productLink;
      return;
    }

    const inc = event.target.closest('[data-cart-inc]');
    if (inc) updateCartItem(inc.dataset.cartInc, 1);

    const dec = event.target.closest('[data-cart-dec]');
    if (dec) updateCartItem(dec.dataset.cartDec, -1);

    const remove = event.target.closest('[data-cart-remove]');
    if (remove) removeCartItem(remove.dataset.cartRemove);

    if (event.target.closest('[data-clear-cart]')) {
      saveCart([]);
      renderCartPage();
    }

    if (event.target.closest('[data-logout]')) logout();

    const passwordToggle = event.target.closest('[data-toggle-password]');
    if (passwordToggle) togglePassword(passwordToggle);

    const galleryThumb = event.target.closest('[data-gallery-index]');
    if (galleryThumb) setGalleryImage(Number(galleryThumb.dataset.galleryIndex));

    if (event.target.closest('[data-gallery-prev]')) moveGallery(-1);
    if (event.target.closest('[data-gallery-next]')) moveGallery(1);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;
    const productCard = event.target.closest('[data-product-link]');
    if (productCard) window.location.href = productCard.dataset.productLink;
  });
}

resetOldAuthAccountsOnce();
hydrateCartFromUrl();
renderProducts('featuredProducts', products.slice(0, 4));
renderProducts('bestSellerProducts', products.filter((product) => product.collection === 'best'));
renderProducts('newCollectionProducts', products.filter((product) => product.collection === 'new'));
setupProductsPage();
setupProductDetail();
setupBlogPage();
setupLanguageSwitcher();
setupMenu();
setupNewsletter();
setupContactForm();
setupGlobalClicks();
setupPaymentNotes();
setupCheckout();
setupLogin();
setupSignup();
setupSocialAuth();
setupAccountPage();
updateAuthStatus();
updateCartCount();
renderCartPage();
renderFavoritesPage();
applyLanguage();
