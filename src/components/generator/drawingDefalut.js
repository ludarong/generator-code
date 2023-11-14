export default [{
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
}]
