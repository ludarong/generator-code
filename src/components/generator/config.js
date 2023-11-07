// todo：后期区分表单属性&正常页面属性
// 表单属性【右面板】
export const formConf = {
  formRef: 'elForm',
  formModel: 'formData',
  size: 'medium',
  labelPosition: 'right',
  labelWidth: 100,
  formRules: 'rules',
  gutter: 15,
  disabled: false,
  span: 24,
  formBtns: true
}

export const customComponents = [
  {
    // 组件的自定义配置
    __config__: {
      label: '列表筛选',
      showLabel: true,
      labelWidth: null,
      tag: 'el-input',
      tagIcon: 'input',
      layout: 'colFormItem',
      span: 24
    },
    // 其余的为可直接写在组件标签上的属性
    style: { width: '100%' }
  },
  {
    // 组件的自定义配置
    __config__: {
      label: '列表',
      labelWidth: null,
      showLabel: true,
      changeTag: true,
      tag: 'el-input',
      tagIcon: 'input',
      defaultValue: undefined,
      required: true,
      layout: 'colFormItem',
      span: 24,
      document: 'https://element.eleme.cn/#/zh-CN/component/input',
      // 正则校验规则
      regList: []
    },
    // 组件的插槽属性
    __slot__: {
      prepend: '',
      append: ''
    },
    // 其余的为可直接写在组件标签上的属性
    placeholder: '请输入',
    style: { width: '100%' },
    clearable: true,
    'prefix-icon': '',
    'suffix-icon': '',
    maxlength: null,
    'show-word-limit': false,
    readonly: false,
    disabled: false
  },
  {
    // 组件的自定义配置
    __config__: {
      label: '列表详情',
      labelWidth: null,
      showLabel: true,
      changeTag: true,
      tag: 'el-input',
      tagIcon: 'input',
      defaultValue: undefined,
      required: true,
      layout: 'colFormItem',
      span: 24,
      document: 'https://element.eleme.cn/#/zh-CN/component/input',
      // 正则校验规则
      regList: []
    },
    // 组件的插槽属性
    __slot__: {
      prepend: '',
      append: ''
    },
    // 其余的为可直接写在组件标签上的属性
    placeholder: '请输入',
    style: { width: '100%' },
    clearable: true,
    'prefix-icon': '',
    'suffix-icon': '',
    maxlength: null,
    'show-word-limit': false,
    readonly: false,
    disabled: false
  }
]

// 输入型组件 【左面板】
export const inputComponents = [
  {
    // 组件的自定义配置
    __config__: {
      label: '文本',
      labelWidth: null,
      tag: 'p',
      tagIcon: 'input',
      defaultValue: undefined,
      layout: 'colFormItem',
      span: 24
    },
    readonly: false
  },
  {
    // 组件的自定义配置
    __config__: {
      label: '单行文本',
      labelWidth: null,
      showLabel: true,
      changeTag: true,
      tag: 'el-input',
      tagIcon: 'input',
      defaultValue: undefined,
      required: true,
      layout: 'colFormItem',
      span: 24,
      document: 'https://element.eleme.cn/#/zh-CN/component/input',
      // 正则校验规则
      regList: []
    },
    // 组件的插槽属性
    __slot__: {
      prepend: '',
      append: ''
    },
    // 其余的为可直接写在组件标签上的属性
    placeholder: '请输入',
    style: { width: '100%' },
    clearable: true,
    'prefix-icon': '',
    'suffix-icon': '',
    maxlength: null,
    'show-word-limit': false,
    readonly: false,
    disabled: false
  },
  {
    __config__: {
      label: '多行文本',
      labelWidth: null,
      showLabel: true,
      tag: 'el-input',
      tagIcon: 'textarea',
      defaultValue: undefined,
      required: true,
      layout: 'colFormItem',
      span: 24,
      regList: [],
      changeTag: true,
      document: 'https://element.eleme.cn/#/zh-CN/component/input'
    },
    type: 'textarea',
    placeholder: '请输入',
    autosize: {
      minRows: 4,
      maxRows: 4
    },
    style: { width: '100%' },
    maxlength: null,
    'show-word-limit': false,
    readonly: false,
    disabled: false
  },
  {
    __config__: {
      label: '密码',
      showLabel: true,
      labelWidth: null,
      changeTag: true,
      tag: 'el-input',
      tagIcon: 'password',
      defaultValue: undefined,
      layout: 'colFormItem',
      span: 24,
      required: true,
      regList: [],
      document: 'https://element.eleme.cn/#/zh-CN/component/input'
    },
    __slot__: {
      prepend: '',
      append: ''
    },
    placeholder: '请输入',
    'show-password': true,
    style: { width: '100%' },
    clearable: true,
    'prefix-icon': '',
    'suffix-icon': '',
    maxlength: null,
    'show-word-limit': false,
    readonly: false,
    disabled: false
  },
  {
    __config__: {
      label: '计数器',
      showLabel: true,
      changeTag: true,
      labelWidth: null,
      tag: 'el-input-number',
      tagIcon: 'number',
      defaultValue: undefined,
      span: 24,
      layout: 'colFormItem',
      required: true,
      regList: [],
      document: 'https://element.eleme.cn/#/zh-CN/component/input-number'
    },
    placeholder: '',
    min: undefined,
    max: undefined,
    step: 1,
    'step-strictly': false,
    precision: undefined,
    'controls-position': '',
    disabled: false
  },
  {
    __config__: {
      label: '编辑器',
      showLabel: true,
      changeTag: true,
      labelWidth: null,
      tag: 'tinymce',
      tagIcon: 'rich-text',
      defaultValue: null,
      span: 24,
      layout: 'colFormItem',
      required: true,
      regList: [],
      document: 'http://tinymce.ax-z.cn'
    },
    placeholder: '请输入',
    height: 300, // 编辑器高度
    branding: false // 隐藏右下角品牌烙印
  }
]

