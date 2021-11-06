<template><p>编辑菜单内容如下</p>
<p><img src="/synthesizer-v-r2-docs/2/2.10.png" alt="文件菜单"></p>
<h2 id="撤销" tabindex="-1"><a class="header-anchor" href="#撤销" aria-hidden="true">#</a> 撤销</h2>
<p>撤销上一次的操作</p>
<h2 id="重复" tabindex="-1"><a class="header-anchor" href="#重复" aria-hidden="true">#</a> 重复</h2>
<p>（撤销撤销上一次的操作）(禁止套娃)</p>
<h2 id="全选" tabindex="-1"><a class="header-anchor" href="#全选" aria-hidden="true">#</a> 全选</h2>
<p>选择所有内容。如果你在此之间正在编辑音符，那么将会选择所有音符。如果你在此之间正在编辑参数，那么将会选择<strong>所有的对应的</strong>参数。</p>
<h2 id="参数全选" tabindex="-1"><a class="header-anchor" href="#参数全选" aria-hidden="true">#</a> 参数全选</h2>
<p>选中所有的参数，不论你正在编辑什么。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>与<strong>全选</strong>不同的是，参数全选会将各种参数同时选中，而全选只会选中当前正在编辑的参数</p>
</div>
<h2 id="选择音符对应的参数" tabindex="-1"><a class="header-anchor" href="#选择音符对应的参数" aria-hidden="true">#</a> 选择音符对应的参数</h2>
<p>选择当前选中的音符下方的各种参数，不会取消选中已经选中的音符。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>Synth V 的所有参数以控制点的形式存在，因此可能会导致移动选中的音符及参数时，参数最开头无法同时移动的情况，此时需要手动调整。</p>
</div>
<h2 id="取消选择" tabindex="-1"><a class="header-anchor" href="#取消选择" aria-hidden="true">#</a> 取消选择</h2>
<p>取消选择当前已选择的所有内容（包括音符及参数）。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>如果你在自由绘制模式下并且勾选了 “在自由绘制模式下隐藏控制点” 的选项，你可能无法辨别参数是否被选中。此时你可以切换到光标模式或控制点模式或取消勾选 “在自由绘制模式下隐藏控制点” 的选项，即可明显的辨别参数是否被选中。详见 3.8 设置 及 6.1 顶栏</p>
</div>
<h2 id="删除选择的内容" tabindex="-1"><a class="header-anchor" href="#删除选择的内容" aria-hidden="true">#</a> 删除选择的内容</h2>
<p>删除当前已选择的所有内容。</p>
<h2 id="复制" tabindex="-1"><a class="header-anchor" href="#复制" aria-hidden="true">#</a> 复制</h2>
<p>复制当前已选择的内容。</p>
<h2 id="剪切" tabindex="-1"><a class="header-anchor" href="#剪切" aria-hidden="true">#</a> 剪切</h2>
<p>复制并删除当前已选择的内容。</p>
<h2 id="粘贴" tabindex="-1"><a class="header-anchor" href="#粘贴" aria-hidden="true">#</a> 粘贴</h2>
<p>将已复制的内容粘贴到设定的位置。</p>
<p>您可以在设置中改变默认粘贴方式。详见 3.8 设置</p>
<Vssue :title="$title" /></template>
