<!DOCTYPE html>
<html lang="en">

<head>
    
    <!-- Google font-->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700" rel="stylesheet">
    <!-- Required Fremwork -->
    <link rel="stylesheet" type="text/css" href="files/bower_components/bootstrap/css/bootstrap.min.css">
    <!-- waves.css -->
    <link rel="stylesheet" href="files/assets/pages/waves/css/waves.min.css" type="text/css" media="all">
    <!-- feather icon -->
    <link rel="stylesheet" type="text/css" href="files/assets/icon/feather/css/feather.css">
    <!-- font-awesome-n -->
    <link rel="stylesheet" type="text/css" href="files/assets/css/font-awesome-n.min.css">
    <!-- Data Table Css -->
    <link rel="stylesheet" type="text/css" href="files/bower_components/datatables.net-bs4/css/dataTables.bootstrap4.min.css">
    <link rel="stylesheet" type="text/css" href="files/assets/pages/data-table/css/buttons.dataTables.min.css">
    <link rel="stylesheet" type="text/css" href="files/bower_components/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css">
    <!-- Style.css -->
    <link rel="stylesheet" type="text/css" href="files/assets/css/style.css">
    <link rel="stylesheet" type="text/css" href="files/assets/css/pages.css">

</head>

<body>
    <div id="pcoded" class="pcoded">
        <div class="pcoded-overlay-box"></div>
        <div class="pcoded-container navbar-wrapper">
            
            
            
            <div class="pcoded-main-container">
                <div class="pcoded-wrapper">
                    
                    <!-- [ navigation menu ] end -->
                    <div class="pcoded-content">
                        
                        <!-- [ breadcrumb ] end -->
                        <div class="pcoded-inner-content">
                            <!-- Main-body start -->
                            <div class="main-body">
                                <div class="page-wrapper">
                                    <!-- Page-body start -->
                                    <div class="page-body">
                                        <div class="row">
                                            <div class="col-sm-12">

                                                <div class="card">
                                                    <div class="card-header">
                                                        <h5>Search</h5>
                                                        
                                                    </div>
                                                    <div class="card-block">
                                                        <div class="search-container">
                                                            
                                                              <input type="text" placeholder="Search.." name="search" id="search">
                                                              <button type="button" id="searchmovie"><i class="fa fa-search"></i></button>
                                                            
                                                          </div>
                                                        <div class="dt-responsive table-responsive">
                                                            <table id="order-table" class="table table-striped table-bordered nowrap">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Title</th>
                                                                        <th>Original Title</th>
                                                                        <th>Release Date</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody id="search_movies">
                                                                    
                                                                    
                                                                </tbody>
                                                                
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Zero config.table start -->
                                                <!-- Zero config.table end -->
                                                <!-- Default ordering table start -->
                                                <div class="card">
                                                    <div class="card-header">
                                                        <h5>Top Rated Movies</h5>
                                                        
                                                    </div>
                                                    <div class="card-block">
                                                        
                                                        <div class="dt-responsive table-responsive">
                                                            <table id="order-table" class="table table-striped table-bordered nowrap">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Title</th>
                                                                        <th>Original Title</th>
                                                                        <th>Release Date</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody id="top_rated">
                                                                    
                                                                    
                                                                </tbody>
                                                                
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                
                                                <!--Upcoming Movies-->
                                                <div class="card">
                                                    <div class="card-header">
                                                        <h5>Upcoming Movies</h5>
                                                        
                                                    </div>
                                                    <div class="card-block">
                                                        
                                                        <div class="dt-responsive table-responsive">
                                                            <table id="order-table" class="table table-striped table-bordered nowrap">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Title</th>
                                                                        <th>Original Title</th>
                                                                        <th>Release Date</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody id="upcoming_movies">
                                                                    
                                                                    
                                                                </tbody>
                                                                
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--end Upcoming Movies-->
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    
    <!-- Warning Section Ends -->
    <!-- Required Jquery -->
    <script type="text/javascript" src="files/bower_components/jquery/js/jquery.min.js"></script>
    <script type="text/javascript" src="files/bower_components/jquery-ui/js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="files/bower_components/popper.js/js/popper.min.js"></script>
    <script type="text/javascript" src="files/bower_components/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="files/assets/js/pace.min.js"></script>
    <!-- waves js -->
    <script src="files/assets/pages/waves/js/waves.min.js"></script>
    <!-- jquery slimscroll js -->
    <script type="text/javascript" src="files/bower_components/jquery-slimscroll/js/jquery.slimscroll.js"></script>
    <!-- modernizr js -->
    <script type="text/javascript" src="files/bower_components/modernizr/js/modernizr.js"></script>
    <script type="text/javascript" src="files/bower_components/modernizr/js/css-scrollbars.js"></script>
    <!-- data-table js -->
    <script src="files/bower_components/datatables.net/js/jquery.dataTables.min.js"></script>
    <script src="files/bower_components/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
    <script src="files/assets/pages/data-table/js/jszip.min.js"></script>
    <script src="files/assets/pages/data-table/js/pdfmake.min.js"></script>
    <script src="files/assets/pages/data-table/js/vfs_fonts.js"></script>
    <script src="files/bower_components/datatables.net-buttons/js/buttons.print.min.js"></script>
    <script src="files/bower_components/datatables.net-buttons/js/buttons.html5.min.js"></script>
    <script src="files/bower_components/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></script>
    <script src="files/bower_components/datatables.net-responsive/js/dataTables.responsive.min.js"></script>
    <script src="files/bower_components/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js"></script>
    <!-- Custom js -->
    <script src="files/assets/pages/data-table/js/data-table-custom.js"></script>
    <script src="files/assets/js/pcoded.min.js"></script>
    <script src="files/assets/js/vertical/vertical-layout.min.js"></script>
    <script src="files/assets/js/jquery.mCustomScrollbar.concat.min.js"></script>
    <script type="text/javascript" src="files/assets/js/script.js"></script>


    <script>

    
    $.ajax({
        url:'https://api.themoviedb.org/3/movie/top_rated?api_key=5f5f3c9d3f4f703e36d9726c59ca864c&language=en-US&page=1',
        success:function(res)
        {
            html='';
            console.log(res.results);
            var res=res.results;
            for(var i=0;i<res.length;i++)
            {
                html+=`<tr>
                                                                        <td>${res[i]['title']}</td>
                                                                        <td>${res[i]['original_title']}</td>
                                                                        <td>${res[i]['release_date']}</td>
                                                                       
                                                                        
                                                                    </tr>`;
            }
            $('#top_rated').html(html);
        }
    });

    $.ajax({
        url:'https://api.themoviedb.org/3/movie/upcoming?api_key=5f5f3c9d3f4f703e36d9726c59ca864c&language=en-US&page=1',
        success:function(res)
        {
            html='';
            console.log(res.results);
            var res=res.results;
            for(var i=0;i<res.length;i++)
            {
                html+=`<tr>
                                                                        <td>${res[i]['title']}</td>
                                                                        <td>${res[i]['original_title']}</td>
                                                                        <td>${res[i]['release_date']}</td>
                                                                       
                                                                        
                                                                    </tr>`;
            }
            $('#upcoming_movies').html(html);
        }
    });

    $('#searchmovie').click(function(){
        var data=$('#search').val();
        $.ajax({
        url:'https://api.themoviedb.org/3/search/movie?api_key=5f5f3c9d3f4f703e36d9726c59ca864c&language=en-US&page=1&include_adult=false&query='+data,
        success:function(res)
        {
            html='';
            console.log(res.results);
            var res=res.results;
            for(var i=0;i<res.length;i++)
            {
                html+=`<tr>
                                                                        <td>${res[i]['title']}</td>
                                                                        <td>${res[i]['original_title']}</td>
                                                                        <td>${res[i]['release_date']}</td>
                                                                       
                                                                        
                                                                    </tr>`;
            }
            $('#search_movies').html(html);
        }
    });
    });
</script>
</body>

</html>
