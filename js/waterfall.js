/* jshint asi:true */
//先等图片都加载完成
//再执行布局函数

/**
 * 执行主函数
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {

  /**
     * 内容JSON
     */
  var demoContent = [
    {
      demo_link: 'https://i.loli.net/2019/09/14/YdWz3sN7vUaerKM.jpg',
      img_link: 'https://i.loli.net/2019/09/14/oWYZM4vJgzsShHq.jpg',
      code_link: 'https://github.com/zengyu714/landmark-recognition',
      title: 'Google Landmark Recogonition',
      title_link: 'https://github.com/zengyu714/projs/blob/master/cs231n_landmark_recognition.pdf',
      core_tech: 'PyTorch; SE-Net; DELF',
      description: 'Participated in a large-scale classification challenge which beats 76% teams in Kaggle.'
    },
    {
      demo_link: 'https://i.loli.net/2019/09/14/75LqZrDyOsH9kKV.png',
      img_link: 'https://i.loli.net/2019/09/14/75LqZrDyOsH9kKV.png',
      code_link: '',
      title: 'Kung Fu Master',
      title_link: 'https://github.com/zengyu714/projs/blob/master/ee267_kungfu_master.pdf',
      core_tech: 'Unity3D; VR; Game Design',
      description: 'A VR game which aims to help people learn (play) Kung Fu, which is developed in Unity3D and based on HTC Vive and two controllers.'
    },
    {
      demo_link: 'https://raw.githubusercontent.com/zengyu714/food-chi/master/res/word2vec_output.png',
      img_link: 'https://raw.githubusercontent.com/zengyu714/food-chi/master/res/word2vec_output.png',
      code_link: 'https://github.com/zengyu714/food-chi',
      title: 'Food 𝓧',
      title_link: 'https://github.com/zengyu714/food-chi/blob/master/README.md',
      core_tech: 'Data Crawling; Word2Vec; NMF; SVD',
      description: 'Scraped data from a popular Chinese recipe website and implemented word embedding algorithms to recommend Chinese dishes.'
    },
    {
      demo_link: 'https://i.loli.net/2019/09/14/SWQFsnNE2rB8zJd.jpg',
      img_link: 'https://i.loli.net/2019/09/14/SWQFsnNE2rB8zJd.jpg',
      code_link: 'https://github.com/zengyu714/corneal-gui',
      title: 'Corneal Boundaries Extraction Tools via U-Net',
      title_link: 'hhttps://github.com/zengyu714/corneal-gui/blob/master/README.md',
      core_tech: 'Flask; U-Net; ECharts',
      description: 'Based on Web framework, using deliberately random highlight noise to train the lightweight U-Net for a robust boundaries extractor.'
    },
    {
      demo_link: 'https://i.loli.net/2019/09/14/Pkgoc6QO2hF5tlw.gif',
      img_link: 'https://i.loli.net/2019/09/14/6Lsp9KNqzFvBnOS.jpg',
      code_link: 'https://github.com/zengyu714/standard-panel-classification',
      title: 'Standard Panel Localization and Classification',
      // same as demo
      title_link: 'https://i.loli.net/2019/09/14/Pkgoc6QO2hF5tlw.gif',
      core_tech: 'PyTorch; SSD; RetinaNet',
      description: 'Classify prenatal ultrasound frame as standard panel with improved SSD and RetinaNet.'
    },
    {
      demo_link: 'https://i.loli.net/2019/09/14/SQBNI2niUJoa7Gg.gif',
      img_link: 'https://i.loli.net/2019/09/14/VriFtZhplYnK4sm.jpg',
      code_link: 'https://github.com/zengyu714/corneal-limbus-detection',
      title: 'Contour Detection in Corneal Video',
      // same as demo
      title_link: 'https://github.com/zengyu714/corneal-limbus-detection',
      core_tech: 'PyTorch; Corneal',
      description: 'Combined off-line and on-line training for robust corneal\'s video segmentation . The whole training process only depends on <b>single</b> initial frame and its labels, while other samples are fabricated by sinusoidal transformation.'
    },
    {
      demo_link: 'https://i.loli.net/2019/09/14/qC48t5NRklT21M3.jpg',
      img_link: 'https://i.loli.net/2019/09/14/qC48t5NRklT21M3.jpg',
      code_link: 'https://github.com/zengyu714/rectus-femoris-segment',
      title: 'Rectus Femoris Segmentation',
      title_link: 'https://github.com/zengyu714/rectus-femoris-segment/blob/master/README.md',
      core_tech: 'PyTorch; U-Net; Visdom',
      description: 'Modified U-Net architecture with short-cut connections and on-the-fly random image augmentation lead to faster convergence and higher dice overlap on validation set.'
    },
    {
      demo_link: 'https://i.loli.net/2019/09/14/i936CGghvOYp1qn.jpg',
      img_link: 'https://i.loli.net/2019/09/14/i936CGghvOYp1qn.jpg',
      code_link: 'https://github.com/zengyu714/carvana-image-masking-challenge',
      title: 'Carvana Image Masking Challenge',
      title_link: 'https://github.com/zengyu714/carvana-image-masking-challenge/blob/master/README.md',
      core_tech: 'PyTorch; SSD; ResNet',
      description: 'Tried bounding box experiments gained from Single Shot MultiBox Detector (SSD) plus with morphologic methods containing image difference and thresholding. BTW, exploit GTA-V to generate synthetic data is interesting!'
    },
    {
      demo_link: 'https://i.loli.net/2019/09/14/r6DhGX25u7WyLqc.jpg',
      img_link: 'https://i.loli.net/2019/09/14/r6DhGX25u7WyLqc.jpg',
      code_link: 'https://github.com/zengyu714/segmentation-pytorch',
      title: 'Practice Several FCNs to Segment IVDs with PyTorch and TensorFlow',
      // same as source code
      title_link: 'https://github.com/zengyu714/segmentation-pytorch/blob/master/README.md',
      core_tech: '<a href="https://github.com/zengyu714/segmentation-pytorch">PyTorch</a>; <a href="https://github.com/zengyu714/segmentation-tensorflow">Tensorflow</a>; Visdom; V-Net',
      description: 'Some networks for segmentation like V-Net or Refine-Net implemented by PyTorch and Visdom'
    }
  ];

  contentInit(demoContent) //内容初始化
  waitImgsLoad() //等待图片加载，并执行布局初始化
}());

