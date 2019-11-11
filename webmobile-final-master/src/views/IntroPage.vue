<template>
  <div>
    <ImgBanner
      :check="2"
      imgSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVAAAACWCAMAAAC/8CD2AAAAA1BMVEX669e6FKaMAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF8GxXYAARizDlgAAAAASUVORK5CYII="
    >
    </ImgBanner>
  </div>
</template>

<script>
import ImgBanner from "../components/Function/ImgBanner";

export default {
  name: "Intro",
  components: {
    ImgBanner
  }
};
</script>
