<template>
    <div class="product__info-share">
        <h4>Share This Product</h4>
        <social-sharing inline-template>
            <div>
                <div class="social-share">
                    <network network="facebook">
                        <a-button style="background-color: #3b5998; border-color: #3b5998; font-size: 12px; color: white; margin-right: 5px">
                            <v-icon name="brands/facebook-f"/>
                        </a-button>
                    </network>
                    <network network="twitter">
                        <a-button style="background-color: #55ACEE; border-color: #55ACEE; font-size: 12px; color: white; margin-right: 5px">
                            <v-icon name="brands/twitter"/>
                        </a-button>
                    </network>
                    <network network="whatsapp">
                        <a-button style="background-color: #25D366; border-color: #25D366; font-size: 12px; color: white; margin-right: 5px">
                            <v-icon name="brands/whatsapp"/> 
                        </a-button>
                    </network>
                </div>
            </div>
        </social-sharing>
    </div>
</template>

<script>
export default {
    data: () => ({

    })
}
</script>

<style lang="scss" scoped>
@import './_index';
</style>