/**
 * 内容初始化
 * @return {[type]} [description]
 */
function contentInit(content) {
  // var htmlArr = [];
  // for (var i = 0; i < content.length; i++) {
  //     htmlArr.push('<div class="grid-item">')
  //     htmlArr.push('<a class="a-img" href="'+content[i].demo_link+'">')
  //     htmlArr.push('<img src="'+content[i].img_link+'">')
  //     htmlArr.push('</a>')
  //     htmlArr.push('<h3 class="demo-title">')
  //     htmlArr.push('<a href="'+content[i].demo_link+'">'+content[i].title+'</a>')
  //     htmlArr.push('</h3>')
  //     htmlArr.push('<p>主要技术：'+content[i].core_tech+'</p>')
  //     htmlArr.push('<p>'+content[i].description)
  //     htmlArr.push('<a href="'+content[i].code_link+'">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>')
  //     htmlArr.push('</p>')
  //     htmlArr.push('</div>')
  // }
  // var htmlStr = htmlArr.join('')
  var htmlStr = ''
  for (var i = 0; i < content.length; i++) {
    htmlStr += '<div class="grid-item"> ' + ' <a class="a-img" href="' + content[i].demo_link + '" data-toggle="lightbox" data-max-width="714" data-footer="' + content[i].title + '">' +
    ' <img src="' + content[i].img_link + '" class="img-fluid">' + '</a> ' +
    '<h3 class="demo-title">' + ' <a href="' + content[i].title_link + '">' + content[i].title + '</a></h3> ' +
    '<p><i class="fa fa-camera-retro" aria-hidden="true"></i><b>Keys: </b>' + content[i].core_tech + '</p>' +
    '<p><a href="' + content[i].code_link + '"><i class="fa fa-coffee" aria-hidden="true" style="margin-right: 4.5px;"></i><b>Source Code</b></a></p>' +
    '<p class="justify"><i class="fa fa-quote-left" aria-hidden="true"></i>' + content[i].description + '</p>' + '</div>'
  }
  var grid = document.querySelector('.grid')
  grid.insertAdjacentHTML('afterbegin', htmlStr)
}

/**
 * 等待图片加载
 * @return {[type]} [description]
 */
function waitImgsLoad() {
  var imgs = document.querySelectorAll('.grid img')
  var totalImgs = imgs.length
  var count = 0
  //console.log(imgs)
  for (var i = 0; i < totalImgs; i++) {
    if (imgs[i].complete) {
      //console.log('complete');
      count++
    } else {
      imgs[i].onload = function() {
        // alert('onload')
        count++
        //console.log('onload' + count)
        if (count == totalImgs) {
          //console.log('onload---bbbbbbbb')
          initGrid()
        }
      }
    }
  }
  if (count == totalImgs) {
    //console.log('---bbbbbbbb')
    initGrid()
  }
}

/**
 * 初始化栅格布局
 * @return {[type]} [description]
 */
function initGrid() {
  var msnry = new Masonry('.grid', {
    // options
    itemSelector: '.grid-item',
    columnWidth: 250,
    isFitWidth: true,
    gutter: 20
  })
}
