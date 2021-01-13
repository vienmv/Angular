##Link download và cài đặt các công cụ cần thiết:

- Visual Studio Code: https://code.visualstudio.com

- Augury: https://augury.rangle.io

- Node.js: https://nodejs.org/en

##Extension
Prettier
Angular language service 
Angular snippets
Angular Essentials

 

#Lệnh cài đặt Angular CLI:

npm install -g @angular/cli
 

#Chú ý
- Trên Windows có cơ chế bảo mật không cho phép chạy script trên terminal thì gõ vào lệnh sau: 

Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
#- Trong quá trình cài đặt phần mềm dùng npm nếu bị lỗi thì cứ chạy lại 1 vài lần (có thể do đang cài bị đứt kết nối mạng ...) hoặc dùng lệnh sau để xóa cache trước khi cài: 

npm cache clean --force
---------------------------------------------
## Tạo Project bằng Angular CLI

Lệnh tạo project bằng Angular CLI:

ng new my-project
Lệnh chạy project:

cd my-project
ng serve -o
tham số -o để tự động bật trình duyệt, mặc định website sẽ chạy ở địa chỉ http://localhost:4200.

Trong trường hợp bị trùng cổng, có thể đổi từ cổng 4200 sang cổng khác bằng cách thêm tham số --port

ng serve --port 4300
 

Tham khảo thêm các lệnh của Angular CLI: https://angular.io/cli và https://cli.angular.io/

 

Cấu trúc thư mục project (các file chính) tạo bởi Angular CLI

- angular.json: Chứa các cấu hình cho Angular CLI.

- tsconfig.json: Chứa các cấu hình cho compiler.

- tslint.json: Chứa các quy ước khi code trong dự án.

- package.json: Khai báo các thư viện dùng trong dự án.

- src/styles.css: Global CSS.

- src/polyfills.ts: Chứa code giúp website chạy tốt trên các trình duyệt cũ.

- src/browserlist: Danh sách các trình duyệt và phiên bản mà website hỗ trợ.

- src/main.ts: File khởi động app.

- src/app/app.module.ts: Root Module của app.

 -------------------------------------
 ## Component trong Angular
 Lệnh tạo Component bằng Angular CLI:

ng generate component my-component
hoặc viết tắt:

ng g c my-component
để không tạo ra file test thì thêm option --skipTests

ng g c my-component --skipTests
Ghi chú
- Trong 1 ứng dụng Angular mặc định chỉ có 1 Root Component là App Component được gọi ở file src/index.html, các Component khác là con của App Component.

- Root Component được khai báo trong Root Module (app.module.ts) và chỉ có Root Component mới gọi được ở file src/index.html (có thể có nhiều Root Component nếu khai báo thêm ở phần bootstrap).

 Root Component

- Root Module được khai báo và khởi tạo (bootstrap) ở file src/main.ts. Trong ứng dụng Angular sẽ cần 1 module để bootstrap (mặc định là AppModule) và có thể có nhiều module khác để cấu trúc code dễ bảo trì hơn (sẽ học chi tiết hơn ở các phần sau).



- Việc chia Component như nào thì tuỳ thuộc vào độ phức tạp và tính độc lập, cũng như tính tái sử dụng của component, chứ không có 1 công thức cố định.

- Thỉnh thoảng khi tạo Component mà vẫn đang chạy server thì có thể bị lỗi do trình biên dịch chưa nhận ra được file mới, hãy khởi động lại server để kiểm tra.
