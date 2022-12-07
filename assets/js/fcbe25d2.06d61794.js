"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[6489],{95052:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"1.9.0","label":"1.9.0","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-1.9.0","isLast":false,"docsSidebars":{"docs":[{"type":"link","label":"Getting Started","href":"/1.9.0/","docId":"intro"},{"type":"category","label":"Basic Usage","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Basic Walkthrough","href":"/1.9.0/Basic Usage/walkthrough","docId":"Basic Usage/walkthrough"},{"type":"link","label":"Default Mappings","href":"/1.9.0/Basic Usage/mappings","docId":"Basic Usage/mappings"}]},{"type":"category","label":"Configuration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Managing User Configuration","href":"/1.9.0/Configuration/manage_user_config","docId":"Configuration/manage_user_config"},{"type":"link","label":"Basic Configuration","href":"/1.9.0/Configuration/basic_configuration","docId":"Configuration/basic_configuration"},{"type":"link","label":"Available User Options","href":"/1.9.0/Configuration/config_options","docId":"Configuration/config_options"},{"type":"link","label":"Override Formats","href":"/1.9.0/Configuration/override_formats","docId":"Configuration/override_formats"},{"type":"link","label":"Default Plugin Configurations","href":"/1.9.0/Configuration/plugin_defaults","docId":"Configuration/plugin_defaults"},{"type":"link","label":"Splitting Up Configuration","href":"/1.9.0/Configuration/splitting_up","docId":"Configuration/splitting_up"},{"type":"link","label":"Managing AstroNvim Updates","href":"/1.9.0/Configuration/updater","docId":"Configuration/updater"}]},{"type":"category","label":"Recipes","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Black Belt Example User Configs","href":"/1.9.0/Recipes/black_belt","docId":"Recipes/black_belt"},{"type":"link","label":"Advanced LSP Setup","href":"/1.9.0/Recipes/advanced_lsp","docId":"Recipes/advanced_lsp"},{"type":"link","label":"Dashboard Customizations","href":"/1.9.0/Recipes/alpha","docId":"Recipes/alpha"},{"type":"link","label":"Customize cmp Completion","href":"/1.9.0/Recipes/cmp","docId":"Recipes/cmp"},{"type":"link","label":"Custom Colorscheme","href":"/1.9.0/Recipes/colorscheme","docId":"Recipes/colorscheme"},{"type":"link","label":"Disable Global Statusbar","href":"/1.9.0/Recipes/globalstatus","docId":"Recipes/globalstatus"},{"type":"link","label":"Custom VS Code Style Snippets","href":"/1.9.0/Recipes/snippets","docId":"Recipes/snippets"},{"type":"link","label":"NvChad Telescope Theme","href":"/1.9.0/Recipes/telescope_theme","docId":"Recipes/telescope_theme"},{"type":"link","label":"Unattended Installation","href":"/1.9.0/Recipes/unattended_install","docId":"Recipes/unattended_install"}]},{"type":"link","label":"Acknowledgements","href":"/1.9.0/acknowledgements","docId":"acknowledgements"},{"type":"link","label":"Core Lua API Documentation","href":"https://astronvim.github.io/AstroNvim"}]},"docs":{"acknowledgements":{"id":"acknowledgements","title":"Acknowledgements","description":"\u2b50 Credits","sidebar":"docs"},"Basic Usage/mappings":{"id":"Basic Usage/mappings","title":"Default Mappings","description":"General Mappings","sidebar":"docs"},"Basic Usage/walkthrough":{"id":"Basic Usage/walkthrough","title":"Basic Walkthrough","description":"Opening file explorer","sidebar":"docs"},"Configuration/basic_configuration":{"id":"Configuration/basic_configuration","title":"Basic Configuration","description":"Set Up User Configuration","sidebar":"docs"},"Configuration/config_options":{"id":"Configuration/config_options","title":"Available User Options","description":"| init.lua table key              | Expected Format                    | Use Case                                                                                                              | Alternate File Path (in user/ folder) |","sidebar":"docs"},"Configuration/manage_user_config":{"id":"Configuration/manage_user_config","title":"Managing User Configuration","description":"One of the best parts of separating the user configuration of AstroNvim away from modifying the system files is the ability to manage and track your own user configuration while maintaining the ability to still get AstroNvim updates. The easiest process to do this would be as follows:","sidebar":"docs"},"Configuration/override_formats":{"id":"Configuration/override_formats","title":"Override Formats","description":"This applies to all init.lua fields except those that expect specific","sidebar":"docs"},"Configuration/plugin_defaults":{"id":"Configuration/plugin_defaults","title":"Default Plugin Configurations","description":"This page documents the default options that are set by AstroNvim for each individual plugin. All of these options would go in the plugins table in the user/init.lua configuration file.","sidebar":"docs"},"Configuration/splitting_up":{"id":"Configuration/splitting_up","title":"Splitting Up Configuration","description":"AstroNvim can be fully configured using just the user/init.lua file, but also","sidebar":"docs"},"Configuration/updater":{"id":"Configuration/updater","title":"Managing AstroNvim Updates","description":"AstroNvim v1.4.0 has added stable and nightly update channels. For the time being we have kept the default update channel to nightly so that the behavior of AstroNvim doesn\'t change (this could be considered a breaking change to some). We are planning to make the stable channel the default update channel when Neovim v0.8 is released and we tag AstroNvim v2.0.0 to incorporate this \\"breaking\\" change.","sidebar":"docs"},"intro":{"id":"intro","title":"Getting Started","description":"AstroNvim Screenshot","sidebar":"docs"},"Recipes/advanced_lsp":{"id":"Recipes/advanced_lsp","title":"Advanced LSP Setup","description":"LSP Setup Without Installer","sidebar":"docs"},"Recipes/alpha":{"id":"Recipes/alpha","title":"Dashboard Customizations","description":"Customize Alpha Header","sidebar":"docs"},"Recipes/black_belt":{"id":"Recipes/black_belt","title":"Black Belt Example User Configs","description":"This is a collection of advanced fully complete AstroNvim user configurations for reference:","sidebar":"docs"},"Recipes/cmp":{"id":"Recipes/cmp","title":"Customize cmp Completion","description":"Customize Keybindings","sidebar":"docs"},"Recipes/colorscheme":{"id":"Recipes/colorscheme","title":"Custom Colorscheme","description":"Using a Custom Colorscheme","sidebar":"docs"},"Recipes/globalstatus":{"id":"Recipes/globalstatus","title":"Disable Global Statusbar","description":"By default AstroNvim enables the new global statusbar that comes with Neovim v0.7+. Some users may not like this behavior and prefer the traditional per-buffer status bar. The following code block is a minimal user/init.lua that will disable the global statusbar with lualine. If you are using Dashboard.nvim as well you will also need to override the autocommands that we include with this plugin as well which are the changes made to the polish() function. If you have disabled or removed the Dashboard.nvim plugin then you can ignore the polish function changes below.","sidebar":"docs"},"Recipes/snippets":{"id":"Recipes/snippets","title":"Custom VS Code Style Snippets","description":"user/init.lua:","sidebar":"docs"},"Recipes/telescope_theme":{"id":"Recipes/telescope_theme","title":"NvChad Telescope Theme","description":"This code snippet make the default theme telescope look like the default NvChad telescope theme:","sidebar":"docs"},"Recipes/unattended_install":{"id":"Recipes/unattended_install","title":"Unattended Installation","description":"Instead of running nvim +PackerSync to initialize AstroNvim you can run the","sidebar":"docs"}}}')}}]);