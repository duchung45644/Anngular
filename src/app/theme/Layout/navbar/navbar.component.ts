import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    menuForm = [
        {
            name: 'Chức năng',
            rlink: '',
            icon: 'icon-paragraph-justify3 mr-2',
            subMenu: {},
        },
        {
            name: 'Danh mục',
            icon: 'icon-stack2 mr-2',
            subMenu: {
                subMenuTitle: '',
                list: [
                    {
                        name: 'Thông tin bản án',
                    },
                    {
                        name: 'Đăng ký sao y bản án',
                        icon: 'icon-stack2',
                        rlink: '',
                        inSubMenu: [
                            { name: 'testmanage', rlink: '/manage/testmanage' },
                            { name: 'testcategory', rlink: 'category/testcategory' },
                            { name: 'testdashboard', rlink: 'dashboard/testdashboard' },
                            { name: 'Đăng ký sao y bản án', rlink: '' },
                        ],
                    },
                ],
            },
        },
        {
            name: 'Báo cáo',
            // rlink: '',
            icon: 'icon-file-upload2 mr-2',
            subMenu: {
                subMenuTitle: 'Báo cáo',
                list: [
                    {
                        name: 'Báo cáo dữ liệu',
                        icon: 'icon-file-upload2',
                        rlink: '',
                        inSubMenu: [
                            {
                                name: 'Báo cáo dữ liệu',
                                rlink: '',
                                inSubMenu: [
                                    { name: 'Báo cáo dữ liệu', rlink: '' },
                                    { name: 'Báo cáo tài chính', rlink: '' },
                                    { name: 'Báo cáo ', rlink: '' },
                                    { name: 'Đăng ký sao y bản án', rlink: '' },
                                ],
                            },
                            {
                                name: 'Báo cáo tài chính',
                                rlink: '',
                                inSubMenu: [
                                    { name: 'Báo cáo dữ liệu', rlink: '' },
                                    { name: 'Báo cáo tài chính', rlink: '' },
                                    { name: 'Báo cáo ', rlink: '' },
                                    { name: 'Đăng ký sao y bản án', rlink: '' },
                                ],
                            },
                            {
                                name: 'Báo cáo ',
                                rlink: '',
                                inSubMenu: [
                                    { name: 'Báo cáo dữ liệu', rlink: '' },
                                    { name: 'Báo cáo tài chính', rlink: '' },
                                    { name: 'Báo cáo ', rlink: '' },
                                    { name: 'Đăng ký sao y bản án', rlink: '' },
                                ],
                            },
                            {
                                name: 'Đăng ký sao y bản án',
                                rlink: '',
                                inSubMenu: [
                                    { name: 'Báo cáo dữ liệu', rlink: '' },
                                    { name: 'Báo cáo tài chính', rlink: '' },
                                    { name: 'Báo cáo ', rlink: '' },
                                    { name: 'Đăng ký sao y bản án', rlink: '' },
                                ],
                            },
                        ],
                    },
                    {
                        name: 'Báo cáo tài chính',
                        icon: 'icon-file-upload2',
                        rlink: '',
                        inSubMenu: [
                            {
                                name: 'Báo cáo dữ liệu',
                                rlink: '',
                                inSubMenu: [
                                    { name: 'Báo cáo dữ liệu', rlink: '' },
                                    { name: 'Báo cáo tài chính', rlink: '' },
                                    { name: 'Báo cáo ', rlink: '' },
                                    { name: 'Đăng ký sao y bản án', rlink: '' },
                                ],
                            },
                            {
                                name: 'Báo cáo tài chính',
                                rlink: '',
                                inSubMenu: [
                                    { name: 'Báo cáo dữ liệu', rlink: '' },
                                    { name: 'Báo cáo tài chính', rlink: '' },
                                    { name: 'Báo cáo ', rlink: '' },
                                    { name: 'Đăng ký sao y bản án', rlink: '' },
                                ],
                            },
                            {
                                name: 'Báo cáo ',
                                rlink: '',
                                inSubMenu: [
                                    { name: 'Báo cáo dữ liệu', rlink: '' },
                                    { name: 'Báo cáo tài chính', rlink: '' },
                                    { name: 'Báo cáo ', rlink: '' },
                                    { name: 'Đăng ký sao y bản án', rlink: '' },
                                ],
                            },
                            {
                                name: 'Đăng ký sao y bản án',
                                rlink: '',
                                inSubMenu: [
                                    { name: 'Báo cáo dữ liệu', rlink: '' },
                                    { name: 'Báo cáo tài chính', rlink: '' },
                                    { name: 'Báo cáo ', rlink: '' },
                                    { name: 'Đăng ký sao y bản án', rlink: '' },
                                ],
                            },
                        ],
                    },
                    {
                        name: 'Báo cáo ',
                        icon: 'icon-file-upload2',
                        rlink: '',
                        inSubMenu: [
                            {
                                name: 'Báo cáo dữ liệu',
                                rlink: '',
                                inSubMenu: [
                                    { name: 'Báo cáo dữ liệu', rlink: '' },
                                    { name: 'Báo cáo tài chính', rlink: '' },
                                    { name: 'Báo cáo ', rlink: '' },
                                    { name: 'Đăng ký sao y bản án', rlink: '' },
                                ],
                            },
                            {
                                name: 'Báo cáo tài chính',
                                rlink: '',
                                inSubMenu: [
                                    { name: 'Báo cáo dữ liệu', rlink: '' },
                                    { name: 'Báo cáo tài chính', rlink: '' },
                                    { name: 'Báo cáo ', rlink: '' },
                                    { name: 'Đăng ký sao y bản án', rlink: '' },
                                ],
                            },
                            {
                                name: 'Báo cáo ',
                                rlink: '',
                                inSubMenu: [
                                    { name: 'Báo cáo dữ liệu', rlink: '' },
                                    { name: 'Báo cáo tài chính', rlink: '' },
                                    { name: 'Báo cáo ', rlink: '' },
                                    { name: 'Đăng ký sao y bản án', rlink: '' },
                                ],
                            },
                            {
                                name: 'Đăng ký sao y bản án',
                                rlink: '',
                                inSubMenu: [
                                    { name: 'Báo cáo dữ liệu', rlink: '' },
                                    { name: 'Báo cáo tài chính', rlink: '' },
                                    { name: 'Báo cáo ', rlink: '' },
                                    { name: 'Đăng ký sao y bản án', rlink: '' },
                                ],
                            },
                        ],
                    },
                    {
                        name: 'Đăng ký sao y bản án',
                        icon: 'icon-file-upload2',
                        rlink: '',
                        inSubMenu: [
                            {
                                name: 'Báo cáo dữ liệu',
                                rlink: '',
                                inSubMenu: [
                                    { name: 'Báo cáo dữ liệu', rlink: '' },
                                    { name: 'Báo cáo tài chính', rlink: '' },
                                    { name: 'Báo cáo ', rlink: '' },
                                    { name: 'Đăng ký sao y bản án', rlink: '' },
                                ],
                            },
                            {
                                name: 'Báo cáo tài chính',
                                rlink: '',
                                inSubMenu: [
                                    { name: 'Báo cáo dữ liệu', rlink: '' },
                                    { name: 'Báo cáo tài chính', rlink: '' },
                                    { name: 'Báo cáo ', rlink: '' },
                                    { name: 'Đăng ký sao y bản án', rlink: '' },
                                ],
                            },
                            {
                                name: 'Báo cáo ',
                                rlink: '',
                                inSubMenu: [
                                    { name: 'Báo cáo dữ liệu', rlink: '' },
                                    { name: 'Báo cáo tài chính', rlink: '' },
                                    { name: 'Báo cáo ', rlink: '' },
                                    { name: 'Đăng ký sao y bản án', rlink: '' },
                                ],
                            },
                            {
                                name: 'Đăng ký sao y bản án',
                                rlink: '',
                                inSubMenu: [
                                    { name: 'Báo cáo dữ liệu', rlink: '' },
                                    { name: 'Báo cáo tài chính', rlink: '' },
                                    { name: 'Báo cáo ', rlink: '' },
                                    { name: 'Đăng ký sao y bản án', rlink: '' },
                                ],
                            },
                        ],
                    },
                ],
            },
        },
        {
            name: 'Hệ thống',
            rlink: '',
            icon: 'icon-wrench mr-2',
            subMenu: {
                subMenuTitle: 'Hệ thống',
                list: [
                    {
                        name: 'Thông tin bản án',
                        icon: 'icon-wrench',
                        rlink: '',
                        inSubMenu: [
                            { name: 'Báo cáo dữ liệu', rlink: '' },
                            { name: 'Báo cáo tài chính', rlink: '' },
                            { name: 'Báo cáo ', rlink: '' },
                            { name: 'Đăng ký sao y bản án', rlink: '' },
                        ],
                    },
                    {
                        name: 'Đăng ký sao y bản án',
                        icon: 'icon-wrench',
                        rlink: '',
                        inSubMenu: [
                            { name: 'Báo cáo dữ liệu', rlink: '' },
                            { name: 'Báo cáo tài chính', rlink: '' },
                            { name: 'Báo cáo ', rlink: '' },
                            { name: 'Đăng ký sao y bản án', rlink: '' },
                        ],
                    },
                ],
            },
        },
    ];
}
