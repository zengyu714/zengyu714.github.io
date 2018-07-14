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
      demo_link: 'http://wx1.sinaimg.cn/mw690/9f1c5669gy1fskcdep5vkg20no0im4r3.gif',
      img_link: 'http://wx2.sinaimg.cn/mw690/9f1c5669gy1fo8cllizqkj20rx0gu77q.jpg',
      code_link: 'https://github.com/zengyu714/corneal-gui',
      title: 'Corneal Boundaries Extraction Tools via U-Net',
      core_tech: 'Flask; U-Net; ECharts',
      description: 'Based on Web framework, using deliberately random highlight noise to train the lightweight U-Net for a robust boundaries extractor.'
    },
    {
      demo_link: 'http://wx3.sinaimg.cn/large/9f1c5669ly1fkkgr59jmug20hs0f0b2b.gif',
      img_link: 'http://wx4.sinaimg.cn/mw690/9f1c5669gy1fskbqiio8tj20ki0hbmxu.jpg',
      code_link: 'https://github.com/zengyu714/standard-panel-classification',
      title: 'Standard Panel Localization and Classification',
      core_tech: 'PyTorch; SSD; RetinaNet',
      description: 'Classify prenatal ultrasound frame as standard panel with improved SSD and RetinaNet.'
    },
    {
      demo_link: 'https://wx1.sinaimg.cn/large/9f1c5669ly1fkkbcoj9xng20g005kkjz.gif',
      img_link: 'http://wx3.sinaimg.cn/mw690/9f1c5669gy1fskc54ssdrj20jt06smx7.jpg',
      code_link: 'https://github.com/zengyu714/corneal-limbus-detection',
      title: 'Contour Detection in Corneal Video',
      core_tech: 'PyTorch; Corneal',
      description: 'Combined off-line and on-line training for robust corneal\'s video segmentation . The whole training process only depends on <b>single</b> initial frame and its labels, while other samples are fabricated by sinusoidal transformation.'
    },
    {
      demo_link: 'http://wx4.sinaimg.cn/mw690/9f1c5669gy1fskcrxwh9og20cs0b0x6z.gif',
      img_link: 'http://wx2.sinaimg.cn/mw690/9f1c5669gy1fskcud3aiej20f50b6jrr.jpg',
      code_link: 'https://github.com/zengyu714/rectus-femoris-segment',
      title: 'Rectus Femoris Segmentation',
      core_tech: 'PyTorch; U-Net; Visdom',
      description: 'Modified U-Net architecture with short-cut connections and on-the-fly random image augmentation lead to faster convergence and higher dice overlap on validation set.'
    },
    {
      demo_link: 'https://wx1.sinaimg.cn/large/9f1c5669ly1fk6clgf8onj20xj0rhakf.jpg',
      img_link: 'https://wx1.sinaimg.cn/large/9f1c5669ly1fk6clgf8onj20xj0rhakf.jpg',
      code_link: 'https://github.com/zengyu714/carvana-image-masking-challenge',
      title: 'Carvana Image Masking Challenge',
      core_tech: 'PyTorch; SSD; ResNet',
      description: 'Tried bounding box experiments gained from Single Shot MultiBox Detector (SSD) plus with morphologic methods containing image difference and thresholding. BTW, exploit GTA-V to generate synthetic data is interesting!'
    },
    {
      demo_link: 'https://wx1.sinaimg.cn/large/9f1c5669ly1fk6iiphschj20k00cln10.jpg',
      img_link: 'https://wx1.sinaimg.cn/large/9f1c5669ly1fk6iiphschj20k00cln10.jpg',
      code_link: 'https://github.com/zengyu714/segmentation-pytorch',
      title: 'Practice Several FCNs to Segment IVDs with PyTorch and TensorFlow',
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
    htmlStr += '<div class="grid-item"> ' + ' <a class="a-img" href="' + content[i].demo_link + '">' + ' <img src="' + content[i].img_link + '">' + '</a> ' + '<h3 class="demo-title">' + ' <a href="' + content[i].demo_link + '">' + content[i].title + '</a>' + '</h3>' + '<p><i class="fa fa-camera-retro" aria-hidden="true"></i><b>Keys: </b>' + content[i].core_tech + '</p>' + '<p><a href="' + content[i].code_link + '"><i class="fa fa-coffee" aria-hidden="true" style="margin-right: 4.5px;"></i><b>Source Code</b></a></p>' + '<p class="justify"><i class="fa fa-quote-left" aria-hidden="true"></i>' + content[i].description + '</p>' + '</div>'
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
