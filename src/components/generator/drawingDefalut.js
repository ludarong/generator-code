export default [{
  __config__: {
    label: '按钮',
    showLabel: false,
    changeTag: true,
    labelWidth: null,
    tag: 'el-button',
    tagIcon: 'button',
    span: 4,
    layout: 'colFormItem',
    document: 'https://element.eleme.cn/#/zh-CN/component/button',
    formId: 132,
    renderKey: '1321699251521089'
  },
  __slot__: {
    default: 'Create'
  },
  type: 'primary',
  icon: '',
  round: false,
  size: 'medium',
  plain: false,
  circle: false,
  disabled: false,
  __vModel__: 'field132'
}, {
  __config__: {
    label: '',
    labelWidth: 1,
    showLabel: false,
    changeTag: true,
    tag: 'el-input',
    tagIcon: 'input',
    required: true,
    layout: 'colFormItem',
    span: 24,
    document: 'https://element.eleme.cn/#/zh-CN/component/input',
    regList: [{
      pattern: '',
      message: ''
    }]
  },
  __slot__: {
    prepend: '',
    append: ''
  },
  __vModel__: 'mobile',
  placeholder: 'Search for the  Beneficiary Name,Account, Order ID, Bank Serial ID',
  style: {
    width: '100%'
  },
  clearable: true,
  'prefix-icon': 'el-icon-search',
  'suffix-icon': '',
  maxlength: '',
  'show-word-limit': true,
  readonly: false,
  disabled: false
}, {
  __config__: {
    label: '',
    showLabel: false,
    labelWidth: 1,
    tag: 'el-select',
    tagIcon: 'select',
    layout: 'colFormItem',
    span: 7,
    required: true,
    regList: [],
    changeTag: true,
    document: 'https://element.eleme.cn/#/zh-CN/component/select',
    formId: 121,
    renderKey: '1211699239972057'
  },
  __slot__: {
    options: [{
      label: '商户测试',
      value: 1
    }, {
      label: '出款优化',
      value: 2
    }]
  },
  placeholder: 'Status',
  style: {
    width: '100%'
  },
  clearable: true,
  disabled: false,
  filterable: false,
  multiple: false,
  __vModel__: 'field121'
}, {
  __config__: {
    label: 'Created Time',
    tag: 'el-date-picker',
    tagIcon: 'date-range',
    defaultValue: null,
    span: 9,
    showLabel: true,
    labelWidth: null,
    required: false,
    layout: 'colFormItem',
    regList: [],
    changeTag: true,
    document: 'https://element.eleme.cn/#/zh-CN/component/date-picker',
    formId: 133,
    renderKey: '1331699252551175'
  },
  style: {
    width: '100%'
  },
  type: 'daterange',
  'range-separator': '-',
  'start-placeholder': '开始日期',
  'end-placeholder': '结束日期',
  disabled: false,
  clearable: true,
  format: 'yyyy-MM-dd',
  'value-format': 'yyyy-MM-dd',
  readonly: false,
  __vModel__: 'field133'
}, {
  __config__: {
    label: '',
    showLabel: false,
    labelWidth: 1,
    tag: 'el-select',
    tagIcon: 'select',
    layout: 'colFormItem',
    span: 8,
    required: true,
    regList: [],
    changeTag: true,
    document: 'https://element.eleme.cn/#/zh-CN/component/select',
    formId: 117,
    renderKey: '1171699238896265'
  },
  __slot__: {
    options: [{
      label: '商户测试',
      value: 1
    }, {
      label: '出款优化',
      value: 2
    }]
  },
  placeholder: 'From Currency',
  style: {
    width: '100%'
  },
  clearable: true,
  disabled: false,
  filterable: false,
  multiple: false,
  __vModel__: 'field117'
}, {
  __config__: {
    label: '',
    showLabel: false,
    labelWidth: 1,
    tag: 'el-select',
    tagIcon: 'select',
    layout: 'colFormItem',
    span: 9,
    required: true,
    regList: [],
    changeTag: true,
    document: 'https://element.eleme.cn/#/zh-CN/component/select',
    formId: 123,
    renderKey: '1231699239982500'
  },
  __slot__: {
    options: [{
      label: '商户测试',
      value: 1
    }, {
      label: '出款优化',
      value: 2
    }]
  },
  placeholder: 'To Currency',
  style: {
    width: '100%'
  },
  clearable: true,
  disabled: false,
  filterable: false,
  multiple: false,
  __vModel__: 'field123'
}, {
  __config__: {
    label: '按钮',
    showLabel: false,
    changeTag: true,
    labelWidth: null,
    tag: 'el-button',
    tagIcon: 'button',
    span: 4,
    layout: 'colFormItem',
    document: 'https://element.eleme.cn/#/zh-CN/component/button',
    formId: 120,
    renderKey: '1201699239246801'
  },
  __slot__: {
    default: 'export'
  },
  type: 'text',
  icon: 'el-icon-download',
  round: false,
  size: 'medium',
  plain: false,
  circle: false,
  disabled: false,
  __vModel__: 'field120'
}, {
  __config__: {
    tagIcon: 'table',
    layout: 'colFormItem',
    tag: 'el-table',
    document: 'https://element.eleme.cn/#/zh-CN/component/table',
    span: 24,
    formId: 173,
    renderKey: '1731699263709752',
    componentName: 'row101',
    showLabel: false,
    changeTag: true,
    labelWidth: null,
    label: '表格',
    dataType: 'dynamic',
    method: 'get',
    dataPath: 'list',
    dataConsumer: 'data',
    url: 'https://www.fastmock.site/mock/f8d7a54fb1e60561e2f720d5a810009d/fg/tableData',
    children: [{
      __config__: {
        layout: 'raw',
        tag: 'el-table-column',
        renderKey: '1741699263709752',
        formId: 174
      },
      prop: 'date',
      label: '日期'
    }, {
      __config__: {
        layout: 'raw',
        tag: 'el-table-column',
        renderKey: '1751699263709752',
        formId: 175
      },
      prop: 'address',
      label: '地址'
    }, {
      __config__: {
        layout: 'raw',
        tag: 'el-table-column',
        renderKey: '1761699263709752',
        formId: 176
      },
      prop: 'name',
      label: '名称'
    }, {
      __config__: {
        layout: 'raw',
        tag: 'el-table-column',
        renderKey: '1771699263709752',
        children: [{
          __config__: {
            label: '按钮',
            tag: 'el-button',
            tagIcon: 'button',
            layout: 'raw',
            renderKey: '1781699263709752',
            formId: 178
          },
          __slot__: {
            default: '主要按钮'
          },
          type: 'primary',
          icon: 'el-icon-search',
          round: false,
          size: 'medium'
        }],
        formId: 177
      },
      label: '操作'
    }]
  },
  data: [{
    orderId: '20231101104419EU9389366808000021004',
    status: '审批成功',
    time: '2023-11-01 05:07:05'
  }],
  directives: [{
    name: 'loading',
    value: false
  }],
  border: true,
  type: 'default',
  justify: 'start',
  align: 'top',
  __vModel__: 'field173'
}, {
  __config__: {
    layout: 'colFormItem',
    label: '分页',
    showLabel: true,
    changeTag: true,
    labelWidth: null,
    tag: 'el-pagination',
    tagIcon: 'button',
    span: 24,
    document: 'https://element.eleme.cn/#/zh-CN/component/pagination',
    formId: 179,
    renderKey: '1791699263765862'
  },
  __slot__: {
    default: '主要按钮'
  },
  __vModel__: 'field179'
}]