// 选择型组件 【左面板】
export const selectComponents = [
  {
    __config__: {
      label: '下拉选择',
      showLabel: true,
      labelWidth: null,
      tag: 'el-select',
      tagIcon: 'select',
      layout: 'colFormItem',
      span: 24,
      required: true,
      regList: [],
      changeTag: true,
      document: 'https://element.eleme.cn/#/zh-CN/component/select'
    },
    __slot__: {
      options: [{
        label: '选项一',
        value: 1
      }, {
        label: '选项二',
        value: 2
      }]
    },
    placeholder: '请选择',
    style: { width: '100%' },
    clearable: true,
    disabled: false,
    filterable: false,
    multiple: false
  },

  {
    __config__: {
      label: '按钮',
      showLabel: true,
      changeTag: true,
      labelWidth: null,
      tag: 'el-button',
      tagIcon: 'button',
      span: 24,
      layout: 'colFormItem',
      document: 'https://element.eleme.cn/#/zh-CN/component/button'
    },
    __slot__: {
      default: '主要按钮'
    },
    type: 'primary',
    icon: 'el-icon-search',
    round: false,
    size: 'medium',
    plain: false,
    circle: false,
    disabled: false
  },
  {
    __config__: {
      label: '级联选择',
      url: 'https://www.fastmock.site/mock/f8d7a54fb1e60561e2f720d5a810009d/fg/cascaderList',
      method: 'get',
      dataPath: 'list',
      dataConsumer: 'options',
      showLabel: true,
      labelWidth: null,
      tag: 'el-cascader',
      tagIcon: 'cascader',
      layout: 'colFormItem',
      defaultValue: [],
      dataType: 'dynamic',
      span: 24,
      required: true,
      regList: [],
      changeTag: true,
      document: 'https://element.eleme.cn/#/zh-CN/component/cascader'
    },
    options: [{
      id: 1,
      value: 1,
      label: '选项1',
      children: [{
        id: 2,
        value: 2,
        label: '选项1-1'
      }]
    }],
    placeholder: '请选择',
    style: { width: '100%' },
    props: {
      props: {
        multiple: false,
        label: 'label',
        value: 'value',
        children: 'children'
      }
    },
    'show-all-levels': true,
    disabled: false,
    clearable: true,
    filterable: false,
    separator: '/'
  },
  // {
  //   __config__: {
  //     label: '单选框组',
  //     labelWidth: null,
  //     showLabel: true,
  //     tag: 'el-radio-group',
  //     tagIcon: 'radio',
  //     changeTag: true,
  //     defaultValue: undefined,
  //     layout: 'colFormItem',
  //     span: 24,
  //     optionType: 'default',
  //     regList: [],
  //     required: true,
  //     border: false,
  //     document: 'https://element.eleme.cn/#/zh-CN/component/radio'
  //   },
  //   __slot__: {
  //     options: [{
  //       label: '选项一',
  //       value: 1
  //     }, {
  //       label: '选项二',
  //       value: 2
  //     }]
  //   },
  //   style: {},
  //   size: 'medium',
  //   disabled: false
  // },
  // {
  //   __config__: {
  //     label: '多选框组',
  //     tag: 'el-checkbox-group',
  //     tagIcon: 'checkbox',
  //     defaultValue: [],
  //     span: 24,
  //     showLabel: true,
  //     labelWidth: null,
  //     layout: 'colFormItem',
  //     optionType: 'default',
  //     required: true,
  //     regList: [],
  //     changeTag: true,
  //     border: false,
  //     document: 'https://element.eleme.cn/#/zh-CN/component/checkbox'
  //   },
  //   __slot__: {
  //     options: [{
  //       label: '选项一',
  //       value: 1
  //     }, {
  //       label: '选项二',
  //       value: 2
  //     }]
  //   },
  //   style: {},
  //   size: 'medium',
  //   min: null,
  //   max: null,
  //   disabled: false
  // },
  // {
  //   __config__: {
  //     label: '开关',
  //     tag: 'el-switch',
  //     tagIcon: 'switch',
  //     defaultValue: false,
  //     span: 24,
  //     showLabel: true,
  //     labelWidth: null,
  //     layout: 'colFormItem',
  //     required: true,
  //     regList: [],
  //     changeTag: true,
  //     document: 'https://element.eleme.cn/#/zh-CN/component/switch'
  //   },
  //   style: {},
  //   disabled: false,
  //   'active-text': '',
  //   'inactive-text': '',
  //   'active-color': null,
  //   'inactive-color': null,
  //   'active-value': true,
  //   'inactive-value': false
  // },
  // {
  //   __config__: {
  //     label: '滑块',
  //     tag: 'el-slider',
  //     tagIcon: 'slider',
  //     defaultValue: null,
  //     span: 24,
  //     showLabel: true,
  //     layout: 'colFormItem',
  //     labelWidth: null,
  //     required: true,
  //     regList: [],
  //     changeTag: true,
  //     document: 'https://element.eleme.cn/#/zh-CN/component/slider'
  //   },
  //   disabled: false,
  //   min: 0,
  //   max: 100,
  //   step: 1,
  //   'show-stops': false,
  //   range: false
  // },
  {
    __config__: {
      label: '时间选择',
      tag: 'el-time-picker',
      tagIcon: 'time',
      defaultValue: null,
      span: 24,
      showLabel: true,
      layout: 'colFormItem',
      labelWidth: null,
      required: true,
      regList: [],
      changeTag: true,
      document: 'https://element.eleme.cn/#/zh-CN/component/time-picker'
    },
    placeholder: '请选择',
    style: { width: '100%' },
    disabled: false,
    clearable: true,
    'picker-options': {
      selectableRange: '00:00:00-23:59:59'
    },
    format: 'HH:mm:ss',
    'value-format': 'HH:mm:ss'
  },
  {
    __config__: {
      label: '时间范围',
      tag: 'el-time-picker',
      tagIcon: 'time-range',
      span: 24,
      showLabel: true,
      labelWidth: null,
      layout: 'colFormItem',
      defaultValue: null,
      required: true,
      regList: [],
      changeTag: true,
      document: 'https://element.eleme.cn/#/zh-CN/component/time-picker'
    },
    style: { width: '100%' },
    disabled: false,
    clearable: true,
    'is-range': true,
    'range-separator': '至',
    'start-placeholder': '开始时间',
    'end-placeholder': '结束时间',
    format: 'HH:mm:ss',
    'value-format': 'HH:mm:ss'
  },
  {
    __config__: {
      label: '日期选择',
      tag: 'el-date-picker',
      tagIcon: 'date',
      defaultValue: null,
      showLabel: true,
      labelWidth: null,
      span: 24,
      layout: 'colFormItem',
      required: true,
      regList: [],
      changeTag: true,
      document: 'https://element.eleme.cn/#/zh-CN/component/date-picker'
    },
    placeholder: '请选择',
    type: 'date',
    style: { width: '100%' },
    disabled: false,
    clearable: true,
    format: 'yyyy-MM-dd',
    'value-format': 'yyyy-MM-dd',
    readonly: false
  },
  {
    __config__: {
      label: '日期范围',
      tag: 'el-date-picker',
      tagIcon: 'date-range',
      defaultValue: null,
      span: 24,
      showLabel: true,
      labelWidth: null,
      required: true,
      layout: 'colFormItem',
      regList: [],
      changeTag: true,
      document: 'https://element.eleme.cn/#/zh-CN/component/date-picker'
    },
    style: { width: '100%' },
    type: 'daterange',
    'range-separator': '至',
    'start-placeholder': '开始日期',
    'end-placeholder': '结束日期',
    disabled: false,
    clearable: true,
    format: 'yyyy-MM-dd',
    'value-format': 'yyyy-MM-dd',
    readonly: false
  }
  // {
  //   __config__: {
  //     label: '评分',
  //     tag: 'el-rate',
  //     tagIcon: 'rate',
  //     defaultValue: 0,
  //     span: 24,
  //     showLabel: true,
  //     labelWidth: null,
  //     layout: 'colFormItem',
  //     required: true,
  //     regList: [],
  //     changeTag: true,
  //     document: 'https://element.eleme.cn/#/zh-CN/component/rate'
  //   },
  //   style: {},
  //   max: 5,
  //   'allow-half': false,
  //   'show-text': false,
  //   'show-score': false,
  //   disabled: false
  // },
  // {
  //   __config__: {
  //     label: '颜色选择',
  //     tag: 'el-color-picker',
  //     tagIcon: 'color',
  //     span: 24,
  //     defaultValue: null,
  //     showLabel: true,
  //     labelWidth: null,
  //     layout: 'colFormItem',
  //     required: true,
  //     regList: [],
  //     changeTag: true,
  //     document: 'https://element.eleme.cn/#/zh-CN/component/color-picker'
  //   },
  //   'show-alpha': false,
  //   'color-format': '',
  //   disabled: false,
  //   size: 'medium'
  // },
  // {
  //   __config__: {
  //     label: '上传',
  //     tag: 'el-upload',
  //     tagIcon: 'upload',
  //     layout: 'colFormItem',
  //     defaultValue: null,
  //     showLabel: true,
  //     labelWidth: null,
  //     required: true,
  //     span: 24,
  //     showTip: false,
  //     buttonText: '点击上传',
  //     regList: [],
  //     changeTag: true,
  //     fileSize: 2,
  //     sizeUnit: 'MB',
  //     document: 'https://element.eleme.cn/#/zh-CN/component/upload'
  //   },
  //   __slot__: {
  //     'list-type': true
  //   },
  //   action: 'https://jsonplaceholder.typicode.com/posts/',
  //   disabled: false,
  //   accept: '',
  //   name: 'file',
  //   'auto-upload': true,
  //   'list-type': 'text',
  //   multiple: false
  // }
]

