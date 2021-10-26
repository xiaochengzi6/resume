const state_base =
{
    isDownPDF: false,/*是否下载pdf*/
    isMoveView: false,/*是否启用可视化*/
    leftView_height: 0,/*获取pdf生成高度*/
    rightWrith_htmlString: '',/*获取codeMirror md=>html */
    rightWrith_markd: '',/*获取codeMirror md */
    rightWrith_scrollHeight: {
        top: 0,
        height: 0
    },/*获取codeMirror scrolltop和总高度 */
    leftViewRef: {},/*获取 LeftView 盒子的ref */
    refMouseover: {},/*获取 LeftView中子盒子盒子的ref */
    GetMoveValueToLine:{
        textValue: '',
        textArray: [],
        codeLine: -1
    },/*获取 1.可视化视图区域的 textValue 2.codeMirror的textArray 3.生成codeLine */
}
export default state_base