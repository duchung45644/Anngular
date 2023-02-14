import { Component, OnInit, PipeTransform, Pipe, Input } from '@angular/core';

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent {
    @Input() dataTableConfig: any;
    @Input() dataContent: any;

    tableHtmlString = '';

    constructor() {}

    ngOnChanges() {
        this.tableHtmlString = this.renderTableBody();
    }

    // dataTableConfig = [
    //     { header: 'Số phiếu', field: 'Votes', width: '50px', sortable: true },
    //     { header: 'Người mượn', field: 'FullName', width: '120px', sortable: true },
    //     { header: 'Hồ sơ mượn', field: 'Title', width: '120px', sortable: true },
    //     {
    //         header: 'Ngày hẹn trả',
    //         field: 'AppointmentDate',
    //         width: '120px',
    //         sortable: true,
    //         type: 'date',
    //         typeParameter: { format: 'dd/MM/yyyy' },
    //     },
    //     {
    //         header: 'Trạng thái',
    //         field: 'Status',
    //         type: 'tag',
    //         width: '120px',
    //         tag: {
    //             0: { text: 'Mới đăng ký', badge: 'primary' },
    //             1: { text: 'Gửi yêu cầu đăng ký', badge: 'primary' },
    //             2: { text: 'Chờ phê duyệt' },
    //             3: { text: 'Đã trả hết', badge: 'primary' },
    //             4: { text: 'Đã trả một phần', badge: 'primary' },
    //             5: { text: 'Đã hủy', badge: 'primary' },
    //             6: { text: 'Đang mượn', badge: 'danger' },
    //             7: { text: 'Yêu cầu trả hồ sơ', badge: 'secondary' },
    //             8: { text: 'Yêu cầu gia hạn', badge: 'primary' },
    //         },
    //     },
    //     {
    //         header: 'Chức Năng',
    //         field: 'option',
    //         width: '50px',
    //         pinned: 'right',
    //         right: '0px',
    //         type: 'button',
    //         buttons: [
    //             {
    //                 icon: 'icon-user-lock',
    //                 text: 'Xác nhận phiếu mượn',
    //                 type: 'button',
    //                 // click: (record) => this.ViewDetails(record),
    //             },
    //             {
    //                 icon: 'icon-file-stats',
    //                 text: 'Xác nhận phiếu mượn 2',
    //                 type: 'button',
    //                 // click: (record) => this.ViewDetails(record),
    //             },
    //             {
    //                 icon: 'icon-file-stats2',
    //                 text: 'Xác nhận phiếu mượn 3',
    //                 type: 'button',
    //                 // click: (record) => this.ViewDetails(record),
    //             },
    //             {
    //                 icon: 'icon-user-lock',
    //                 text: 'Xác nhận phiếu mượn',
    //                 type: 'button',
    //                 // click: (record) => this.ViewDetails(record),
    //             },
    //         ],
    //     },
    // ];

    // dataContent = [
    //     {
    //         CreatedUserId: 3353,
    //         CreatedDate: '2023-01-12T14:41:42.237',
    //         Status: 5,
    //         SendingPlace: 'VN',
    //         Votes: 'Tung113',
    //         FullName: 'Tung nguyen',
    //         RecordId: 52,
    //         Title: 'Tập lưu Quyết định của Cục Thống kê tỉnh Hưng yên năm 2001',
    //         AppointmentDate: '202-01-12T14:46:52.803',
    //         ExtensionRequest: 0,
    //     },
    //     {
    //         Status: 6,
    //         Votes: '3',
    //         FullName: 'Administrator System',
    //         RecordId: 59,
    //         Title: 'Tập chỉ tiêu, Báo cáo một số vấn đề về dân sô, văn xã của Cục Thống kê và các cơ quan, đơn vị liên quan năm 2001',
    //         AppointmentDate: '2023-01-09T15:03:23.357',
    //         ExtensionRequest: 0,
    //     },
    //     {
    //         Status: 7,
    //         Votes: '12',
    //         FullName: 'Administrator System',
    //         RecordId: 26,
    //         Title: 'Tập Báo cáo về công tác tiền tệ, tài khoản quốc gia của Cục Thống kê năm 1999',
    //         AppointmentDate: '2023-01-09T15:02:39.61',
    //         ExtensionRequest: 0,
    //     },
    // ];

    renderTableBody() {
        let htmlString = '';

        this.dataContent.forEach((row: any) => {
            htmlString += '<tr>';

            this.dataTableConfig.forEach((configItem: any) => {
                let tdValue = row[configItem.field];

                if (configItem.type == 'date') {
                    // console.log(tdValue.toLocaleDateString());
                    // tdValue = 'ngayf';
                }

                if (configItem.tag) {
                    htmlString += `<td ><span class="badge badge-${configItem.tag[tdValue].badge}"> ${configItem.tag[tdValue].text} </span> </td>`;
                } else if (configItem.field == 'option') {
                    htmlString += `<td  class="text-center"><div class="list-icons"><div class="dropdown"><a href="#" class="list-icons-item" data-toggle="dropdown"><i class="icon-menu7"></i></a><div class="dropdown-menu dropdown-menu-right">`;

                    configItem.buttons.forEach((button: any) => {
                        // htmlString += `<a href="#" class="dropdown-item"><i class="${button.icon}"></i> ${button.text}</a>`;
                        htmlString += `<button class="dropdown-item" onclick="alert('cak')"><i class="${button.icon}" ></i> ${button.text}</button>`;
                    });

                    htmlString += `</div></div></div></td>`;
                } else {
                    htmlString += `<td > ${tdValue} </td>`;
                }
            });

            htmlString += '</tr>';
        });
        console.log(htmlString);
        return htmlString;
    }
}
