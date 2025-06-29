---
title: Fast Nonlinear Image Unblending
conference: WACV 2022
url: https://openaccess.thecvf.com/content/WACV2022/html/Horita_Fast_Nonlinear_Image_Unblending_WACV_2022_paper.html
---

Nonlinear color blending, which is advanced blending indicated by blend modes such as overlay and multiply, is extensively employed by digital creators to produce attractive visual effects. To enjoy such flexible editing modalities on existing bitmap images like photographs, however, creators need a fast nonlinear blending algorithm that decomposes an image into a set of semi-transparent layers. To address this issue, we propose a neural-network-based method for nonlinear decomposition of an input image into linear and nonlinear alpha layers that can be separately modified for editing purposes, based on the specified color palettes and blend modes. Experiments show that our proposed method achieves an inference speed 370 times faster than the state-of-the-art method of nonlinear image unblending, which uses computationally intensive iterative optimization. Furthermore, our reconstruction quality is higher or comparable than other methods, including linear blending models. In addition, we provide examples that apply our method to image editing with nonlinear blend modes. Our code will be made publicly available.
