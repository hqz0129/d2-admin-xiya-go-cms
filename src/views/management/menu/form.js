import form from '@/mixins/crud.form'

export default {
  mixins: [ form ],
  data () {
    return {
      api: {
        detail: 'MENU_DETAIL',
        create: 'MENU_CREATE',
        update: 'MENU_UPDATE'
      }
    }
  },
  computed: {
    setting () {
      return [
        // 基础设置
        {
          prop: 'menu_name',
          default: '',
          label: '菜单名称',
          rule: { required: true, message: '必填', trigger: 'change' },
          render: <el-input vModel={ this.form.model.menu_name } clearable/>
        },
        {
          prop: 'parent_id',
          default: 0,
          label: '上级菜单',
          render: <d2-tree-popover vModel={ this.form.model.parent_id } source="MENU_ALL" key-label="menu_name"/>
        },
        {
          prop: 'menu_type',
          default: 1,
          label: '菜单类型',
          rule: { required: true, message: '必填', trigger: 'change' },
          render: <d2-dict-radio name="menu_type" vModel={ this.form.model.menu_type } button/>
        },
        {
          prop: 'order_num',
          default: 0,
          label: '显示排序',
          rule: { required: true, message: '必填', trigger: 'change' },
          render: <el-input-number min={ 1 } vModel={ this.form.model.order_num }/>
        },
        // 基础设置 end
        // 菜单类型 menu_type === 目录 1：[菜单图标] [是否外链] [路由地址] [可见性]
        // 菜单类型 menu_type === 菜单 2：[菜单图标] [是否外链] [路由地址] [组件路径] [权限标识] [可见性]
        // 菜单类型 menu_type === 按钮 3：[权限标识]
        {
          prop: 'url',
          default: '/',
          label: '请求地址',
          rule: { required: true, message: '必填', trigger: 'change' },
          render: <el-input vModel={ this.form.model.url } clearable/>
        },
        {
          prop: 'perms',
          default: '',
          label: '权限标识',
          render: <el-input vModel={ this.form.model.perms } clearable/>
        },
        {
          prop: 'icon',
          default: '',
          label: '图标',
          render: <d2-icon-select vModel={ this.form.model.icon }/>
        },
        {
          prop: 'visible',
          default: 1,
          label: '可见性',
          rule: { required: true, message: '必填', trigger: 'change' },
          render: <d2-dict-radio name="visible" vModel={ this.form.model.visible } button/>
        },
        {
          prop: 'remark',
          default: '',
          label: '备注',
          render: <el-input vModel={ this.form.model.remark } clearable/>
        }
      ]
    }
  }
}
