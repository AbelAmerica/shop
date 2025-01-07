<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const productDetail = ref(null)

onMounted(() => {
  // 模拟根据 ID 获取商品详情
  productDetail.value = {
    id: props.id,
    name: 'iPhone 15',
    price: 6999,
    sales: 1000,
    description: '最新款iPhone，搭载A17芯片，超强性能，出色续航，专业摄像系统，带来卓越的拍摄体验。',
    images: [
      `https://picsum.photos/400/400?random=${props.id}_1`,
      `https://picsum.photos/400/400?random=${props.id}_2`,
      `https://picsum.photos/400/400?random=${props.id}_3`,
      `https://picsum.photos/400/400?random=${props.id}_4`
    ],
    specs: {
      color: ['暗紫色', '自然白', '墨黑色'],
      storage: ['128GB', '256GB', '512GB']
    },
    detailImages: [
      `https://picsum.photos/800/1000?random=${props.id}_detail_1`,
      `https://picsum.photos/800/1000?random=${props.id}_detail_2`,
      `https://picsum.photos/800/1000?random=${props.id}_detail_3`,
      `https://picsum.photos/800/1000?random=${props.id}_detail_4`,
      `https://picsum.photos/800/1000?random=${props.id}_detail_5`
    ]
  }
})
</script>

<template>
  <div class="product-detail" v-if="productDetail">
    <div class="nav-bar">
      <div class="back-btn" @click="$router.back()">
        ← 返回
      </div>
    </div>
    
    <!-- 图片轮播区域 -->
    <div class="product-images">
      <img :src="productDetail.images[0]" :alt="productDetail.name">
    </div>
    
    <div class="product-info">
      <h1>{{ productDetail.name }}</h1>
      <div class="price">¥{{ productDetail.price }}</div>
      <div class="sales">月销 {{ productDetail.sales }} 件</div>
      
      <div class="specs">
        <div class="spec-item">
          <h3>颜色</h3>
          <div class="spec-options">
            <button 
              v-for="color in productDetail.specs.color" 
              :key="color"
              class="spec-btn">
              {{ color }}
            </button>
          </div>
        </div>
        
        <div class="spec-item">
          <h3>存储容量</h3>
          <div class="spec-options">
            <button 
              v-for="storage in productDetail.specs.storage" 
              :key="storage"
              class="spec-btn">
              {{ storage }}
            </button>
          </div>
        </div>
      </div>
      
      <div class="description">
        <h3>商品描述</h3>
        <p>{{ productDetail.description }}</p>
      </div>

      <div class="detail-images">
        <img 
          v-for="(image, index) in productDetail.detailImages" 
          :key="index"
          :src="image" 
          :alt="`${productDetail.name} 详情图 ${index + 1}`"
        >
      </div>
    </div>

    <div class="fixed-bottom">
      <button class="btn-cart">加入购物车</button>
      <button class="btn-buy">立即购买</button>
    </div>
  </div>
</template>

<style scoped>
.product-detail {
  padding-bottom: 70px;
}

.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 44px;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  padding: 0 16px;
  z-index: 100;
  border-bottom: 1px solid #eee;
}

.back-btn {
  font-size: 16px;
  color: #333;
  cursor: pointer;
}

.product-images {
  width: 100%;
  padding-top: 44px;
}

.product-images img {
  width: 100%;
  height: auto;
  display: block;
}

.product-info {
  padding: 15px;
}

h1 {
  font-size: 18px;
  margin: 0 0 10px;
  line-height: 1.4;
}

.price {
  color: #ff4400;
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
}

.sales {
  color: #999;
  font-size: 14px;
}

.specs {
  margin: 15px 0;
}

.spec-item {
  margin-bottom: 15px;
}

.spec-item h3 {
  font-size: 14px;
  margin-bottom: 8px;
  color: #666;
}

.spec-options {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.spec-btn {
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background: #fff;
  color: #333;
}

.spec-btn.active {
  border-color: #ff4400;
  color: #ff4400;
  background: #fff5f0;
}

.description {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 8px solid #f5f5f5;
}

.description h3 {
  font-size: 14px;
  margin-bottom: 8px;
  color: #333;
}

.description p {
  font-size: 14px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 15px;
}

.fixed-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  padding: 10px;
  background: #fff;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
}

.btn-buy, .btn-cart {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  margin: 0 5px;
}

.btn-buy {
  background-color: #ff4400;
  color: white;
}

.btn-cart {
  background-color: #ffd591;
  color: #ff4400;
}

.detail-images {
  margin-top: 15px;
}

.detail-images img {
  width: 100%;
  display: block;
  margin-bottom: 8px;
  border-radius: 4px;
}

.detail-images img {
  background-color: #f5f5f5;
  min-height: 200px;
  transition: opacity 0.3s;
}

.detail-images img[src] {
  min-height: auto;
}
</style> 