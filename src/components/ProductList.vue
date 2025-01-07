<script setup>
import { ref } from 'vue'

// 分类数据
const categories = {
  '电子产品': {
    '手机': ['苹果', '华为', '小米'],
    '电脑': ['笔记本', '台式机', '平板']
  },
  '服装': {
    '男装': ['T恤', '裤子', '外套'],
    '女装': ['连衣裙', '上衣', '裙子']
  }
}

// 商品数据
const products = ref([
  { id: 1, name: 'iPhone 15', price: 6999, sales: 1000, category: '手机', 
    image: 'https://picsum.photos/200?random=1' },
  { id: 2, name: '华为 Mate 60', price: 6299, sales: 800, category: '手机',
    image: 'https://picsum.photos/200?random=2' },
  { id: 3, name: 'MacBook Pro', price: 12999, sales: 500, category: '笔记本',
    image: 'https://picsum.photos/200?random=3' },
  { id: 4, name: '小米14', price: 4299, sales: 2000, category: '手机',
    image: 'https://picsum.photos/200?random=4' },
  { id: 5, name: 'OPPO Find X7', price: 4999, sales: 600, category: '手机',
    image: 'https://picsum.photos/200?random=5' },
  { id: 6, name: 'vivo X100', price: 4599, sales: 750, category: '手机',
    image: 'https://picsum.photos/200?random=6' },
  { id: 7, name: 'ThinkPad X1', price: 9999, sales: 300, category: '笔记本',
    image: 'https://picsum.photos/200?random=7' },
  { id: 8, name: '戴尔 XPS', price: 11999, sales: 400, category: '笔记本',
    image: 'https://picsum.photos/200?random=8' },
  { id: 9, name: '华为 MateBook', price: 7999, sales: 600, category: '笔记本',
    image: 'https://picsum.photos/200?random=9' },
  { id: 10, name: 'iPad Pro', price: 6499, sales: 900, category: '平板',
    image: 'https://picsum.photos/200?random=10' },
  { id: 11, name: '小米平板 6', price: 2299, sales: 1200, category: '平板',
    image: 'https://picsum.photos/200?random=11' },
  { id: 12, name: '华为 MatePad', price: 3299, sales: 800, category: '平板',
    image: 'https://picsum.photos/200?random=12' },
  { id: 13, name: 'AirPods Pro', price: 1999, sales: 3000, category: '耳机',
    image: 'https://picsum.photos/200?random=13' },
  { id: 14, name: '华为 FreeBuds', price: 999, sales: 2500, category: '耳机',
    image: 'https://picsum.photos/200?random=14' },
  { id: 15, name: '小米耳机', price: 499, sales: 4000, category: '耳机',
    image: 'https://picsum.photos/200?random=15' },
  { id: 16, name: 'Apple Watch', price: 3299, sales: 1500, category: '智能手表',
    image: 'https://picsum.photos/200?random=16' },
  { id: 17, name: '华为手表', price: 1999, sales: 1800, category: '智能手表',
    image: 'https://picsum.photos/200?random=17' },
  { id: 18, name: '小米手环', price: 299, sales: 5000, category: '智能手表',
    image: 'https://picsum.photos/200?random=18' },
  { id: 19, name: '联想拯救者', price: 8999, sales: 400, category: '笔记本',
    image: 'https://picsum.photos/200?random=19' },
  { id: 20, name: '惠普星系列', price: 7999, sales: 350, category: '笔记本',
    image: 'https://picsum.photos/200?random=20' }
])

// 添加推荐商品数据
const recommendProducts = ref([
  { 
    id: 101, 
    name: '推荐商品1', 
    price: 1999, 
    image: 'https://picsum.photos/300/300?random=rec_1',
    tag: '热卖' 
  },
  { 
    id: 102, 
    name: '推荐商品2', 
    price: 2999, 
    image: 'https://picsum.photos/300/300?random=rec_2',
    tag: '新品' 
  },
  { 
    id: 103, 
    name: '推荐商品3', 
    price: 3999, 
    image: 'https://picsum.photos/300/300?random=rec_3',
    tag: '限时' 
  },
  { 
    id: 104, 
    name: '推荐商品4', 
    price: 4999, 
    image: 'https://picsum.photos/300/300?random=rec_4',
    tag: '优惠' 
  },
  { 
    id: 105, 
    name: '推荐商品5', 
    price: 5999, 
    image: 'https://picsum.photos/300/300?random=rec_5',
    tag: '抢购' 
  }
])