// 布局型组件 【左面板】
export const layoutComponents = [
  {
    __config__: {
      layout: 'rowFormItem',
      tagIcon: 'row',
      label: '行容器',
      layoutTree: true,
      document: 'https://element.eleme.cn/#/zh-CN/component/layout#row-attributes'
    },
    type: 'default',
    justify: 'start',
    align: 'top'
  },
  {
    __config__: {
      label: '按钮',
      showLabel: true,
      changeTag: true,
      labelWidth: null,
      tag: 'el-button',
      tagIcon: 'button',
      span: 24,
      layout: 'colFormItem',
      document: 'https://element.eleme.cn/#/zh-CN/component/button'
    },
    __slot__: {
      default: '主要按钮'
    },
    type: 'primary',
    icon: 'el-icon-search',
    round: false,
    size: 'medium',
    plain: false,
    circle: false,
    disabled: false
  },
  {
    __config__: {
      layout: 'colFormItem',
      label: '分页',
      showLabel: false,
      changeTag: true,
      labelWidth: null,
      tag: 'el-pagination',
      tagIcon: 'button',
      span: 24,
      document: 'https://element.eleme.cn/#/zh-CN/component/pagination'
    },
    __slot__: {
      default: '主要按钮'
    },
    layout: 'total, prev, pager, next',
    pageSize: 20,
    total: 1000
  },
  {
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
  },
  {
    // 组件的自定义配置
    __config__: {
      label: 'MMC表格组件---需替换data list',
      showLabel: true,
      labelWidth: null,
      tag: 'sp-table',
      componentName: 'sp-table',
      tagIcon: 'input',
      layout: 'colFormItem',
      span: 24
    },
    // 其余的为可直接写在组件标签上的属性
    style: { width: '100%' }
  }
]

// 标签型组件
export const tagComponents = [
  {
    // 组件的自定义配置
    __config__: {
      label: 'h2标签',
      showLabel: true,
      labelWidth: null,
      tag: 'h2',
      tagIcon: 'input',
      layout: 'colFormItem',
      span: 24,
      defaultValue: 'test'
    },
    // 其余的为可直接写在组件标签上的属性
    style: { width: '100%' },
    __slot__: {
      default: '提现记录'
    }
  }
]
