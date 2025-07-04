---
title: Fast Soft Color Segmentation
conference: CVPR 2020
url: https://openaccess.thecvf.com/content_CVPR_2020/html/Akimoto_Fast_Soft_Color_Segmentation_CVPR_2020_paper.html
authors:
  - Naofumi Akimoto
  - Huachun Zhu
  - Yanghua Jin
  - Yoshimitsu Aoki
---

We introduced a neural network based method for soft color segmentation, the decomposition of an input image into RGBA layers of homogeneous colors. Specifically, we trained a neural network to predict alpha masks and color residues in a single forward pass, using a novel objective that ensure proper color assignment amongst layers. Compared to iterative approaches, our method achieved up to 300,000× speed-ups with matching quality. We utilized our proposed method on several applications, and demonstrated its speed advantage, especially in video editing.
