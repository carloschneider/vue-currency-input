import{_ as n,c as a,o as s,a as t}from"./app.ad4b7c82.js";const g='{"title":"Guide","description":"","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction"},{"level":2,"title":"Installation","slug":"installation"},{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Creating a custom component","slug":"creating-a-custom-component"},{"level":3,"title":"Use the custom component","slug":"use-the-custom-component"},{"level":2,"title":"Lazy value binding","slug":"lazy-value-binding"},{"level":2,"title":"External props changes","slug":"external-props-changes"}],"relativePath":"guide.md","lastUpdated":1635113934732}',p={},e=t(`__VP_STATIC_START__<h1 id="guide" tabindex="-1">Guide <a class="header-anchor" href="#guide" aria-hidden="true">#</a></h1><div class="warning custom-block"><p class="custom-block-title">Version</p><p>You\u2019re browsing the documentation for v2.x. <a href="https://vue-currency-input-v1.netlify.app/" target="_blank" rel="noopener noreferrer">For v1.x, click here</a>.</p></div><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><p>Vue Currency Input allows an easy input of currency formatted numbers based on the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat" target="_blank" rel="noopener noreferrer">ECMAScript Internationalization API (Intl.NumberFormat)</a>.</p><p>Built on top of the <a href="https://v3.vuejs.org/guide/composition-api-introduction.html" target="_blank" rel="noopener noreferrer">Vue Composition API</a>, it provides the function <code>useCurrencyInput</code> (a so called <em>Vue composable</em>) for decorating input components with currency format capabilities. Thanks to <a href="https://github.com/vueuse/vue-demi" target="_blank" rel="noopener noreferrer">Vue Demi</a>, it supports both Vue 2 and Vue 3.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><p>Install the npm package:</p><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> vue-currency-input
</code></pre></div><p>For usage with Vue 2 you have to install also the <a href="https://github.com/vuejs/composition-api" target="_blank" rel="noopener noreferrer">Vue Composition API plugin</a>:</p><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> @vue/composition-api
</code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><p>Vue Currency Input does not provide a ready-to-use component, instead it enables you to create your own based on your favorite input component (for example <a href="./examples.html#usage-with-quasar-veevalidate">Quasar</a> or <a href="./examples.html#usage-with-element-plus">Element Plus</a>).</p><div class="info custom-block"><p class="custom-block-title">Code examples</p><p>The following code examples are for Vue 3. Deviations for Vue 2 are noted as inline code comments.</p></div><h3 id="creating-a-custom-component" tabindex="-1">Creating a custom component <a class="header-anchor" href="#creating-a-custom-component" aria-hidden="true">#</a></h3><p>The following example component <code>&lt;currency-input&gt;</code> uses a simple HTML input element.</p><p>The component must provide props for the <code>v-model</code> value binding and the options (see <a href="./config.html">Config Reference</a>). Make also sure, that the input element has type <code>text</code> (or omit the type since it&#39;s the default).</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> 
    <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputRef<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formattedValue<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useCurrencyInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-currency-input&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;CurrencyInput&#39;</span><span class="token punctuation">,</span>
  props<span class="token operator">:</span> <span class="token punctuation">{</span>
    modelValue<span class="token operator">:</span> Number<span class="token punctuation">,</span> <span class="token comment">// Vue 2: value</span>
    options<span class="token operator">:</span> Object
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> formattedValue<span class="token punctuation">,</span> inputRef <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCurrencyInput</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>options<span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> inputRef<span class="token punctuation">,</span> formattedValue <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="use-the-custom-component" tabindex="-1">Use the custom component <a class="header-anchor" href="#use-the-custom-component" aria-hidden="true">#</a></h3><p>Now you can use the created <code>&lt;currency-input&gt;</code> component in your app:</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>currency-input</span> 
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> 
    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ currency: <span class="token punctuation">&#39;</span>EUR<span class="token punctuation">&#39;</span> }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> CurrencyInput <span class="token keyword">from</span> <span class="token string">&#39;./CurrencyInput&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span> CurrencyInput <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">1234</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span> 
</code></pre></div><p>See the final result in the <a href="./examples.html#simple-html-input-element">examples</a>.</p><h2 id="lazy-value-binding" tabindex="-1">Lazy value binding <a class="header-anchor" href="#lazy-value-binding" aria-hidden="true">#</a></h2><p>Sometimes you might want to update the bound value only when the input loses its focus. In this case, use <code>v-model.lazy</code> for Vue 3:</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>currency-input</span>
  <span class="token attr-name">v-model.lazy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ currency: <span class="token punctuation">&#39;</span>EUR<span class="token punctuation">&#39;</span> }<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>For Vue 2 listen to the <code>change</code> event instead of using <code>v-model</code>, since the <code>lazy</code> modifier is not supported when using <code>v-model</code> on custom components:</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>currency-input</span>
  <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ currency: <span class="token punctuation">&#39;</span>EUR<span class="token punctuation">&#39;</span> }<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value = $event<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="external-props-changes" tabindex="-1">External props changes <a class="header-anchor" href="#external-props-changes" aria-hidden="true">#</a></h2><p>If the value of the input is changed externally (and not only by user input) you need to use the <code>setValue</code> function returned by <code>useCurrencyInput</code> within a watcher.</p><p>The same applies for the options of your currency input component. Use the <code>setOptions</code> function in a watcher in order to make the options reactive for changes after the component has been mounted (like in the <a href="./playground.html">Playground</a>).</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> 
    <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputRef<span class="token punctuation">&quot;</span></span> 
    <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formattedValue<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span> <span class="token comment">// Vue 2: import { watch } from &#39;@vue/composition-api&#39; </span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useCurrencyInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-currency-input&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;CurrencyInput&#39;</span><span class="token punctuation">,</span>
  props<span class="token operator">:</span> <span class="token punctuation">{</span>
    modelValue<span class="token operator">:</span> Number<span class="token punctuation">,</span> <span class="token comment">// Vue 2: value</span>
    options<span class="token operator">:</span> Object
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>
      inputRef<span class="token punctuation">,</span>
      formattedValue<span class="token punctuation">,</span>
      setOptions<span class="token punctuation">,</span>
      setValue
    <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCurrencyInput</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>options<span class="token punctuation">)</span>

    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>modelValue<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// Vue 2: props.value</span>
      <span class="token function">setValue</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>options<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">setOptions</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> inputRef<span class="token punctuation">,</span> formattedValue <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>__VP_STATIC_END__`,30),o=[e];function c(u,l,i,r,k,d){return s(),a("div",null,o)}var h=n(p,[["render",c]]);export{g as __pageData,h as default};
