<template>
    <div>
      <cpt-table :saveTable="saveTable" :tHeads="tHeadArr" :tBody="tBodyArr"></cpt-table>
      <div style="text-align: left;">
        <code>
          组件调用代码：{{code}}
        </code>
         <p>
            tHeads，tBody分别绑定表格头部和tbody数据，tHeadArr、tBodyArr为绑定的数据，
         </p>
        <p>
          saveTable绑定Boolean值，判定是否显示保存表格按钮，若为true，则显示，点击改按钮可将表格雷荣保存为一张jpg的图片
        </p>
        <pre>
        tHeadArr为对象的数组数据，对象可包含:
            name:表格显示的值,String类型，例如：name:'表头'
            col:为该格横向占领表格数量，Number类型，例如：col：2（默认为1，可以不写）
            row：为该格纵向占领表格数量，Number类型，例如：row：2（默认为1，可以不写）
            style：为该格特定样式，例如：style:{color:'#00ccfb',background:'#f5f9fc'}
        tBodyArr数据结构为
          [
            {
              tds:[obj,obj,...]
            }，
            {
              tds:[obj,obj,...]
            },..
          ]
          tds代表改行所有td的数据结合，obj为数据对象，匹配规则和tHeadArr数据对象一致，
          提供下列默认样式类Class，可以修改，自由绑定自己的样式
          tableClass:{deFault:'cpt-table'},
          tHeadClass: {default: 'cpt-tHead'},
          thClass:{default:'cpt-th'},
          tBodyClass: {default: 'cpt-tBody'},
          trClass: {default: 'cpt-tr'},
          tdClass: {default: 'cpt-td'},
        </pre>
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              saveTable:true,
              code:'<cpt-table :saveTable=false :tHeads="tHeadArr" :tBody="tBodyArr"></cpt-table>',
              tHeadArr:[
                {
                  name:'表头1',
                  col:2
                },
                {
                  name:'表头2'
                },
                {
                  name:'表头三'
                }
              ],
              tBodyArr:[
                {
                  tds: [
                    {
                      name:'1',
                      row:2
                    },
                    {
                      name:'2',
                      col:2,
                      style:{
                        color:'#00ccfb',
                        background:'#f5f9fc'
                      }
                    },
                    {
                      name:'3',
                    }
                  ]
                },
                {
                  tds: [
                    {
                      name:'1',
                      col:1,
                      row:1
                    },
                    {
                      name:'2',
                    },
                    {
                      name:'3',
                    }
                  ]
                },
                {
                  tds:[
                    {
                      name:"总结",
                      col:4,
                      style:{
                        background:"#f5f9fc",
                        color: "##000002"
                      }
                    }
                  ]
                }
              ]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
</style>

