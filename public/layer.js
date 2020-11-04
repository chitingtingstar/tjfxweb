/**
 * @Description: 解决iframe 弹窗不居中问题
 * @date 2019/3/8
 */
function parentOpenLayerFn(Obj) {
    return gd.showLayer({
        id: Obj.id, //可传一个id作为标识
        title: Obj.title, //窗口标题
        autoFocus: Obj.autoFocus,
        content: Obj.content,
        size: Obj.size, //窗口大小，直接传数字即可，也可以是['600px','400px']
        btn: Obj.btn,
        success: Obj.success,
        end: Obj.end
    });
}

function parentOpenConfirmLayerFn(Obj) {
    return gd.showConfirm({
        id: Obj.id, //可传一个id作为标识
        content: Obj.content,
        btn: Obj.btn,
        success: Obj.success,
        end: Obj.end
    });
}