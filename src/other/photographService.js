angular.module('services')
  .service('$photographService',function($cordovaCamera,$ionicPlatform
    ,$q,$jsonService,jadeLoading,$cordovaImagePicker,$cordovaFile){

    var defaultImageSize = {
      width: 900,
      height:1600,
      maximumImagesCount:9
    };
    var self = this;

    /*获取多个图片,并返回图片数据*/
    this.getPhotoDataUrls = function(options){
      var q = $q.defer();
      this.destinationType = Camera.DestinationType.DATA_URL;
      // console.log('this.destinationType',this.destinationType);
      var defaultOptions = {
        quality: 92,
        width:defaultImageSize.width,
        height:defaultImageSize.height,
        destinationType: this.destinationType,
        sourceType:Camera.PictureSourceType.PHOTOLIBRARY,
        mediaType: 0
      };
      defaultOptions.maximumImagesCount = options.maximumImagesCount || defaultImageSize.maximumImagesCount;
      $cordovaImagePicker.getPictures(defaultOptions).then(
        function (results) {
          var xt = navigator.userAgent;
          if(xt.indexOf("OS") > -1){
            // jadeLoading.show('进入OS相册！');
            var imgs =[];
            for(var i=0;i<results.length;i++){
              var fileInfos = results[i].split('/');
              var fileName = fileInfos[fileInfos.length-1];
              self.dealImage(results[i],defaultOptions,function(base64){
                var img = {};
                img.name = fileName;
                img.value = base64;
                imgs.push(img);
                q.resolve(imgs);
              });
            }

          }else{
            q.resolve(readAsDataURL(results));
          }
        }, function(error) {
          // console.log(error)
          jadeLoading.show('获取图片已取消！');
        });
      return q.promise;
    };
    var getNum = function(str){
      return str.replace(/[^0-9]/ig,"");
    };
    var readAsDataURL = function(files){
      // console.log('files:',files);
      var arr= [];
      if(files){
        for(var i =0;i < files.length - 1;i++)
        {
          for(var j = 0;j <  files.length - 1-i;j++)// j开始等于0，
          {
            if(getNum(files[j]) > getNum(files[j+1]))
            {
              var temp = files[j];
              files[j] = files[j+1];
              files[j+1] = temp;
            }
          }
        }
      }
      // console.log(files);
      var q = $q.defer();
      var promises = [];
      // jadeLoading.show('图片路径：'+files,5000);
      try{
        if(files)
        {
          for (var i = 0; i < files.length; i++) {
            var fileInfos = files[i].split('/');
            var fileName = fileInfos[fileInfos.length-1];
            var promise = $cordovaFile.readAsDataURL(cordova.file.cacheDirectory,fileName);
            promise.name = fileName;
            promises.push(promise);
          }
          $q.all(promises).then(function(results){
            // console.log(results);
            var imgs = [];
            for (var i = 0; i < results.length; i++) {
              var imgData = {
                //        				value : results[i].split(',')[1];
                value : results[i],
                name : promises[i].name
              };
              // console.log(imgData,imgData.value);
              imgs.push(imgData);
            }
            q.resolve(imgs);
          })
          return q.promise;
        }
      }catch (error){
        jadeLoading.show('error：'+error,5000);
      }
      return null;
    };

    /**
     * 方法作用：获取照片并返回照片数据，需要经过编码才能显示到页面上
     * 参数：{String}sourceType,照片的来源，两种：1、拍照，此时参数值为CAMERA；
     * 									2、从图片库获取，此时参数值为PHOTOLIBRARY
     * 		{JSON}options,拍照的参数，例如：quality，照片的质量，等等，已经设置了默认值。
     * 调用方法：$photographService.getPhotoFileUri(type).then(function(imageData){
	 * 			//获取成功时处理，返回图片数据
	 *			//将获取结果编码示例：data = "data:image/jpeg;base64," + imageData;
	 * 		 },function(error){
	 * 			//获取失败时处理
	 * 		})
     */

    this.getPhotoDataUrl = function(sourceType,options){
      var q = $q.defer();
      var defaultOptions = {
        quality: 92,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType:Camera.PictureSourceType[sourceType.toUpperCase()],
//				allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: 0,
        targetWidth:defaultImageSize.width,
        targetHeight:defaultImageSize.height,
        saveToPhotoAlbum: true,
        correctOrientation: true
      };

      if(!($jsonService.isEmptyObject(options))){
        angular.forEach(options,function(value,key){
          defaultOptions[key] = value;
        })
      }
      $ionicPlatform.ready(function(){
        $cordovaCamera.getPicture(defaultOptions).then(function(imageData) {
          q.resolve(imageData);
        }, function(e) {
          // console.log(e)
          jadeLoading.show("拍照已取消！");
          q.reject(e);
        });
      });

      return q.promise;

    };
    this.dealImage = function(path, obj,callback){
      var img = new Image();
      img.src = path;
      img.onload = function(){
        var that = this;
        // 默认按比例压缩
        var w = that.width,
          h = that.height,
          scale = w / h;
        // console.log(w,h,scale);
        w = obj.width || w;
        h = obj.height || (w / scale);
        var quality = 0.7;  // 默认图片质量为0.7
        //生成canvas
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        // 创建属性节点
        var anw = document.createAttribute("width");
        anw.nodeValue = w;
        var anh = document.createAttribute("height");
        anh.nodeValue = h;
        canvas.setAttributeNode(anw);
        canvas.setAttributeNode(anh);
        ctx.drawImage(that, 0, 0, w, h);
        // 图像质量
        if(obj.quality && obj.quality <= 100 && obj.quality > 0){
          quality = obj.quality/100;
        }
        // quality值越小，所绘制出的图像越模糊
        var base64 = canvas.toDataURL('image/jpeg', quality );
        // 回调函数返回base64的值
        callback(base64);
      };
    }
  });