const selectedMainCategory = ref('')
const selectedSubCategory = ref('')
const selectedDetailCategory = ref('')
const sortBy = ref('default')

// 控制弹出层显示
const showMainCategoryPicker = ref(false)
const showSubCategoryPicker = ref(false)
const showDetailCategoryPicker = ref(false)
const showSortPicker = ref(false)

// 排序选项
const sortOptions = [
  { value: 'default', label: '默认排序' },
  { value: 'priceAsc', label: '价格从低到高' },
  { value: 'priceDesc', label: '价格从高到低' },
  { value: 'salesDesc', label: '销量排序' }
]

// 排序方法
const sortProducts = () => {
  const sortedProducts = [...products.value]
  switch (sortBy.value) {
    case 'priceAsc':
      sortedProducts.sort((a, b) => a.price - b.price)
      break
    case 'priceDesc':
      sortedProducts.sort((a, b) => b.price - a.price)
      break
    case 'salesDesc':
      sortedProducts.sort((a, b) => b.sales - a.sales)
      break
  }
  return sortedProducts
}
</script>

<template>
  <div class="container">
    <div class="filters-wrapper">
      <div class="filters">
        <div class="filter-row">
          <div class="filter-btn" @click="showMainCategoryPicker = true">
            {{ selectedMainCategory || '选择大类' }}
          </div>
          <div class="filter-btn" @click="showSubCategoryPicker = true">
            {{ selectedSubCategory || '选择子类' }}
          </div>
        </div>
        <div class="filter-row">
          <div class="filter-btn" @click="showDetailCategoryPicker = true">
            {{ selectedDetailCategory || '选择详细分类' }}
          </div>
          <div class="filter-btn" @click="showSortPicker = true">
            {{ sortOptions.find(opt => opt.value === sortBy)?.label || '排序' }}
          </div>
        </div>
      </div>
    </div>

    <div class="filters-placeholder"></div>
    
    <!-- 添加推荐商品滚动区域 -->
    <div class="recommend-section">
      <div class="recommend-title">热门推荐</div>
      <div class="recommend-list">
        <div 
          v-for="product in recommendProducts" 
          :key="product.id"
          class="recommend-item"
          @click="$router.push(`/product/${product.id}`)"
        >
          <div class="recommend-tag">{{ product.tag }}</div>
          <img :src="product.image" :alt="product.name">
          <div class="recommend-name">{{ product.name }}</div>
          <div class="recommend-price">¥{{ product.price }}</div>
        </div>
      </div>
    </div>

    <!-- 商品列表 -->
    <div class="product-list">
      <div 
        v-for="product in sortProducts()" 
        :key="product.id" 
        class="product-card"
        @click="$router.push(`/product/${product.id}`)"
      >
        <img :src="product.image" :alt="product.name">
        <h3>{{ product.name }}</h3>
        <p class="price">¥{{ product.price }}</p>
        <p class="sales">月销 {{ product.sales }}</p>
      </div>
    </div>

    <!-- 大类选择弹出层 -->
    <div class="picker-overlay" v-if="showMainCategoryPicker" @click="showMainCategoryPicker = false">
      <div class="picker-panel" @click.stop>
        <div class="picker-header">
          <span>选择大类</span>
          <span class="close-btn" @click="showMainCategoryPicker = false">✕</span>
        </div>
        <div class="picker-options">
          <div 
            class="picker-option"
            :class="{ active: selectedMainCategory === '' }"
            @click="selectedMainCategory = ''; showMainCategoryPicker = false"
          >
            全部大类
          </div>
          <div
            v-for="(_, category) in categories"
            :key="category"
            class="picker-option"
            :class="{ active: selectedMainCategory === category }"
            @click="selectedMainCategory = category; showMainCategoryPicker = false"
          >
            {{ category }}
          </div>
        </div>
      </div>
    </div>

    <!-- 子类选择弹出层 -->
    <div class="picker-overlay" v-if="showSubCategoryPicker" @click="showSubCategoryPicker = false">
      <div class="picker-panel" @click.stop>
        <div class="picker-header">
          <span>选择子类</span>
          <span class="close-btn" @click="showSubCategoryPicker = false">✕</span>
        </div>
        <div class="picker-options">
          <div 
            class="picker-option"
            :class="{ active: selectedSubCategory === '' }"
            @click="selectedSubCategory = ''; showSubCategoryPicker = false"
          >
            全部子类
          </div>
          <div
            v-for="(_, subCategory) in categories[selectedMainCategory]"
            :key="subCategory"
            class="picker-option"
            :class="{ active: selectedSubCategory === subCategory }"
            @click="selectedSubCategory = subCategory; showSubCategoryPicker = false"
          >
            {{ subCategory }}
          </div>
        </div>
      </div>
    </div>

    <!-- 详细分类选择弹出层 -->
    <div class="picker-overlay" v-if="showDetailCategoryPicker" @click="showDetailCategoryPicker = false">
      <div class="picker-panel" @click.stop>
        <div class="picker-header">
          <span>选择详细分类</span>
          <span class="close-btn" @click="showDetailCategoryPicker = false">✕</span>
        </div>
        <div class="picker-options">
          <div 
            class="picker-option"
            :class="{ active: selectedDetailCategory === '' }"
            @click="selectedDetailCategory = ''; showDetailCategoryPicker = false"
          >
            全部详细分类
          </div>
          <div
            v-for="detail in categories[selectedMainCategory]?.[selectedSubCategory]"
            :key="detail"
            class="picker-option"
            :class="{ active: selectedDetailCategory === detail }"
            @click="selectedDetailCategory = detail; showDetailCategoryPicker = false"
          >
            {{ detail }}
          </div>
        </div>
      </div>
    </div>

    <!-- 排序选择弹出层 -->
    <div class="picker-overlay" v-if="showSortPicker" @click="showSortPicker = false">
      <div class="picker-panel" @click.stop>
        <div class="picker-header">
          <span>选择排序方式</span>
          <span class="close-btn" @click="showSortPicker = false">✕</span>
        </div>
        <div class="picker-options">
          <div
            v-for="option in sortOptions"
            :key="option.value"
            class="picker-option"
            :class="{ active: sortBy === option.value }"
            @click="sortBy = option.value; showSortPicker = false"
          >
            {{ option.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 0;
  width: 100%;
}

.filters-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 100;
  padding: 8px 2px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.filters-placeholder {
  height: 90px;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 0;
  padding: 0;
  width: 100%;
}

.product-card {
  box-sizing: border-box;
  padding: 5px;
  background: #fff;
  width: 100%;
  border: none;
}

.product-card img {
  width: 100%;
  height: auto;
  border-radius: 2px;
  display: block;
}

.product-card h3 {
  font-size: 13px;
  margin: 4px 0;
  padding: 0 2px;
}

.price {
  color: #ff4400;
  font-weight: bold;
  font-size: 15px;
  margin: 2px 0;
  padding: 0 2px;
}

.sales {
  color: #999;
  font-size: 12px;
  margin: 2px 0;
  padding: 0 2px;
}

.filter-row {
  display: flex;
  gap: 4px;
  margin-bottom: 4px;
}

.filter-btn {
  flex: 1;
  padding: 8px 4px;
  font-size: 13px;
}

.filter-btn {
  flex: 1;
  padding: 8px 4px;
  background: #f5f5f5;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  color: #333;
}

.picker-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: flex-end;
}

