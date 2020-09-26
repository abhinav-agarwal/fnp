package com.fnp.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.wcm.core.components.models.Image;
import com.fnp.core.models.Header;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Model(adaptables = SlingHttpServletRequest.class, adapters = {Header.class,
    ComponentExporter.class}, resourceType = HeaderImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class HeaderImpl implements Header {

  @ValueMapValue(
      name = "fileReference",
      injectionStrategy = InjectionStrategy.OPTIONAL
  )
  protected String fileReference;

  @ValueMapValue(
      name = "ctaLabel",
      injectionStrategy = InjectionStrategy.OPTIONAL
  )
  protected String ctaLabel;

  @ValueMapValue(
      name = "searchText",
      injectionStrategy = InjectionStrategy.OPTIONAL
  )
  protected String searchText;

  @SlingObject
  protected Resource resource;


  private static final Logger LOGGER = LoggerFactory.getLogger(HeaderImpl.class);
  static final String RESOURCE_TYPE = "fnp/components/header";

  @Override
  public String getExportedType() {
    return HeaderImpl.RESOURCE_TYPE;
  }

  @Override
  public String getImageSrc() {
    return this.fileReference;
  }

  @Override
  public String getCTALabel() {
    return this.ctaLabel;
  }

  @Override
  public String getSearchButtonText() {
    return this.searchText;
  }

  @Override
  public List<Map> getIconDetails() {
    List<Map> iconDetails = new ArrayList<>();
    if(null != resource) {
      Resource itemResource = resource.getChild("multi");
      if(itemResource != null && itemResource.hasChildren()) {
        for (Resource childResource : itemResource.getChildren()) {
          ValueMap valueMap = childResource.getValueMap();
          Map<String, String> iconMap = new HashMap<>();
          iconMap.put("iconClass", valueMap.get("showNavIcon", String.class));
          iconMap.put("iconLabel", valueMap.get("iconLabel", String.class));
          iconDetails.add(iconMap);
        }
      }
    }
    return iconDetails;
  }

}
