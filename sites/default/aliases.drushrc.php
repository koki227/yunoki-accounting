<?php

$aliases['dev'] = array(
  'remote-host' => 'ssh476.lolipop.jp',
  'remote-user' => 'lolipop.jp-yunokicpaoffice',
  'root' => '/home/users/1/lolipop.jp-yunokicpaoffice/web/test.yunokicpa.com',
  'uri' => 'http://test.yunokicpa.com',
  'path-aliases' => array(
    '%drush-script' => '/home/users/1/lolipop.jp-yunokicpaoffice/vendor/bin/drush',
  ),
);
$options['ssh-options'] = '-p 2222 -o PasswordAuthentication=yes';