.picker-panel {
  width: 100%;
  background: white;
  border-radius: 16px 16px 0 0;
  padding-bottom: env(safe-area-inset-bottom);
}

.picker-header {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.close-btn {
  padding: 8px;
  color: #999;
}

.picker-options {
  max-height: 60vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.picker-option {
  padding: 16px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.picker-option.active {
  color: #ff4400;
  background: #fff5f0;
}

/* 添加过渡动画 */
.picker-overlay {
  animation: fadeIn 0.2s ease-out;
}

.picker-panel {
  animation: slideUp 0.2s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}

.recommend-section {
  padding: 10px 0;
  background: #fff;
  margin-bottom: 8px;
}

.recommend-title {
  padding: 0 12px;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.recommend-list {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  padding: 0 8px;
}

/* 隐藏滚动条但保持可以滚动 */
.recommend-list::-webkit-scrollbar {
  display: none;
}

.recommend-item {
  flex: 0 0 auto;
  width: 120px;
  margin-right: 8px;
  position: relative;
}

.recommend-tag {
  position: absolute;
  top: 5px;
  left: 5px;
  background: #ff4400;
  color: white;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 12px;
  z-index: 1;
}

.recommend-item img {
  width: 120px;
  height: 120px;
  border-radius: 6px;
  object-fit: cover;
}

.recommend-name {
  font-size: 13px;
  margin: 4px 0;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.3;
  height: 34px;
}

.recommend-price {
  color: #ff4400;
  font-size: 15px;
  font-weight: bold;
}

/* 调整filters-placeholder的高度以适应新增的推荐区域 */
.filters-placeholder {
  height: 90px;
}
</style> 