    window.onload = function() {
        var valueLocal = localStorage.getItem(color);
        switch (valueLocal) {
            case "1":
                red();
                break;
            case "2":
                black();
                break;
            case "3":
                blue();
                break;
            case "4":
                green();
                break;
        }
    }
    var storage = window.localStorage;
    // 获取变化颜色的元素节点
    var mainNav = document.getElementsByClassName('change-color');
    var fontColor = document.getElementsByClassName('font-c');
    var indexNav1 = document.getElementById('li1')
    var indexNav2 = document.getElementById('li2')
    var color;

    function red() {
        // 更改元素样式和其伪类样式
        document.getElementsByClassName('web-nav')[0].style.border = "1px solid rgba(238,59,59,0.5)"
        for (var i = 0; i < fontColor.length; i++) {
            fontColor[i].style.color = "rgba(238,59,59,1)"
        }
        indexNav1.onmouseover = function() {
            this.style.cssText = "background-color: rgba(238,59,59,1)";
        }
        indexNav1.style.cssText = "background-color: rgba(238,59,59,1)";
        indexNav2.onmouseover = function() {
            this.style.cssText = "background-color: rgba(238,59,59,1)";
        }
        indexNav2.style.cssText = "background-color: rgba(238,59,59,1)";
        for (var i = 0; i < mainNav.length; i++) {
            mainNav[i].style.cssText = "background-color: rgba(238,59,59,0.8)";
            mainNav[i].onmouseover = function() {
                this.style.cssText = "background-color: rgba(238,59,59,0.5)";
            }
            mainNav[i].onmouseout = function() {
                this.style.cssText = "background-color: rgba(238,59,59,0.8)";
            }
        }
        storage.setItem(color, 1);
    }

    function black() {
        // 更改元素样式和其伪类样式
        document.getElementsByClassName('web-nav')[0].style.border = "1px solid rgba(36,36,36,0.5)"
        for (var i = 0; i < fontColor.length; i++) {
            fontColor[i].style.color = "rgba(36,36,36,1)"
        }
        indexNav1.onmouseover = function() {
            this.style.cssText = "background-color: rgba(36,36,36,1)";
        }
        indexNav1.style.cssText = "background-color: rgba(36,36,36,1)";
        indexNav2.onmouseover = function() {
            this.style.cssText = "background-color: rgba(36,36,36,1)";
        }
        indexNav2.style.cssText = "background-color: rgba(36,36,36,1)";
        for (var i = 0; i < mainNav.length; i++) {
            mainNav[i].style.cssText = "background-color: rgba(36,36,36,0.8)";
            mainNav[i].onmouseover = function() {
                this.style.cssText = "background-color: rgba(36,36,36,0.5)";
            }
            mainNav[i].onmouseout = function() {
                this.style.cssText = "background-color: rgba(36,36,36,0.8)";
            }
        }
        storage.setItem(color, 2);
    }

    function blue() {
        // 更改元素样式和其伪类样式
        document.getElementsByClassName('web-nav')[0].style.border = "1px solid rgba(16,78,139,0.5)"
        for (var i = 0; i < fontColor.length; i++) {
            fontColor[i].style.color = "rgba(16,78,139,1)"
        }
        indexNav1.onmouseover = function() {
            this.style.cssText = "background-color: rgba(16,78,139,1)";
        }
        indexNav1.style.cssText = "background-color: rgba(16,78,139,1)";
        indexNav2.onmouseover = function() {
            this.style.cssText = "background-color: rgba(16,78,139,1)";
        }
        indexNav2.style.cssText = "background-color: rgba(16,78,139,1)";
        for (var i = 0; i < mainNav.length; i++) {
            mainNav[i].style.cssText = "background-color: rgba(16,78,139,0.8)";
            mainNav[i].onmouseover = function() {
                this.style.cssText = "background-color: rgba(16,78,139,0.5)";
            }
            mainNav[i].onmouseout = function() {
                this.style.cssText = "background-color: rgba(16,78,139,0.8)";
            }
        }
        storage.setItem(color, 3);
    }

    function green() {
        // 更改元素样式和其伪类样式
        document.getElementsByClassName('web-nav')[0].style.border = "1px solid rgba(10, 167, 112, 0.5)"
        for (var i = 0; i < fontColor.length; i++) {
            fontColor[i].style.color = "rgba(33,136,104,0.8)"
        }
        indexNav1.onmouseover = function() {
            this.style.cssText = "background-color: rgba(33,136,104,1)";
        }
        indexNav1.style.cssText = "background-color: rgba(33,136,104,1)";
        indexNav2.onmouseover = function() {
            this.style.cssText = "background-color: rgba(33,136,104,1)";
        }
        indexNav2.style.cssText = "background-color: rgba(33,136,104,1)";
        for (var i = 0; i < mainNav.length; i++) {
            mainNav[i].style.cssText = "background-color: rgba(10, 167, 112, 0.8)";
            mainNav[i].onmouseover = function() {
                this.style.cssText = "background-color: rgba(10, 167, 112, 0.5)";
            }
            mainNav[i].onmouseout = function() {
                this.style.cssText = "background-color: rgba(33,136,104,0.8)";
            }
        }
        storage.setItem(color, 4);
    }
